import {RouterModule, Routes} from '@angular/router';
import {FileLandingZoneComponent} from "./file-landing-zone/file-landing-zone.component";
import {NgModule} from "@angular/core";
import {FileComponent} from "./file/file.component";

const routes: Routes = [
  {path: '', component: FileLandingZoneComponent, pathMatch: 'full'},
  {path: ':fileName', component: FileComponent, pathMatch: 'full'}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }