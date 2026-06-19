import { FaqContent } from "../../interfaces/data/faq-content.interface";
export const FAQ_CONTENT: FaqContent = {
  title: 'Preguntas',
  titleHighlight: 'frecuentes',

  subtitle:
    'Resolvemos las dudas más habituales sobre el control horario y la gestión de jornada laboral.',

  items: [
    {
      question: '¿Es obligatorio registrar la jornada laboral?',
      answer:
        'Sí. La legislación española exige a las empresas llevar un registro diario de la jornada de todos sus trabajadores.',
      isOpen: true
    },

    {
      question: '¿Pueden los empleados fichar desde el móvil?',
      answer:
        'Sí. La plataforma permite registrar entradas y salidas desde dispositivos móviles, facilitando el trabajo híbrido y remoto.'
    },

    {
      question: '¿Qué ocurre si un empleado olvida fichar?',
      answer:
        'Los responsables pueden revisar incidencias y gestionar correcciones de forma controlada para mantener un registro preciso.'
    },

    {
      question: '¿Se pueden gestionar vacaciones y ausencias?',
      answer:
        'Sí. El sistema permite solicitar, aprobar y consultar vacaciones, permisos y ausencias desde una única plataforma.'
    },

    {
      question: '¿Cumple con la normativa vigente?',
      answer:
        'La aplicación está diseñada para ayudar a las empresas a cumplir con los requisitos legales relacionados con el registro horario y la conservación de datos.'
    },

    {
      question: '¿Es posible exportar informes?',
      answer:
        'Sí. Se pueden generar informes y registros para auditorías internas, inspecciones o análisis de productividad.'
    }
  ]
};