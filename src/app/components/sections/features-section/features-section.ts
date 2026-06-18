import { Component }
from '@angular/core';

import {
  FeatureCard
}
from '../../ui/cards/feature-card/feature-card';

import {
  FEATURES
}
from '../../../data/jornada/features.data';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [
    FeatureCard
  ],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css'
})
export class FeaturesSection {

  readonly features =
    FEATURES;

}