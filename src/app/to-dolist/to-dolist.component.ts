import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.css']
})
export class ToDOListComponent implements OnInit {
  public inputEvent: string;
  public toDoList: any[] = [];
  public searchEvent: string;

  constructor() { }

  ngOnInit(): void {
  }

  addEvent() {
    console.log(this.inputEvent);
    // tslint:disable-next-line:triple-equals
    if (this.toDoList.indexOf(this.inputEvent) == -1) {
      this.toDoList.push(this.inputEvent);
    }
    this.inputEvent = '';
  }

  deleteEvent(key) {
    this.toDoList.splice(key, 1);
  }
}
