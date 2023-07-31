import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/shared/tool-bar/tool-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { WelcomeComponent } from './components/shared/welcome/welcome.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { WalletInfoComponent } from './components/shared/wallet-info/wallet-info.component';
import { PendingItemsCardComponent } from './components/shared/pending-items-card/pending-items-card.component';
import { FrequentlyUsedItemsComponent } from './components/shared/frequently-used-items/frequently-used-items.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    WelcomeComponent,
    MainDashboardComponent,
    WalletInfoComponent,
    PendingItemsCardComponent,
    FrequentlyUsedItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
