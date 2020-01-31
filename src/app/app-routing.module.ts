import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NewCharacterComponent } from './views/new-character/new-character.component'

const routes: Routes = [
  {
    path: '',
    component: NewCharacterComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
