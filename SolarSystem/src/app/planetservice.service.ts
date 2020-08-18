import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Planets} from './planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetserviceService {
  constructor(private httpClient: HttpClient) {
    console.log('planetservice');
    this.MapData();
}

request;
planets: Planets[] = [];

MapData(): void {
  console.log('mapdata');
  this.httpClient.get('https://api.le-systeme-solaire.net/rest/bodies/').subscribe((data) => {
    this.request = data;
    for (let index = 0; index < 286 ; index++) {
      let tempPlanet = new Planets(
        this.request.bodies[index].id,
        this.request.bodies[index].name,
        this.request.bodies[index].englishName,
        this.request.bodies[index].moons,
        this.request.bodies[index].mass,
        this.request.bodies[index].vol,
        this.request.bodies[index].density,
        this.request.bodies[index].gravity,
        this.request.bodies[index].aroundPlanet
    
      );
      this.planets.push(tempPlanet);
    }
  });
}
}