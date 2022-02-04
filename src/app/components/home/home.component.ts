import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images: any[] = [
    'https://images-na.ssl-images-amazon.com/images/I/51DR2KzeGBL._AC_.jpg',
    'https://phrase.com/blog/content/uploads/2016/09/javascript-localization.png',
    'https://m.media-amazon.com/images/I/5160dwNeqSL._AC_SY1000_.jpg',
    'https://blog.logrocket.com/wp-content/uploads/2022/01/mapped-types-typescript.png',
    'https://images.indepth.dev/images/2021/03/Global-objects-in-Angular.jpeg',
    'https://media.bitdegree.org/storage/media/images/2018/10/The-Most-Essential-React-Interview-Questions.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}

  postMessage(form: NgForm) {}
}
