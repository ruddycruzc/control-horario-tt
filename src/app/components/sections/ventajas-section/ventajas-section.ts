import { Component } from '@angular/core';
import { ADVANTAGES } from '../../../data/jornada/advantage.data';
import { ADVANTAGES_CONTENT } from '../../../data/jornada/advantages-content.data';
import { AccordionItem } from '../../ui/accordion/accordion-item/accordion-item';
@Component({
  selector: 'app-ventajas-section',
  imports: [AccordionItem],
  templateUrl: './ventajas-section.html',
  styleUrl: './ventajas-section.css',
})
export class VentajasSection {
  readonly content =
  ADVANTAGES_CONTENT;

readonly advantages =
  ADVANTAGES;
}
