import { Component, OnInit } from '@angular/core';
import { FlexAlignDirective } from '@angular/flex-layout';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-hobbies-page',
  templateUrl: './hobbies-page.component.html',
  styleUrls: ['./hobbies-page.component.css']
})
export class HobbiesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      700: {
        items: 3
      },
    },
    nav: true
  }
}
