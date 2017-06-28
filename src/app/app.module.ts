import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { QuoteComponent } from './quote/quote.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { CounterService } from './services/counter.service';
import { ContactService } from './services/contact.service';
import { ContactOverviewComponent } from './contact-overview/contact-overview.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { JokesComponent } from './jokes/jokes/jokes.component';


// Routing Table:
/*
  We are configuring the router so that it:

  Redirects to the home path every time the path is completely (fully) empty.
  Activates the MyHomeComponent every time the path home is navigated to.
  Activates the MyAboutComponent every time the path about is navigated to.

*/

const routes: Routes = [
  { path: '',            redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',        component: MyHomeComponent },
  { path: 'about',       component: MyAboutComponent },
  { path: 'quotes',      component: QuoteListComponent },
  { path: 'quote/:id',   component: QuoteComponent },
  { path: 'contacts',    component: ContactListComponent },
  { path: 'contact/:id', component: ContactComponent,
    children: [
      { path: '',     component: ContactOverviewComponent }, //<-- the ContactOverviewComponent component as default
      { path: 'edit', component: ContactEditComponent }      //<-- the ContactEditComponent component for edit path
    ] 
  },
  { path: 'jokes',    component: JokesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    QuoteItemComponent,
    QuoteListComponent,
    MyHomeComponent,
    MyAboutComponent,
    QuoteComponent,
    ContactListComponent,
    ContactComponent,
    MyCounterComponent,
    ContactOverviewComponent,
    ContactEditComponent,
    JokesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),  //  <-- "routes" is the array defined above
    HttpModule           // <!-- Angular's HTTP module
  ],
  /*
    we may want to share a service instance across the whole application. How can we do that?
    we simply need to register our services into our NgModule instead of our components directly.
    We register services in the container NgModule if we need a single instance of the service,
    otherwise in every component that requires it.
    
  */

  providers: [
    CounterService,
    ContactService
  ],      // <-- Register the CounterService
  bootstrap: [AppComponent]
})
export class AppModule { }
