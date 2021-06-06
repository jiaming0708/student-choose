import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @Output('onUploaded') onUploaded = new EventEmitter<string[]>();

  onClickUpload() {
    this.fileInput.nativeElement.click();
  }

  onUpload(event: any) {
    const file = event.target.files[0];
    if (!file.name.endsWith('.csv')) {
      this.snackBar.open('請上傳csv檔案!');
      return;
    }

    this.parserCSVFile(file);
  }

  private parserCSVFile(file: File) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const csvData = reader.result;
      const csvRecordsArray = this.csvStringToArray((csvData as string).trim());
      this.onUploaded.emit(csvRecordsArray);
    };

    reader.onerror = () => {
      this.snackBar.open('解析檔案失敗!');
    };
  }
  private csvStringToArray(csvDataString: string) {
    // get each row in the file
    const rows = csvDataString.split(/\r\n|\n/);
    // get the first column each row
    const result = rows.map(p => p.split(',')[0]);
    return result;
  }

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
