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
  uploadData!: string[];

  onUploaded(data: string[]) {
    this.uploadData = data;
  }

  changeStep(newStep: WorkingStep) {
    this.currentStep = newStep;
  }
}
