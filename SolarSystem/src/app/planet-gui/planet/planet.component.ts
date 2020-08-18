import { Component, OnInit, Input } from '@angular/core';
import { Planets } from 'src/app/planets';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
@Input('planet') planetinput: Planets;
  constructor() { }

  ngOnInit(): void {
  }

}
