import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  template:`
  <img [src]="imageUrl | default:'https://emoji.beeimg.com/😃'"/>
 `,
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageUrl: string = "";

}
