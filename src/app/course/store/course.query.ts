import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CourseStore, CourseState } from './course.store';


@Injectable({ providedIn: 'root' })
export class CourseQuery extends QueryEntity<CourseState> {

  constructor(protected override store: CourseStore) {
    super(store);
  }

  allCourse$ = this.selectAll();
  getCourse = this.getAll();

}
