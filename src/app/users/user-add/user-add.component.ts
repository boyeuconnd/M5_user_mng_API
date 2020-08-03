import { Component, OnInit } from '@angular/core';
import {GroupApiService} from '../service/groupapi.service';
import {IGroup} from '../model/igroup';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IUser} from '../model/iuser';
import {UserApiService} from '../service/userapi.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  groups:IGroup[];
  newUserForm:FormGroup;

  constructor(private groupService: GroupApiService,
              private fb:FormBuilder,
              private userService: UserApiService) { }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe((data)=>{
      this.groups=data;
      console.log(this.groups);
    })
    this.newUserForm = this.fb.group({
      name:[''],
      email:[''],
      groups:[3]
    })
  }

  createNewUser() {
    let newUser:IUser = this.newUserForm.value;
    newUser.groups = this.getGroupById(this.newUserForm.value.groups);
    this.userService.createUser(newUser).subscribe((data)=>{
      console.log(data)
    },error1 => {alert("Error when create new User")});
    console.log(newUser);
  }

  getGroupById(id:number):IGroup{
    for(let i=0;i<this.groups.length;i++){
      if(this.groups[i].id == id){
        return this.groups[i];
      }
    }
  }
}
