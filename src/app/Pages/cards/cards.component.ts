import { Component, OnInit } from '@angular/core';
import { LocalstoragedataService } from 'src/app/Services/localstoragedata.service';
import { Router } from '@angular/router';
import { throttleTime } from 'rxjs';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  con: any
  all_Data: any;
  textlength: number = 150;
  showMore: boolean;
  len: any;
  nodata: boolean = true;
  show: boolean = false;

  constructor(private locastorser: LocalstoragedataService, private route: Router) {
    this.showMore = false;
    this.con = 4;

  }

  ngOnInit(): void {
    this.locastorser.getdatafromapi();
    const timer: any = setTimeout(() => {

      this.all_Data = this.locastorser.getdtafrmlocalstor();

    }, 500);
    ;




  }
  delete(i: any) {
    this.locastorser.deleteblog(i, this.all_Data);
    this.len = (Object.keys(this.all_Data).length);
    console.log(this.len);

    if (this.len <= 4) {
      this.nodata = false;

    }
    if (this.len == 0) {
      this.show = true
    }

  }
  Edit(i: any) {

    this.route.navigateByUrl("edit")
    this.locastorser.editdata(i)

  }
  showmore() {

    this.con = (Object.keys(this.all_Data).length);
  }
  showless() {

    this.con = 4;
  }

}
