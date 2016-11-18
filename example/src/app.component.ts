import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  template: require('./app.html')
})
export class AppComponent implements OnInit {
  public slugifiedStr = 'This is not slugified';
  public stripStr = '<p>This is a string</p>';
  public truncateStr = 'Sed posuere consectetur est at lobortis. Cras mattis \
  consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. \
  Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est \
  at lobortis.';
  public lowercaseStr = 'this is all lowercase';

  constructor() {}

  ngOnInit() {}

}
