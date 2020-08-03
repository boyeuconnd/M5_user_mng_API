import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {UserApiService} from '../service/userapi.service';
import {IUser} from '../model/iuser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: Router) {

  }

  @Input()
  userList :IUser[];

  @Output()
  deleteUserId = new EventEmitter<number>();

  @Output()
  editUserId = new EventEmitter<number>();

  ngOnInit(): void {
  }


  delete(id:number){
    this.deleteUserId.emit(id);

  }

}
