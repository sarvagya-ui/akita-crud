import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CourseStore } from './course.store';
import { Observable, tap } from 'rxjs';
import { Course } from '../models/course.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url: string = "http://localhost:3000/course";
  constructor(private http: HttpClient, private store: CourseStore) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url).pipe(
      tap((courses: any) => {
        this.store.loadCourses(courses);
      })
    );
  }

  addCourse(course: Course) {
    return this.http.post<Course>(this.url, course).pipe(
      tap(value => {
        this.store.add([value]);
      })
    )
  }

  removeCourse(id: any) {
    return this.http.delete(this.url + '/' + id).pipe(tap(result => {
      this.store.remove(id);
    }))
  }

  updateCourse(id: any, course: Course) {
    const updateUrl = `${this.url}/${course.id}`;
    return this.http.put<Course>(updateUrl, course).pipe(
      tap(value => {
        this.store.update(id, course);
      })
    )
  }

}
