import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cardtemplate',
  templateUrl: './cardtemplate.component.html',
  styleUrls: ['./cardtemplate.component.css']
})
export class CardtemplateComponent implements OnInit {
  @Input() info: any
  all_Data: any;
  con: any
  url: any;
  textlength: number = 150;
  showMore: boolean;
  constructor(private route: Router) {
    this.showMore = false;
    this.con = 4;
  }

  ngOnInit(): void {

  }




  showmore() {
    let len = Object.keys(this.all_Data).length;
    this.con = len;
  }
  showless() {

    this.con = 4;
  }
  specificdata(url: any) {

    this.route.navigateByUrl("blogdetails" + url)

  }

}
