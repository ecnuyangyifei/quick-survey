import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quick-survey';

  constructor(private httpclient: HttpClient) {
  }


  submit(data) {
    console.log(data)
    this.httpclient.post('/submit', data)
      .subscribe(_ => {})
  }
}
