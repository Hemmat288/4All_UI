import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
{path:'details',component:CompanyDetailsComponent},

  {path:'details/:id',component:CompanyDetailsComponent},
  {path:'home/details/:id',component:CompanyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
