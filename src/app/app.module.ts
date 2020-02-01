import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { SidebarComponent } from './views/sidebar/sidebar.component'
import { NewCharacterComponent } from './views/new-character/new-character.component'
import { APP_BASE_HREF } from '@angular/common'

@NgModule({
  declarations: [AppComponent, SidebarComponent, NewCharacterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
