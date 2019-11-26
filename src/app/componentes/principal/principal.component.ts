import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent implements OnInit {
  array = [1, 2, 3, 4];
  effect = 'scrollx';

  slides = [
    {image: '../../../assets/1.png'},
    {image: '../../../assets/2.png'},
    {image: '../../../assets/3.png'}
  ];

  // array = ['../../../assets/1.png', '../../../assets/2.png', '../../../assets/3.png'];
  constructor() { }

  ngOnInit() {
  }

}
