import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { ShoutPipe } from './shared/shout.pipe';
import { TooltipDirective } from './shared/tooltip.directive';

@NgModule({
  declarations: [AppComponent, ShoutPipe, TooltipDirective],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
