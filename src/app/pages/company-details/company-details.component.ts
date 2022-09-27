import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/_models/company.models';
import { CompanyService } from 'src/app/_service/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  getId:any;
  company!:Company[];
  Allcompanies;


  constructor(private route: ActivatedRoute,public companyService:CompanyService) {
    this.Allcompanies=companyService.GetAllCompanies()
  }


  ngOnInit(): void {
    this.getId=this.route.snapshot.params['id'];
    console.log(this.getId,'getId');
    if(this.getId){
       this.company= this.companyService.Companies.filter((value)=>{

            return value.id==this.getId;
});

    }
  }




}
