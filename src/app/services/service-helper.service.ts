import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceHelper {

  constructor(private http: HttpClient) {
  }

  public processText(input: String, lang: number) {
    return this.http.post<Array<string>>(environment.BASE_URL + "coms/communicate", {
        message: input,
        langCode: lang
      }
    );
  }

  public processLanguage(userMessage: String) {
    return this.http.post<{ langCode: number, message: string }>(environment.BASE_URL + "language/get", {
        message: userMessage
      }
    );
  }

}
