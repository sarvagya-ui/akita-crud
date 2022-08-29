import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Course } from '../models/course.model';

export interface CourseState extends EntityState<Course> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course' })
export class CourseStore extends EntityStore<CourseState> {

  constructor() {
    super();
  }
  loadCourses(courses: Course[]) {
    this.set(courses);
    this.update(state => ({
      ...state
    }));
  }
}
