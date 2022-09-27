import { Injectable } from '@angular/core';
import { Owner } from '../_models/owner.models';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor() { }
  Owneres:Owner []=
  [
    {id:1,name:"Desomy",image:"http://forall.4all.ltd/uploads/image/111/16px/e7e0ced96ef9808b9ae1ca2029f5c5ce690743d2.webp",email:"cotoso3354@orlydns.com",gender:'male',birthdate:"14/11/1996",   mobile:"06541585"},
    {id:2,name:"Desomy",image:"http://forall.4all.ltd/uploads/image/111/16px/e7e0ced96ef9808b9ae1ca2029f5c5ce690743d2.webp",email:"cotoso3354@orlydns.com",gender:'male',birthdate:"14/11/1996",   mobile:"06541585"},
    {id:3,name:"Desomy",image:"http://forall.4all.ltd/uploads/image/111/16px/e7e0ced96ef9808b9ae1ca2029f5c5ce690743d2.webp",email:"cotoso3354@orlydns.com",gender:'male',birthdate:"14/11/1996",   mobile:"06541585"},
    {id:4,name:"Desomy",image:"http://forall.4all.ltd/uploads/image/111/16px/e7e0ced96ef9808b9ae1ca2029f5c5ce690743d2.webp",email:"cotoso3354@orlydns.com",gender:'male',birthdate:"14/11/1996",   mobile:"06541585"},
    {id:5,name:"Desomy",image:"http://forall.4all.ltd/uploads/image/111/16px/e7e0ced96ef9808b9ae1ca2029f5c5ce690743d2.webp",email:"cotoso3354@orlydns.com",gender:'male',birthdate:"14/11/1996",   mobile:"06541585"},

  ];

  getAllOwneres(){
    return this.Owneres;
  }
}

