import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginManagerComponent} from "./components/login-manager/login-manager.component";
import {ManagerMenuComponent} from "./components/manager-menu/manager-menu.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ClientListComponent} from "./components/client-list/client-list.component";
import {CreditsComponent} from "./components/credits/credits.component";
import {AddClientComponent} from "./components/add-client/add-client.component";
import {CreditViewComponent} from "./components/credit-view/credit-view.component";

const routes: Routes = [
  { path: 'loginManager', component: LoginManagerComponent },
  { path: 'managerMenu', component: ManagerMenuComponent },
  { path: 'clientList', component: ClientListComponent},
  { path: 'add-client', component: AddClientComponent },
  { path: '', redirectTo: 'loginManager', pathMatch: 'full' },
  {path:  'credits', component: CreditsComponent},
  {path: 'credit-view', component: CreditViewComponent},
  { path: '**', component: PageNotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule {}
