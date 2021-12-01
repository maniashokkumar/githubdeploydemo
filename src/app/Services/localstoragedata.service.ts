import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LocalstoragedataService {
  sortarr: any;
  editaction = -1;

  constructor(private apiser: ApiService) {
    this.sortarr = [];
  }

  getdatafromapi() {
    this.apiser.getalldata().subscribe(data => {
      let exisdata = localStorage.getItem("data")
      if (exisdata == null) {
        data.articles.sort((x: any) => {
          const a = new Date(x.publishedAt)
          const b = new Date()
          return a === b ? 0 : b > a ? -1 : 1;


        })
        console.log(data.articles);
        localStorage.setItem("data", JSON.stringify(data.articles));
        console.log("hi");
      }

    });
  }

  getdtafrmlocalstor() {
    let dataAsstring = localStorage.getItem("data");
    if (dataAsstring == null) {
      return
    }
    let dataAsarray = JSON.parse(dataAsstring);
    return dataAsarray


  }
  deleteblog(i: number, all_Data: any) {
    var result = confirm("Click Ok to Delete the Blog");
    if (result) {
      all_Data.splice(i, 1);
      localStorage.setItem("data", JSON.stringify(all_Data));
      alert("Blog Deleted")
    }




  }
  specific(index: any) {
    let dataAsstring = localStorage.getItem("data");
    if (dataAsstring == null) {
      return
    }
    let dataAsarray = JSON.parse(dataAsstring);

    return dataAsarray[index];
  }
  editdata(i: any) {

    this.editaction = i;
  }
  submitBlogEdit(data: any, stringtoarr: any) {
    if (this.editaction == -1) {
      stringtoarr.unshift(data.value)
      localStorage.setItem("data", JSON.stringify(stringtoarr));
      alert("Blog Added Successful");
    }
    else {
      let lenghtofexisarr = stringtoarr.length;
    
      stringtoarr[this.editaction] = data.value;
      localStorage.setItem("data", JSON.stringify(stringtoarr))
      alert("Blog Updated Successful");


    }
  }
  ////data for specific details page
  getspecificdata(url: any) {



  }

}
