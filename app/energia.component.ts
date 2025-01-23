import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container mt-5">
      <h1 class="text-center mb-4">Energías Renovables</h1>
      <div class="d-flex flex-wrap justify-content-around">
        <div class="card text-center shadow-sm p-3 mb-5 bg-white rounded" style="width: 18rem;" routerLink="/solar">
          <h2 class="card-title">Energía Solar</h2>
          <p class="card-text">Aprovechamos la luz del sol para generar energía.</p>
        </div>
        <div class="card text-center shadow-sm p-3 mb-5 bg-white rounded" style="width: 18rem;" routerLink="/eolica">
          <h2 class="card-title">Energía Eólica</h2>
          <p class="card-text">La fuerza del viento como fuente de energía.</p>
        </div>
        <div class="card text-center shadow-sm p-3 mb-5 bg-white rounded" style="width: 18rem;" routerLink="/hidraulica">
          <h2 class="card-title">Energía Hidráulica</h2>
          <p class="card-text">Generamos energía limpia con agua.</p>
        </div>
        <div class="card text-center shadow-sm p-3 mb-5 bg-white rounded" style="width: 18rem;" routerLink="/biomasa">
          <h2 class="card-title">Biomasa</h2>
          <p class="card-text">Energía a partir de materia orgánica.</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .card:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
    `,
  ],
})
export class EnergiaComponent {}
