# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

from firebase_functions import https_fn
from firebase_admin import initialize_app
import firebase_functions.config as config
import google.oauth2.service_account
import googleapiclient.discovery
import json
import base64

# Initialize Firebase app
initialize_app()

@https_fn.on_request()
def contacto(req: https_fn.Request) -> https_fn.Response:
    # Set CORS headers for preflight requests
    if req.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }
        return https_fn.Response('', headers=headers, status=204)

    # Set CORS headers for main request
    headers = {
        'Access-Control-Allow-Origin': '*'
    }

    if req.method != 'POST':
        return https_fn.Response("Method Not Allowed", status=405, headers=headers)

    try:
        # Get configuration values
        service_account_key_base64 = config.get('google_service_account_key')
        spreadsheet_id = config.get('spreadsheet_id')
        sheet_range = config.get('sheet_range')

        if not service_account_key_base64 or not spreadsheet_id or not sheet_range:
             return https_fn.Response("Missing configuration variables", status=500, headers=headers)

        # Decode and parse the service account key
        service_account_info_json = base64.b64decode(service_account_key_base64).decode('utf-8')
        service_account_info = json.loads(service_account_info_json)

        # Authenticate with Google Sheets API
        scopes = ['https://www.googleapis.com/auth/spreadsheets']
        credentials = google.oauth2.service_account.Credentials.from_service_account_info(
            service_account_info, scopes=scopes)
        service = googleapiclient.discovery.build('sheets', 'v4', credentials=credentials)

        # Extract form data from request body
        req_json = req.get_json()
        if not req_json:
            return https_fn.Response("Invalid JSON body", status=400, headers=headers)

        nombre = req_json.get('nombre', '')
        email = req_json.get('email', '')
        mensaje = req_json.get('mensaje', '')
        telefono = req_json.get('telefono', '')

        # Prepare data for Google Sheets
        values = [
            [nombre, email, telefono, mensaje]
        ]
        body = {
            'values': values
        }

        # Append data to the spreadsheet
        result = service.spreadsheets().values().append(
            spreadsheetId=spreadsheet_id,
            range=sheet_range,
            valueInputOption='USER_ENTERED',
            body=body
        ).execute()

        return https_fn.Response("Data saved successfully!", status=200, headers=headers)

    except Exception as e:
        print(f"Error: {e}")
        return https_fn.Response(f"Error saving data: {e}", status=500, headers=headers)
