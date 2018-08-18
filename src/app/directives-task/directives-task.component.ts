import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-task',
  templateUrl: './directives-task.component.html',
  styleUrls: ['./directives-task.component.css']
})
export class DirectivesTaskComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
  ngOnInit() {
  }

}
