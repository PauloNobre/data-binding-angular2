import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage: string = 'https://picsum.photos/200/300';

  constructor() { }

  ngOnInit() {
  }

  getValor(){
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
}
