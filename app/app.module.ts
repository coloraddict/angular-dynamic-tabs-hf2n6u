import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { DynamicTabsDirective } from './tabs/dynamic-tabs.directive';
import { PersonEditComponent } from './people/person-edit.component';
import { PeopleListComponent } from './people/people-list.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    DynamicTabsDirective,
    PersonEditComponent,
    PeopleListComponent,
    Comp1Component
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  // register the dynamic components here
  entryComponents: [TabComponent]
})
export class AppModule {}
