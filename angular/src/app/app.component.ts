import { HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  location: Location;
  s = 'hello this is test';

  openMenu() {
    console.log(this.s);
  }
  constructor(location: Location) {
    this.location = location;
  }

}
