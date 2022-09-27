import { Injectable } from '@angular/core';
import { Package } from '../_models/Package.models';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor() { }

  Packages:Package []=
  [
    {id:1,code:"Shopping_premium",cost:50,tax:404,fees:5,name:"Shopping_premium",description:"Shopping_premium_description",company_type:"Shopping",currency : "dollar"},
    {id:2,code:"Shopping_premium",cost:50,tax:404,fees:5,name:"Shopping_premium",description:"Shopping_premium_description",company_type:"Shopping",currency : "dollar"},

    {id:3,code:"Shopping_premium",cost:50,tax:404,fees:5,name:"Shopping_premium",description:"Shopping_premium_description",company_type:"Shopping",currency : "dollar"},

    {id:4,code:"Shopping_premium",cost:50,tax:404,fees:5,name:"Shopping_premium",description:"Shopping_premium_description",company_type:"Shopping",currency : "dollar"},

    {id:5,code:"Shopping_premium",cost:50,tax:404,fees:5,name:"Shopping_premium",description:"Shopping_premium_description",company_type:"Shopping",currency : "dollar"},

    {id:6,code:"Shopping_premium",cost:50,tax:404,fees:5,name:"Shopping_premium",description:"Shopping_premium_description",company_type:"Shopping",currency : "dollar"},


  ];

  getAllPackages(){
    return this.Packages;
  }
}










