import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../interfaces/response/UserResponse';
import { User } from '../../interfaces/user/User';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public text:string = "";
  listUser:User[] = [];
  users:UserResponse[] = [];
  user:User = {
    email:'',
    password:''
  }

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.text =  this.homeService.text;
    this.getUsers();
  }

  private getUsers():void {
    this.homeService.getUsers().subscribe(resp => {
      this.users = resp;
    });

  }

  addUser(){
    const { email, password } = this.user
    if(this.user){
      this.listUser = [...this.listUser, { email, password }];
      this.clearState();
    }

  }

  private clearState():void {
    this.user = {
      email:'',
      password:''
    };
  }

}
