import { Component, OnInit } from '@angular/core';
import { MasonryModule } from 'angular2-masonry';
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  public myOptions: MasonryOptions = {
     resize: true,
    // fitWidth: false,
     percentPosition: true
  };

 bricks = [
    { src: '../assets/projects/001beautiful/01.jpg' },
    { src: '../assets/projects/001beautiful/02.jpg' },
    { src: '../assets/projects/001beautiful/03.jpg' },
    { src: '../assets/projects/001beautiful/04.jpg' },
    { src: '../assets/projects/001beautiful/05.jpg' },
    { src: '../assets/projects/001beautiful/06.jpg' },
    { src: '../assets/projects/001beautiful/07.jpg' },
    { src: '../assets/projects/001beautiful/08.jpg' },
    { src: '../assets/projects/001beautiful/09.jpg' },
    { src: '../assets/projects/001beautiful/10.jpg' },

  ];

  ngOnInit() {

  }

}
