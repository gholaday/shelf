import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];

  constructor() { }

  ngOnInit() {
    this.books = [
      {
        title: 'Dune',
        author: 'Frank Herbert',
        summary: 'This is a description.'
      },
      {
        title: 'Rainbow Six',
        author: 'Tom Clancy',
        summary: 'This is a description.'
      },
      {
        title: 'The Man in the High Castle',
        author: 'Phillip K. Dick',
        summary: 'This is a description.'
      },
      {
        title: 'The Count of Monte Christo',
        author: 'Alexander Dumas',
        summary: 'This is a description.'
      }
    ];
  }

}
