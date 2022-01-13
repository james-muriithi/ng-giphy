import { FixedHeightImage } from './../fixed-height-image';
import { Gif } from './../gif.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss']
})
export class GifCardComponent implements OnInit {

  @Input() gif!:Gif;
  gifObject!:FixedHeightImage;

  constructor() { }

  ngOnInit(): void {
    this.gifObject = this.gif.images.fixed_height;
  }
}
