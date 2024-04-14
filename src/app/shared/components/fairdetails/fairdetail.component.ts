import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../const/fair';

@Component({
  selector: 'app-fairdetail',
  templateUrl: './fairdetail.component.html',
  styleUrls: ['./fairdetail.component.scss']
})
export class FairdetailComponent implements OnInit {
  @Input() getdetailsarr !: Array<Ifair>;
  public detailsid : string | null = localStorage.getItem("id");
  date : any = new Date();
  ;
  constructor() {
    
   }

  ngOnInit(): void {
    
  }

}
