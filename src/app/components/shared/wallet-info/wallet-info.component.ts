import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-info',
  templateUrl: './wallet-info.component.html',
  styleUrls: ['./wallet-info.component.less']
})
export class WalletInfoComponent implements OnInit {
  @Input() balance: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
