import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-assignment',
  templateUrl: './binding-assignment.component.html',
  styleUrls: ['./binding-assignment.component.css']
})
export class BindingAssignmentComponent implements OnInit {
  userName = '';
  allowReset = false;
  constructor() {
    if (this.userName !== '') {
      this.allowReset = true;
    }
       }
      onReset() {
     this.userName = '';
   }
   ngOnInit() {
  }

}
