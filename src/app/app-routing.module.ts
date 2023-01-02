import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooknowComponent } from './booknow/booknow.component';
import { PlacelistComponent } from './placelist/placelist.component';
import { ViewPlaceComponent } from './view-place/view-place.component';

const routes: Routes = [
  {
    path:'',component:PlacelistComponent
  },
  {
    path:'view-place/:id',component:ViewPlaceComponent
  },
  
  {
    
    path:'book-now',component:BooknowComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
