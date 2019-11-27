import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {
  @Output() public subEvent = new EventEmitter();

  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  beforeEditCache: string;
  
  constructor() { }

  ngOnInit() {
    this.beforeEditCache='';
    this.idForTodo = 4;
    this.todoTitle ='';
    this.todos=[
      {
      'id':4,
      'title':'Angular report',
      'completed': false,
      'editing':false,

      },]
   
  }

}
interface Todo {
  id : number,
  title: string,
  completed: boolean,
  editing: boolean

};
