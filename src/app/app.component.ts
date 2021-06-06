import { AfterViewInit, Component, ElementRef, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  onUploaded(event: string[]) {
    console.log('123', event);
  }

  ngAfterViewInit() {
  }
}
