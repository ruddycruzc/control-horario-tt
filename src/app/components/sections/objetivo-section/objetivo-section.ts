import { Component } from '@angular/core';

import {OBJETIVO_CONTENT}from '../../../data/jornada/objetivo.data';
import { ADVANTAGES } from '../../../data/jornada/advantage.data';

@Component({
  selector: 'app-objetivo-section',
  standalone: true,
  imports: [],
  templateUrl: './objetivo-section.html',
  styleUrl: './objetivo-section.css'
})
export class ObjetivoSection {

  readonly content =
    OBJETIVO_CONTENT;

readonly advantages =
  ADVANTAGES;
}