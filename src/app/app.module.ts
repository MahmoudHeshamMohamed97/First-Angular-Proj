import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    WelcomeComponent,NavbarComponent, FooterComponent, BodyComponent, AboutComponent, ContactUsComponent, GalleryComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
