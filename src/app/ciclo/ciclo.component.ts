import { Component, OnInit, OnDestroy, DoCheck, AfterContentInit, OnChanges, AfterViewInit, AfterContentChecked, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
}) 
export class CicloComponent implements 
OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
   }

   ngOnChanges() {
    this.log('ngOnChanges')
  }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngDoCheck(): void {
    this.log('ngDoCheck')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    this.log('ngOnDestroy')
  }

  private log(hook: string) {
    console.log(hook);
  }
}
