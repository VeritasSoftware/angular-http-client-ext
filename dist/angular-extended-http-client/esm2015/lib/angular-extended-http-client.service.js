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
export class Subscribe {
}
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
export class SubscribeError {
}
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
export class HttpClientExt {
    /**
     * @param {?} client
     */
    constructor(client) {
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
    get(url, success, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => {
                if (x.ok) {
                    /** @type {?} */
                    let subscribe = new Subscribe();
                    subscribe.ok = x.ok;
                    subscribe.status = x.status;
                    subscribe.statusText = x.statusText;
                    subscribe.body = x.body;
                    subscribe.headers = x.headers;
                    success(subscribe);
                }
            }, error => {
                /** @type {?} */
                let subscribe = new SubscribeError();
                subscribe.ok = false;
                subscribe.headers = error.headers;
                subscribe.message = error.message;
                subscribe.status = error.status;
                subscribe.statusText = error.statusText;
                failure(subscribe);
            });
        }
        return httpResponse;
    }
}
HttpClientExt.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpClientExt.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ HttpClientExt.ngInjectableDef = i0.defineInjectable({ factory: function HttpClientExt_Factory() { return new HttpClientExt(i0.inject(i1.HttpClient)); }, token: HttpClientExt, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpClientExt.prototype.client;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7OztBQUVELGlDQUVDOzs7O0FBRUQsc0NBRUM7Ozs7QUFFRCxvQ0FLQzs7O0lBSkcsNEJBQVk7O0lBQ1osaUNBQXFCOztJQUNyQixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7OztBQUd2QixnQ0FJQzs7O0lBSEcsd0JBQVk7O0lBQ1osMEJBQVE7O0lBQ1IsNkJBQXFCOzs7OztBQUd6QixNQUFNLE9BQU8sU0FBUztDQU1yQjs7O0lBTEcsdUJBQVk7O0lBQ1oseUJBQVE7O0lBQ1IsNEJBQXFCOztJQUNyQiwyQkFBZTs7SUFDZiwrQkFBbUI7Ozs7O0FBR3ZCLHFDQUlDOzs7SUFIRyxrQ0FBZ0I7O0lBQ2hCLGlDQUFlOztJQUNmLHFDQUFtQjs7QUFHdkIsTUFBTSxPQUFPLGNBQWM7Q0FNMUI7OztJQUxHLDRCQUFZOztJQUNaLGlDQUFxQjs7SUFDckIsaUNBQWdCOztJQUNoQixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7O0FBR3ZCLHlDQUVDOzs7Ozs7Ozs7O0lBREcsa0ZBQXVIOztBQU0zSCxNQUFNLE9BQU8sYUFBYTs7OztJQUV0QixZQUFvQixNQUFrQjtRQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO0lBRXRDLENBQUM7Ozs7Ozs7OztJQUVELEdBQUcsQ0FBSSxHQUFXLEVBQUUsT0FBd0IsRUFBRSxPQUEwQixFQUFFLE9BQWE7O1lBQy9FLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBSSxHQUFHLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDO1FBRXZJLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNqQixZQUFZO2lCQUNQLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUU7O3dCQUNGLFNBQVMsR0FBaUIsSUFBSSxTQUFTLEVBQUs7b0JBQ2hELFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDcEIsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO29CQUM1QixTQUFTLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7b0JBQ3BDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDeEIsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO29CQUU5QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3RCO1lBQ0wsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFOztvQkFDSCxTQUFTLEdBQW1CLElBQUksY0FBYyxFQUFFO2dCQUNwRCxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDckIsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNsQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUV4QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDVjtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7OztZQXRDSixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUF4RFEsVUFBVTs7Ozs7Ozs7SUEyREgsK0JBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgSU9ic2VydmFibGVCYXNlIHtcbiAgICAoc3Vic2NyaWJlOiBJU3Vic2NyaWJlPFQ+KSA6IHZvaWQ7ICAgIFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlRXJyb3IgZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIChlcnJvcjogSVN1YnNjcmliZUVycm9yKSA6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUJhc2Uge1xuICAgIG9rOiBib29sZWFuO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZzsgICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZTxUPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBib2R5OiBUO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xufVxuXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlPFQ+IGltcGxlbWVudHMgSVN1YnNjcmliZTxUPiB7XG4gICAgb2s6IGJvb2xlYW47XG4gICAgYm9keTogVDtcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBzdGF0dXM6IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUVycm9yIGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzdGF0dXM6IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVFcnJvciBpbXBsZW1lbnRzIElTdWJzY3JpYmVFcnJvciB7XG4gICAgb2s6IGJvb2xlYW47XG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSHR0cENsaWVudEV4dGVuZGVkIHtcbiAgICBnZXQ8VD4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3IsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50RXh0IGltcGxlbWVudHMgSUh0dHBDbGllbnRFeHRlbmRlZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaWVudDogSHR0cENsaWVudClcbiAgICB7XG4gICAgfVxuXG4gICAgZ2V0PFQ+KHVybDogc3RyaW5nLCBzdWNjZXNzPzogSU9ic2VydmFibGU8VD4sIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7ICAgICAgICAgICAgICAgIFxuICAgICAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQuZ2V0PFQ+KHVybCwgb3B0aW9ucyAhPSBudWxsID8geyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSlcblxuICAgICAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeC5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN1YnNjcmliZTogU3Vic2NyaWJlPFQ+ID0gbmV3IFN1YnNjcmliZTxUPigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlLm9rID0geC5vaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSB4LnN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0geC5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlLmJvZHkgPSB4LmJvZHk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IHguaGVhZGVycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHN1YnNjcmliZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmVFcnJvciA9IG5ldyBTdWJzY3JpYmVFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmUub2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmUubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICBmYWlsdXJlKHN1YnNjcmliZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gICAgICAgIFxuXG4gICAgICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxuICAgIH1cbn0iXX0=