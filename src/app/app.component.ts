import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular oct pra';
  objvalue = {
    fname: 'mohan',
    lname: 'krishna',
  };
  today = new Date();
  user = {
    name: 'mohan1',
    age: 23,
    id: 1,
  };
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpService: HttpService) {}

  handleEvent(event: any) {
    console.log(event);
  }
}
