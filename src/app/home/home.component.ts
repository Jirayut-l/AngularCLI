import { ApitestService } from './../service/apitest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data = [];
  constructor(private apitestService: ApitestService) {}

  ngOnInit() {
    this.apitestService.get().subscribe((ret: any[]) => {
      console.log(ret);
      this.data = ret;
    });
  }
}
