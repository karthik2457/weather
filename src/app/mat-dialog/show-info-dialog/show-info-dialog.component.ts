import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  message : string;
}
@Component({
  selector: 'app-show-info-dialog',
  templateUrl: './show-info-dialog.component.html',
  styleUrls: ['./show-info-dialog.component.scss']
})
export class ShowInfoDialogComponent {
  message:string = ""
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log("data", data)
    if (data['message']) {
      this.message = data.message
      console.log("this.message", this.message)
    }
  }
  

}



