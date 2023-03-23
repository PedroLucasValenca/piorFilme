import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { YesOrNoPipe } from './shared/pipe/yes-or-no.pipe';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MultipleWinnersComponent } from './shared/components/multiple-winners/multiple-winners.component';
import { StudiosWinnersComponent } from './shared/components/studios-winners/studios-winners.component';
import { MaxMinProducersComponent } from './shared/components/max-min-producers/max-min-producers.component';
import { MoviesWinForYearComponent } from './shared/components/movies-win-for-year/movies-win-for-year.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    YesOrNoPipe,
    MenuComponent,
    HeaderComponent,
    MultipleWinnersComponent,
    StudiosWinnersComponent,
    MaxMinProducersComponent,
    MoviesWinForYearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
