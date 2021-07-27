import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballComponent } from './football/football.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path:'football', component:FootballComponent},
  {path:'about', component:AboutComponent},
  {path:'form', component:FormComponent},
  {path:'video', component:VideoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
