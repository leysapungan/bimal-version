import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AutofocusModule } from 'angular-autofocus-fix';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { ChildlistComponent } from './components/childlist/childlist.component';
import { ChildListService } from './components/childlist/childlist.service';
import { SubtaskComponent } from './components/subtask/subtask.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ChildlistComponent,
    SubtaskComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AutofocusModule
  ],
  providers: [ChildListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
