import { Component, inject } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-medicos',
  standalone: true,
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent {
  private readonly hospitalService = inject(HospitalService);
  readonly medicos = this.hospitalService.obtenerMedicos();
}
