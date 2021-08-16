import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Back Window'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
