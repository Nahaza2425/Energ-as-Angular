import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h1>Energía Solar</h1>
      <p>
        La energía solar es una de las principales fuentes renovables en España,
        aprovechando la luz del sol para generar electricidad.
      </p>
    </div>
  `,
  styles: [
    `
      h1 {
        color: #ff9800;
      }
    `,
  ],
})
export class SolarComponent {}
