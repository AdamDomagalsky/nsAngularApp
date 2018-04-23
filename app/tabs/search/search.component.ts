import { Component, OnInit } from "@angular/core";
import { LocationsService } from "../../lib/LocationsService"
import * as repeaterModule from "tns-core-modules/ui/repeater";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    items;
    constructor(private locationService: LocationsService) {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
        this.items = this.locationService.getLocations();
    }
}
