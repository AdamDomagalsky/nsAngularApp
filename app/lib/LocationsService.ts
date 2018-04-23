import { Injectable } from "@angular/core";


@Injectable()
export class LocationsService {
    locations: Array<any>;
	constructor() {
        this.locations = new Array();
    }

    getLocations(){
        return this.locations;
    }

    push(obj){
        let {latitude,longitude,altitude,horizontalAccuracy,verticalAccuracy, speed,direction,timestamp} = obj;
        let tmp = {latitude,longitude,altitude,horizontalAccuracy,verticalAccuracy, speed,direction,timestamp};
        this.locations.push(obj);
    }
}