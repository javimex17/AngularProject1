import { ICourse } from './course.interface';
import { IStudent } from './student.interface';
export interface ICommission {
    id: number;
    idGroup: number;
    name: string;
    idCourse: ICourse | undefined;
    subscriptions?: IStudent []  | undefined;
    fechaInicio: Date;
    fechaFin: Date;
}