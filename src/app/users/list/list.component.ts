import { Component, OnInit } from '@angular/core';

import {UserApiService} from '../service/userapi.service';
import {IUser} from '../model/iuser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userService: UserApiService) { }

  userList :IUser[];

  ngOnInit(): void {
    this.userService.getUserList().subscribe((data:any)=>{
      this.userList = data;
      console.log(this.userList)
    });

  }


}
