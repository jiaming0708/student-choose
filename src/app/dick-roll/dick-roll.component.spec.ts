import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DickRollComponent } from './dick-roll.component';

describe('DickRollComponent', () => {
  let component: DickRollComponent;
  let fixture: ComponentFixture<DickRollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DickRollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DickRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
