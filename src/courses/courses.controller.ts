import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.courseService.getCourses();
    return courses;
  }

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId_in) {
    const course = await this.courseService.getCourse(courseId_in);
    return course;
  }

  @Post()
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
    //Data Transfer Object
    const course = await this.courseService.addCourse(createCourseDto);
    return course;
  }

  @Delete()
  async deleteCourse(@Query() query) {
    //localhost:3000/courses?courseId=4
    const course = await this.courseService.deleteCourse(query.courseId);
    return course;
  }
}
