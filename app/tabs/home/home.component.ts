import { Component, OnInit } from "@angular/core";
import * as utils from "tns-core-modules/utils/utils";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";
import * as application from "tns-core-modules/application";
import { MainViewModel } from "../../lib/main-view-model";
 

declare let android: any;
declare let com: any;

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    watchIds = [];
    model: MainViewModel;

    constructor() {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
       this.model = new MainViewModel();
       console.dir(this.model);
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    }


    startBackgroundTap() {
        if (application.android) {
            let context = utils.ad.getApplicationContext();
            let intent = new android.content.Intent(context, com.nativescript.location.BackgroundService.class);
            context.startService(intent);
        }
    }
    
    stopBackgroundTap() {
        if (application.android) {
            let context = utils.ad.getApplicationContext();
            let intent = new android.content.Intent(context, com.nativescript.location.BackgroundService.class);
            context.stopService(intent);
        }
    }
    
    enableLocationTap() {
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
    }
    
    buttonGetLocationTap() {
        let location = geolocation.getCurrentLocation({
            desiredAccuracy: Accuracy.high,
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
    }
    
    buttonStartTap() {
        try {
            this.watchIds.push(geolocation.watchLocation(
                function (loc) {
                    if (loc) {
                        this.model.locations.push(loc);
                    }
                },
                function (e) {
                    console.log("Error: " + e.message);
                },
                {
                    desiredAccuracy: Accuracy.high,
                    updateDistance: 0.1,
                    updateTime: 3000,
                    minimumUpdateTime: 100
                }));
        } catch (ex) {
            console.log("Error: " + ex.message);
        }
    }
    
    buttonStopTap() {
        let watchId = this.watchIds.pop();
        while (watchId != null) {
            geolocation.clearWatch(watchId);
            watchId = this.watchIds.pop();
        }
    }
    
    buttonClearTap() {
        this.model.locations.splice(0, this.model.locations.length);
    }
    
}
