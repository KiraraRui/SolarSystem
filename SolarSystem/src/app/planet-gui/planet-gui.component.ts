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
  constructor(private planetServiceService : PlanetserviceService) { 
    this.planets = planetServiceService.planets;
    console.log(this.planets);
  }

  ngOnInit(): void {
  }

}
