import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Page } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute, private page: Page) {
    // Use the component constructor to inject providers.
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.routerExtension.navigate(
			[
				{
					outlets: {
						featuredTab: ["featured"]
					},
				},
			],
			{ relativeTo: this.activeRoute } // this is important, because it appends the outlets tab to the current home route
    )
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
