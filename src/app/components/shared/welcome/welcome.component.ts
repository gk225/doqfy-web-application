import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  @Input() userName: string='';
  currentDate: Date = new Date;
  constructor() { }
 

  ngOnInit() {
    this.currentDate = new Date();
  }

}
