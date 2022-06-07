import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  formData!: FormGroup;    
   
  constructor(private toastrService: ToastrService,private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl(""),
      password: new FormControl(""),
   });
  }
  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;
    console.log("check",this.formData.valid)

    console.log("username: " + this.userName);
    console.log("password: " + this.password);
    console.log(data);
this.authService.login(this.userName, this.password)
         .subscribe( (data: any) => { 
            console.log("Is Login Success: " + data); 
      
            if(data){
               this.router.navigate(['/welcome']); 
            }else{
              console.log('This will never executed.');
              this.toastrService.error('Message Error!', 'Title Error!');

            }
      });
   }}
