import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title="Soham";
  count =0;
  myarr = ["c","c++","java"];
  isTrue = true;

  constructor() { }
myfun(){
  ++this.count;
}
  ngOnInit(): void {
  }

}
