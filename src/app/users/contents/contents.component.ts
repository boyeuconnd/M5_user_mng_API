import { Component, OnInit } from '@angular/core';
import {UserApiService} from '../service/userapi.service';
import {IUser} from '../model/iuser';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  constructor(private userService:UserApiService) { }

  userList :IUser[];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): IUser[] {
    this.userService.getUserList().subscribe((data:any)=>{
      this.userList = data;
      console.log(data);
      console.log(this.userList);
    });
    return this.userList;

  }

  delete(event){
    let deleteUserId:number = event;
    console.log(deleteUserId);
    if(confirm("Bạn có thực sự muốn xóa?")){
      this.userService.deleteById(deleteUserId).subscribe(
        next =>{this.userList = this.getAll();
        },
        error => {
          alert("error when delete user")
        }
      );
    }
  }


}
