import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddSuperheroeComponent } from './components/add-superheroe/add-superheroe.component';
import { SuperheroeDetailsComponent } from './components/superheroe-details/superheroe-details.component';
import { SuperheroeListComponent } from './components/superheroe-list/superheroe-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'superheroe', pathMatch: 'full' },
  { path: 'superheroe', component: SuperheroeListComponent },
  { path: 'superheroe/:id', component: SuperheroeDetailsComponent },
  { path: 'add', component: AddSuperheroeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
