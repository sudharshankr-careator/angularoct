import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
  test = new FormControl('mohan');
  constructor(private httpService: HttpService, private route: Router) {}
  ngOnInit() {
    //this.getPosts();
    console.log(this.posts);
  }
  handleEvent(event: any) {
    console.log(event);
  }
  async getPosts() {}
  goFour(url: string = '/four') {
    this.route.navigateByUrl(url);
  }
  modifyForm() {
    this.test.setValue('krishna');
  }
}
