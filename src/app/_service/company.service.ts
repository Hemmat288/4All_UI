import { Injectable } from '@angular/core';
import { Company } from '../_models/company.models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }
  Companies: Company[] = [

    {
    id: 11,
    name: "Amazon",
    description: "Amazon company Amazon",

    img1: `../../../assets/Assets/Brands/amazon.PNG`,
    img2: "https://picsum.photos/18/300",
    social_link: "cghh@amazon.com",
    email: "Amazon@gmail.com",
    hotline: '34897/983',
    review: 44.85,
    owner: { id: 11, name: "Dalia", image: "https://picsum.photos/10/300", email: "Dalia@orlydns.com", gender: 'male', birthdate: "14/11/1996" , mobile:"06541585"}
    ,
    address: { id: 11, city: "sohag", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
    ,
    package: { id: 11, code: "Shopping_premium", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
    },
    {
    id: 12,
    name: "Aramex",
    description: "Aramex company",

    img1: `../../../assets/Assets/Brands/Aramex.PNG`,
    img2: "https://picsum.photos/25/300",
    social_link: "cghh@Aramex.com",
    email: "Aramex@gmail.com",
    hotline: '34897/983',
    review: 44.85,
    owner: { id: 12, name: "Aramex", image: "https://picsum.photos/178/300", email: "Aramex4@orlydns.com", gender: 'male', birthdate: "14/11/1996" , mobile:"06541585"}
    ,
    address: { id: 12, city: "sohag", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
    ,
    package: { id: 12, code: "Shopping_premium", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
    },
    {
      id: 13,
      name: "Hitachi",
      description: "Hitachi company",

      img1: `../../../assets/Assets/Brands/Hitachi.PNG`,
      img2: "https://picsum.photos/25/300",
      social_link: "cghh@Hitachi.com",
      email: "Hitachi@gmail.com",
      hotline: '34897/983',
      review: 44.85,
      owner: { id: 13, name: "Basma", image: "https://picsum.photos/178/300", email: "Hitachi@orlydns.com", gender: 'male', birthdate: "14/11/1996" , mobile:"06541585"}
      ,
      address: { id: 13, city: "sohag", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
      ,
      package: { id: 13, code: "Shopping_premium", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
      }
       ,{
      id: 1,
      name: "facebook",
      description: "facebookfacebookfacebookfacebookfacebook",

      img1: "https://picsum.photos/300/300",
      img2: "https://picsum.photos/200/300",

      social_link: "cghh@facebook.com",
      email: "facebook@gmail.com",
      hotline: '34897/983',
      review: 3.85,
      owner: { id: 1, name: "Desomy", image: "http://forall.4all.ltd/uploads/image/111/16px/e7e0ced96ef9808b9ae1ca2029f5c5ce690743d2.webp", email: "Desomy@orlydns.com", gender: 'male', birthdate: "14/11/1996", mobile:"06541585" }
      ,
      address: { id: 1, city: "Alex", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
      ,
      package: { id: 1, code: "Shopping_premium", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
},
    {
      id: 2,
      name: "gmail ",
      description: "gmailgmailgmailgmailgmailgmail",

      img1: "https://picsum.photos/400/300",
      img2: "https://picsum.photos/200/300",

      social_link: "nvd,bn,d@gmail.com",
      email: "gmail@gmail.com",
      hotline: '34897/983',
      review: 3.8522,
      owner: { id: 2, name: "Omer", image: "http://forall.4all.ltd/uploads/image/111/16px/e7e0ced96ef9808b9ae1ca2029f5c5ce690743d2.webp", email: "Omer@orlydns.com", gender: 'male', birthdate: "14/11/1996", mobile:"06541585" }
      ,
      address: { id: 2, city: "Alex", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
      ,
      package: { id: 2, code: "Shopping_premium", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
},
    {
      id: 3,
      name: "Dailymotion",
      description: "DailymotionDailymotionDailymotion",

      img1: "https://picsum.photos/500/300",
      img2: "https://picsum.photos/200/300",
       social_link: "cghh@Dailymotion.com",
      email: "Dailymotion@gmail.com",
      hotline: '34897/983',
      review: 34.85,
      owner: { id:  110, name: "Abdo", image: "http://4all.ltd/uploads/image/110/16px/ca1d12d4e925ff0956104debb830f641697306d2.webp", email: "Abdo@ploneix.com", gender: 'male', birthdate: "14/11/1996" , mobile:"+201099122112123"}
      ,
      address: { id: 357, city: "Alex", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
      ,
      package: { id: 3, code: "Shopping_premium", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
},
    {
      id: 4,
      name: "RadioTv",
      description: "RadioTvRadioTvRadioTvRadioTvRadioTv",

      img1: "https://picsum.photos/600/300",
      img2: "https://picsum.photos/200/300",
      social_link: "cghh@RadioTv.com",
      email: "RadioTv@gmail.com",
      hotline: '34897/983',
      review: 34.85,
      owner: { id: 4, name: "Hend", image: "http://forall.4all.ltd/uploads/image/111/16px/e7e0ced96ef9808b9ae1ca2029f5c5ce690743d2.webp", email: "Hend@orlydns.com", gender: 'male', birthdate: "14/11/1996" , mobile:"06541585"}
      ,
      address: { id: 4, city: "Alex", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
      ,
      package: { id: 4, code: "Shopping_premium", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
},
    {
      id: 5,
      name: "oper",
      description: "oper",
      img1: "https://picsum.photos/700/300",
      img2: "https://picsum.photos/200/300",
      social_link: "cghh@oper",
      email: "oper@gmail.com",
      hotline: '34897/983',
      review: 34.85,
      owner: { id: 1, name: "Aya", image: "http://forall.4all.ltd/uploads/image/111/16px/e7e0ced96ef9808b9ae1ca2029f5c5ce690743d2.webp", email: "Aya@orlydns.com", gender: 'male', birthdate: "14/11/1996" , mobile:"06541585"}
      ,
      address: { id: 1, city: "Alex", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
      ,
      package: { id: 1, code: "Shopping_premium", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
},
{
id: 7,
name: "program ",
description: "programming company sfffffffff",

img1: "https://picsum.photos/100/300",
img2: "https://picsum.photos/98/300",
social_link: "cghh",
email: "program@gmail.com",
hotline: '34897/983',
review: 12.85,
owner: { id: 4, name: "Haidy", image: "https://picsum.photos/1000/300", email: "Haidy@orlydns.com", gender: 'male', birthdate: "14/11/1996" , mobile:"06541585"}
,
address: { id: 4, city: "Asyut", street: 550, building: 34, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
,
package: { id: 4, code: "programming company", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
},
{
id: 8,
name: "C++company",
description: "store ccccccccccccompany",

img1: "https://picsum.photos/61/300",
img2: "https://picsum.photos/91/300",
social_link: "cghh@c++.com",
email: "C++company@gmail.com",
hotline: '34897/983',
review: 10.85,
owner: { id: 8, name: "Ahmed", image:"https://picsum.photos/13/300", email: "Ahmed@orlydns.com", gender: 'male', birthdate: "14/11/1996" , mobile:"06541585"}
,
address: { id: 8, city: "cairo", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
,
package: { id: 8, code: "c++ code", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
},
{
id: 9,
name: "electric ",
description: "store company",

img1: "https://picsum.photos/23/300",
img2: "https://picsum.photos/75/300",
social_link: "cghh@electric.com",
email: "electric@gmail.com",
hotline: '34897/983',
review: 14.85,
owner: { id: 9, name: "Ali", image:"https://picsum.photos/76/300", email: "Ali@orlydns.com", gender: 'male', birthdate: "14/11/1996" , mobile:"06541585"}
,
address: { id: 9, city: "Alex", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
,
package: { id: 9, code: "Shopping_premium", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
},
{
id: 10,
name: "fooding",
description: "fooding company",

img1: "https://picsum.photos/600/300",
img2: "https://picsum.photos/90/300",
social_link: "cghh@food.com",
email: "Dina@gmail.com",
hotline: '34897/983',
review: 14.85,
owner: { id: 10, name: "Dina", image:"https://picsum.photos/96/300", email: "Dina@orlydns.com", gender: 'male', birthdate: "14/11/1996" , mobile:"06541585"}
,
address: { id: 10, city: "Aswan", street: 50, building: 404, intercom: "NA", floor: "ffffff", detailed_address: "dddddd" }
,
package: { id: 10, code: "Shopping_premium", cost: 50, tax: 404, fees: 5, name: "Shopping_premium", description: "Shopping_premium_description", company_type: "Shopping", currency: "dollar" }
},
];

  GetAllCompanies() {
    return this.Companies;
  }
}








