import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { projectCategories } from '../data/projects';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Esperar a que la navegación se complete antes de hacer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-white hover:text-red-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className="text-white hover:text-red-600 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => handleNavigation('services')}
              className="text-white hover:text-red-600 transition-colors"
            >
              Servicios
            </button>
            <div className="relative group">
              <button className="text-white hover:text-red-600 transition-colors flex items-center space-x-1">
                <span>Proyectos</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-64 bg-black rounded-lg shadow-xl py-2 hidden group-hover:block">
                {projectCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/proyectos/${category.id}`}
                    className="block px-4 py-2 text-white hover:bg-red-600 transition-colors"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleNavigation('contact')}
              className="text-white hover:text-red-600 transition-colors"
            >
              Contacto
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}