import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { HERO_JORNADA_CONTENT } from '../../../data/jornada/hero.data';

@Component({
  selector: 'app-hero-jornada-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-jornada-section.html',
  styleUrl: './hero-jornada-section.css'
})
export class HeroJornadaSection implements OnInit, OnDestroy {
  readonly hero = HERO_JORNADA_CONTENT;
  
  // Mantenemos el nombre 'countdown' que espera tu HTML
  countdown = '15 : 00 : 00';
  typedText = '';
  
  private intervalId?: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startTypingEffect();
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startCountdown(): void {
    const STORAGE_KEY = 'control-jornada-end-date';
    
    let endDate = localStorage.getItem(STORAGE_KEY);
    let endTime = endDate ? Number(endDate) : (Date.now() + 15 * 60 * 1000);
    localStorage.setItem(STORAGE_KEY, endTime.toString());

    this.intervalId = window.setInterval(() => {
      const remaining = endTime - Date.now();
      
      if (remaining <= 0) {
        this.updateDisplay(0, 0, 0);
        return;
      }

      const m = Math.floor(remaining / 60000);
      const s = Math.floor((remaining % 60000) / 1000);
      const ms = Math.floor((remaining % 1000) / 10);

      this.updateDisplay(m, s, ms);
      
      this.cdr.detectChanges();
    }, 100);
  }

  private updateDisplay(m: number, s: number, ms: number): void {
    
    this.countdown = `${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')} : ${ms.toString().padStart(2, '0')}`;
  }

  private startTypingEffect(): void {
    const word = 'ABORAL';
    let index = 0, deleting = false;
    
    const run = () => {
      this.typedText = word.substring(0, index);
      if (!deleting) {
        index++;
        if (index > word.length) { 
          deleting = true; 
          setTimeout(run, 2000); 
          return; 
        }
        setTimeout(run, 180);
      } else {
        index--;
        if (index < 0) { 
          deleting = false; 
          index = 0; 
          setTimeout(run, 400); 
          return; 
        }
        setTimeout(run, 90);
      }
      this.cdr.detectChanges();
    };
    run();
  }
}