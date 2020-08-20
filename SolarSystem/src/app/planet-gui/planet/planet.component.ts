import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Planets } from 'src/app/planets';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
})
export class PlanetComponent implements OnInit {
  @Input('planet') planetinput: Planets;
  @Output() output = new EventEmitter<Planets>();
  constructor() {
    console.log(this.ImagePath);
  }

  ImagePath: string;

  ngOnInit(): void {
    this.ImagePath ='../../../assets/' + this.planetinput.englishName + 'Off.png';
   
  }

  onClick() {
    if (this.ImagePath.endsWith('Off.png')) {
      this.ImagePath =
        '../../../assets/' + this.planetinput.englishName + 'On.png';
    } else {
      this.ImagePath =
        '../../../assets/' + this.planetinput.englishName + 'Off.png';
    }

    this.output.emit(this.planetinput);
  }
}
