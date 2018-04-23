"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("tns-core-modules/utils/utils");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("tns-core-modules/ui/enums");
var application = require("tns-core-modules/application");
var main_view_model_1 = require("../../lib/main-view-model");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(model) {
        this.model = model;
        this.watchIds = [];
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
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
        var location = geolocation.getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high,
            maximumAge: 5000,
            timeout: 10000
        })
            .then(function (loc) {
            if (loc) {
                this.model.locations.push(loc);
            }
        }, function (e) {
            console.log("Error: " + (e.message || e));
        });
    };
    HomeComponent.prototype.buttonStartTap = function () {
        try {
            this.watchIds.push(geolocation.watchLocation(function (loc) {
                if (loc) {
                    this.model.locations.push(loc);
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
        this.model.locations.splice(0, this.model.locations.length);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [main_view_model_1.MainViewModel])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxvREFBc0Q7QUFDdEQsc0RBQXdEO0FBQ3hELG1EQUFxRDtBQUNyRCwwREFBNEQ7QUFDNUQsNkRBQTBEO0FBVzFEO0lBR0ksdUJBQW9CLEtBQW9CO1FBQXBCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFGeEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUdWOztzRUFFOEQ7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUFHRCwwQ0FBa0IsR0FBbEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0UsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvQyxJQUFJLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FB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LENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUE3RlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FJNkIsK0JBQWE7T0FIL0IsYUFBYSxDQStGekI7SUFBRCxvQkFBQztDQUFBLEFBL0ZELElBK0ZDO0FBL0ZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgTWFpblZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9saWIvbWFpbi12aWV3LW1vZGVsXCI7XHJcbiBcclxuXHJcbmRlY2xhcmUgbGV0IGFuZHJvaWQ6IGFueTtcclxuZGVjbGFyZSBsZXQgY29tOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB3YXRjaElkcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kZWw6IE1haW5WaWV3TW9kZWwpIHtcclxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICogVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXHJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgICAgIGNvbnNvbGUuZGlyKHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuXHJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnRCYWNrZ3JvdW5kVGFwKCkge1xyXG4gICAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0gdXRpbHMuYWQuZ2V0QXBwbGljYXRpb25Db250ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBpbnRlbnQgPSBuZXcgYW5kcm9pZC5jb250ZW50LkludGVudChjb250ZXh0LCBjb20uc2VydmljZXMuQkdTZXJ2aWNlLmNsYXNzKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdGFydFNlcnZpY2UoaW50ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0b3BCYWNrZ3JvdW5kVGFwKCkge1xyXG4gICAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0gdXRpbHMuYWQuZ2V0QXBwbGljYXRpb25Db250ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBpbnRlbnQgPSBuZXcgYW5kcm9pZC5jb250ZW50LkludGVudChjb250ZXh0LCBjb20uc2VydmljZXMuQkdTZXJ2aWNlLmNsYXNzKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdG9wU2VydmljZShpbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZW5hYmxlTG9jYXRpb25UYXAoKSB7XHJcbiAgICAgICAgZ2VvbG9jYXRpb24uaXNFbmFibGVkKCkudGhlbihmdW5jdGlvbiAoaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYnV0dG9uR2V0TG9jYXRpb25UYXAoKSB7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gZ2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHtcclxuICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxyXG4gICAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChsb2MpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2MpIHtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwubG9jYXRpb25zLnB1c2gobG9jKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgKGUubWVzc2FnZSB8fCBlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBidXR0b25TdGFydFRhcCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLndhdGNoSWRzLnB1c2goZ2VvbG9jYXRpb24ud2F0Y2hMb2NhdGlvbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChsb2MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwubG9jYXRpb25zLnB1c2gobG9jKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEaXN0YW5jZTogMC4xLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWU6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bVVwZGF0ZVRpbWU6IDEwMFxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXgubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBidXR0b25TdG9wVGFwKCkge1xyXG4gICAgICAgIGxldCB3YXRjaElkID0gdGhpcy53YXRjaElkcy5wb3AoKTtcclxuICAgICAgICB3aGlsZSAod2F0Y2hJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGdlb2xvY2F0aW9uLmNsZWFyV2F0Y2god2F0Y2hJZCk7XHJcbiAgICAgICAgICAgIHdhdGNoSWQgPSB0aGlzLndhdGNoSWRzLnBvcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYnV0dG9uQ2xlYXJUYXAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5sb2NhdGlvbnMuc3BsaWNlKDAsIHRoaXMubW9kZWwubG9jYXRpb25zLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=