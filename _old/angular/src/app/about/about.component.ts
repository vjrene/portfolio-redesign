import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    const frame = document.getElementsByClassName('frame-svg')[0];
    const router = document.getElementsByClassName('router-container')[0];
    body.classList.add('no-margin');
    frame.classList.add('top-level');
    router.classList.add('no-max-width');
  }

  // warning but it works?
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    const frame = document.getElementsByClassName('frame-svg')[0];
    const router = document.getElementsByClassName('router-container')[0];
    body.classList.remove("no-margin");
    frame.classList.remove("top-level");
    router.classList.remove("no-max-width");
  }

}
