import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-basic',
  templateUrl: './super-basic.component.html',
  styleUrls: ['./super-basic.component.css']
})
export class SuperBasicComponent implements OnInit {

  word = 'Tacos';
  constructor() { }

  ngOnInit() {
  }

  makeUpper() {
    this.word = this.word.toUpperCase();
  }

}
