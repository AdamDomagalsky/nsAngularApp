"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("tns-core-modules/utils/utils");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("tns-core-modules/ui/enums");
var application = require("tns-core-modules/application");
var LocationsService_1 = require("../../lib/LocationsService");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(locationService) {
        this.locationService = locationService;
        this.watchIds = [];
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
        this.model = locationService.getLocations();
        console.dir(this.model);
    }
    HomeComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    };
    HomeComponent.prototype.startBackgroundTap = function () {
        if (application.android) {
            var context = utils.ad.getApplicationContext();
            var intent = new android.content.Intent(context, com.services.BGService.class);
            context.startService(intent);
        }
    };
    HomeComponent.prototype.stopBackgroundTap = function () {
        if (application.android) {
            var context = utils.ad.getApplicationContext();
            var intent = new android.content.Intent(context, com.services.BGService.class);
            context.stopService(intent);
        }
    };
    HomeComponent.prototype.enableLocationTap = function () {
        geolocation.isEnabled().then(function (isEnabled) {
            if (!isEnabled) {
                geolocation.enableLocationRequest().then(function () {
                }, function (e) {
                    console.log("Error: " + (e.message || e));
                });
            }
        }, function (e) {
            console.log("Error: " + (e.message || e));
        });
    };
    HomeComponent.prototype.buttonGetLocationTap = function () {
        var _this = this;
        var location = geolocation.getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high,
            maximumAge: 5000,
            timeout: 10000
        })
            .then(function (loc) {
            if (loc) {
                //    this.model.locations.push(loc);
                return loc;
            }
        }, function (e) {
            console.log("Error: " + (e.message || e));
        });
        location.then(function (a) { return _this.locationService.push(a); });
    };
    HomeComponent.prototype.buttonStartTap = function () {
        try {
            this.watchIds.push(geolocation.watchLocation(function (loc) {
                if (loc) {
                    // this.model.locations.push(loc);
                }
            }, function (e) {
                console.log("Error: " + e.message);
            }, {
                desiredAccuracy: enums_1.Accuracy.high,
                updateDistance: 0.1,
                updateTime: 3000,
                minimumUpdateTime: 100
            }));
        }
        catch (ex) {
            console.log("Error: " + ex.message);
        }
    };
    HomeComponent.prototype.buttonStopTap = function () {
        var watchId = this.watchIds.pop();
        while (watchId != null) {
            geolocation.clearWatch(watchId);
            watchId = this.watchIds.pop();
        }
    };
    HomeComponent.prototype.buttonClearTap = function () {
        // this.model.locations.splice(0, this.model.locations.length);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [LocationsService_1.LocationsService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxvREFBc0Q7QUFDdEQsc0RBQXdEO0FBQ3hELG1EQUFxRDtBQUNyRCwwREFBNEQ7QUFFNUQsK0RBQTZEO0FBVTdEO0lBR0ksdUJBQW9CLGVBQWlDO1FBQWpDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUZyRCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBR1Y7O3NFQUU4RDtRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJOztzRUFFOEQ7SUFDbEUsQ0FBQztJQUdELDBDQUFrQixHQUFsQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvQyxJQUFJLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvRSxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQy9DLElBQUksTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8s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bEMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBYyxHQUFkO1FBQ0ksK0RBQStEO0lBQ25FLENBQUM7SUFqR1EsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FJdUMsbUNBQWdCO09BSDVDLGFBQWEsQ0FtR3pCO0lBQUQsb0JBQUM7Q0FBQSxBQW5HRCxJQW1HQztBQW5HWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IE1haW5WaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbGliL21haW4tdmlldy1tb2RlbFwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2xpYi9Mb2NhdGlvbnNTZXJ2aWNlXCJcclxuXHJcbmRlY2xhcmUgbGV0IGFuZHJvaWQ6IGFueTtcclxuZGVjbGFyZSBsZXQgY29tOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB3YXRjaElkcyA9IFtdO1xyXG4gICAgbW9kZWw7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uU2VydmljZTogTG9jYXRpb25zU2VydmljZSkge1xyXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cclxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb25zKCk7XHJcbiAgICAgICBjb25zb2xlLmRpcih0aGlzLm1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxyXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0QmFja2dyb3VuZFRhcCgpIHtcclxuICAgICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xyXG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHV0aWxzLmFkLmdldEFwcGxpY2F0aW9uQ29udGV4dCgpO1xyXG4gICAgICAgICAgICBsZXQgaW50ZW50ID0gbmV3IGFuZHJvaWQuY29udGVudC5JbnRlbnQoY29udGV4dCwgY29tLnNlcnZpY2VzLkJHU2VydmljZS5jbGFzcyk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3RhcnRTZXJ2aWNlKGludGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdG9wQmFja2dyb3VuZFRhcCgpIHtcclxuICAgICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xyXG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHV0aWxzLmFkLmdldEFwcGxpY2F0aW9uQ29udGV4dCgpO1xyXG4gICAgICAgICAgICBsZXQgaW50ZW50ID0gbmV3IGFuZHJvaWQuY29udGVudC5JbnRlbnQoY29udGV4dCwgY29tLnNlcnZpY2VzLkJHU2VydmljZS5jbGFzcyk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3RvcFNlcnZpY2UoaW50ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVuYWJsZUxvY2F0aW9uVGFwKCkge1xyXG4gICAgICAgIGdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpLnRoZW4oZnVuY3Rpb24gKGlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgZ2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1dHRvbkdldExvY2F0aW9uVGFwKCkge1xyXG4gICAgICAgIGxldCBsb2NhdGlvbiA9IGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgbWF4aW11bUFnZTogNTAwMCxcclxuICAgICAgICAgICAgdGltZW91dDogMTAwMDBcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAobG9jKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9jKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICB0aGlzLm1vZGVsLmxvY2F0aW9ucy5wdXNoKGxvYyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsb2NhdGlvbi50aGVuKGEgPT4gdGhpcy5sb2NhdGlvblNlcnZpY2UucHVzaChhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1dHRvblN0YXJ0VGFwKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F0Y2hJZHMucHVzaChnZW9sb2NhdGlvbi53YXRjaExvY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGxvYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5tb2RlbC5sb2NhdGlvbnMucHVzaChsb2MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURpc3RhbmNlOiAwLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZTogMzAwMCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtVXBkYXRlVGltZTogMTAwXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBleC5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1dHRvblN0b3BUYXAoKSB7XHJcbiAgICAgICAgbGV0IHdhdGNoSWQgPSB0aGlzLndhdGNoSWRzLnBvcCgpO1xyXG4gICAgICAgIHdoaWxlICh3YXRjaElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh3YXRjaElkKTtcclxuICAgICAgICAgICAgd2F0Y2hJZCA9IHRoaXMud2F0Y2hJZHMucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBidXR0b25DbGVhclRhcCgpIHtcclxuICAgICAgICAvLyB0aGlzLm1vZGVsLmxvY2F0aW9ucy5zcGxpY2UoMCwgdGhpcy5tb2RlbC5sb2NhdGlvbnMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ==