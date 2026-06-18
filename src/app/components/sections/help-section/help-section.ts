import { Component }
from '@angular/core';

import {
  HelpCardComponent
}
from '../../ui/cards/help-card/help-card';

import {
  HELP_CARDS
}
from '../../../data/jornada/help-card.data';

import {
  HELP_CONTENT
}
from '../../../data/jornada/help-content.data';

@Component({
  selector: 'app-help-section',
  standalone: true,
  imports: [
    HelpCardComponent
  ],
  templateUrl: './help-section.html',
  styleUrl: './help-section.css'
})
export class HelpSection {

  readonly content =
    HELP_CONTENT;

  readonly cards =
    HELP_CARDS;

}