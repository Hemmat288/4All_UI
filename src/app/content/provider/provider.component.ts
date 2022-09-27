import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Company } from 'src/app/_models/company.models';
import { CompanyService } from 'src/app/_service/company.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  companies;
  companyArray!:Company[];
  page:number=1;
  totalLength:any;
  searchText!:string;

  search(){
    this.companyArray= this.companies.filter(value => value.name.match(this.searchText)|| value.owner.name.match(this.searchText)|| value.description.match(this.searchText))
    this.companies=this.companyArray;
  }

  constructor(public companyService:CompanyService) {
    this.companies=companyService.GetAllCompanies()
  }
  searchas(){

    this.companies=this.companyService.GetAllCompanies();


  }
  ngOnInit(): void {
    this.search();
    this.searchas();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}

