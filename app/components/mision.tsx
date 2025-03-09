import React from 'react';
import { BiRecycle, BiBulb, BiPlanet } from 'react-icons/bi';

const Mision = () => {
  return (
    <div id="mission" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-green-600 mb-8">Nuestra Misión</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <BiRecycle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">Transformación Sostenible</h3>
            <p className="mt-4 text-gray-700 text-center">
              Transformamos residuos plásticos y otros materiales reciclables en productos útiles y sostenibles que ayudan al cuidado del medio ambiente. Cada acción cuenta para reducir el impacto de los plásticos.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <BiBulb className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">Innovación Continua</h3>
            <p className="mt-4 text-gray-700 text-center">
              Buscamos soluciones innovadoras de reciclaje que no solo sean eficaces, sino que también generen un impacto positivo en el entorno. La innovación es clave para nuestra misión de sostenibilidad.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <BiPlanet className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">Compromiso Global</h3>
            <p className="mt-4 text-gray-700 text-center">
              Nuestra misión es reducir el impacto global de los residuos plásticos. A través de un enfoque global, buscamos contribuir a la economía circular y fomentar un futuro más limpio y sostenible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mision;
