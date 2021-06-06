import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

import { HomeComponent } from './home.component'

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' }, 
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "featured",
        component: NSEmptyOutletComponent,
        loadChildren: () =>
          import("~/app/home/featured/featured.module").then(
            (m) => m.FeaturedModule
          ),
        outlet: "featuredTab",
      },
    ]
}]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
