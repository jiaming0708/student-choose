import { Component } from '@angular/core';
import { WorkingStep } from './models/working-step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  WorkingStep = WorkingStep;
  currentStep = WorkingStep.Upload;

  onUploaded(event: string[]) {
    console.log('123', event);
  }

  changeStep(newStep: WorkingStep) {
    this.currentStep = newStep;
  }
}
