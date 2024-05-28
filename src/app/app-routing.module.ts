import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IdentityScreenComponent} from "./components/identity-screen/identity-screen.component";
import {LoginManagerComponent} from "./components/login-manager/login-manager.component";
import {LoginClientComponent} from "./components/login-client/login-client.component";

const routes: Routes = [
  {path: 'identity', component: IdentityScreenComponent},
  {path: 'loginManager', component: LoginManagerComponent},
  {path: 'loginClient', component: LoginClientComponent},
  { path: '', redirectTo: 'identity', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule {}
