"use client";
import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircleIcon, RecycleIcon, LeafIcon } from 'lucide-react';
import Header from '../components/Header'; // Asegúrate de que la ruta es correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta es correcta

// Tipo para los datos del formulario
type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
};

// Tipo para los errores de validación
type FormErrors = {
  [key in keyof FormData]?: string;
};

export default function Contacto() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  // Estado para los errores de validación
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Estado para mostrar mensaje de éxito
  const [enviado, setEnviado] = useState(false);
  
  // Estado para mostrar spinner de carga
  const [enviando, setEnviando] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar el error cuando el usuario corrige
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Validar el formulario
  const validarFormulario = (): boolean => {
    const nuevosErrores: FormErrors = {};
    
    // Validar nombre
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }
    
    // Validar email
    if (!formData.email.trim()) {
      nuevosErrores.email = "El email es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nuevosErrores.email = "Por favor, ingresa un email válido";
    }
    
    // Validar asunto
    if (!formData.asunto.trim()) {
      nuevosErrores.asunto = "El asunto es obligatorio";
    }
    
    // Validar mensaje
    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio";
    } else if (formData.mensaje.length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }
    
    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validarFormulario()) {
      return;
    }
    
    setEnviando(true);
    
    try {
      // Construir el cuerpo del correo para mailto
      const asuntoEmail = encodeURIComponent(`[Contacto Plasticycle] ${formData.asunto}`);
      const cuerpoEmail = encodeURIComponent(
        `Nombre: ${formData.nombre}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.telefono || 'No proporcionado'}\n\n` +
        `Mensaje:\n${formData.mensaje}`
      );
      
      // Abrir cliente de correo con mailto
      window.location.href = `mailto:devlewiso@outlook.com?subject=${asuntoEmail}&body=${cuerpoEmail}`;
      
      // Mostrar mensaje de éxito
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
      setEnviado(true);
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => setEnviado(false), 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  // Función alternativa para abrir el cliente de correo directamente
  const handleEmailDirecto = () => {
    window.location.href = 'mailto:devlewiso@outlook.com';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />      <div className="bg-gradient-to-r from-green-700 to-blue-200 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacta con Plasticycle</h1>
            <p className="text-xl text-green-50 mb-6">
              Juntos por un Guatemala más verde. ¿Tienes preguntas sobre nuestros servicios de reciclaje? Estamos aquí para ayudarte.
            </p>
            <div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 shadow-sm">
              Llámanos: <span className="font-bold ml-2">+502 2345 6789</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Información de contacto y mapa */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Información de Contacto</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MailIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600 hover:text-green-600 cursor-pointer" onClick={handleEmailDirecto}>
                      devlewiso@outlook.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <PhoneIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Teléfono</p>
                    <p className="text-sm text-gray-600">+502 2345 6789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPinIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Dirección</p>
                    <p className="text-sm text-gray-600">Zona 10, Ciudad de Guatemala<br />Guatemala, C.A.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Horario de Atención</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Lunes - Viernes:</div>
                  <div>8:00 - 17:00</div>
                  <div>Sábados:</div>
                  <div>9:00 - 13:00</div>
                  <div>Domingos:</div>
                  <div>Cerrado</div>
                </div>
              </div>
            </div>
            
            {/* Mapa (simulado con un placeholder) */}
            <div className="bg-white rounded-lg shadow-md p-4 h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">
                  Ubicación Plasticycle Guatemala<br />
                  Zona 10, Ciudad de Guatemala
                </p>
              </div>
            </div>
            
            {/* Sección sobre reciclaje */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Impacto Ambiental</h3>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="text-green-600 font-bold">1</div>
                </div>
                <div>
                  <p className="font-medium">+500 toneladas</p>
                  <p className="text-sm text-gray-600">Plástico reciclado en 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="text-green-600 font-bold">2</div>
                </div>
                <div>
                  <p className="font-medium">15 comunidades</p>
                  <p className="text-sm text-gray-600">Participantes en Guatemala</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="text-green-600 font-bold">3</div>
                </div>
                <div>
                  <p className="font-medium">100+ empleos</p>
                  <p className="text-sm text-gray-600">Generados en la economía local</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envíanos un Mensaje</h2>
              
              {enviado ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start mb-6">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium text-green-800">Mensaje preparado</h3>
                    <p className="mt-1 text-sm text-green-700">
                      Se ha abierto tu cliente de correo con el mensaje listo para enviar a Plasticycle.
                    </p>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm ${
                        errors.nombre ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@ejemplo.com"
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm ${
                        errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+502 XXXX XXXX"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    />
                  </div>
                  
                  {/* Asunto */}
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
                      Asunto <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm ${
                        errors.asunto ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="Información general">Información general</option>
                      <option value="Programa de reciclaje">Programa de reciclaje</option>
                      <option value="Recolección">Servicio de recolección</option>
                      <option value="Alianzas">Propuesta de alianza</option>
                      <option value="Donaciones">Donaciones</option>
                      <option value="Voluntariado">Voluntariado</option>
                      <option value="Otro">Otro</option>
                    </select>
                    {errors.asunto && <p className="mt-1 text-sm text-red-600">{errors.asunto}</p>}
                  </div>
                </div>
                
                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm ${
                      errors.mensaje ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {errors.mensaje && <p className="mt-1 text-sm text-red-600">{errors.mensaje}</p>}
                </div>
                
                {/* Política de privacidad */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="privacidad"
                      name="privacidad"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacidad" className="font-medium text-gray-700">
                      Acepto la <a href="#" className="text-green-600 hover:text-green-500">política de privacidad</a>
                    </label>
                    <p className="text-gray-500">Tus datos serán tratados según nuestra política de privacidad.</p>
                  </div>
                </div>
                
                {/* Botón de envío */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={enviando}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-75 transition-all duration-200"
                  >
                    {enviando ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Preparando...
                      </>
                    ) : (
                      'Enviar Mensaje'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Programas de reciclaje */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nuestros Programas de Reciclaje</h2>
            <p className="mt-4 text-lg text-gray-600">Conoce las diferentes formas en que Plasticycle trabaja por un Guatemala más limpio</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Recolección Residencial",
                desc: "Servicio de recogida a domicilio para familias comprometidas con el medio ambiente."
              },
              {
                title: "Puntos de Acopio",
                desc: "Red de puntos de acopio estratégicamente ubicados en toda la ciudad para facilitar el reciclaje."
              },
              {
                title: "Programas Educativos",
                desc: "Talleres y charlas para escuelas y universidades sobre la importancia del reciclaje."
              },
              {
                title: "Alianzas Corporativas",
                desc: "Soluciones de reciclaje a medida para empresas comprometidas con la sostenibilidad."
              },
              {
                title: "Reciclaje Comunitario",
                desc: "Iniciativas de reciclaje en comunidades rurales que generan empleo e impacto ambiental positivo."
              },
              {
                title: "Transformación de Plástico",
                desc: "Convertimos el plástico reciclado en nuevos productos útiles para el hogar y la comunidad."
              }
            ].map((programa, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{programa.title}</h3>
                <p className="text-gray-600 flex-grow">{programa.desc}</p>
                <button className="mt-4 text-green-600 hover:text-green-800 text-sm font-medium">
                  Más información →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />

    </div>
  );
}