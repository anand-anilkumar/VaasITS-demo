import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EWalletRoutingModule } from './e-wallet-routing.module';
import { EWalletComponent } from './e-wallet/e-wallet.component';


@NgModule({
  declarations: [EWalletComponent],
  imports: [
    CommonModule,
    EWalletRoutingModule
  ]
})
export class EWalletModule { }
