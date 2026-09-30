import { Component, inject, signal } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-servicios',
  standalone: true,
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  private readonly hospitalService = inject(HospitalService);
  readonly servicios = this.hospitalService.obtenerServicios();
  readonly servicioSeleccionado = signal<number | null>(null);

  verDetalle(id: number): void {
    this.servicioSeleccionado.update((actual) => actual === id ? null : id);
  }
}
