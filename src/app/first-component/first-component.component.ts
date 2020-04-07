import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  public showOrHide: boolean;
  constructor() { }

  ngOnInit(): void {
    this.showOrHide = true;
  }

  public changeCondition() {
    this.showOrHide = !this.showOrHide;
  }

}
