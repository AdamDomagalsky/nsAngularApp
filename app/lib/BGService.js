"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var geolocation = require("nativescript-geolocation");
var enums_1 = require("tns-core-modules/ui/enums");
var application = require("tns-core-modules/application");
var Toast = require("nativescript-toast");
var core_1 = require("@angular/core");
var BGService = /** @class */ (function () {
    function BGService() {
        if (application.android) {
            console.log('eeeeeeeeeeeeeee');
            android.app.Service.extend("com.services.BGService", {
                onStartCommand: function (intent, flags, startId) {
                    this.super.onStartCommand(intent, flags, startId);
                    return android.app.Service.START_STICKY;
                },
                onCreate: function () {
                    var that = this;
                    geolocation.enableLocationRequest().then(function () {
                        that.id = geolocation.watchLocation(function (loc) {
                            if (loc) {
                                var toast = Toast.makeText('Background Location: ' + loc.latitude + ' ' + loc.longitude);
                                toast.show();
                                console.log('Background Location: ' + loc.latitude + ' ' + loc.longitude);
                            }
                        }, function (e) {
                            console.log("Background watchLocation error: " + (e.message || e));
                        }, {
                            desiredAccuracy: enums_1.Accuracy.high,
                            updateDistance: 0.1,
                            updateTime: 3000,
                            minimumUpdateTime: 100
                        });
                    }, function (e) {
                        console.log("Background enableLocationRequest error: " + (e.message || e));
                    });
                },
                onBind: function (intent) {
                    console.log("on Bind Services");
                },
                onUnbind: function (intent) {
                    console.log('UnBind Service');
                },
                onDestroy: function () {
                    console.log('service onDestroy');
                    geolocation.clearWatch(this.id);
                }
            });
        }
    }
    BGService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BGService);
    return BGService;
}());
exports.BGService = BGService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkdTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQkdTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQXdEO0FBQ3hELG1EQUFxRDtBQUNyRCwwREFBNEQ7QUFDNUQsMENBQTRDO0FBQzVDLHNDQUEyQztBQU0zQztJQUNDO1FBQ0MsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBUSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTtnQkFDM0QsY0FBYyxFQUFFLFVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPO29CQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2dCQUN6QyxDQUFDO2dCQUNELFFBQVEsRUFBRTtvQkFDVCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUNsQyxVQUFVLEdBQUc7NEJBQ1osRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDVCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLHVCQUF1QixHQUFHLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDekYsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dDQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUMzRSxDQUFDO3dCQUNGLENBQUMsRUFDRCxVQUFVLENBQUM7NEJBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEUsQ0FBQyxFQUNEOzRCQUNDLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7NEJBQzlCLGNBQWMsRUFBRSxHQUFHOzRCQUNuQixVQUFVLEVBQUUsSUFBSTs0QkFDaEIsaUJBQWlCLEVBQUUsR0FBRzt5QkFDdEIsQ0FBQyxDQUFDO29CQUNMLENBQUMsRUFBRSxVQUFVLENBQUM7d0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFDRCxNQUFNLEVBQUUsVUFBVSxNQUFNO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0QsUUFBUSxFQUFFLFVBQVUsTUFBTTtvQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUNELFNBQVMsRUFBRTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2pDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2FBQ0QsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUM7SUE3Q1csU0FBUztRQURyQixpQkFBVSxFQUFFOztPQUNBLFNBQVMsQ0E4Q3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZGVjbGFyZSBsZXQgYW5kcm9pZDogYW55O1xuZGVjbGFyZSBsZXQgY29tOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCR1NlcnZpY2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRpZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2VlZWVlZWVlZWVlZWVlZScpO1xuXHRcdFx0KDxhbnk+YW5kcm9pZC5hcHAuU2VydmljZSkuZXh0ZW5kKFwiY29tLnNlcnZpY2VzLkJHU2VydmljZVwiLCB7XG5cdFx0XHRcdG9uU3RhcnRDb21tYW5kOiBmdW5jdGlvbiAoaW50ZW50LCBmbGFncywgc3RhcnRJZCkge1xuXHRcdFx0XHRcdHRoaXMuc3VwZXIub25TdGFydENvbW1hbmQoaW50ZW50LCBmbGFncywgc3RhcnRJZCk7XG5cdFx0XHRcdFx0cmV0dXJuIGFuZHJvaWQuYXBwLlNlcnZpY2UuU1RBUlRfU1RJQ0tZO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvbkNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcblx0XHRcdFx0XHRnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHRoYXQuaWQgPSBnZW9sb2NhdGlvbi53YXRjaExvY2F0aW9uKFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAobG9jKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGxvYykge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHRvYXN0ID0gVG9hc3QubWFrZVRleHQoJ0JhY2tncm91bmQgTG9jYXRpb246ICcgKyBsb2MubGF0aXR1ZGUgKyAnICcgKyBsb2MubG9uZ2l0dWRlKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRvYXN0LnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdCYWNrZ3JvdW5kIExvY2F0aW9uOiAnICsgbG9jLmxhdGl0dWRlICsgJyAnICsgbG9jLmxvbmdpdHVkZSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQmFja2dyb3VuZCB3YXRjaExvY2F0aW9uIGVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxuXHRcdFx0XHRcdFx0XHRcdHVwZGF0ZURpc3RhbmNlOiAwLjEsXG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlVGltZTogMzAwMCxcblx0XHRcdFx0XHRcdFx0XHRtaW5pbXVtVXBkYXRlVGltZTogMTAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkJhY2tncm91bmQgZW5hYmxlTG9jYXRpb25SZXF1ZXN0IGVycm9yOiBcIiArIChlLm1lc3NhZ2UgfHwgZSkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvbkJpbmQ6IGZ1bmN0aW9uIChpbnRlbnQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm9uIEJpbmQgU2VydmljZXNcIik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uVW5iaW5kOiBmdW5jdGlvbiAoaW50ZW50KSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1VuQmluZCBTZXJ2aWNlJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uRGVzdHJveTogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzZXJ2aWNlIG9uRGVzdHJveScpO1xuXHRcdFx0XHRcdGdlb2xvY2F0aW9uLmNsZWFyV2F0Y2godGhpcy5pZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSJdfQ==