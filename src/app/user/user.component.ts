import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../user-http/user-request.service'
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserRequestService]
})
export class UserComponent implements OnInit {
  user: User;
  userName = "";

  submitInput() {
    this.userService.userRequest(this.userName);
  }
  constructor(private userService: UserRequestService, ) { }

  ngOnInit() {
    this.user = this.userService.user
    this.userService.userRequest("Queen-Uwitonze");
  }


}
