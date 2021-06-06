import { Component, OnInit } from '@angular/core';
import { Application } from "@nativescript/core"
import { RadSideDrawer } from "nativescript-ui-sidedrawer"

@Component({
    selector: 'featured-component',
    templateUrl: 'featured.component.html'
})
export class FeaturedComponent implements OnInit {
    drawer: RadSideDrawer;
    constructor() { }

    ngOnInit() { }

    openDrawer() {
    	this.drawer = <RadSideDrawer>(<any>Application.getRootView())
    	this.drawer.showDrawer()
    }
}