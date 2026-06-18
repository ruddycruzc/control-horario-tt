import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  templateUrl: './accordion-item.html',
  styleUrl: './accordion-item.css'
})
export class AccordionItem {

  @Input()
  title = '';

  @Input()
  content = '';

  isOpen = false;

  toggle(): void {

    this.isOpen =
      !this.isOpen;

  }

}