import { Identifiers } from '@angular/compiler';

export class Planets {


id: number;
name: string;
englishName: string;
moons: number;
mass: number;
vol: number;
density: number;
gravity: number;
aroundPlanet: string;
description: string;

constructor(id: number, name: string, englishName: string, moons: number, mass: number, vol: number, density: number, gravity: number, aroundPlanet: string){

    
    this.id = id;
    this.name = name;
    this.englishName = englishName;
    this.moons = moons;
    this.mass = mass;
    this.vol = vol;
    this.density = density;
    this.gravity = gravity;
    this.aroundPlanet = aroundPlanet;
   
    }

    addDescription(input: string){
this.description = input;

    }
}
