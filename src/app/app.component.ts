import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { MedicosComponent } from './components/medicos/medicos.component';
import { ResenasComponent } from './components/resenas/resenas.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ServiciosComponent,
    MedicosComponent,
    ResenasComponent,
    PromocionesComponent,
    SolicitudComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly anioActual = 2026;
}
