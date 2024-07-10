import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  url = 'http://localhost:3000/locations'

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? []
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async getHousingLocationByName(name: string): Promise<HousingLocation[] | undefined> {
    const allHousingLocations = await this.getAllHousingLocations();
    return allHousingLocations.filter((housingLocation) => housingLocation.name.toLowerCase().includes(name.toLowerCase()));
  }

  async getHousingLocationByCity(city: string): Promise<HousingLocation[]> {
    const allHousingLocations = await this.getAllHousingLocations();
    return allHousingLocations.filter((housingLocation) => housingLocation.city.toLowerCase().includes(city.toLowerCase()))
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`
    );
  }

  constructor() { }
}
