import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../../models/course.model';
import { CourseService } from '../../store/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }

  onSubmit(formVariable: NgForm) {
    let course: Course;
    course = formVariable.value;
    console.log(course);
    this.courseService.addCourse(course).subscribe();
  }
}
