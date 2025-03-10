import React from 'react';

const Header = () => {
  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">PlastiCycle</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="/" className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
              <a href="/nosotros" className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium">Nosotros</a>
              <a href="/servicio" className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
              <a href="/impacto" className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium">Impacto</a>
              <a href="/contacto" className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-white text-green-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-50">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; // Asegúrate de que sea `export default Header`
