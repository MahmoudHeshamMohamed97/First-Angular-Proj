import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: BodyComponent },
  {path: "about", component: AboutComponent },
  {path: "contact", component: ContactUsComponent },
  {path: "gallery", component: GalleryComponent },
  {path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
