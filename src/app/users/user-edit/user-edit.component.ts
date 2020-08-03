import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserApiService} from '../service/userapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../model/iuser';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  editUserForm:FormGroup;
  editUserId:string;
  editUser: IUser;

  constructor(private userService: UserApiService,
              private activatedRoute: ActivatedRoute,
              private fb:FormBuilder,
              private route:Router) {
    this.editUserId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(+this.editUserId).subscribe(data=>{this.editUser = data},
      error => {alert("Error when get edit user")})
  }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      id:[''],
      name:[''],
      email:[''],
      groups: ['']
    });
    this.findUserById();
  }

  findUserById(){
    this.userService.getUserById(+this.editUserId).subscribe((data:IUser)=>{
      this.editUserForm.patchValue(data)});

  }

  update() {
    let bodyData:IUser = this.editUserForm.value;
    this.userService.updateUserById(+this.editUserId,bodyData).subscribe((data:IUser)=>{console.log(data)})
    this.route.navigate(['user']);

  }

  // get name(){
  //   return this.editUserForm.get('name')
  // }
  // get email(){
  //   return this.editUserForm.get('email');
  // }
}
