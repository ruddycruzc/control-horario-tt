import { Component } from '@angular/core';
import { CtaContent } from '../../../interfaces/final-cta.data';
import { FinalCta } from '../../info-blocks/final-cta/final-cta';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [FinalCta], 
  templateUrl: './final-cta-section.html',
  styleUrl: './final-cta-section.css',
})

  export class FinalCtaSection {
  readonly ctaContent: CtaContent = {
    title: '¡Llegó la hora de empezar!',
    description: 'Crea tu cuenta en pocos minutos y empieza a controlar tu horario.',
    buttonLabel: 'Contactar',
    buttonLink: 'https://tactica-tic-dev.web.app/contact' 
}
  }
