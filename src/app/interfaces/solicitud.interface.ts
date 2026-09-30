export interface Solicitud {
  id: number;
  paciente: string;
  telefono: string;
  correo: string;
  servicio: string;
  fecha: string;
  mensaje: string;
}

export interface SolicitudForm {
  paciente: string;
  telefono: string;
  correo: string;
  servicio: string;
  fecha: string;
  mensaje: string;
}
