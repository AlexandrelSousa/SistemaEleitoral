import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { IUsers } from './iusers';

@Component({
  selector: 'app-users-get',
  templateUrl: './users-get.component.html',
  styleUrls: ['./users-get.component.css']
})
export class UsersGetComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  obterTodosUsuarios(){
    return this.httpClient.get<IUsers>(`${API_PATH}users`).toPromise();
  }

  ngOnInit(): void {
  }

}
