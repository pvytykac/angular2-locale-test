import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TranslatePipe} from './translate.pipe';
import {TranslateService} from "./translate.service";
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LocaleComponent} from './components/locale-component/locale-component';
import {RoutingService} from "./routing.service";
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/person/person.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/cz', pathMatch: 'full'},
  {path: ':lang', component: LocaleComponent, children: [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'people', component: PeopleComponent},
    {path: 'person/:id', component: PersonComponent},
    {path: '**', component: PageNotFoundComponent}
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    PageNotFoundComponent,
    LocaleComponent,
    PeopleComponent,
    PersonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TranslateService, RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
