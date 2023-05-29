import { Component } from '@angular/core';

@Component({
  selector: 'app-textos',
  templateUrl: './textos.component.html',
  styleUrls: ['./textos.component.css']
})
export class TextosComponent {
  dataTable: any[] = [];
  
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
