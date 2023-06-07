import { Component, Input } from '@angular/core';
import  {faLinkedin, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {

  iconGit = faGithub;
  iconLink = faLinkedin;
  iconWp = faWhatsapp;
 

  // Variáveis
  option: string;
  tituloResumo: string; 
  resumo: string;
  destaque:string;
  titulo:string;
  subtituloUm:string;
  subtituloDois: string;
  descricao:string;
  tituloCard:string;


  // Default 
  defaultTituloResumo:string = `Quem sou eu?`
  ;
  defaultResumo: string = `My name is Caio Marques, a 21-year-old web developer from Rio de Janeiro, Brazil, and this website is the
    result of about 14 months of study. During these months, i managed to superficially explore a lot of content
    related to development. I also managed to map out the road i have ahead, and i learned that skill alone is not
    enough. I integrated myself into the tech community and have found that many problems come from lack of
    cooperation and communication, ironically, the main reason any large-scale progress is made.
    I intend to be different and exemplary for those who have or have had problems with how dynamic the tech
    market can be.
    My values are respect, objectivity, communication, cooperation, and
    inclusion.
    Artistically, i write poems and texts because i am a developer by nature, and i also like to develop
    philosophies.
    I am not afraid of putting my ego aside to ask for help or making mistakes, but i am not reckless too,
    always seeking to recognize and expand my limits through self-education.` 
  defaultDestaque:string = `Textos em Destaque`; 
  defaultTitulo: string = `Bem-vindx ao `; 
  defaultSubtituloUm:string = `Tecnologia e Arte`;
  defaultSubtituloDois:string = `Artigos, poesia, guias e reviews`;
  defaultDescricao:string = `Desenvolvedor, dono do The Angular Way, tatuador e escritor.`
  defaultTituloCard:string = `Desenvolvedor Fullstack`



  



  ngOnInit(): void {
    this.tituloResumo = this.defaultTituloResumo
    ;
    this.resumo = this.defaultResumo;
    this.destaque = this.defaultDestaque; 
    this.titulo = this.defaultTitulo; 
    this.subtituloUm = this.defaultSubtituloUm;
    this.subtituloDois = this.defaultSubtituloDois;
    this.descricao = this.defaultDescricao;
    this.tituloCard = this.defaultTituloCard

  }
  changeText(): void {
    switch (this.option) {
      case 'option2':
        // English option
        this.tituloResumo = `Who am I?`
        ;
        this.resumo = `My name is Caio Marques, a 21-year-old web developer from Rio de Janeiro, Brazil, and this website is the
        result of about 14 months of study. During these months, i managed to superficially explore a lot of content
        related to development. I also managed to map out the road i have ahead, and i learned that skill alone is not
        enough. I integrated myself into the tech community and have found that many problems come from lack of
        cooperation and communication, ironically, the main reason any large-scale progress is made.
        I intend to be different and exemplary for those who have or have had problems with how dynamic the tech
        market can be.
        My values are respect, objectivity, communication, cooperation, and
        inclusion.
        Artistically, i write poems and texts because i am a developer by nature, and i also like to develop
        philosophies.
        I am not afraid of putting my ego aside to ask for help or making mistakes, but i am not reckless too,
        always seeking to recognize and expand my limits through self-education.`;
        this.destaque = `Featured Texts`; 
        this.titulo = `Welcome to `; 
        this.subtituloUm = `Technology and Arts`;
        this.subtituloDois = `Articles, poetry, guides and reviews`;
        this.descricao = `Developer, owner of The Angular Way, tattoo artist and writer.`
        this.tituloCard = `Fullstack Developer`

        break;
        // Portuguese Option
      case 'option1':
        this.tituloResumo = `Quem sou eu?`
        ;
        this.resumo = `Meu nome é Caio Marques, um desenvolvedor web de 21 anos do Rio de Janeiro, Brasil, e este site é o
        resultado de cerca de 14 meses de estudo. Nesses meses, consegui explorar superficialmente muito conteúdo
        relacionados ao desenvolvimento. Também consegui traçar o caminho que tenho pela frente e aprendi que habilidade sozinha não é
        suficiente. Eu me integrei à comunidade de tecnologia e descobri que muitos problemas vêm da falta de
        cooperação e comunicação, ironicamente, são a principal razão pela qual qualquer progresso em larga escala é feito.
        Pretendo ser diferente e exemplar para quem tem ou já teve problemas com a dinâmica da tecnologia
        mercado pode ser.
        Meus valores são respeito, objetividade, comunicação, cooperação e
        inclusão.
        Artisticamente, escrevo poemas e textos porque sou um desenvolvedor por natureza, e também gosto de desenvolver
        filosofias.
        Não tenho medo de deixar meu ego de lado para pedir ajuda ou cometer erros, mas também não sou imprudente,
        sempre buscando reconhecer e expandir meus limites através da autoeducação.`;
        this.destaque = `Textos em Destaque`; 
        this.titulo = `Bem-vindx ao `; 
        this.subtituloUm = `Tecnologia e Arte`;
        this.subtituloDois = `Artigos, poesia, guias e reviews`;
        this.descricao = `Desenvolvedor, dono do The Angular Way, tatuador e escritor.`
        this.tituloCard = `Desenvolvedor Fullstack`
   
        break;
      
        

  }


  
  }}
