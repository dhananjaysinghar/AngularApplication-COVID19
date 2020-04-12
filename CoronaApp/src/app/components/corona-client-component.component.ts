import { Component, OnInit } from '@angular/core';
import { CoronaClientServiceService } from '../services/corona-client-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-corona',
  templateUrl: './corona-client-component.component.html',
  styleUrls: ['./corona-client-component.css'],
  providers: [DatePipe]
})
export class CoronaClientComponentComponent implements OnInit {
   public data: any;
   public currrentDate: any = new Date();
  constructor(public service: CoronaClientServiceService, public datePipe: DatePipe) {}
  ngOnInit(): void {
    this.currrentDate = this.datePipe.transform(this.currrentDate, 'dd-MM-yyyy');
    this.service.getCurrentStatus()
    .subscribe((success) => {
      this.data = success;
    }, (err) => {
      console.log(err);
    });
  }
}
