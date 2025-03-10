// app/nosotros/page.tsx
import React from 'react';
import Header from '../components/Header'; // Asegúrate de que la ruta es correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta es correcta
import Mision from '../components/mision';
import Vision from '../components/vision';

export default function Nosotros() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Sección Hero */}
      <div className="relative bg-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Conoce Más Sobre Nosotros
              </h1>
              <p className="mt-4 text-xl text-green-50">
                Somos una empresa comprometida con el medio ambiente y la sostenibilidad. Nuestra misión es crear un futuro más limpio y ecológico a través del reciclaje de plásticos y otros materiales.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-64 md:h-96 bg-green-400 rounded-lg shadow-xl">
                {/* Marcador de imagen para la sección hero */}
                <div className="w-full h-full flex items-center justify-center text-white text-lg">
                <img
                    src="/img/banner2.png" // Ruta de la imagen
                    alt="Proceso de Reciclaje"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Misión (importada) */}
      <Mision />

      {/* Sección Visión (importada) */}
      <Vision />

      {/* Sección Nuestro Equipo */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-green-600">Nuestro Equipo</h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Contamos con un equipo apasionado y comprometido con la causa del reciclaje. Cada uno de nuestros miembros aporta experiencia, dedicación y esfuerzo para hacer de nuestro proyecto un éxito.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/api/placeholder/300/300"
                alt="Miembro 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Juan Pérez</h3>
              <p className="mt-2 text-gray-600 text-center">Fundador y CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/api/placeholder/300/300"
                alt="Miembro 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Ana Gómez</h3>
              <p className="mt-2 text-gray-600 text-center">Directora de Operaciones</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/api/placeholder/300/300"
                alt="Miembro 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">Carlos López</h3>
              <p className="mt-2 text-gray-600 text-center">Jefe de Reciclaje</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
