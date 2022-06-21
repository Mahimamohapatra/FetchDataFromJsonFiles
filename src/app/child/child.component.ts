import { Component, Input, OnInit } from '@angular/core';
import { AppConfig } from '../app-config.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  age!:number;
  errorMsg!:string;

  @Input("id")
  set id(value:number) {
    this.getAge(value);
  }

  ngOnInit(): void {
  }

  constructor(private appConfig: AppConfig) {
  }

  getAge(id:number) {
    this.age=0;
    this.errorMsg="";
    this.appConfig.getChildJSON().subscribe(res => {
      const data=res.find(
        (val: any)=> {
          return val.Id===id;
        }
      )
      if(data && data.age)
      this.age=data.age;
      else this.errorMsg="User Not Found";
    });
  }


}
