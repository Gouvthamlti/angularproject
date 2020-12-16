import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ListComponent } from './list/list.component';


const routes: Routes = [
  // { path: '', redirectTo: 'popular', pathMatch: 'full' },
  // { path: '**', redirectTo: 'popular' }
  { path: '', component: ListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
