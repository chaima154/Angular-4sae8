import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppComponentComponent } from './app-component/app-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ResidencesComponentComponent } from './Residences/residences-component/residences-component.component';
import { ResidenceDetailsComponent } from './Residences/residences-details-component/residences-details-component.component';
import { AddResidenceComponentComponent } from './Residences/add-residence-component/add-residence-component.component';
import { ApartmentsComponentComponent } from './Apartments/apartments-component/apartments-component.component';
import { ApartmentsByResidenceComponentComponent } from './Apartments/apartments-by-residence-component/apartments-by-residence-component.component';
import { AddApartmentComponentComponent } from './Apartments/add-apartment-component/add-apartment-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ResidencesComponent,
    HeaderComponent,
    HomeComponent,
    AppComponentComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    FooterComponentComponent,
    NotFoundComponentComponent,
    ResidencesComponentComponent,
    ResidenceDetailsComponent,
    AddResidenceComponentComponent,
    ApartmentsComponentComponent,
    ApartmentsByResidenceComponentComponent,
    AddApartmentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
