import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalstoragedataService } from 'src/app/Services/localstoragedata.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {


  id: any
  blog: any
  constructor(private activeRoute: ActivatedRoute, private localser: LocalstoragedataService, private route: Router) {

  }

  ngOnInit(): void {

    let url = this.route.url;
    let replacerul = url.replace("/blogdetails", "");
    let array = this.localser.getdtafrmlocalstor();
    array.forEach((value: any) => {
      var blogurl = value.url;
      if (blogurl == replacerul) {
        this.blog = value;
      }
    });
  }
}
