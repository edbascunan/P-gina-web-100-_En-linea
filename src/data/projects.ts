import { Project, ProjectCategory } from '../types/projects';

export const projectCategories: ProjectCategory[] = [
  {
    id: 'obras-civiles',
    title: 'Obras Civiles',
    description: 'Modelos en 3D a partir de planos 2D de Autocad y georreferenciado a partir de archivo Civil 3D',
    projects: [
      {
        id: 'urbanizacion-antupiren',
        title: 'Urbanización Antupiren',
        description: 'Servicios de elaboración de presupuesto objetivo, cubicaciones, cotizaciones, programación de obra y control de recursos. Participación como Jefe de Oficina Técnica.',
        imageUrl: 'https://i.postimg.cc/jqXrHYr3/Antu1.png',
        images: [
          'https://i.postimg.cc/jqXrHYr3/Antu1.png',
          'https://i.postimg.cc/XYTMjVwq/Antu2.png',
          'https://i.postimg.cc/J7cPt1W0/Antu3.png'
        ],
        a360Link: 'default',
        serviceDescription: 'Ofrecemos servicios integrales de gestión de proyectos que incluyen:\n\n- Cubicaciones detalladas de materiales\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Cubicaciones', 'Presupuestos'],
        details: {
          client: 'Constructora Antupiren',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://i.postimg.cc/XYTMjVwq/Antu2.png',
            'https://i.postimg.cc/J7cPt1W0/Antu3.png'
          ]
        }
      },
      {
        id: 'urbanizacion-penon',
        title: 'Urbanización el Peñón M6',
        description: 'Servicios de elaboración de presupuesto objetivo, cubicaciones, cotizaciones, programación de obra y control de recursos. Participación como Jefe de Oficina Técnica.',
        imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/Jhc6BJyy/M61.png',
          'https://i.postimg.cc/brM3j955/M62.png',
          'https://i.postimg.cc/jqk8NRjh/M63.png'
        ],
        a360Link: 'default',
        serviceDescription: 'Ofrecemos servicios integrales de gestión de proyectos que incluyen:\n\n- Cubicaciones detalladas de materiales\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Cubicaciones', 'Presupuestos'],
        details: {
          client: 'Constructora El Peñón',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
        id: 'puentes-puentes',
        title: 'Modelado de puentes para proyectos públicos',
        description: 'Modelado de 13 puentes con Revit para interconexión de regiones, se incluyen:\n\n- Puente El Molino\n- Puente el Mañio\n- Puente Huinilhue\n- Puente Diezmo\n- Puente el Estero\n- Entre otros.',
        imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/yY3z3Q7k/f2d0d9c513bcd637987c600c1d69cf17.png',
          'https://i.postimg.cc/MT61sZxH/{046252A6-EF9C-4338-A668-0B3A8F2BF381}.png',
          'https://i.postimg.cc/Zng3KrNv/{15D12934-0D83-4D7E-86AF-7CE2C2415B12}.png',
          'https://i.postimg.cc/ZKBpsMk8/{1DF4278A-5275-44DA-B8B6-AC26639DCD5A}.png',
          'https://i.postimg.cc/hPdQ1QxM/{E1BECA34-63E5-4BC8-87BC-00243F36DE98}.png',
          'https://i.postimg.cc/ThMw4Qm0/{CB6112DD-0A67-4DCA-A945-9C193F111706}.png',
          'https://i.postimg.cc/DftPhTPj/{A1409E8B-9FA2-49AD-A502-E6046C345ABD}.png',
          'https://i.postimg.cc/yxwtTK7W/4ac355fe60e4a62b0c686c1ca728027e.png',
          'https://i.postimg.cc/2yqgvyRP/3aa453bdf14d78b86712daf93f75e93a.png',
          'https://i.postimg.cc/BZrJp9Yx/9bad2947130034628efdad80115aa5ba.png',
          'https://i.postimg.cc/pL2bc2Dn/92c9a6ffc285be24c8c480e891350983.png'
        ],
        a360Link: 'https://a360.co/3RsZj2B',
        serviceDescription: 'Ofrecemos servicios integrales de gestión de proyectos que incluyen:\n\n- Cubicaciones detalladas de materiales\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Modelo 3D', 'Coordinación BIM'],
        details: {
          client: 'Ricardo Miranda',
          date: '2024',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80'
          ]
        }
      }
    ]
  },
  {
    id: 'proyectos-educativos',
    title: 'Proyectos Educativos',
    description: 'Desarrollo de proyectos educacionales con modelado BIM integral',
    projects: [
      {
        id: 'colegio-batuco',
        title: 'Colegio Batuco',
        description: 'Estudio completo del proyecto utilizando herramientas BIM.',
        imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/6qbLLK9H/1-Colegio-Batuco.jpg',
          'https://i.postimg.cc/Y2d3w611/1-Colegio-Batuco2.jpg',
          'https://i.postimg.cc/MHpmQH8M/1-Colegio-Batuco3.jpg'
        ],
        a360Link: 'https://a360.co/431MdOV',
        serviceDescription: 'Ofrecemos servicios integrales de gestión de proyectos que incluyen:\n\n- Cubicaciones detalladas de materiales\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Modelo 3D', 'Coordinación BIM'],
        details: {
          client: 'MINEDUC',
          date: '2023',
          location: 'Batuco, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
        id: 'jardin-angel-guarda',
        title: 'Jardín Infantil Angel de la Guarda',
        description: 'Modelado estructural y estudio completo con tecnología BIM.',
        imageUrl: 'https://images.unsplash.com/photo-1503507739318-8a859c715311?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/FRMhfdSG/1-Jardin-Infantil-Angel-de-la-Guarda.jpg'
        ],
        a360Link: 'https://a360.co/44wyWAl',
        serviceDescription: 'Ofrecemos servicios integrales de gestión de proyectos que incluyen:\n\n- Cubicaciones detalladas de materiales\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Modelo 3D', 'Coordinación BIM'],
        details: {
          client: 'JUNJI',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
        id: 'ampliacion-trewhellas',
        title: 'Ampliación Colegio Trewhellas Media',
        description: 'Modelado de estructura metálica y coordinación BIM.',
        imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/mDzb2NPt/2-Ampliaci-n-EEMM-Trewhellas.jpg'
        ],
        a360Link: 'https://a360.co/4m2wYxT',
        serviceDescription: 'Ofrecemos servicios integrales de gestión de proyectos que incluyen:\n\n- Cubicaciones detalladas de materiales\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Modelo 3D', 'Coordinación BIM'],
        details: {
          client: 'Colegio Trewhellas',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
        id: 'ampliacion-trewhellas',
        title: 'Ampliación Colegio Trewhellas Básica',
        description: 'Modelado de arquitectura y presupuesto para ver factibilidad de construcción.',
        imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/DZdxfk2S/{25531A0A-E9FD-4827-B814-9ABF9EC798AD}.png',
          'https://i.postimg.cc/1XvM6GVP/{AF3E9E0D-5491-453E-9A9C-137907EC7871}.png',
        ],
        a360Link: 'https://a360.co/42XEDEU',
        serviceDescription: 'Servicio incluye modelado de Arquitectura, Estructura, estimación UF de Servicios asociados:\n\n- Cubicaciones detalladas de materiales\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Modelo 3D', 'Coordinación BIM'],
        details: {
          client: 'Colegio Trewhellas',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
              id: 'Colegio-elhuinganal',
        title: 'Colegio El Huinganal',
        description: 'Modelado estructural y estudio completo con tecnología BIM.',
        imageUrl: 'https://images.unsplash.com/photo-1503507739318-8a859c715311?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/gc4gb5B1/{BF285263-3852-41F3-9EAD-AB8FD2D01DC4}.png',
          'https://i.postimg.cc/fyHC7t9M/{7FBF68C0-8684-48B2-A46A-687B68554F07}.png',
          'https://i.postimg.cc/tCT2q5KJ/{E13A9F2A-4BBE-4D48-9817-59FF49FADBF4}.png',
        ],
        a360Link: 'https://a360.co/3RX3LXt',
        serviceDescription: 'Ofrecemos servicios integrales de gestión de proyectos que incluyen:\n\n- Cubicaciones detalladas de materiales\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Modelo 3D', 'Coordinación BIM'],
        details: {
          client: 'Privado',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80'
            ]
        }
      }
    ]
  },
 {
    id: 'proyectos-habitacionales',
    title: 'Proyectos Habitacionales',
    description: 'Desarrollo de proyectos habitacionales con modelado BIM integral',
    projects: [
            {
               id: 'Edificio-renelagos',
        title: 'Edificio William Rebolledo y Avenida Ossa',
        description: 'Coordinación de proyecto y realización de informes de coordinación.',
        imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/5ykG4kp5/{BFE68517-BB80-42EA-90D2-134A251A20AE}.png',
          'https://i.postimg.cc/qBmWxz0t/{C620BF14-C8BC-459A-877E-4B9BA31B4066}.png',
          'https://i.postimg.cc/7Lwvcq02/fed8360a77a4aa7c20e68eec1a58c144.png',
          'https://i.postimg.cc/hPc5c2hk/aa5d9b27b7865f7f43528173d2dd42a9.png',
          'https://i.postimg.cc/LsNWbLmc/6a301e3676861c36731750793e5b1bf6.png',
          'https://i.postimg.cc/Pq97Hh8y/68120265f649f502e2f4ab385a9109c4.png',
          'https://i.postimg.cc/ryPkmXXB/e0018507427e75392ad3689591087854.png',
          'https://i.postimg.cc/FR6B9vdG/6dfa5da962da0074b0d5ad6b9e780254.png',
          'https://i.postimg.cc/Pq97Hh8y/68120265f649f502e2f4ab385a9109c4.png',
          'https://i.postimg.cc/G2TZT916/233f33d052a654369dce46210ae461ec.png',
          'https://i.postimg.cc/fyZBWbWc/cbbbdcea0dfa94fb89dbe402460ee1ed.png',
          'https://i.postimg.cc/dVWXWGsz/958226c68eae7e2ac3b9afb88d65aa28.png'
        ],
        a360Link: 'default',
        serviceDescription: 'Coordinación modelos 3D y generación de informes:\n\n- Coordinación de modelos 3D\n- Detección de interferencias por planta\n- Detección de problemas normativos técnicos por cada planta (Paralelismos, bulbos de presión, etc)\n- Presentación de informe mediante plantas que incluyen vistas 3D, secciones, planta con nubes y numeración\n- Correcciones de modelos\n- Propuestas de mejora',
        services: ['Modelo 3D', 'Coordinación BIM'],
        details: {
          client: 'Rene Lagos',
          date: '2024',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://i.postimg.cc/XYTMjVwq/Antu2.png',
            'https://i.postimg.cc/J7cPt1W0/Antu3.png'
          ]
        }
      },
      {
        id: 'casas-50-52',
        title: 'Proyecto habitacional privado 1',
        description: 'Modelado de Arquitectura, estructuras e infraestructura de loteo para visualización de mandante.',
        imageUrl: 'https://images.unsplash.com/photo-1503507739318-8a859c715311?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/BnZL9Yk7/{188F48D0-13DA-4CC0-A8A5-09573CE2323B}.png',
          'https://i.postimg.cc/HkSJp0CY/{8CFF20C6-DABF-443E-84A0-9F464555DF9D}.png',
          'https://i.postimg.cc/zf6VhJB4/{9B9F6C5D-348F-44C0-AA26-E69E17A71E99}.png',
          'https://i.postimg.cc/Gm2VM2bq/5-EB654-E5-0260-4359-B0-AD-F67-BBD1-E9-D08.png',
          'https://i.postimg.cc/RhSXNsFX/Lote_50.jpg',
          'https://i.postimg.cc/yYqNx5XB/Lote-52-Arq.jpg',
          'https://i.postimg.cc/MZfTWxBd/Lote-52-Est.jpg'
        ],
        a360Link: 'https://a360.co/4dhf5aU',
        serviceDescription: 'El Servicio considera modelado de Arquitectura, Estructura y movimientos de tierra y obras civiles, elaboración de presupuesto y programación:\n\n- Modelado de especialidades\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Modelo 3D', 'Coordinación BIM', 'Presupuesto'],
        details: {
          client: 'Privado',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
        id: 'awar',
        title: ' Proyecto habitacional privado 2',
        description: 'Modelado de Arquitectura, estructura y presupuesto.',
        imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
        images: [
          ' https://i.postimg.cc/XJ38nxHg/Vivienda-en-Ladrillo.jpg'
        ],
        a360Link: 'https://a360.co/42TBN5j',
        serviceDescription: 'El Servicio considera modelado de Arquitectura, Estructura y movimientos de tierra y obras civiles, elaboración de presupuesto y programación:\n\n- Modelado de especialidades\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Modelo 3D', 'Coordinación BIM', 'Presupuesto'],
        details: {
          client: 'Privado',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80'
     ]
        }
      }
    ]
  },
  {
    id: 'proyectos-comerciales',
    title: 'Proyectos Comerciales',
    description: 'Desarrollo de proyectos comerciales y retail con modelado BIM',
    projects: [
{
        id: 'Stripcenter',
        title: ' Stripcenter',
        description: 'Modelado de Arquitectura, estructura y presupuesto.',
        imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
        images: [
          ' https://i.postimg.cc/2Sr8FZKK/Supermercado-Santa-Isabel.jpg'
        ],
        a360Link: 'https://a360.co/44z9sm4',
        serviceDescription: 'El Servicio considera modelado de Arquitectura, Estructura y movimientos de tierra y obras civiles, elaboración de presupuesto y programación:\n\n- Modelado de especialidades\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Modelo 3D', 'Coordinación BIM', 'Presupuesto'],
        details: {
          client: 'Privado',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80'
         ]
        }
      },
      {
        id: 'clinica-veterinaria',
        title: 'Clínica Veterinaria Universidad Santo Tomás',
        description: 'Estudio completo y modelado estructural utilizando tecnología BIM.',
        imageUrl: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/jSRNqdwX/{F3944182-1C67-496D-AE41-CD1F09DC0E2C}.png',
          'https://i.postimg.cc/8k4ZqSK3/{D5FA9B0C-49F9-4CE8-9E93-2BBBBB1A2A21}.png',
          'https://i.postimg.cc/D01n1vdh/1-Clinica-Veteriaria-UST-EST.jpg',
          'https://i.postimg.cc/KcTZ6fXW/2-Clinica-Veteriaria-UST-EST-ENF.jpg'
        ],
        a360Link: 'https://a360.co/3F30QcX',
        serviceDescription: 'Ofrecemos servicios integrales de gestión de proyectos que incluyen:\n\n- Cubicaciones detalladas de materiales\n- Cotizaciones\n- Análisis de Precios Unitarios\n- Elaboración de presupuestos\n- Análisis de gastos generales\n- Programación, Control y seguimiento de obra',
        services: ['Modelo 3D', '<Coordinación BIM'],
        details: {
          client: 'Universidad Santo Tomás',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80'
          ]
        }
      }
    ]
  },
  {
    id: 'infraestructura',
    title: 'Infraestructura',
    description: 'Proyectos de infraestructura y servicios',
    projects: [
      {
        id: 'electroterminales',
        title: 'Proyectos de Electroterminales',
        description: 'Estudios de presupuestos y planificación detallada.',
        imageUrl: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/g0TG7Nbh/{D24612FB-8079-4495-96D3-2F45DD42FE32}.png',
          'https://i.postimg.cc/J4MCP9Hg/{5179D72D-945F-46CE-923F-A1EAE79AE219}.png'
        ],
        a360Link: 'default',
        serviceDescription: 'Servicios especializados en infraestructura eléctrica:\n\n- Estudios de factibilidad\n- Presupuestos detallados\n- Planificación de obras\n- Gestión de recursos\n- Coordinación con proveedores',
        services: ['Presupuestos'],
        details: {
          client: 'RED Metropolitana',
          date: '2023',
          location: 'Santiago, Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80'
          ]
        }
      },
      {
        id: 'estaciones-servicio',
        title: 'Estaciones de Servicio',
        description: 'Modelado BIM completo de arquitectura e instalaciones.',
        imageUrl: 'https://images.unsplash.com/photo-1542338106-1630c81a8cce?auto=format&fit=crop&q=80',
        images: [
          'https://i.postimg.cc/fRs73fFY/{382FA938-119F-4131-8675-94071B0EDC70}.png',
          'https://i.postimg.cc/tTHrHCH0/{13DDC699-630E-4586-AD28-CE70E9CBFBBA}.png',
          'https://i.postimg.cc/3xVSnFSx/{6FB00799-4BDD-4A94-A538-EB4C46B2A675}.png',
          'https://i.postimg.cc/8zjXR0bY/{12C217D2-8AC2-4BA6-A9DA-8FAD9C6E8108}.png',
          'https://i.postimg.cc/vmnPjxkL/{0CADD6F1-1463-4468-8C20-503FFC5D75CD}.png',
          'https://i.postimg.cc/3JC3RwxC/1-EDS-Arq.jpg',
          'https://i.postimg.cc/qMdk4K4v/1-EDS-EST1.jpg',
          'https://i.postimg.cc/JzpmNdJs/1-EDS-EST2.jpg',
          'https://i.postimg.cc/rpzTQCCQ/2-EDS-SANITARIOS.jpg',
          'https://i.postimg.cc/2SkrBfqp/3-PIPING.jpg',
          'https://i.postimg.cc/XvhbhGs3/4-CLIMA.jpg',
          'https://i.postimg.cc/RFHBzSYt/5-EL-EN.jpg',
          'https://i.postimg.cc/prMtVNN6/5-EL-EXT.jpg',
          'https://i.postimg.cc/4yvRm8sN/5-EL-IL.jpg'
        ],
        a360Link: 'https://a360.co/438pQHx',
        serviceDescription: 'Servicios completos de modelado y coordinación:\n\n- Modelado arquitectónico BIM\n- Modelado de instalaciones\n- Coordinación de especialidades\n- Detección de interferencias\n- Documentación técnica',
        services: ['Modelo 3D', 'Coordinación BIM'],
        details: {
          client: 'Varios',
          date: '2023',
          location: 'Chile',
          additionalImages: [
            'https://images.unsplash.com/photo-1542338106-1630c81a8cce?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1542338106-1630c81a8cce?auto=format&fit=crop&q=80'
          ]
        }
      }
    ]
  }
];

