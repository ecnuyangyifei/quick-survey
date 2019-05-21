import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private httpclient: HttpClient) { }

  ngOnInit() {
  }

  submit(data) {
    console.log(data)
    this.httpclient.post('/submit', data)
      .subscribe(_ => {})
  }

}
