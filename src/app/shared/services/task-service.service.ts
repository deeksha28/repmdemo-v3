import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../components/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  constructor(private http: HttpClient) { }

  getTasks() {
      return this.http.get<any>('assets/Task.json')
          .toPromise()
          .then(res => <Task[]>res.data)
          .then(data => { return data; });
  }
}
