import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl = "http://localhost:5000/tasks"
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Task[]>(this.apiUrl);
  }

  delete(id: any){
    return this.http.delete(this.apiUrl+"/"+id);
  }

  persist(task: Task){
    return this.http.post(this.apiUrl, task);
  }

}
