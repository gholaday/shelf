import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.less']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;

  height = '300px';
  hover = false;

  constructor() { }

  ngOnInit() {

  }

}
