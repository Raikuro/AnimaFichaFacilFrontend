import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NewCharacterComponent } from './views/new-character/new-character.component'
import { MyCharactersComponent } from './views/my-characters/my-characters.component'

const routes: Routes = [
  {
    path: 'new-character',
    component: NewCharacterComponent,
  },
  {
    path: 'my-characters',
    component: MyCharactersComponent,
  },
  {
    path: '**',
    redirectTo: 'new-character',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
