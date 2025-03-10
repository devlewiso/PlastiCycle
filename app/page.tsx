import React from 'react';
import Header from './components/Header'; // Asegúrate de que la ruta es correcta
import Footer from './components/Footer'; // Asegúrate de que la ruta es correcta
import Mision from './components/mision'; // Asegúrate de que la ruta es correcta
import Vision from './components/vision'; // Asegúrate de que la ruta es correcta
import Services from './components/servicios'; // Asegúrate de que la ruta es correcta
import WhatWeAreDoing from './components/whatarewedoing'; // Asegúrate de que la ruta es correcta
import { BiRecycle, BiTargetLock, BiCheckCircle, BiGroup, BiMailSend } from 'react-icons/bi'; // Importando íconos

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Importando el Header */}
      <Header />

      {/* Sección Hero */}
      <div className="relative bg-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Transformando los Residuos Plásticos en Recursos Valiosos
              </h1>
              <p className="mt-4 text-xl text-green-50">
                PlastiCycle está revolucionando el reciclaje de plásticos con soluciones innovadoras 
                para un planeta más limpio y sostenible.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-green-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-green-50">
                  Nuestros Servicios
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-600">
                  Aprende Más
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-64 md:h-96 bg-green-400 rounded-lg shadow-xl">
                {/* Imagen de la sección hero */}
                <div className="w-full h-full flex items-center justify-center text-white text-lg">
                  <img
                    src="/img/banner1.png" // Ruta de la imagen
                    alt="Proceso de Reciclaje"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Misión */}
      <Mision />

      {/* Sección Visión */}
      <Vision />

      {/* Sección Qué Estamos Haciendo */}
      <WhatWeAreDoing />

      {/* Sección Servicios */}
      <Services />

      {/* Importando el Footer */}
      <Footer />
    </div>
  );
}
