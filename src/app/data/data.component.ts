import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  dataSet: any[]
  constructor(private httpclient: HttpClient) { }

  ngOnInit() {
    this.httpclient.get('/load')
      .subscribe(dataSet => this.dataSet = dataSet as any[])
  }

}
