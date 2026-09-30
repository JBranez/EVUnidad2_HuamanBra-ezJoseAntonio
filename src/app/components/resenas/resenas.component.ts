import { Component, inject } from '@angular/core';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-resenas',
  standalone: true,
  templateUrl: './resenas.component.html',
  styleUrl: './resenas.component.css'
})
export class ResenasComponent {
  private readonly hospitalService = inject(HospitalService);
  readonly resenas = this.hospitalService.obtenerResenas();
  readonly estrellas = [1, 2, 3, 4, 5];
}
