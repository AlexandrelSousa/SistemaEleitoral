import { Component } from '@angular/core';
import { UsersGetComponent } from './users-get/users-get.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor(private usersGetService: UsersGetComponent)
  {}

  obterTodosUsuarios(){
    this.usersGetService.obterTodosUsuarios()
    .then(users => console.log(users))
    .catch(error => console.error(error));
  }
}
