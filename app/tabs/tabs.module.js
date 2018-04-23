"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var browse_component_1 = require("./browse/browse.component");
var home_component_1 = require("./home/home.component");
var search_component_1 = require("./search/search.component");
var tabs_routing_module_1 = require("./tabs-routing.module");
var tabs_component_1 = require("./tabs.component");
var BGService_1 = require("../lib/BGService");
var LocationsService_1 = require("../lib/LocationsService");
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                tabs_routing_module_1.TabsRoutingModule
            ],
            declarations: [
                tabs_component_1.TabsComponent,
                home_component_1.HomeComponent,
                browse_component_1.BrowseComponent,
                search_component_1.SearchComponent
            ],
            providers: [BGService_1.BGService, LocationsService_1.LocationsService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsOERBQTREO0FBQzVELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFDNUQsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCw4Q0FBNkM7QUFDN0MsNERBQTBEO0FBbUIxRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBaEJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2Ysa0NBQWU7YUFDbEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxxQkFBUyxFQUFFLG1DQUFnQixDQUFDO1lBQ3hDLE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi9icm93c2UvYnJvd3NlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUYWJzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3RhYnMtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJHU2VydmljZSB9IGZyb20gXCIuLi9saWIvQkdTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vbGliL0xvY2F0aW9uc1NlcnZpY2VcIlxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFRhYnNSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVGFic0NvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIEJyb3dzZUNvbXBvbmVudCxcclxuICAgICAgICBTZWFyY2hDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtCR1NlcnZpY2UsIExvY2F0aW9uc1NlcnZpY2VdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNNb2R1bGUgeyB9XHJcbiJdfQ==