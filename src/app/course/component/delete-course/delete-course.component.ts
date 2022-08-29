import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseQuery } from '../../store/course.query';
import { CourseService } from '../../store/course.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.scss']
})
export class DeleteCourseComponent implements OnInit {
  courses!: Course[];
  constructor(private courseService: CourseService, private courseQuery: CourseQuery) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe();
    this.courseQuery.allCourse$.subscribe(res => {
      this.courses = res;
    })
  }

  delete(id: string) {
    this.courseService.removeCourse(id).subscribe();
  }
}
