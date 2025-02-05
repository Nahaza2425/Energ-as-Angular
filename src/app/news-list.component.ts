import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './news-list.component.html'
})
export class NewsListComponent {
  continents = ['América', 'Europa', 'Asia'];
  countries: Record<string, string[]> = {
    'América': ['EE.UU.', 'Brasil', 'Argentina', 'México', 'Canadá', 'Chile', 'Colombia', 'Perú'],
    'Europa': ['España', 'Francia', 'Alemania', 'Italia', 'Portugal', 'Reino Unido', 'Países Bajos'],
    'Asia': ['China', 'Japón', 'India', 'Corea del Sur', 'Tailandia', 'Vietnam', 'Indonesia']
  };
  news = [
      { id: 1, title: 'Economía en crecimiento', continent: 'América', country: 'EE.UU.' },
      { id: 2, title: 'Nueva política ambiental', continent: 'Europa', country: 'Francia' },
      { id: 3, title: 'Tecnología en expansión', continent: 'Asia', country: 'China' },
      { id: 4, title: 'Descubrimiento científico', continent: 'América', country: 'Brasil' },
      { id: 5, title: 'Crisis energética', continent: 'Europa', country: 'Alemania' },
      { id: 6, title: 'Avance en inteligencia artificial', continent: 'Asia', country: 'Japón' },
      { id: 7, title: 'Inversión en educación', continent: 'América', country: 'México' },
      { id: 8, title: 'Innovaciones en salud', continent: 'Europa', country: 'España' },
      { id: 9, title: 'Automóviles eléctricos', continent: 'Asia', country: 'Corea del Sur' },
      { id: 10, title: 'Turismo en auge', continent: 'América', country: 'Chile' },
      { id: 11, title: 'Desarrollo sostenible', continent: 'Europa', country: 'Países Bajos' },
      { id: 12, title: 'Nuevas startups', continent: 'Asia', country: 'India' }
    ];
  selectedContinent = '';
  selectedCountry = '';

  constructor(private router: Router) {}

  getFilteredNews() {
    return this.news.filter(n =>
      (!this.selectedContinent || n.continent === this.selectedContinent) &&
      (!this.selectedCountry || n.country === this.selectedCountry)
    );
  }

  viewNews(id: number) {
    this.router.navigate(['/news', id]);
  }
}
