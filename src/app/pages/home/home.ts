import { Component } from '@angular/core';
import { Navbar } from "../../components/layout/navbar/navbar";
import { HeroJornadaSection } from "../../components/sections/hero-jornada-section/hero-jornada-section";
import { Footer } from "../../components/layout/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, HeroJornadaSection, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
