import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Planets} from './planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetserviceService {
  constructor(private httpClient: HttpClient) {
    this.MapData();
    console.log(this.planets); // delete
    // this.addInfo();
    console.log(this.planets);

}

request;
planets: Planets[] = [];
wantedPlanets: string[] = ['mercure','venus','terre','mars','jupiter','saturne','uranus','neptune'];
PlanetDescription: string[] = [''];
MapData(): void {
  console.log('mapdata');
  this.httpClient.get('https://api.le-systeme-solaire.net/rest/bodies/').subscribe((data) => {
    this.request = data;
    for (let index = 0; index < 286 ; index++) {
      for (let i = 0; i < this.wantedPlanets.length; i++) {
        if (this.request.bodies[index].id == this.wantedPlanets[i]) {
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
      }
    }
  });
}

// addInfo() : void {
//   console.log('YO ADD INFO BEGINS HERE BITCH'); // delete
//   console.log(this.planets.length); // delete shows 0 but is 8
//   console.log(this.wantedPlanets.length); // delete shows and is 8
//   for (let i = 0; i < this.planets.length; i++) {
//     for (let j = 0; j < this.wantedPlanets.length; j++) {
//       console.log('they are equal; ');
//      if (this.planets[i].englishName == this.wantedPlanets[j]) {
//        this.planets[i].addDescription(this.PlanetDescription[j] + this.planets[i].englishName + ' has ' + this.planets[i].moons + ' moons and a mass of ' + this.planets[i].mass + ' and a vol of ' + this.planets[i].vol + ', it has a density of ' + this.planets[i].density + ' it also has a gravity on ' + this.planets[i].gravity + ' and orbits around the planet ' + this.planets[i].aroundPlanet + '.');
//      }
      
//     }
    
//   }
// }
}

// + this.planets[i].englishName == this.wantedPlanets[j]





/*Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 days, the shortest of all the planets in the Solar System.

Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon

Earth, our home, is the third planet from the sun. It's the only planet known to have an atmosphere containing free oxygen, oceans of water on its surface and, of course, life. Earth is the fifth largest of the planets in the solar system.

Mars is sometimes called the Red Planet. It's red because of rusty iron in the ground. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon.


Jupiter is called a gas giant planet. Its atmosphere is made up of mostly hydrogen gas and helium gas, like the sun. The planet is covered in thick red, brown, yellow and white clouds. The clouds make the planet look like it has stripes.

Saturn is a gas giant made up mostly of hydrogen and helium, and it is the second most massive planet in the solar system, about 95 times Earth's mass. The Ringed Planet is the least dense of all the planets, and is the only one less dense than water.

Uranus is blue-green in color, as a result of the methane in its mostly hydrogen-helium atmosphere. The planet is often dubbed an ice giant, since at least 80% of its mass is a fluid mix of water, methane and ammonia ice

Neptune is very similar to Uranus. It's made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus.*/