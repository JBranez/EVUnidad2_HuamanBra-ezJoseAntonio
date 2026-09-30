import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../services/hospital.service';
import { SolicitudForm } from '../../interfaces/solicitud.interface';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent {
  private readonly hospitalService = inject(HospitalService);

  readonly solicitudes = this.hospitalService.solicitudes;
  readonly formulario = signal<SolicitudForm>(this.formularioVacio());
  readonly alerta = signal<{ tipo: 'success' | 'warning'; mensaje: string } | null>(null);

  actualizarCampo<K extends keyof SolicitudForm>(campo: K, valor: SolicitudForm[K]): void {
    this.formulario.update((actual) => ({ ...actual, [campo]: valor }));
  }

  enviarSolicitud(formularioValido: boolean): void {
    if (!formularioValido) {
      this.alerta.set({
        tipo: 'warning',
        mensaje: 'Revisa los campos obligatorios antes de enviar la solicitud.'
      });
      return;
    }

    const datos = this.formulario();
    this.hospitalService.guardarSolicitud(datos);
    this.alerta.set({
      tipo: 'success',
      mensaje: `Solicitud registrada para ${datos.paciente}. El equipo se pondrá en contacto contigo.`
    });
    this.formulario.set(this.formularioVacio());
  }

  cerrarAlerta(): void {
    this.alerta.set(null);
  }

  private formularioVacio(): SolicitudForm {
    return {
      paciente: '',
      telefono: '',
      correo: '',
      servicio: '',
      fecha: '',
      mensaje: ''
    };
  }
}
