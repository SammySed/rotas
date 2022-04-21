import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentClienteComponent } from './component-cliente/component-cliente.component';

import { SecondComponent } from './second/second.component';

const routes: Routes = [
{path:"second-component", component:SecondComponent},
{path:"component-cliente", component:ComponentClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
