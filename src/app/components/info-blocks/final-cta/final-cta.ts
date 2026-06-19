import { Component, Input } from '@angular/core';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';


export type FinalCtaContent = {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonLink: string;
};

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [AppButtonComponent,],
  templateUrl: './final-cta.html',
  styleUrl: './final-cta.css',
})
export class FinalCta {
  @Input() content!: FinalCtaContent;


  goToLink(): void {
    if (this.content && this.content.buttonLink) {
      window.open(this.content.buttonLink, '_blank');
    }
  }
}
