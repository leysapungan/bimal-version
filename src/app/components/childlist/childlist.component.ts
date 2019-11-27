import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-childlist',
  templateUrl: './childlist.component.html',
  styleUrls: ['./childlist.component.css']
})
export class ChildlistComponent implements OnInit {
  public subMessage ="";
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

      },
   
  ]}
  addTodo(): void{
    if (this.todoTitle.trim().length==0){
      return;
    }
    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      completed:false,
      editing: false
    })
    this.todoTitle ='';
    this.idForTodo++;
  };
  deleteTodo(id:number): void{
    this.todos =this.todos.filter(todo => todo.id !== id);

  };
  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title
    todo.editing =true;
  }
  doneEdit(todo: Todo): void{
    if(todo.title.trim().length === 0){
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }
  cancelEdit(todo: Todo): void{
  
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }
  remaining(): number{
    return this.todos.filter(todo => !todo.completed).length;
  }



};
interface Todo {
  id : number,
  title: string,
  completed: boolean,
  editing: boolean

};
