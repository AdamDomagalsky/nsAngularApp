import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BrowseComponent } from "./browse/browse.component";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";
import { BGService } from "../lib/BGService";
import {MainViewModel} from "../lib/main-view-model"
@NgModule({
    imports: [
        NativeScriptCommonModule,
        TabsRoutingModule
    ],
    declarations: [
        TabsComponent,
        HomeComponent,
        BrowseComponent,
        SearchComponent
    ],
    providers: [BGService, MainViewModel],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
