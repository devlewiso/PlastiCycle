import React from 'react';
import { BiTargetLock, BiCheckCircle } from 'react-icons/bi'; // Iconos importados

const Services = () => {
  return (
    <div id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <h2 className="text-3xl font-extrabold text-center text-green-600">Nuestros Servicios</h2>

        {/* Descripción general de los servicios */}
        <p className="mt-4 text-lg text-gray-700 text-center">
          Ofrecemos soluciones integrales de reciclaje para empresas y consumidores. Transformamos plásticos y otros residuos en productos reciclados de alta calidad. Nuestro servicio incluye recolección, clasificación, y procesamiento de materiales, adaptado a las necesidades de cada cliente.
        </p>

        {/* Cuadro de servicios */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio 1: Reciclaje Empresarial */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BiTargetLock className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Reciclaje Empresarial</h3>
            <p className="mt-2 text-gray-600">
              Proveemos soluciones personalizadas para empresas, ayudándolas a reducir su huella ecológica a través del reciclaje de plásticos y otros materiales.
            </p>
          </div>

          {/* Servicio 2: Reciclaje Doméstico */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <BiCheckCircle className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Reciclaje Doméstico</h3>
            <p className="mt-2 text-gray-600">
              Ofrecemos soluciones de reciclaje para hogares, ayudando a las familias a gestionar sus residuos de manera responsable y sostenible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
