import { Component, inject } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-promociones',
  standalone: true,
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.css'
})
export class PromocionesComponent {
  private readonly hospitalService = inject(HospitalService);
  readonly promociones = this.hospitalService.obtenerPromociones();
}
