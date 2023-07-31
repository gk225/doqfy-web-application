import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.less']
})
export class ToolBarComponent implements OnInit {

  userName:string = '';
  userNameFirstLetter:string = '';
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  constructor() { }

  ngOnInit(): void {
    this.userName = 'Michael';
    this.userNameFirstLetter = this.userName ? this.userName.charAt(0).toUpperCase() : '';
  }

}
