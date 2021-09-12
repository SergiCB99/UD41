import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddSuperheroeComponent } from './components/add-superheroe/add-superheroe.component';
import { SuperheroeDetailsComponent } from './components/superheroe-details/superheroe-details.component';
import { SuperheroeListComponent } from './components/superheroe-list/superheroe-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddSuperheroeComponent,
    SuperheroeDetailsComponent,
    SuperheroeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
