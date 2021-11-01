import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
  isHidden: boolean = true;
  posts: any = this.httpService.getData(this.url);
  constructor(private httpService: HttpService) {}
  ngOnInit() {
    //this.getPosts();
    console.log(this.posts);
  }
  handleEvent(event: any) {
    console.log(event);
  }
  async getPosts() {}
}
