import { Component, OnInit } from '@angular/core';
import {AdminService} from "./admin.service";
import {HistoryType} from "../types/Types";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  resList: Array<HistoryType> = []

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.service.getAllCommands().then((res)=>{
      this.resList = res;
    })
  }

}
