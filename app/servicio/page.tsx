"use client";

import React, { useState } from 'react';
import { FaRecycle, FaTruck, FaBuilding, FaUserFriends, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdBusinessCenter, MdSchool } from 'react-icons/md';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Servicios() {
  const [activeTab, setActiveTab] = useState<'individuos' | 'empresas' | 'comunidades'>('individuos'); // Establecer el tipo de estado
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Servicios por categoría
  const serviciosData = {
    individuos: [
      {
        id: 1,
        icon: <FaRecycle className="text-4xl text-green-500 mb-4" />,
        title: 'Recolección Domiciliaria',
        description: 'Recogemos tus plásticos directamente en tu hogar. Programa una recolección a través de nuestra aplicación y nosotros nos encargamos del resto.',
        features: ['Programación flexible', 'Seguimiento en tiempo real', 'Acumulación de EcoPuntos', 'Sin costo adicional']
      },
      {
        id: 2,
        icon: <FaTruck className="text-4xl text-green-500 mb-4" />,
        title: 'Puntos de Entrega',
        description: 'Disponemos de puntos estratégicos en la ciudad donde puedes depositar tus plásticos reciclables cuando sea conveniente para ti.',
        features: ['Ubicaciones accesibles', 'Disponibles 24/7', 'Verificación inmediata', 'Código QR para registro']
      }
    ],
    empresas: [
      {
        id: 3,
        icon: <FaBuilding className="text-4xl text-green-500 mb-4" />,
        title: 'Gestión Corporativa de Residuos',
        description: 'Soluciones a medida para empresas que buscan una gestión responsable de sus residuos plásticos, cumpliendo con normativas ambientales.',
        features: ['Evaluación inicial gratuita', 'Planes personalizados', 'Informes de impacto ambiental', 'Certificación de economía circular']
      },
      {
        id: 4,
        icon: <MdBusinessCenter className="text-4xl text-green-500 mb-4" />,
        title: 'Consultoría en Sostenibilidad',
        description: 'Asesoramiento especializado para implementar prácticas sostenibles en tu empresa, optimizando recursos y reduciendo la huella ambiental.',
        features: ['Análisis de procesos', 'Estrategias de reducción', 'Capacitación de personal', 'Seguimiento continuo']
      }
    ],
    comunidades: [
      {
        id: 5,
        icon: <FaUserFriends className="text-4xl text-green-500 mb-4" />,
        title: 'Programas Comunitarios',
        description: 'Iniciativas para barrios y comunidades que desean organizarse para generar un impacto positivo en su entorno a través del reciclaje.',
        features: ['Contenedores comunitarios', 'Charlas de concientización', 'Campañas de recolección', 'Premios para comunidades']
      },
      {
        id: 6,
        icon: <MdSchool className="text-4xl text-green-500 mb-4" />,
        title: 'Educación Ambiental',
        description: 'Talleres y actividades educativas para escuelas, universidades y grupos comunitarios sobre la importancia del reciclaje y la economía circular.',
        features: ['Material didáctico', 'Talleres prácticos', 'Visitas a plantas', 'Proyectos escolares']
      }
    ]
  };

  // Preguntas frecuentes
  const faqsData = [
    {
      id: 1,
      question: '¿Qué tipos de plásticos reciben?',
      answer: 'Aceptamos la mayoría de los tipos de plásticos, incluyendo PET (1), HDPE (2), LDPE (4), PP (5) y PS (6). No aceptamos PVC (3) debido a su complejo proceso de reciclaje y potenciales compuestos tóxicos. Todos los plásticos deben estar limpios y secos.'
    },
    {
      id: 2,
      question: '¿Cómo funciona el sistema de EcoPuntos?',
      answer: 'Por cada kilo de plástico reciclado, acumulas EcoPuntos en tu cuenta de PlastiCycle. Estos puntos pueden ser canjeados por descuentos en comercios asociados, productos sostenibles o incluso donados a proyectos ambientales. Consulta nuestra sección de recompensas para ver todas las opciones disponibles.'
    },
    {
      id: 3,
      question: '¿Cuál es el tiempo de espera para una recolección programada?',
      answer: 'Generalmente, el tiempo de espera es de 24 a 48 horas después de programar tu recolección a través de la app. Sin embargo, en zonas de alta demanda o en días específicos, puede extenderse hasta 72 horas. La app te proporciona una estimación en tiempo real basada en la disponibilidad de recolectores en tu zona.'
    },
    {
      id: 4,
      question: '¿Qué beneficios obtiene mi empresa al asociarse con PlastiCycle?',
      answer: 'Las empresas asociadas reciben certificaciones ambientales, informes detallados de su contribución a la reducción de residuos, asesoramiento personalizado en sostenibilidad y visibilidad como patrocinadores de proyectos ambientales. Además, pueden acceder a tarifas preferenciales y programas exclusivos de responsabilidad social corporativa.'
    },
    {
      id: 5,
      question: '¿Cómo puedo organizar un taller educativo en mi escuela o comunidad?',
      answer: 'Puedes solicitar un taller educativo a través de nuestro formulario en línea o contactando directamente a nuestro departamento de Educación Ambiental. Ofrecemos programas adaptados a diferentes edades y contextos, y según la disponibilidad, podemos organizar visitas a nuestras instalaciones para experiencias más enriquecedoras.'
    }
  ];

  // Manejo de FAQs
  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Verificación de seguridad para el mapeo
  const serviciosActivos = serviciosData[activeTab] || [];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Nuestros Servicios de Reciclaje
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
            En PlastiCycle ofrecemos soluciones integrales de reciclaje adaptadas a individuos, 
            empresas y comunidades. Descubre cómo podemos ayudarte a crear un impacto positivo.
          </p>
        </div>
      </div>

      {/* Tabs de Servicios */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-10 border-b">
            <button 
              onClick={() => setActiveTab('individuos')}
              className={`px-6 py-3 text-lg font-medium ${activeTab === 'individuos' ? 'text-green-600 border-b-2 border-green-500' : 'text-gray-500 hover:text-green-500'}`}
            >
              Para Individuos
            </button>
            <button 
              onClick={() => setActiveTab('empresas')}
              className={`px-6 py-3 text-lg font-medium ${activeTab === 'empresas' ? 'text-green-600 border-b-2 border-green-500' : 'text-gray-500 hover:text-green-500'}`}
            >
              Para Empresas
            </button>
            <button 
              onClick={() => setActiveTab('comunidades')}
              className={`px-6 py-3 text-lg font-medium ${activeTab === 'comunidades' ? 'text-green-600 border-b-2 border-green-500' : 'text-gray-500 hover:text-green-500'}`}
            >
              Para Comunidades
            </button>
          </div>

          <div className="space-y-12">
            {serviciosActivos.map((servicio) => (
              <div key={servicio.id} className="flex flex-col items-center text-center">
                <div>{servicio.icon}</div>
                <h2 className="text-2xl font-semibold mt-4">{servicio.title}</h2>
                <p className="mt-2 text-lg">{servicio.description}</p>
                <ul className="mt-4 space-y-2">
                  {servicio.features.map((feature, index) => (
                    <li key={index} className="text-lg text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">Preguntas Frecuentes</h2>
          <div className="mt-6 space-y-6">
            {faqsData.map((faq) => (
              <div key={faq.id} className="border-b pb-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(faq.id)}>
                  <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                  <div>{openFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}</div>
                </div>
                {openFaq === faq.id && <p className="mt-4 text-lg text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
