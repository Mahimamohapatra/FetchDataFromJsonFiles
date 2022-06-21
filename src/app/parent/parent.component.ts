import { Component, OnInit } from '@angular/core';
import { AppConfig } from '../app-config.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {



  ngOnInit(): void {
  }

  userId!: number;
  selectedUser!: string;
  parents: any;
  selectedId!: number;

  constructor(private appConfig: AppConfig) {
    this.parents=[];
    this.initialize();
  }

  initialize() {
    this.appConfig.getParentJSON().subscribe(res => {
      this.parents = res;
      this.selectedUser = this.parents[0].name;
    });

  }

  getId(parent: any) {
    this.selectedId= parent;
  }

}
