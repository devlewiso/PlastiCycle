import React from 'react';
import { BiRecycle, BiTargetLock, BiCheckCircle, BiGroup } from 'react-icons/bi'; // Iconos adicionales

const WhatWeAreDoing = () => {
  return (
    <div id="what-we-are-doing" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <h2 className="text-3xl font-extrabold text-center text-green-600">Qué Estamos Haciendo</h2>

        {/* Descripción breve de la misión */}
        <div className="mt-8 text-lg text-gray-700 mb-8 flex items-center justify-center">
          <BiRecycle className="w-12 h-12 text-green-600 mr-4" />
          <p className="max-w-3xl text-center">
            Estamos creando materia prima valiosa a partir del reciclaje de plásticos, latas de bebidas y otros materiales reciclables.
            Estos materiales reciclados se utilizan para producir nuevos productos que ayudan a disminuir la huella ecológica y fomentar un modelo de economía circular sostenible.
          </p>
        </div>



        {/* Cuatro tarjetas de impacto, cada una con un icono */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Reciclaje Empresarial */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-50 transition duration-300 transform hover:scale-105">
            <BiTargetLock className="w-12 h-12 text-green-600 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 text-center">Reciclaje Empresarial</h4>
            <p className="mt-2 text-gray-600 text-center">
              Proveemos soluciones personalizadas para empresas, ayudándolas a reducir su huella ecológica a través del reciclaje de plásticos y otros materiales.
            </p>
          </div>

          {/* Reciclaje Doméstico */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-50 transition duration-300 transform hover:scale-105">
            <BiCheckCircle className="w-12 h-12 text-green-600 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 text-center">Reciclaje Doméstico</h4>
            <p className="mt-2 text-gray-600 text-center">
              Ofrecemos soluciones de reciclaje para hogares, ayudando a las familias a gestionar sus residuos de manera responsable y sostenible.
            </p>
          </div>

          {/* Reciclaje Comunitario */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-50 transition duration-300 transform hover:scale-105">
            <BiGroup className="w-12 h-12 text-green-600 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 text-center">Reciclaje Comunitario</h4>
            <p className="mt-2 text-gray-600 text-center">
              Impulsamos iniciativas de reciclaje en comunidades, creando conciencia y facilitando el acceso a servicios de reciclaje responsables.
            </p>
          </div>

          {/* Reciclaje Innovador */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-50 transition duration-300 transform hover:scale-105">
            <BiRecycle className="w-12 h-12 text-green-600 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-800 text-center">Reciclaje Innovador</h4>
            <p className="mt-2 text-gray-600 text-center">
              Implementamos tecnologías innovadoras para maximizar la eficiencia del reciclaje, asegurando que los materiales sean reutilizados de forma óptima.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeAreDoing;
