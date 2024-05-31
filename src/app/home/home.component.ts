import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from './../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  template: `
    <section>
        <form>
          <input type="text" placeholder="Filter by city" />
          <button class="primary" type="button">Search</button>
        </form>
    </section>
    <section class="results">
        <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Test Homes',
    city: 'Test City',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
