import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  template: require('./app.html')
})
export class AppComponent implements OnInit {
  public slugified = 'This is not slugified';

  constructor() {}

  ngOnInit() {}

}
