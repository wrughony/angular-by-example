import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string = 'wahid';

  constructor() { }

  ngOnInit(): void {
  }

  getAge(): number {
    return 25;
  }

  add(a: number, b: number): number {
    return a+b;
  }

}
