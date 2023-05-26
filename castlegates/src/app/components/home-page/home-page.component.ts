import { Component } from '@angular/core';
import  {faLinkedin, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  dataTable: any[] = [];
  iconGit = faGithub;
  iconLink = faLinkedin;
  iconWp = faWhatsapp;


  constructor(){
  this.dataTable = [
    { text: 'Lorem ipsum', date: '2023-05-25', tag: 'Tag1' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Consectetur adipiscing elit', date: '2023-05-23', tag: 'Tag3' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
    { text: 'Dolor sit amet', date: '2023-05-24', tag: 'Tag2' },
  ];
}
}
