import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Forecast } from 'src/app/dto/forecast';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() childEar: Forecast;
  @Output() childMouth: EventEmitter<any>;

  constructor() {
    this.childEar = new Forecast();
    this.childMouth = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  clicking(): void {
    console.log("clicking in card");
    this.childMouth.emit(this.childEar.id);
  }

}
