import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title='Provaci';
  @Input('user-data') user;

  constructor() { }

  ngOnInit() {
  }
  deleteUser(user){
    alert(user.name)
  }
  editUser(user){
    alert("dovrebbe uscire la form ma l'Event Emitter non ricordo come farlo")
  }

}
