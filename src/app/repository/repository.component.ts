import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class RepositoryComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {



  }

}
