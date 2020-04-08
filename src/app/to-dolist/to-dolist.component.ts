import { Component, OnInit } from '@angular/core';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.css']
})
export class ToDOListComponent implements OnInit {
  public inputEvent: string;
  public toDoList: any[] = [];
  public searchEvent: string;

  constructor(public storage: StorageService) {

  }

  ngOnInit(): void {
    const searchList = this.storage.get('searchList');
    if (searchList) {
      this.toDoList = searchList;
    }
  }

  addEvent() {
    console.log(this.inputEvent);
    // tslint:disable-next-line:triple-equals
    if (this.toDoList.indexOf(this.inputEvent) == -1) {
      this.toDoList.push(this.inputEvent);
      this.storage.set('searchList', this.toDoList);
    }
    this.inputEvent = '';
  }

  deleteEvent(key) {
    this.toDoList.splice(key, 1);
    this.storage.set('searchList', this.toDoList);
  }
}
