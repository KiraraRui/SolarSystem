import { Component, OnInit } from '@angular/core';
import { PlanetserviceService} from '../planetservice.service';
import { Planets} from '../planets';

@Component({
  selector: 'app-planet-gui',
  templateUrl: './planet-gui.component.html',
  styleUrls: ['./planet-gui.component.css']
})
export class PlanetGuiComponent implements OnInit {

  planets : Planets[]
  currentPlanet : Planets;
  constructor(private planetServiceService : PlanetserviceService) { 
    this.planets = planetServiceService.planets;
    console.log(this.planets);
    this.currentPlanet = new Planets(0,'','',0,0,0,0,0,'');
  }

  ngOnInit(): void {
  }

 currentPlanetSetter(planet : Planets){
console.log(planet.englishName);
this.currentPlanet = planet;

 }
}
