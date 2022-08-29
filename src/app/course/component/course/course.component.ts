import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseQuery } from '../../store/course.query';
import { CourseService } from '../../store/course.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private courseService: CourseService, private courseQuery: CourseQuery) { }

  courses!:Course[];

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe();
    this.courseQuery.allCourse$.subscribe(res=>{
      this.courses=res;
    })
  }


}
