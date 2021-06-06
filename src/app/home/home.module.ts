import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { HomeDetailComponent } from './home-detail.component'
import { NativeScriptMaterialTabsModule } from "@nativescript-community/ui-material-tabs/angular";
import { NativeScriptMaterialBottomNavigationBarModule} from "@nativescript-community/ui-material-bottomnavigationbar/angular";

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule, NativeScriptMaterialTabsModule, NativeScriptMaterialBottomNavigationBarModule],
  declarations: [HomeComponent, HomeDetailComponent],
  exports: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
