import { ICourse } from '../models/course.interface';

export interface CourseState {
    update: boolean;
    courses: ICourse [];
}