import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dick-roll',
  templateUrl: './dick-roll.component.html',
  styleUrls: ['./dick-roll.component.scss']
})
export class DickRollComponent implements OnInit {
  @Input() data!: string[];
  onStartRoll() {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
