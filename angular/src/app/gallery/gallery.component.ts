import { Component, OnInit } from '@angular/core';
import { MasonryModule } from 'angular2-masonry';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

 bricks = [
    {title: 'Brick 1'},
    {title: 'Brick 2'},
    {title: 'Brick 3'},
    {title: 'Brick 4'},
    {title: 'Brick 5'},
    {title: 'Brick 6'}
  ];

  ngOnInit() {

  }

}
