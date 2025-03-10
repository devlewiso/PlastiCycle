import React from 'react';
import { FaRecycle, FaLeaf, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Impacto() {
  // Datos de impacto para mostrar estadísticas
  const estadisticasImpacto = [
    { id: 1, cantidad: '5,000+', descripcion: 'Kg de plástico reciclado' },
    { id: 2, cantidad: '350+', descripcion: 'Toneladas de CO₂ evitadas' },
    { id: 3, cantidad: '12,000+', descripcion: 'Usuarios activos' },
    { id: 4, cantidad: '120+', descripcion: 'Proyectos apoyados' }
  ];

  // Datos para la sección de beneficios
  const beneficios = [
    { 
      id: 1, 
      icono: <FaRecycle className="text-4xl text-green-500 mb-4" />,
      titulo: 'Reciclaje Eficiente', 
      descripcion: 'Nuestro sistema optimiza el proceso de reciclaje para maximizar la recuperación de materiales valiosos.' 
    },
    { 
      id: 2, 
      icono: <FaLeaf className="text-4xl text-green-500 mb-4" />,
      titulo: 'Impacto Ambiental', 
      descripcion: 'Cada kilo de plástico reciclado representa una reducción significativa en emisiones de CO₂ y contaminación.' 
    },
    { 
      id: 3, 
      icono: <FaChartLine className="text-4xl text-green-500 mb-4" />,
      titulo: 'Economía Circular', 
      descripcion: 'Promovemos un modelo económico donde los recursos se mantienen en uso durante el mayor tiempo posible.' 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-400 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight">
            El Impacto de Reciclar con PlastiCycle
          </h1>
          <p className="mt-6 text-xl text-white text-center max-w-3xl mx-auto">
            Al reciclar con PlastiCycle, transformamos desechos plásticos en materia prima valiosa para 
            proyectos sostenibles, generando un impacto positivo en nuestro planeta.
          </p>
          
          {/* Estadísticas de impacto */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {estadisticasImpacto.map((stat) => (
              <div key={stat.id} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white">{stat.cantidad}</p>
                <p className="mt-2 text-green-100">{stat.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de Beneficios */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Beneficios del Reciclaje con PlastiCycle
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {beneficios.map((beneficio) => (
              <div key={beneficio.id} className="bg-white rounded-xl shadow-md p-8 text-center transform transition duration-300 hover:scale-105">
                {beneficio.icono}
                <h3 className="text-xl font-semibold text-green-600 mb-3">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de Proyectos Sostenibles */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 pr-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Reciclaje que Impulsa Proyectos Sostenibles
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La materia prima que generamos a partir del reciclaje de plásticos es reutilizada
                en proyectos que fomentan el desarrollo sostenible y la economía circular.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Cada botella o envase que reciclas se convierte en parte de iniciativas como:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Mobiliario urbano sostenible</li>
                <li>Materiales de construcción eco-amigables</li>
                <li>Textiles reciclados para la industria de la moda</li>
                <li>Nuevos envases y productos de consumo responsable</li>
              </ul>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300">
                Descubre Nuestros Proyectos
              </button>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2 bg-green-100 rounded-xl p-8">
              <div className="aspect-w-16 aspect-h-9 bg-green-200 rounded-lg flex items-center justify-center">
                <p className="text-green-700 text-center p-12">Imagen o gráfico ilustrativo del ciclo de reciclaje</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de App de Recolección */}
      <div className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Nuestra App de Recolección
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Facilita el proceso de reciclaje desde la comodidad de tu hogar u oficina
            </p>
          </div>
          
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <FaMobileAlt className="text-5xl text-green-500 mb-6 mx-auto md:mx-0" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  PlastiCycle App
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">1</div>
                    <div className="ml-3">
                      <p className="text-gray-700">Programa la recolección de tus plásticos con solo unos clics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">2</div>
                    <div className="ml-3">
                      <p className="text-gray-700">Rastrea en tiempo real a nuestros recolectores</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">3</div>
                    <div className="ml-3">
                      <p className="text-gray-700">Acumula puntos EcoPuntos por cada kilo reciclado</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">4</div>
                    <div className="ml-3">
                      <p className="text-gray-700">Visualiza tu impacto ambiental en tiempo real</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex space-x-4 justify-center md:justify-start">
                  <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center">
                    <span>App Store</span>
                  </button>
                  <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center">
                    <span>Google Play</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-10 md:mb-0 md:w-2/5 order-1 md:order-2">
              <div className="aspect-w-4 aspect-h-6 bg-gradient-to-b from-green-400 to-green-600 rounded-3xl p-4 shadow-xl mx-auto max-w-xs">
                <div className="bg-white h-full w-full rounded-2xl flex items-center justify-center">
                  <p className="text-green-700 text-center p-8">Mockup de la app de PlastiCycle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de CTA */}
      <div className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            ¡Haz la Diferencia con Nosotros!
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Cada acción cuenta. Al reciclar con nosotros, formas parte de una comunidad global
            comprometida con un futuro más verde y sostenible.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-md text-lg font-medium transition duration-300">
              Únete a la Causa
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-md text-lg font-medium transition duration-300">
              Conoce Más
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}