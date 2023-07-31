import { Component, HostListener, OnInit } from '@angular/core';

interface PendingItem {
  itemNumber: string;
  daysAgo: number;
  filesWaiting: number;
}

@Component({
  selector: 'app-pending-items-card',
  templateUrl: './pending-items-card.component.html',
  styleUrls: ['./pending-items-card.component.less']
})
export class PendingItemsCardComponent implements OnInit {
  pendingItems: PendingItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.pendingItems = [{ itemNumber: '24334543', daysAgo: 10, filesWaiting: 2 },
                         { itemNumber: '98765432', daysAgo: 5, filesWaiting: 1 },
                         { itemNumber: '24334543', daysAgo: 10, filesWaiting: 2 },
                         { itemNumber: '98765432', daysAgo: 5, filesWaiting: 1 },
                         { itemNumber: '24334543', daysAgo: 10, filesWaiting: 2 },
                         { itemNumber: '98765432', daysAgo: 5, filesWaiting: 1 },
                         { itemNumber: '24334543', daysAgo: 10, filesWaiting: 2 },
                         { itemNumber: '98765432', daysAgo: 5, filesWaiting: 1 },
                         { itemNumber: '24334543', daysAgo: 10, filesWaiting: 2 },
                         { itemNumber: '98765432', daysAgo: 5, filesWaiting: 1 },
                         { itemNumber: '24334543', daysAgo: 10, filesWaiting: 2 },
                         { itemNumber: '98765432', daysAgo: 5, filesWaiting: 1 }]
  }


}
