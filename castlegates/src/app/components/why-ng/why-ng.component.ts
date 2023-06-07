import { Component } from '@angular/core';

@Component({
  selector: 'app-why-ng',
  templateUrl: './why-ng.component.html',
  styleUrls: ['./why-ng.component.css']
})
export class WhyNgComponent {
  
  option: string;
  text: string;
  text2: string;
  textCel:string; 
  textContato: string;


  default: string = `I was guided to explore Angular by my stepfather, who focused his senior experience on leading me to a more productive beginning of studies, which perhaps was the main reason for me to become more quickly familiarized with the mechanics of this framework.
  My curious and self-taught attitude even led me to explore further the scopes of development, I have certifications in Java, Django, PHP and some other technologies that I wanted to make available in my knowledge mosaic in order to have the slightest notion and experience.
  However, I believe that Angular is my "at home" because of the intimacy I have with the structure and pragmatism of the framework.`;
  defaultText2: string = `Why `
  defaultTextCel: string = `Cellphone`
  defaultTextContato: string =`Contact`

  ngOnInit(): void {
    this.text = this.default;
    this.text2 = this.defaultText2
    this.textCel= this.defaultTextCel
    this.textContato = this.defaultTextContato

  }
  changeText(): void {
    switch (this.option) {
      case 'option2':
        this.text = `Fui orientado a explorar o Angular pelo meu padrasto, que concentrou sua experiência de sênior em me conduzir a um início de estudos mais produtivo, o que talvez tenha sido o principal motivo para eu me familiarizar mais rapidamente com as mecânicas deste framework.
        Minha postura curiosa e autodidata ainda me levou a explorar mais os escopos do desenvolvimento, possuo certificações em Java, Django, PHP entre algumas outras tecnologias que eu quis disponibilizar no meu mosaico de conhecimento para poder ter a minima noção e experiência.
        Entretando, acredito que o Angular seja meu "em casa" pela intimidade que possuo com a estrutura e o pragmatismo do framework.`;
        this.text2 = `Por que o `
        this.textCel= `Celular`
        this.textContato = `Contato`
        break;
      case 'option1':
        this.text = `I was guided to explore Angular by my stepfather, who focused his senior experience on leading me to a more productive beginning of studies, which perhaps was the main reason for me to become more quickly familiarized with the mechanics of this framework.
        My curious and self-taught attitude even led me to explore further the scopes of development, I have certifications in Java, Django, PHP and some other technologies that I wanted to make available in my knowledge mosaic in order to have the slightest notion and experience.
        However, I believe that Angular is my "at home" because of the intimacy I have with the structure and pragmatism of the framework.`;
        this.text2= `Why `
        this.textCel= `Cellphone`
        this.textContato = `Contact`
        break;
      default:
        this.text = this.text;
        break;
    }
  }
  

}
