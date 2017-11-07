import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project', component: ProjectComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
