import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LIST_GROUP } from 'src/app/mock/group.mock';
import { IGroup } from '../../models/group.interface';


@Injectable()

export class GroupObsService {
  private groupSubject: BehaviorSubject<IGroup[]>;

  constructor() { 
    this.groupSubject = new BehaviorSubject<IGroup[]>(LIST_GROUP)
  }

  getGroups(): Observable<IGroup[]>{
    return this.groupSubject.asObservable();
  }

  getGroupId(id: number) : Observable<IGroup[]> {
    return this.getGroups().pipe(
      map((cursos: IGroup[]) => cursos.filter((curso: IGroup) => curso.id === id))
    )
  }

}
