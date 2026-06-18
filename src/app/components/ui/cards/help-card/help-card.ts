import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-help-card',
  standalone: true,
  imports: [],
  templateUrl: './help-card.html',
  styleUrl: './help-card.css'
})
export class HelpCardComponent {

  @Input()
  title = '';

  @Input()
  description = '';

  @Input()
  image = '';

}