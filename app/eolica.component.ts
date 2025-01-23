import { Component } from '@angular/core';

@Component({
  selector: 'app-eolica',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h1>Energía Eólica</h1>
      <p>
        La energía eólica aprovecha la fuerza del viento para generar electricidad.
        España es uno de los líderes en producción de energía eólica en Europa.
      </p>
    </div>
  `,
  styles: [
    `
      h1 {
        color: #007bff;
      }
      p {
        font-size: 1.2rem;
      }
    `,
  ],
})
export class EolicaComponent {}
