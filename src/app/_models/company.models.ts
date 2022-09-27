import { Owner } from './owner.models';
import { Address } from "./address.models";
import { Package } from "./Package.models";
export interface Company {
  [x: string]: any;
  id?: number;
  name:string;
  description:string;
  img1:string;
  img2:string;
  social_link:string;
  email:string;
  hotline:string;
  review:number;
owner:Owner;
address:Address;
package:Package;
}
