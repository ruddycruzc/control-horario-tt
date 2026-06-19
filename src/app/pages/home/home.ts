import { Component } from '@angular/core';
import { Navbar } from "../../components/layout/navbar/navbar";
import { HeroJornadaSection } from "../../components/sections/hero-jornada-section/hero-jornada-section";
import { Footer } from "../../components/layout/footer/footer";
import { ObjetivoSection } from "../../components/sections/objetivo-section/objetivo-section";
import { VentajasSection } from '../../components/sections/ventajas-section/ventajas-section';
import { FeaturesSection } from "../../components/sections/features-section/features-section";
import { HelpSection } from "../../components/sections/help-section/help-section";
import { ContactSection } from '../../components/sections/contact-section/contact-section';
@Component({
  selector: 'app-home',
  imports: [HeroJornadaSection, ObjetivoSection, VentajasSection, FeaturesSection, HelpSection, Navbar, Footer, ContactSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
