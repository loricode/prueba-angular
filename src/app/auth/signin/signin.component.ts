import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  img:string = "../../assets/images/img1.jpg";

  authForm =  this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  public signIn():void{
    console.log(this.authForm)
  }

}
