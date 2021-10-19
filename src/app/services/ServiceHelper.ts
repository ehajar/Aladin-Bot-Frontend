import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


export default class ServiceHelper {
  http: HttpClient;


  constructor(http: HttpClient) {
    this.http = http;
  }

  getRequest(path: String) {
    return this.http.get(environment.BASE_URL + path)
  }

  postRequest(path: String, data: any) {
    return this.http.post(environment.BASE_URL + path, data)
  }
}
