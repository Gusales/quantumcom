import { AfterViewInit, Component, Directive, ElementRef } from '@angular/core';

export interface CardItemsInteface {
  cardYear: number
  cardTitle: String
  cardText: string
}

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  standalone: true
})
export class TimelineComponent implements AfterViewInit {
  public cardItems: CardItemsInteface[] = [
    {
      cardYear: 1900,
      cardTitle: "A Quantização da Energia por Max Planck",
      cardText: "Max Planck postula a ideia de quantização da energia, lançando as bases para a mecânica quântica."
    },
    {
      cardYear: 1925,
      cardTitle: "Equação de Onda de Schrödinger",
      cardText: "Erwin Schrödinger formula a equação de onda que descreve o comportamento de sistemas quânticos."
    },
    {
      cardYear: 1927,
      cardTitle: "Mecânica Quântica Matricial de Heisenberg",
      cardText: "Werner Heisenberg desenvolve a teoria da mecânica quântica matricial, proporcionando uma abordagem alternativa à mecânica quântica de Schrödinger."
    },
    {
      cardYear: 1935,
      cardTitle: "Paradoxo EPR: Questionando a Realidade Quântica",
      cardText: "Albert Einstein, Boris Podolsky e Nathan Rosen propõem o Paradoxo EPR, levantando questões fundamentais sobre a natureza da realidade quântica e a interpretação das funções de onda."
    },
    {
      cardYear: 1960,
      cardTitle: "Surgimento dos Qubits: Fundamentos da Computação Quântica",
      cardText: "Surge o conceito de qubit, a unidade básica de informação em computação quântica, permitindo representações de dados baseadas em superposição e entrelaçamento quântico."
    },
    {
      cardYear: 1970,
      cardTitle: "Teoria dos Algoritmos Quânticos",
      cardText: "Desenvolvimento da teoria dos algoritmos quânticos, demonstrando que certos problemas podem ser resolvidos de forma mais eficiente em computadores quânticos do que em computadores clássicos."
    },
    {
      cardYear: 1980,
      cardTitle: "Proposição de Benioff: Simulação de Computadores Clássicos com Sistemas Quânticos",
      cardText: "Paul Benioff propõe a ideia de que sistemas quânticos poderiam ser usados para simular computadores clássicos, introduzindo o conceito inicial da computação quântica."
    },
    {
      cardYear: 1981,
      cardTitle: "Feynman e a Simulação de Sistemas Quânticos",
      cardText: "Richard Feynman propõe a utilização de computadores quânticos para simular sistemas quânticos, destacando o potencial desses dispositivos para resolver problemas da física quântica."
    },
    {
      cardYear: 1985,
      cardTitle: "Estabelecimento das Bases Teóricas por David Deutsch",
      cardText: "David Deutsch estabelece as bases teóricas para os computadores quânticos ao propor um modelo de máquina de Turing quântica, lançando as fundações para a construção de computadores quânticos universais."
    },
    {
      cardYear: 1994,
      cardTitle: "Algoritmo de Shor: Avanço na Criptografia Quântica",
      cardText: "Peter Shor desenvolve o algoritmo de fatoração em tempo polinomial, um marco crucial na computação quântica que tem implicações significativas para a criptografia, desafiando a segurança dos sistemas baseados em fatoração de números inteiros."
    },
    {
      cardYear: 1996,
      cardTitle: "Algoritmo de Busca Quântica de Grover: Eficiência na Busca de Dados",
      cardText: "Lov Grover desenvolve o algoritmo de busca quântica, demonstrando uma eficiência significativamente maior na busca de itens não ordenados em listas não estruturadas em comparação com os algoritmos clássicos equivalentes."
    }
  ]

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const timelineItems = this.elementRef.nativeElement.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const content = entry.target.querySelector('.timeline-content');
        const dot = entry.target.querySelector('.timeline-dot');
        const timelineItem = entry.target;

        if (entry.isIntersecting) {
          content?.classList.add('timeline-appear');
          dot?.classList.add('animate-dot');
          timelineItem?.classList.add('blue-bar');
        }
      });
    });

    timelineItems.forEach((item: Element) => observer.observe(item));
  }
}
