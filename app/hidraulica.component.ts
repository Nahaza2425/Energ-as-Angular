import { Component } from '@angular/core';

@Component({
  selector: 'app-hidraulica',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h1>Energía Hidráulica</h1>
      <p>
        La energía hidráulica utiliza el movimiento del agua para generar electricidad,
        siendo una de las fuentes renovables más antiguas y eficientes.
      </p>
    </div>
  `,
  styles: [
    `
      h1 {
        color: #28a745;
      }
      p {
        font-size: 1.2rem;
      }
    `,
  ],
})
export class HidraulicaComponent {}
