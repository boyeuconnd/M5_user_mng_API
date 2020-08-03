import {IGroup} from './igroup';

export interface IUser {
  id: number;
  name: string;
  email:string;
  groups? : IGroup
}
