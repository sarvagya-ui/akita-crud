import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './component/course/course.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { UpdateCourseComponent } from './component/update-course/update-course.component';
import { DeleteCourseComponent } from './component/delete-course/delete-course.component';
import { WildCardComponent } from './component/wild-card/wild-card.component';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'add', component: AddCourseComponent },
  { path: 'update', component: UpdateCourseComponent },
  { path: 'delete', component: DeleteCourseComponent },
  { path: '**', component: WildCardComponent }
]



@NgModule({
  declarations: [
    CourseComponent,
    UpdateCourseComponent,
    AddCourseComponent,
    DeleteCourseComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
    FormsModule
  ]
})
export class CourseModule { }
