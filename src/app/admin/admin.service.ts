import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {HistoryType} from "../types/Types";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllCommands(){
    return this.http.get<Array<HistoryType>>(environment.BASE_URL+"history/all").toPromise()
  }
}
