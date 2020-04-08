import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ToDOListComponent } from './to-dolist/to-dolist.component';
import {FormsModule} from '@angular/forms';
import { SearchPipePipe } from './search-pipe.pipe';

import {StorageService} from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    MyDirectiveDirective,
    SecondComponentComponent,
    ToDOListComponent,
    SearchPipePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
