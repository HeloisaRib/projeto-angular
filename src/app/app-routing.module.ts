import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ForumComponent } from './components/pages/forum/forum.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forum', component: ForumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
