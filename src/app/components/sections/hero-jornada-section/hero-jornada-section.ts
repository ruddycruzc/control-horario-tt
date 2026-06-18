import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  HERO_JORNADA_CONTENT
}
from '../../../data/jornada/hero.data';

@Component({
  selector: 'app-hero-jornada-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-jornada-section.html',
  styleUrl: './hero-jornada-section.css'
})
export class HeroJornadaSection
implements OnInit, OnDestroy {

  readonly hero =
    HERO_JORNADA_CONTENT;

  countdown =
    '15 : 00 : 00';

  typedText = '';

  private intervalId?: number;

  ngOnInit(): void {

    this.startTypingEffect();

    this.startCountdown();

  }

  ngOnDestroy(): void {

    if (this.intervalId) {

      clearInterval(
        this.intervalId
      );

    }

  }

  private startCountdown(): void {

    const STORAGE_KEY =
      'control-jornada-end-date';

    let endDate =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!endDate) {

      const newEndDate =
        Date.now() +
        15 * 60 * 1000;

      localStorage.setItem(
        STORAGE_KEY,
        newEndDate.toString()
      );

      endDate =
        newEndDate.toString();

    }

    this.intervalId =
      window.setInterval(() => {

        let remainingTime =
          Number(endDate) -
          Date.now();

        if (remainingTime <= 0) {

          const newEndDate =
            Date.now() +
            15 * 60 * 1000;

          localStorage.setItem(
            STORAGE_KEY,
            newEndDate.toString()
          );

          endDate =
            newEndDate.toString();

          remainingTime =
            Number(endDate) -
            Date.now();

        }

        const minutes =
          Math.floor(
            remainingTime / 60000
          );

        const seconds =
          Math.floor(
            (remainingTime % 60000) /
            1000
          );

        const milliseconds =
          Math.floor(
            (remainingTime % 1000) /
            10
          );

        this.countdown = [
          minutes.toString().padStart(2, '0'),
          seconds.toString().padStart(2, '0'),
          milliseconds.toString().padStart(2, '0')
        ].join(' : ');

      }, 10);

  }

  private startTypingEffect(): void {

    const word =
      'ABORAL';

    let index = 0;

    let deleting =
      false;

    const runTyping = () => {

      if (!deleting) {

        this.typedText =
          word.substring(
            0,
            index
          );

        index++;

        if (
          index >
          word.length
        ) {

          deleting = true;

          setTimeout(
            runTyping,
            2000
          );

          return;
        }

        setTimeout(
          runTyping,
          180
        );

      } else {

        this.typedText =
          word.substring(
            0,
            index
          );

        index--;

        if (index < 0) {

          deleting = false;

          index = 0;

          setTimeout(
            runTyping,
            400
          );

          return;
        }

        setTimeout(
          runTyping,
          90
        );

      }

    };

    runTyping();

  }

}