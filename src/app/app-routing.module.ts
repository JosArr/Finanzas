import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginManagerComponent} from "./components/login-manager/login-manager.component";
import {ManagerMenuComponent} from "./components/manager-menu/manager-menu.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ClientListComponent} from "./components/client-list/client-list.component";

const routes: Routes = [
  { path: 'loginManager', component: LoginManagerComponent },
  { path: 'managerMenu', component: ManagerMenuComponent },
  { path: 'clientList', component: ClientListComponent},
  { path: '', redirectTo: 'loginManager', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule {}
