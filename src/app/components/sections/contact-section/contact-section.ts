import { Component } from '@angular/core';

import { CONTACT_CONTENT } from '../../../data/jornada/contact.data';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css'
})
export class ContactSection {
  readonly content = CONTACT_CONTENT;
}
