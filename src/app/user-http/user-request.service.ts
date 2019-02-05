import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user'
import { environment } from 'src/environments/environment';


@Injectable()
export class UserRequestService {

  user: User;
  constructor(private http: HttpClient) {
    this.user = new User("", "", 0, 0, 0, "", "", new Date());
  }

  userRequest(userName) {

    var userInput = userName;


    interface ApiResponse {
      avatar_url: string,
      name: string,
      public_repos: number,
      followers: number,
      following: number,
      html_url: string

    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + userInput).toPromise().then(response => {

        this.user.avatar_url = response.avatar_url
        this.user.name = response.name
        this.user.public_repos = response.public_repos
        this.user.followers = response.followers
        this.user.followers = response.followers
        this.user.html_url = response.html_url


        resolve()
      },
        error => {
          this.user.avatar_url = ""
          this.user.name = "nuriath"
          this.user.public_repos = 50
          this.user.followers = 80
          this.user.following = 50

          reject(error)
        }
      )
    })

    return promise
  }

}

