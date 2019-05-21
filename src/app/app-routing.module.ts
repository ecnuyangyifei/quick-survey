import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {
    path: 'survey',
    component: SurveyComponent
  },
  {
    path: 'data', 
    component: DataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
