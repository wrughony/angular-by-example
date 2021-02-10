import { Component, OnInit } from '@angular/core';
import { Forecast } from './../../dto/forecast';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  forecasts: Forecast[] = [
    {
      id: 0,
      city: 'Port-Louis',
      temperature: 30
    },
    {
      id: 1,
      city: 'Reduit',
      temperature: 23
    },
    {
      id: 2,
      city: 'Curepipe',
      temperature: -10
    },
    {
      id: 0,
      city: 'Le Nord',
      temperature: 45
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  listeningToChild(data:any){
    console.log('parent listening', data);
  }

}
