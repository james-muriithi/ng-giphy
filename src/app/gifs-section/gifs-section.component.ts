import { GiphyServiceService } from './../giphy-service.service';
import { Component, OnInit } from '@angular/core';
import { Gif } from '../gif.model';

@Component({
  selector: 'app-gifs-section',
  templateUrl: './gifs-section.component.html',
  styleUrls: ['./gifs-section.component.scss']
})
export class GifsSectionComponent implements OnInit {

  gifs!:Gif[];

  offset: number = 0;

  loading: Boolean = false;

  constructor(private giphyService: GiphyServiceService) { 

  }

  ngOnInit(): void {
    this.loading = true;
    this.giphyService.getGifs().subscribe((gifs) => {
      this.gifs = gifs.data;  
      this.loading = false;    
    })
  }

  loadMore(){
    this.offset++;
    this.loading = true;
    this.giphyService.getGifs(20, this.offset).subscribe(gifs => { 
      this.gifs.push(...gifs.data);
      console.log(this.gifs);this.loading= false;
      
    })
  }

}
