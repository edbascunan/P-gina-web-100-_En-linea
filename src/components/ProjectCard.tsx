import { useState, useEffect } from 'react';
import type { Project } from '../types/projects';
// import ActionButton from './ProjectCard/ActionButton.astro'; // Eliminar la importación de ActionButton

export function ProjectCard(props: Project) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showModelOnBack, setShowModelOnBack] = useState(false); // Track what to show on back
  const [currentSlide, setCurrentSlide] = useState(0);
  const isDefaultModel = props.a360Link === 'default';

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % props.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + props.images.length) % props.images.length);
  };

  useEffect(() => {
    if (props.images.length > 1) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [props.images.length]);

  // Format A360 URL for proper embedding
  const getFormattedA360Url = (url: string) => {
    if (!url || url === 'default') return '';
    
    // Handle short a360.co links
    if (url.includes('a360.co')) {
      // Use the short link directly as it seems to work now
      return url; 
    }
    
    return url; // Return original URL if not a short link
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group h-[600px] relative [perspective:1000px]">
      <div 
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          {/* Changed to flex layout */}
          <div className="flex flex-col h-full">
            {/* Carousel */}
            <div className="relative h-[25rem]"> {/* Altura fija h-[25rem] */}
              {props.images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${props.title} - Imagen ${index + 1}`}
                    className="w-full h-full object-cover" // Ensure image covers the area
                  />
                </div>
              ))}
              
              {/* Simplified conditional rendering for carousel controls */}
              {props.images.length > 1 ? (
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors"
                    title="Previous Slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="bg-black/50 text-white p-1.5 rounded-full hover:bg-black/70 transition-colors"
                    title="Next Slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              ) : null}
            </div>

            {/* Content - Takes remaining space */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{props.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{props.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {props.services.map((service, index) => (
                  <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {service}
                  </span>
                ))}
              </div>
              {/* Details section - Removed mt-auto to reduce space */}
              <div className="space-y-1 text-sm text-gray-500"> 
                <p><strong>Cliente:</strong> {props.details.client}</p>
                <p><strong>Fecha:</strong> {props.details.date}</p>
                <p><strong>Ubicación:</strong> {props.details.location}</p>
              </div>
            </div>

            {/* Action Buttons - Apply absolute positioning */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {isDefaultModel ? (
                <button
                  onClick={handleFlip} // Flips to show service description on back
                  className="bg-black text-white px-4 py-2 text-sm rounded-lg transition-colors"
                  title="Ver Servicio"
                >
                  Ver Servicio
                </button>
              ) : (
                <>
                  <button
                    onClick={() => { setShowModelOnBack(false); setIsFlipped(true); }}
                    className="bg-black text-white px-4 py-2 text-sm rounded-lg transition-colors"
                    title="Ver Servicio"
                  >
                    Ver Servicio
                  </button>
                  <button
                    onClick={() => { setShowModelOnBack(true); setIsFlipped(true); }}
                    className="bg-red-600 text-white px-4 py-2 text-sm rounded-lg transition-colors"
                    title="Ver Modelo 3D"
                  >
                    Ver Modelo 3D
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white">
          {/* Conditional rendering for the back side */}
          {isDefaultModel || !showModelOnBack ? (
            // Show Service Description if it's the default OR if "Ver Servicio" was clicked
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">{props.title}</h3>
              <div className="flex-grow">
                <p className="text-gray-600 whitespace-pre-line">
                  {props.serviceDescription || 'Servicio no disponible en este momento'}
                </p>
              </div>
            </div>
          ) : (
            // Show A360 iframe if "Ver Modelo 3D" was clicked
            <div className="w-full h-full">
              <iframe
                src={getFormattedA360Url(props.a360Link)}
                className="w-full h-full border-0"
                allow="fullscreen; accelerometer; autoplay; camera; gyroscope; microphone; xr-spatial-tracking"
                allowFullScreen
                title={props.title} // Added title for accessibility
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms" // Simplified sandbox
              />
            </div>
          )}
          {/* Botón de volver a descripción (HTML estándar) */}
          {/* Contenedor para posicionar y alinear el botón */}
          <div className="absolute bottom-4 left-0 right-0 px-6 flex items-center justify-end"> {/* Añadido justify-end para alinear a la derecha */}
            {/* Botón con ancho automático, padding y tamaño de texto como los botones frontales, alineado a la derecha por el contenedor flex */}
            <button
              className="rounded-lg transition-colors flex items-center justify-center space-x-2 bg-red-600 text-white hover:bg-red-700 w-auto px-4 py-2 text-sm" // Clases de estilo, ancho auto, padding y tamaño de texto
              onClick={handleFlip} // Manejador de eventos de React
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 9l-6 6"/><path d="M9 9h5v5"/>
              </svg>
              <span>Volver a Descripción</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
