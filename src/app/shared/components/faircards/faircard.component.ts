import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../const/fair';

@Component({
  selector: 'app-faircard',
  templateUrl: './faircard.component.html',
  styleUrls: ['./faircard.component.scss']
})
export class FaircardComponent implements OnInit {
  @Input() getcardarr !: Array<Ifair>;
  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  cardclicked(eve : Event){
    history.go(0)
    let cardid : any = eve.target as HTMLDivElement;
    let id : string = cardid.getAttribute('id');
    localStorage.setItem("id",id)
  };

}
