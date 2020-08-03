import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserApiService} from '../service/userapi.service';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../model/iuser';

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
              private fb:FormBuilder) {
    this.editUserId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(+this.editUserId).subscribe(data=>{this.editUser = data},
      error => {alert("Error when get edit user")})
    // console.log(this.editUserId);
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
    this.userService.getUserById(+this.editUserId).subscribe((data:IUser)=>{this.editUserForm.patchValue(data)})
  }

  editUserById() {

  }
}
