import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../../models/course.model';
import { CourseQuery } from '../../store/course.query';
import { CourseService } from '../../store/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  courses!: Course[];
  selectedId: string;
  constructor(private courseService: CourseService, private courseQuery: CourseQuery) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe();
    this.courseQuery.allCourse$.subscribe(res => {
      this.courses = res;
    });
  }

  delete(id: string) {
    this.courseService.removeCourse(id).subscribe();
  }

  update(id: string) {
    this.selectedId = id;
  }

  onSubmit(formVariable: NgForm){
   this.courseService.updateCourse(formVariable.value.id,formVariable.value).subscribe();
  }
}
