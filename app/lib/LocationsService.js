"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LocationsService = /** @class */ (function () {
    function LocationsService() {
        this.locations = new Array();
    }
    LocationsService.prototype.getLocations = function () {
        return this.locations;
    };
    LocationsService.prototype.push = function (obj) {
        var latitude = obj.latitude, longitude = obj.longitude, altitude = obj.altitude, horizontalAccuracy = obj.horizontalAccuracy, verticalAccuracy = obj.verticalAccuracy, speed = obj.speed, direction = obj.direction, timestamp = obj.timestamp;
        var tmp = { latitude: latitude, longitude: longitude, altitude: altitude, horizontalAccuracy: horizontalAccuracy, verticalAccuracy: verticalAccuracy, speed: speed, direction: direction, timestamp: timestamp };
        this.locations.push(obj);
    };
    LocationsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LocationsService);
    return LocationsService;
}());
exports.LocationsService = LocationsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYXRpb25zU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvY2F0aW9uc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFJM0M7SUFFQztRQUNPLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsdUNBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQkFBSSxHQUFKLFVBQUssR0FBRztRQUNDLElBQUEsdUJBQVEsRUFBQyx5QkFBUyxFQUFDLHVCQUFRLEVBQUMsMkNBQWtCLEVBQUMsdUNBQWdCLEVBQUUsaUJBQUssRUFBQyx5QkFBUyxFQUFDLHlCQUFTLENBQVE7UUFDdkcsSUFBSSxHQUFHLEdBQUcsRUFBQyxRQUFRLFVBQUEsRUFBQyxTQUFTLFdBQUEsRUFBQyxRQUFRLFVBQUEsRUFBQyxrQkFBa0Isb0JBQUEsRUFBQyxnQkFBZ0Isa0JBQUEsRUFBRSxLQUFLLE9BQUEsRUFBQyxTQUFTLFdBQUEsRUFBQyxTQUFTLFdBQUEsRUFBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFkUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTs7T0FDQSxnQkFBZ0IsQ0FlNUI7SUFBRCx1QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbnNTZXJ2aWNlIHtcbiAgICBsb2NhdGlvbnM6IEFycmF5PGFueT47XG5cdGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IG5ldyBBcnJheSgpO1xuICAgIH1cblxuICAgIGdldExvY2F0aW9ucygpe1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbnM7XG4gICAgfVxuXG4gICAgcHVzaChvYmope1xuICAgICAgICBsZXQge2xhdGl0dWRlLGxvbmdpdHVkZSxhbHRpdHVkZSxob3Jpem9udGFsQWNjdXJhY3ksdmVydGljYWxBY2N1cmFjeSwgc3BlZWQsZGlyZWN0aW9uLHRpbWVzdGFtcH0gPSBvYmo7XG4gICAgICAgIGxldCB0bXAgPSB7bGF0aXR1ZGUsbG9uZ2l0dWRlLGFsdGl0dWRlLGhvcml6b250YWxBY2N1cmFjeSx2ZXJ0aWNhbEFjY3VyYWN5LCBzcGVlZCxkaXJlY3Rpb24sdGltZXN0YW1wfTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMucHVzaChvYmopO1xuICAgIH1cbn0iXX0=