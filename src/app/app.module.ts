import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import { BindingAssignmentComponent } from './binding-assignment/binding-assignment.component';
import { DirectivesTaskComponent } from './directives-task/directives-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    ErrorComponent,
    SuccessComponent,
    BindingAssignmentComponent,
    DirectivesTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
