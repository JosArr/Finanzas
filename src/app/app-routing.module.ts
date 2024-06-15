import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IdentityScreenComponent} from "./components/identity-screen/identity-screen.component";
import {LoginManagerComponent} from "./components/login-manager/login-manager.component";
import {LoginClientComponent} from "./components/login-client/login-client.component";
import {ClientMenuComponent} from "./components/client-menu/client-menu.component";
import {ManagerMenuComponent} from "./components/manager-menu/manager-menu.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ClientListComponent} from "./components/client-list/client-list.component";

const routes: Routes = [
  { path: 'identity', component: IdentityScreenComponent },
  { path: 'loginManager', component: LoginManagerComponent },
  { path: 'loginClient', component: LoginClientComponent },
  { path: 'clientMenu', component: ClientMenuComponent },
  { path: 'managerMenu', component: ManagerMenuComponent },
  {path: 'clientList', component: ClientListComponent},
  { path: '', redirectTo: 'identity', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule {}
