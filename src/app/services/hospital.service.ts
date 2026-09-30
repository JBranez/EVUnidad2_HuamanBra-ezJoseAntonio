import { Injectable, signal } from '@angular/core';
import { Medico } from '../interfaces/medico.interface';
import { Promocion } from '../interfaces/promocion.interface';
import { Resena } from '../interfaces/resena.interface';
import { Servicio } from '../interfaces/servicio.interface';
import { Solicitud, SolicitudForm } from '../interfaces/solicitud.interface';

@Injectable({ providedIn: 'root' })
export class HospitalService {
  private readonly serviciosData: Servicio[] = [
    {
      id: 1,
      nombre: 'Emergencia 24 horas',
      descripcion: 'Atención inmediata para urgencias y emergencias todos los días.',
      icono: 'bi bi-heart-pulse',
      detalle: 'Triaje, estabilización y atención médica continua.'
    },
    {
      id: 2,
      nombre: 'Medicina general',
      descripcion: 'Consulta integral para prevención, diagnóstico y seguimiento.',
      icono: 'bi bi-person-check',
      detalle: 'Evaluación clínica, controles y orientación de salud.'
    },
    {
      id: 3,
      nombre: 'Laboratorio clínico',
      descripcion: 'Pruebas de laboratorio para apoyar diagnósticos y tratamientos.',
      icono: 'bi bi-droplet-half',
      detalle: 'Análisis de sangre, orina y pruebas complementarias.'
    },
    {
      id: 4,
      nombre: 'Pediatría',
      descripcion: 'Cuidado médico pensado para niñas, niños y adolescentes.',
      icono: 'bi bi-balloon-heart',
      detalle: 'Controles de crecimiento, consultas y orientación familiar.'
    },
    {
      id: 5,
      nombre: 'Cardiología',
      descripcion: 'Evaluación y seguimiento de la salud cardiovascular.',
      icono: 'bi bi-activity',
      detalle: 'Consulta especializada y control de factores de riesgo.'
    },
    {
      id: 6,
      nombre: 'Diagnóstico por imágenes',
      descripcion: 'Estudios de apoyo diagnóstico realizados con equipos especializados.',
      icono: 'bi bi-camera-reels',
      detalle: 'Ecografías y estudios de imagen según indicación médica.'
    }
  ];

  private readonly medicosData: Medico[] = [
    { id: 1, nombre: 'Dra. Valeria Salazar', especialidad: 'Medicina interna', experiencia: '12 años de experiencia', horario: 'Lun - Vie · 8:00 a. m. - 1:00 p. m.', iniciales: 'VS' },
    { id: 2, nombre: 'Dr. Carlos Mendoza', especialidad: 'Cardiología', experiencia: '10 años de experiencia', horario: 'Lun - Jue · 2:00 p. m. - 6:00 p. m.', iniciales: 'CM' },
    { id: 3, nombre: 'Dra. Andrea Quispe', especialidad: 'Pediatría', experiencia: '8 años de experiencia', horario: 'Mar - Sáb · 9:00 a. m. - 2:00 p. m.', iniciales: 'AQ' },
    { id: 4, nombre: 'Dr. Diego Torres', especialidad: 'Traumatología', experiencia: '14 años de experiencia', horario: 'Lun - Vie · 3:00 p. m. - 7:00 p. m.', iniciales: 'DT' }
  ];

  private readonly resenasData: Resena[] = [
    { id: 1, paciente: 'María Rojas', texto: 'La atención fue rápida y el personal me explicó cada paso con mucha paciencia.', puntuacion: 5, servicio: 'Emergencia', fecha: 'Hace 2 días', iniciales: 'MR' },
    { id: 2, paciente: 'Luis Paredes', texto: 'La consulta de cardiología fue puntual y recibí indicaciones muy claras.', puntuacion: 5, servicio: 'Cardiología', fecha: 'Hace 1 semana', iniciales: 'LP' },
    { id: 3, paciente: 'Ana Flores', texto: 'Llevé a mi hija a pediatría y salimos tranquilos porque resolvieron todas nuestras dudas.', puntuacion: 4, servicio: 'Pediatría', fecha: 'Hace 2 semanas', iniciales: 'AF' }
  ];

  private readonly promocionesData: Promocion[] = [
    { id: 1, titulo: 'Chequeo preventivo', descripcion: 'Consulta médica + hemograma + glucosa.', precio: 'S/ 79', vigencia: 'Válido hasta 31 de octubre', etiqueta: 'Prevención', icono: 'bi bi-clipboard2-pulse' },
    { id: 2, titulo: 'Control cardiovascular', descripcion: 'Consulta cardiológica + electrocardiograma.', precio: 'S/ 119', vigencia: 'Válido hasta 15 de noviembre', etiqueta: 'Corazón', icono: 'bi bi-heart-pulse' },
    { id: 3, titulo: 'Evaluación pediátrica', descripcion: 'Consulta pediátrica + control de crecimiento.', precio: 'S/ 69', vigencia: 'Válido hasta 30 de noviembre', etiqueta: 'Familia', icono: 'bi bi-people' }
  ];

  private readonly solicitudesSignal = signal<Solicitud[]>([
    {
      id: 1,
      paciente: 'Ejemplo de registro',
      telefono: '999 888 777',
      correo: 'paciente@ejemplo.com',
      servicio: 'Medicina general',
      fecha: '2026-10-05',
      mensaje: 'Deseo una consulta de control.'
    }
  ]);

  readonly solicitudes = this.solicitudesSignal.asReadonly();

  obtenerServicios(): Servicio[] {
    return this.serviciosData;
  }

  obtenerMedicos(): Medico[] {
    return this.medicosData;
  }

  obtenerResenas(): Resena[] {
    return this.resenasData;
  }

  obtenerPromociones(): Promocion[] {
    return this.promocionesData;
  }

  guardarSolicitud(formulario: SolicitudForm): void {
    const nuevaSolicitud: Solicitud = {
      id: Date.now(),
      ...formulario
    };

    this.solicitudesSignal.update((solicitudes) => [nuevaSolicitud, ...solicitudes]);
  }
}
