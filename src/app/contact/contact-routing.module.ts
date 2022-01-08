import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactSectionComponent} from "./components/contact-section/contact-section.component";

const routes: Routes = [
  {
    path: '',
    component: ContactSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
