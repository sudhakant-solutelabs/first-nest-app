import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
  courses = COURSES;

  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courses);
    });
  }

  getCourse(courseId): Promise<any> {
    const id_in = Number(courseId);
    return new Promise((resolve) => {
      const course = this.courses.find((cour) => cour.id === id_in);
      if (!course) {
        throw new HttpException('Course currently does not exist', 404);
      }
      resolve(course);
    });
  }

  addCourse(course): Promise<any> {
    return new Promise((resolve) => {
      course.id = Number(course.id);
      this.courses.push(course);
      resolve(this.courses);
    });
  }

  deleteCourse(courseId): Promise<any> {
    const id_in = Number(courseId);
    return new Promise((resolve) => {
      const index = this.courses.findIndex((course) => course.id === id_in);
      if (index < 0) {
        throw new HttpException('Course currently does not exist', 404);
      }
      this.courses.splice(index, 1);
      resolve(this.courses);
    });
  }
}
