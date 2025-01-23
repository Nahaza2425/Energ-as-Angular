import { Component } from '@angular/core';

@Component({
  selector: 'app-biomasa',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h1>Energía de Biomasa</h1>
      <p>
        La biomasa utiliza materia orgánica como fuente de energía, siendo una opción
        sostenible para generar calor y electricidad en España.
      </p>
    </div>
  `,
  styles: [
    `
      h1 {
        color: #6c757d;
      }
      p {
        font-size: 1.2rem;
      }
    `,
  ],
})
export class BiomasaComponent {}
