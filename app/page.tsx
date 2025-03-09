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
                {/* Marcador de imagen para la sección hero */}
                <div className="w-full h-full flex items-center justify-center text-white text-lg">
                  <img
                    src="/api/placeholder/500/400"
                    alt="Proceso de Reciclaje"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-16 md:h-24 fill-white"
          >
            <path d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,101.3C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
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
