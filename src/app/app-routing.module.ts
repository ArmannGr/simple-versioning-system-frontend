import {RouterModule, Routes} from '@angular/router';
import {FileLandingZoneComponent} from "./file-landing-zone/file-landing-zone.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: FileLandingZoneComponent, pathMatch: 'full'},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }