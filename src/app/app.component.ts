import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tag = {
    framework: "ng-container",
    category: "ng-template"
  };
  list = [
    { id: 1, name: "Angular" },
    { id: 2, name: "React" }
  ];

  // list: any[] = [];

  // numbers=[1,2,3,4,5];

  // products=[
  //   {name:'mobile'},
  //   {name:'tv'},
  //   {name:'laptop'}
  // ]

  // bevrages:{name:string}|null=null;

  // bevrages=[
  //   {name:'coke'}
  // ]
}
