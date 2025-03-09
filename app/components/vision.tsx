import React from 'react';
import { BiGlobe, BiTargetLock, BiCheckCircle } from 'react-icons/bi';

const Vision = () => {
  return (
    <div id="vision" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">Nuestra Visión</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <BiGlobe className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">Liderazgo Global</h3>
            <p className="mt-4 text-gray-700 text-center">
              Ser líderes en el reciclaje y reutilización de plásticos y otros materiales, contribuyendo a un planeta más limpio y consciente.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <BiTargetLock className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">Sostenibilidad Continua</h3>
            <p className="mt-4 text-gray-700 text-center">
              Buscamos ser un referente global en la sostenibilidad, mejorando continuamente nuestros procesos de reciclaje y promoviendo el uso responsable de los recursos.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <BiCheckCircle className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800">Impacto Positivo</h3>
            <p className="mt-4 text-gray-700 text-center">
              A través de un enfoque global, buscamos contribuir a la economía circular y fomentar un futuro más limpio y sostenible para las generaciones venideras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
