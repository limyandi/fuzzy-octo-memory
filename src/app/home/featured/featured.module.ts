import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { NativeScriptMaterialTabsModule } from "@nativescript-community/ui-material-tabs/angular";
import { NativeScriptMaterialBottomNavigationBarModule} from "@nativescript-community/ui-material-bottomnavigationbar/angular";
import { FeaturedComponent } from './featured.component';
import { FeaturedRoutingModule } from './featured-routing.module';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptMaterialTabsModule, NativeScriptMaterialBottomNavigationBarModule, FeaturedRoutingModule],
  declarations: [FeaturedComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FeaturedModule {}
