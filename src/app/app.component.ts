import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';

  changeTitle() {
    this.title = this.title === 'assignment2' ? 'newAssignment' : 'assignment2';
  }
}
