import { Routes } from '@angular/router';
import { EnergiaComponent } from './energia.component';
import { SolarComponent } from './solar.component';
import { EolicaComponent } from './eolica.component';
import { HidraulicaComponent } from './hidraulica.component';
import { BiomasaComponent } from './biomasa.component';

export const routes: Routes = [
  { path: '', component: EnergiaComponent },
  { path: 'solar', component: SolarComponent },
  { path: 'eolica', component: EolicaComponent },
  { path: 'hidraulica', component: HidraulicaComponent },
  { path: 'biomasa', component: BiomasaComponent },
];
