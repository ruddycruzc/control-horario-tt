import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css'
})
export class FeatureCard {

  @Input()
  title = '';

  @Input()
  image = '';

}