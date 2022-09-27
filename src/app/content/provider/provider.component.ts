import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Company } from 'src/app/_models/company.models';
import { CompanyService } from 'src/app/_service/company.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(public companyService:CompanyService , private router: Router) {
    this.companies=companyService.GetAllCompanies()

  }

  goPlaces=  () => {
    this.router.navigateByUrl('/details');
};
  searchas(): void{

    this.companies=this.companyService.GetAllCompanies();


  }
  ngOnInit(): void {
    this.search();
    this.searchas();
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [ "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>"],

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
        items: 3
      }
    },
    nav: true
  }




}

