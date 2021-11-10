import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {HistoryType} from "../types/Types";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getAllCommands() {
    return this.http.get<Array<HistoryType>>(environment.BASE_URL + "history/all").toPromise()
  }

  changeState(state: number, id: number) {
    return this.http.post(environment.BASE_URL + "history/state", {
      id: id,
      state: state
    });
  }

  downloadFile(lang: string) {
    return this.http.get(environment.BASE_URL + "history/download/" + lang, {responseType: 'blob'}).toPromise();
  }

  uploadFileContent(lang: string, text: string) {
    return this.http.post(environment.BASE_URL + "history/upload/" + lang, {text: text}).toPromise()
  }
}
