import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;

  readonly navigationItems = [
    { label: 'Objetivo', target: 'Objetivos' },
    { label: 'Ventajas', target: 'Ventajas' },
    { label: 'Características', target: 'Características' },
    { label: 'Contacto', target: 'contacto' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
