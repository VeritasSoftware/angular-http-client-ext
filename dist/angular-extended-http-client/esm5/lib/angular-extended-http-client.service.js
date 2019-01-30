/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * @record
 */
export function IObservableBase() { }
/**
 * @record
 * @template T
 */
export function IObservable() { }
/**
 * @record
 */
export function IObservableError() { }
/**
 * @record
 */
export function ISubscribeBase() { }
if (false) {
    /** @type {?} */
    ISubscribeBase.prototype.ok;
    /** @type {?} */
    ISubscribeBase.prototype.headers;
    /** @type {?} */
    ISubscribeBase.prototype.status;
    /** @type {?} */
    ISubscribeBase.prototype.statusText;
}
/**
 * @record
 * @template T
 */
export function ISubscribe() { }
if (false) {
    /** @type {?} */
    ISubscribe.prototype.ok;
    /** @type {?} */
    ISubscribe.prototype.body;
    /** @type {?} */
    ISubscribe.prototype.headers;
}
/**
 * @template T
 */
var /**
 * @template T
 */
Subscribe = /** @class */ (function () {
    function Subscribe() {
    }
    return Subscribe;
}());
/**
 * @template T
 */
export { Subscribe };
if (false) {
    /** @type {?} */
    Subscribe.prototype.ok;
    /** @type {?} */
    Subscribe.prototype.body;
    /** @type {?} */
    Subscribe.prototype.headers;
    /** @type {?} */
    Subscribe.prototype.status;
    /** @type {?} */
    Subscribe.prototype.statusText;
}
/**
 * @record
 */
export function ISubscribeError() { }
if (false) {
    /** @type {?} */
    ISubscribeError.prototype.message;
    /** @type {?} */
    ISubscribeError.prototype.status;
    /** @type {?} */
    ISubscribeError.prototype.statusText;
}
var SubscribeError = /** @class */ (function () {
    function SubscribeError() {
    }
    return SubscribeError;
}());
export { SubscribeError };
if (false) {
    /** @type {?} */
    SubscribeError.prototype.ok;
    /** @type {?} */
    SubscribeError.prototype.headers;
    /** @type {?} */
    SubscribeError.prototype.message;
    /** @type {?} */
    SubscribeError.prototype.status;
    /** @type {?} */
    SubscribeError.prototype.statusText;
}
/**
 * @record
 */
export function IHttpClientExtended() { }
if (false) {
    /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.get = function (url, success, failure, options) { };
}
var HttpClientExt = /** @class */ (function () {
    function HttpClientExt(client) {
        this.client = client;
    }
    /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.get = /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, success, failure, options) {
        /** @type {?} */
        var httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) {
                if (x.ok) {
                    /** @type {?} */
                    var subscribe = new Subscribe();
                    subscribe.ok = x.ok;
                    subscribe.status = x.status;
                    subscribe.statusText = x.statusText;
                    subscribe.body = x.body;
                    subscribe.headers = x.headers;
                    success(subscribe);
                }
            }, function (error) {
                /** @type {?} */
                var subscribe = new SubscribeError();
                subscribe.ok = false;
                subscribe.headers = error.headers;
                subscribe.message = error.message;
                subscribe.status = error.status;
                subscribe.statusText = error.statusText;
                failure(subscribe);
            });
        }
        return httpResponse;
    };
    HttpClientExt.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpClientExt.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpClientExt.ngInjectableDef = i0.defineInjectable({ factory: function HttpClientExt_Factory() { return new HttpClientExt(i0.inject(i1.HttpClient)); }, token: HttpClientExt, providedIn: "root" });
    return HttpClientExt;
}());
export { HttpClientExt };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpClientExt.prototype.client;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7OztBQUVELGlDQUVDOzs7O0FBRUQsc0NBRUM7Ozs7QUFFRCxvQ0FLQzs7O0lBSkcsNEJBQVk7O0lBQ1osaUNBQXFCOztJQUNyQixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7OztBQUd2QixnQ0FJQzs7O0lBSEcsd0JBQVk7O0lBQ1osMEJBQVE7O0lBQ1IsNkJBQXFCOzs7OztBQUd6Qjs7OztJQUFBO0lBTUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7Ozs7SUFMRyx1QkFBWTs7SUFDWix5QkFBUTs7SUFDUiw0QkFBcUI7O0lBQ3JCLDJCQUFlOztJQUNmLCtCQUFtQjs7Ozs7QUFHdkIscUNBSUM7OztJQUhHLGtDQUFnQjs7SUFDaEIsaUNBQWU7O0lBQ2YscUNBQW1COztBQUd2QjtJQUFBO0lBTUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMRyw0QkFBWTs7SUFDWixpQ0FBcUI7O0lBQ3JCLGlDQUFnQjs7SUFDaEIsZ0NBQWU7O0lBQ2Ysb0NBQW1COzs7OztBQUd2Qix5Q0FFQzs7Ozs7Ozs7OztJQURHLGtGQUF1SDs7QUFHM0g7SUFLSSx1QkFBb0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUV0QyxDQUFDOzs7Ozs7Ozs7SUFFRCwyQkFBRzs7Ozs7Ozs7SUFBSCxVQUFPLEdBQVcsRUFBRSxPQUF3QixFQUFFLE9BQTBCLEVBQUUsT0FBYTs7WUFDL0UsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFJLEdBQUcsRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUM7UUFFdkksSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ2pCLFlBQVk7aUJBQ1AsU0FBUyxDQUFDLFVBQUEsQ0FBQztnQkFDUixJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUU7O3dCQUNGLFNBQVMsR0FBaUIsSUFBSSxTQUFTLEVBQUs7b0JBQ2hELFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDcEIsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO29CQUM1QixTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7b0JBQ3BDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDeEIsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO29CQUU5QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3RCO1lBQ0wsQ0FBQyxFQUFFLFVBQUEsS0FBSzs7b0JBQ0EsU0FBUyxHQUFtQixJQUFJLGNBQWMsRUFBRTtnQkFDcEQsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNsQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFFeEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDOztnQkF0Q0osVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkF4RFEsVUFBVTs7O3dCQURuQjtDQThGQyxBQXZDRCxJQXVDQztTQXBDWSxhQUFhOzs7Ozs7SUFFViwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlQmFzZSB7XG4gICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGU8VD4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIChzdWJzY3JpYmU6IElTdWJzY3JpYmU8VD4pIDogdm9pZDsgICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVFcnJvciBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XG4gICAgKGVycm9yOiBJU3Vic2NyaWJlRXJyb3IpIDogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlQmFzZSB7XG4gICAgb2s6IGJvb2xlYW47XG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgc3RhdHVzOiBudW1iZXI7XG4gICAgc3RhdHVzVGV4dDogc3RyaW5nOyAgICBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlPFQ+IGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xuICAgIG9rOiBib29sZWFuO1xuICAgIGJvZHk6IFQ7XG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmU8VD4gaW1wbGVtZW50cyBJU3Vic2NyaWJlPFQ+IHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBib2R5OiBUO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlRXJyb3IgZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUVycm9yIGltcGxlbWVudHMgSVN1YnNjcmliZUVycm9yIHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBudW1iZXI7XG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElIdHRwQ2xpZW50RXh0ZW5kZWQge1xuICAgIGdldDxUPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFQ+LCBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvciwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnRFeHQgaW1wbGVtZW50cyBJSHR0cENsaWVudEV4dGVuZGVkIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xpZW50OiBIdHRwQ2xpZW50KVxuICAgIHtcbiAgICB9XG5cbiAgICBnZXQ8VD4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3IsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHsgICAgICAgICAgICAgICAgXG4gICAgICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5nZXQ8VD4odXJsLCBvcHRpb25zICE9IG51bGwgPyB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuXG4gICAgICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGh0dHBSZXNwb25zZVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4Lm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmU8VD4gPSBuZXcgU3Vic2NyaWJlPFQ+KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmUub2sgPSB4Lm9rO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IHguc3RhdHVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSB4LnN0YXR1c1RleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmUuYm9keSA9IHguYm9keTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZS5oZWFkZXJzID0geC5oZWFkZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3Moc3Vic2NyaWJlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJzY3JpYmU6IFN1YnNjcmliZUVycm9yID0gbmV3IFN1YnNjcmliZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZS5vayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IGVycm9yLmhlYWRlcnM7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZS5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSBlcnJvci5zdGF0dXNUZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoc3Vic2NyaWJlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXG4gICAgfVxufSJdfQ==