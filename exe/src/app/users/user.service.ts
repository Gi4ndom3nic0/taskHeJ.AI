import { Injectable } from "@angular/core";

@Injectable()

export class UserService{
  getUsers(){
    return [
      {
        name: 'Lando',
        surname: 'Buzzanca',
        age: 28,
        location: 'Aquino'
      },
      {
        name: 'Marco',
        surname: 'Roschi',
        age: 29,
        location: 'Asti'
      },{
        name: 'Paolo',
        surname: 'Franchi',
        age: 30,
        location: 'Castrocielo'
      },
    ]
  }
}
