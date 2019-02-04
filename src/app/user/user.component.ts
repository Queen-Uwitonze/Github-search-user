import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    interface ApiResponse {
      gravatar_id: string
      public_repos: number;
      followers: number;
      following: number;
      repos_url: String;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/Queen-Uwitonze?access_token=becce8f4f7ff9cfda001a302de29373301c49746 ").subscribe(data => {
      this.user = new User(data.gravatar_id, data.public_repos, data.followers, data.following, data.repos_url)
    })
  }

}
