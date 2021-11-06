import {Component, OnInit} from '@angular/core';
import {AdminService} from "../services/admin.service";
import {HistoryType} from "../types/Types";
import {
  faCheck,
  faClock, faDownload,
  faFileExport,
  faFileImport,
  faFilter, faFlag,
  faList,
  faTimes, faUpload
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  resList: Array<HistoryType> = []

  VALID = "valid";
  WAITING = "waiting";
  REJECTED = "rejected";

  FRENCH = "fr";
  ENGLISH = "en";

  icons = {
    filters: faFilter,
    accepted: faCheck,
    reject: faTimes,
    waiting: faClock,
    list: faList,
    export: faDownload,
    import: faUpload,
    flag: faFlag
  }

  filters: String | null = null;
  langFilters: String | null = null;

  constructor(private service: AdminService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAllCommands().then((res) => {
      console.log(res);
      this.resList = res;
    })
  }

  changeState(id: number, state: number) {
    this.service.changeState(state, id).subscribe(() => {
      this.loadData();
    })
  }

  downloadFile(lang: string) {
    this.service.downloadFile(lang).then((res) => {
      console.log(res);
      this.downloader(res, lang);
    })
  }

  downloader(data: any, lang: string) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    const blob = new Blob([data], {type: "text/plain"});
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = `categories_${lang}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  displayCondition(res: HistoryType) {

    return (this.filters == null || this.filters == res.state) && (this.langFilters == null || this.langFilters == res.lang);
  }
}
