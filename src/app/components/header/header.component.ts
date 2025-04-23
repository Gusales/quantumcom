import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from "../ui/button/button.component";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

interface ArtigosInterface {
  path: string
  name: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, ButtonComponent, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public isModalOpen: boolean = false
  public faIcons = {
    faBars: faBars,
    faXmark: faXmark
  }

  public defaultPath = 'M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7';

  public activePath = 'M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7';

  public artigos: ArtigosInterface[] = [
    {
      path: '#',
      name: 'Portas Lógicas Quânticas',
    },
    {
      path: '#',
      name: 'Linguagem Assembler Quântica',
    },
    {
      path: '#',
      name: 'O Átomo de Fósforo na Computação Quântica',
    },
    {
      path: '#',
      name: 'Prompts de Computação Quântica',
    },
    {
      path: '#',
      name: 'Aplicações Existentes de Computação Quântica',
    },
    {
      path: '#',
      name: 'Cursos e Oportunidades de Estudo em Computação Quântica',
    },
    {
      path: '#',
      name: 'Inteligência Artificial e Computação Quântica',
    },
  ]

  @ViewChild('startAnim', { static: true })
  startAnim!: ElementRef<SVGAnimateElement>;

  @ViewChild('reverseAnim', { static: true })
  reverseAnim!: ElementRef<SVGAnimateElement>;

  public handleToogleModalView() {
    this.isModalOpen = !this.isModalOpen

    if (this.isModalOpen) {
      this.startAnim.nativeElement.beginElement();
    } else {
      this.reverseAnim.nativeElement.beginElement();
    }
  }
}
