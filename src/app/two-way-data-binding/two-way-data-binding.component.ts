import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Paulo Henrique',
    idade: 26, 
  }
  
  constructor() { }

  ngOnInit() {
  }

}
