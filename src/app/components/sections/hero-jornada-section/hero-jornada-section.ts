import { Component } from '@angular/core';

import {
  HERO_JORNADA_CONTENT
}
from '../../../data/jornada/hero.data';

@Component({
  selector: 'app-hero-jornada-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-jornada-section.html',
  styleUrl: './hero-jornada-section.css'
})
export class HeroJornadaSection {

  readonly hero =
    HERO_JORNADA_CONTENT;

}