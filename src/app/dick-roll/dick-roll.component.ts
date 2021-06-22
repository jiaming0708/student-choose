import { Component, Input, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { take, tap, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-dick-roll',
  templateUrl: './dick-roll.component.html',
  styleUrls: ['./dick-roll.component.scss']
})
export class DickRollComponent implements OnInit {
  @Input() data!: string[];
  radomPosition: boolean[] = [];
  pickCount = 1;
  get totalCount(): number {
    return this.data.length;
  }

  onStartRoll() {
    interval(100).pipe(
      take(7),
    ).subscribe(() => {
      this.radomPosition = Array(this.totalCount).fill(false);
      for (let i = 0; i < this.pickCount; i++) {
        const index = this.randomBetween(0, this.totalCount);
        this.radomPosition[index] = true;
      }
    }, () => { }, () => {
      while (this.radomPosition.filter(p => !!p).length !== this.pickCount) {
        const index = this.randomBetween(0, this.totalCount);
        this.radomPosition[index] = true;
      }
    });
  }

  randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
