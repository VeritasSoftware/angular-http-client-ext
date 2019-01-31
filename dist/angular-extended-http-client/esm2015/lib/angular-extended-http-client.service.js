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
 * @template TError
 */
export function IObservableCustomError() { }
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
/**
 * @record
 * @template TError
 */
export function ISubscribeCustomError() { }
if (false) {
    /** @type {?} */
    ISubscribeCustomError.prototype.error;
    /** @type {?} */
    ISubscribeCustomError.prototype.message;
    /** @type {?} */
    ISubscribeCustomError.prototype.status;
    /** @type {?} */
    ISubscribeCustomError.prototype.statusText;
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
 * @template TError
 */
export class SubscribeCustomError {
}
if (false) {
    /** @type {?} */
    SubscribeCustomError.prototype.ok;
    /** @type {?} */
    SubscribeCustomError.prototype.error;
    /** @type {?} */
    SubscribeCustomError.prototype.headers;
    /** @type {?} */
    SubscribeCustomError.prototype.message;
    /** @type {?} */
    SubscribeCustomError.prototype.status;
    /** @type {?} */
    SubscribeCustomError.prototype.statusText;
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
    /**
     * @template T, TError
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.getUsingCustomError = function (url, success, failure, options) { };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.post = function (url, model, success, failure, options) { };
    /**
     * @template TRequest, TResponse, TError
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.postUsingCustomError = function (url, model, success, failure, options) { };
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
                .subscribe(x => this.processSuccessResponse(x, success), error => this.processErrorResponse(error, failure));
        }
        return httpResponse;
    }
    /**
     * @template T, TError
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    getUsingCustomError(url, success, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessResponse(x, success), error => this.processCustomErrorResponse((/** @type {?} */ (error)), failure));
        }
        return httpResponse;
    }
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    post(url, model, success, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessResponse(x, success), error => this.processErrorResponse(error, failure));
        }
        return httpResponse;
    }
    /**
     * @template TRequest, TResponse, TError
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    postUsingCustomError(url, model, success, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessResponse(x, success), error => this.processCustomErrorResponse((/** @type {?} */ (error)), failure));
        }
        return httpResponse;
    }
    /**
     * @private
     * @template TResponse
     * @param {?} response
     * @param {?} success
     * @return {?}
     */
    processSuccessResponse(response, success) {
        if (success != null) {
            if (response.ok) {
                /** @type {?} */
                let subscribe = new Subscribe();
                subscribe.ok = response.ok;
                subscribe.status = response.status;
                subscribe.statusText = response.statusText;
                subscribe.body = response.body;
                subscribe.headers = response.headers;
                success(subscribe);
            }
        }
    }
    /**
     * @private
     * @param {?} error
     * @param {?} failure
     * @return {?}
     */
    processErrorResponse(error, failure) {
        if (failure != null) {
            /** @type {?} */
            let subscribe = new SubscribeError();
            subscribe.ok = false;
            subscribe.headers = error.headers;
            subscribe.message = error.message;
            subscribe.status = error.status;
            subscribe.statusText = error.statusText;
            failure(subscribe);
        }
    }
    /**
     * @private
     * @template TError
     * @param {?} error
     * @param {?} failure
     * @return {?}
     */
    processCustomErrorResponse(error, failure) {
        if (failure != null) {
            debugger;
            /** @type {?} */
            let subscribe = new SubscribeCustomError();
            subscribe.ok = false;
            if (error.error) {
                subscribe.error = error.error;
            }
            subscribe.headers = error.headers;
            subscribe.message = error.message;
            subscribe.status = error.status;
            subscribe.statusText = error.statusText;
            failure(subscribe);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7OztBQUVELGlDQUVDOzs7O0FBRUQsc0NBRUM7Ozs7O0FBRUQsNENBRUM7Ozs7QUFFRCxvQ0FLQzs7O0lBSkcsNEJBQVk7O0lBQ1osaUNBQXFCOztJQUNyQixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7OztBQUd2QixnQ0FJQzs7O0lBSEcsd0JBQVk7O0lBQ1osMEJBQVE7O0lBQ1IsNkJBQXFCOzs7OztBQUd6QixNQUFNLE9BQU8sU0FBUztDQU1yQjs7O0lBTEcsdUJBQVk7O0lBQ1oseUJBQVE7O0lBQ1IsNEJBQXFCOztJQUNyQiwyQkFBZTs7SUFDZiwrQkFBbUI7Ozs7O0FBR3ZCLHFDQUlDOzs7SUFIRyxrQ0FBZ0I7O0lBQ2hCLGlDQUFlOztJQUNmLHFDQUFtQjs7Ozs7O0FBR3ZCLDJDQUtDOzs7SUFKQyxzQ0FBYzs7SUFDZCx3Q0FBZ0I7O0lBQ2hCLHVDQUFlOztJQUNmLDJDQUFtQjs7QUFHckIsTUFBTSxPQUFPLGNBQWM7Q0FNMUI7OztJQUxHLDRCQUFZOztJQUNaLGlDQUFxQjs7SUFDckIsaUNBQWdCOztJQUNoQixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7O0FBR3ZCLE1BQU0sT0FBTyxvQkFBb0I7Q0FPaEM7OztJQU5DLGtDQUFZOztJQUNaLHFDQUFjOztJQUNkLHVDQUFxQjs7SUFDckIsdUNBQWdCOztJQUNoQixzQ0FBZTs7SUFDZiwwQ0FBbUI7Ozs7O0FBR3JCLHlD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QUNwRCxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNyQixTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDbEMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFFeEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFTywwQkFBMEIsQ0FBUyxLQUFVLEVBQUUsT0FBdUM7UUFFNUYsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ25CLFFBQVEsQ0FBQzs7Z0JBQ0wsU0FBUyxHQUFpQyxJQUFJLG9CQUFvQixFQUFFO1lBQ3hFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDZixTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDL0I7WUFDRCxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDbEMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFFeEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7O1lBMUdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXRGUSxVQUFVOzs7Ozs7OztJQXlGTCwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlQmFzZSB7XG4gICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGU8VD4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIChzdWJzY3JpYmU6IElTdWJzY3JpYmU8VD4pIDogdm9pZDsgICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVFcnJvciBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XG4gICAgKGVycm9yOiBJU3Vic2NyaWJlRXJyb3IpIDogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIChlcnJvcjogSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4pIDogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlQmFzZSB7XG4gICAgb2s6IGJvb2xlYW47XG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgc3RhdHVzOiBudW1iZXI7XG4gICAgc3RhdHVzVGV4dDogc3RyaW5nOyAgICBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlPFQ+IGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xuICAgIG9rOiBib29sZWFuO1xuICAgIGJvZHk6IFQ7XG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmU8VD4gaW1wbGVtZW50cyBJU3Vic2NyaWJlPFQ+IHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBib2R5OiBUO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlRXJyb3IgZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcbiAgZXJyb3I6IFRFcnJvcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBzdGF0dXM6IG51bWJlcjtcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlRXJyb3IgaW1wbGVtZW50cyBJU3Vic2NyaWJlRXJyb3Ige1xuICAgIG9rOiBib29sZWFuO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzdGF0dXM6IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IGltcGxlbWVudHMgSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4ge1xuICBvazogYm9vbGVhbjtcbiAgZXJyb3I6IFRFcnJvcjtcbiAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgc3RhdHVzOiBudW1iZXI7XG4gIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSHR0cENsaWVudEV4dGVuZGVkIHtcbiAgICBnZXQ8VD4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3IsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xuICAgIFxuICAgIGdldFVzaW5nQ3VzdG9tRXJyb3I8VCwgVEVycm9yPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFQ+LCBmYWlsdXJlPzogSU9ic2VydmFibGVDdXN0b21FcnJvcjxURXJyb3I+LCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcblxuICAgIHBvc3Q8VFJlcXVlc3QsIFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvciwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjtcblxuICAgIHBvc3RVc2luZ0N1c3RvbUVycm9yPFRSZXF1ZXN0LCBUUmVzcG9uc2UsIFRFcnJvcj4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUUmVzcG9uc2U+LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudEV4dCBpbXBsZW1lbnRzIElIdHRwQ2xpZW50RXh0ZW5kZWQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xpZW50OiBIdHRwQ2xpZW50KVxuICB7XG4gIH1cblxuICBnZXQ8VD4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3IsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHsgICAgICAgICAgICAgICAgXG4gICAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQuZ2V0PFQ+KHVybCwgb3B0aW9ucyAhPSBudWxsID8geyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSlcblxuICAgICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICAgIGh0dHBSZXNwb25zZVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUpKTtcbiAgICAgIH0gICAgICAgIFxuXG4gICAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfVxuXG4gIGdldFVzaW5nQ3VzdG9tRXJyb3I8VCwgVEVycm9yPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFQ+LCBmYWlsdXJlPzogSU9ic2VydmFibGVDdXN0b21FcnJvcjxURXJyb3I+LCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7XG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LmdldDxUPih1cmwsIG9wdGlvbnMgIT0gbnVsbCA/IHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pXG5cbiAgICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NDdXN0b21FcnJvclJlc3BvbnNlKDxURXJyb3I+ZXJyb3IsIGZhaWx1cmUpKTtcbiAgICAgIH0gICAgICAgIFxuXG4gICAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfVxuXG5cbiAgcG9zdDxUUmVxdWVzdCwgVFJlc3BvbnNlPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUUmVzcG9uc2U+LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+IHsgICAgICAgICAgICAgICAgXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LnBvc3Q8VFJlc3BvbnNlPih1cmwsIG1vZGVsLCBvcHRpb25zICE9IG51bGwgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgaHR0cFJlc3BvbnNlXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUpKTtcbiAgICB9ICAgICAgICBcblxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxuICB9XG5cbiAgcG9zdFVzaW5nQ3VzdG9tRXJyb3I8VFJlcXVlc3QsIFRSZXNwb25zZSwgVEVycm9yPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUUmVzcG9uc2U+LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUN1c3RvbUVycm9yPFRFcnJvcj4sIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucG9zdDxUUmVzcG9uc2U+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzQ3VzdG9tRXJyb3JSZXNwb25zZSg8VEVycm9yPmVycm9yLCBmYWlsdXJlKSk7XG4gICAgfSAgICAgICAgXG5cbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfSAgXG5cbiAgcHJpdmF0ZSBwcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlPFRSZXNwb25zZT4ocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBzdWNjZXNzOiBJT2JzZXJ2YWJsZTxUUmVzcG9uc2U+KSA6IHZvaWQge1xuXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGxldCBzdWJzY3JpYmU6IFN1YnNjcmliZTxUUmVzcG9uc2U+ID0gbmV3IFN1YnNjcmliZTxUUmVzcG9uc2U+KCk7XG4gICAgICAgIHN1YnNjcmliZS5vayA9IHJlc3BvbnNlLm9rO1xuICAgICAgICBzdWJzY3JpYmUuc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBzdWJzY3JpYmUuc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG4gICAgICAgIHN1YnNjcmliZS5ib2R5ID0gcmVzcG9uc2UuYm9keTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgc3Vic2NyaWJlLmhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBzdWNjZXNzKHN1YnNjcmliZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH0gICAgICBcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3I6IGFueSwgZmFpbHVyZTogSU9ic2VydmFibGVFcnJvcikgOiB2b2lkIHtcblxuICAgIGlmIChmYWlsdXJlICE9IG51bGwpIHtcbiAgICAgIGxldCBzdWJzY3JpYmU6IFN1YnNjcmliZUVycm9yID0gbmV3IFN1YnNjcmliZUVycm9yKCk7XG4gICAgICBzdWJzY3JpYmUub2sgPSBmYWxzZTtcbiAgICAgIHN1YnNjcmliZS5oZWFkZXJzID0gZXJyb3IuaGVhZGVycztcbiAgICAgIHN1YnNjcmliZS5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XG4gICAgICBzdWJzY3JpYmUuc3RhdHVzVGV4dCA9IGVycm9yLnN0YXR1c1RleHQ7XG5cbiAgICAgIGZhaWx1cmUoc3Vic2NyaWJlKTtcbiAgICB9ICAgICAgXG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NDdXN0b21FcnJvclJlc3BvbnNlPFRFcnJvcj4oZXJyb3I6IGFueSwgZmFpbHVyZTogSU9ic2VydmFibGVDdXN0b21FcnJvcjxURXJyb3I+KSA6IHZvaWQge1xuXG4gICAgaWYgKGZhaWx1cmUgIT0gbnVsbCkge1xuICAgICAgZGVidWdnZXI7XG4gICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+ID0gbmV3IFN1YnNjcmliZUN1c3RvbUVycm9yKCk7XG4gICAgICBzdWJzY3JpYmUub2sgPSBmYWxzZTtcbiAgICAgIGlmIChlcnJvci5lcnJvcikge1xuICAgICAgICBzdWJzY3JpYmUuZXJyb3IgPSBlcnJvci5lcnJvcjtcbiAgICAgIH0gICAgICAgIFxuICAgICAgc3Vic2NyaWJlLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xuICAgICAgc3Vic2NyaWJlLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcbiAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcblxuICAgICAgZmFpbHVyZShzdWJzY3JpYmUpO1xuICAgIH0gICAgICBcbiAgfSAgXG59Il19