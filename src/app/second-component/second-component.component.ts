import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  public message: any;
  @Input('title') title: any;
  constructor() {
    console.log('This is constructor');
    this.message = 'Hello World';
  }

  ngOnInit(): void {
    console.log('This is ngOnInit');
  }

  ngAfterContentChecked(): void {
    console.log('This is ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('This is ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('This is ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('This is ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('This is ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('This is ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('This is ngOnDestroy');
  }

  public changeMessage() {
    this.message =  this.message === 'Message has been changed' ? 'HelloWord' : 'Message has been changed';
  }
}
