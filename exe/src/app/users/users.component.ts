import { Component } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css',]
})
export class UsersComponent{
  title= 'Chi è il padre di Luke?';
  users=  [];
  constructor(){
    let service = new UserService();
    this.users= service.getUsers();
  }

}
