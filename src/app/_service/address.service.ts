import { forwardRef, Injectable } from '@angular/core';
import { Address } from '../_models/address.models';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  addresses:Address []=
  [
    {id:1,city:"Alex",street:50,building:404,intercom:"NA",floor:"ffffff",detailed_address:"dddddd"},
    {id:2,city:"Alex",street:50,building:404,intercom:"NA",floor:"ffffff",detailed_address:"dddddd"},
    {id:3,city:"Alex",street:50,building:404,intercom:"NA",floor:"ffffff",detailed_address:"dddddd"},
    {id:4,city:"Alex",street:50,building:404,intercom:"NA",floor:"ffffff",detailed_address:"dddddd"},
    {id:5,city:"Alex",street:50,building:404,intercom:"NA",floor:"ffffff",detailed_address:"dddddd"},
    {id:6,city:"Alex",street:50,building:404,intercom:"NA",floor:"ffffff",detailed_address:"dddddd"},

  ];

  getAllAdresses(){
    return this.addresses;
  }
}

