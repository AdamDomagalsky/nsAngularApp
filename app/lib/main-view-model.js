"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var core_1 = require("@angular/core");
var MainViewModel = /** @class */ (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MainViewModel.prototype, "locations", {
        get: function () {
            if (!this._locations) {
                this._locations = new observable_array_1.ObservableArray();
            }
            return this._locations;
        },
        set: function (value) {
            if (this._locations !== value) {
                this._locations = value;
                this.notifyPropertyChange('locations', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel = __decorate([
        core_1.Injectable()
    ], MainViewModel);
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsOENBQTZDO0FBQzdDLDBEQUF3RDtBQUN4RCxzQ0FBMkM7QUFHM0M7SUFBbUMsaUNBQVU7SUFBN0M7O0lBZ0JBLENBQUM7SUFiRyxzQkFBVyxvQ0FBUzthQUFwQjtZQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQ0FBZSxFQUF3QixDQUFDO1lBQ2xFLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBcUIsS0FBNEM7WUFDN0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBQ0wsQ0FBQzs7O09BUEE7SUFSUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7T0FDQSxhQUFhLENBZ0J6QjtJQUFELG9CQUFDO0NBQUEsQUFoQkQsQ0FBbUMsdUJBQVUsR0FnQjVDO0FBaEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2xvY2F0aW9uczogT2JzZXJ2YWJsZUFycmF5PGdlb2xvY2F0aW9uLkxvY2F0aW9uPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYXRpb25zKCk6IE9ic2VydmFibGVBcnJheTxnZW9sb2NhdGlvbi5Mb2NhdGlvbj4ge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2F0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5fbG9jYXRpb25zID0gbmV3IE9ic2VydmFibGVBcnJheTxnZW9sb2NhdGlvbi5Mb2NhdGlvbj4oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYXRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbG9jYXRpb25zKHZhbHVlOiBPYnNlcnZhYmxlQXJyYXk8Z2VvbG9jYXRpb24uTG9jYXRpb24+KSB7XG4gICAgICAgIGlmICh0aGlzLl9sb2NhdGlvbnMgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhdGlvbnMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2xvY2F0aW9ucycsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=