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
 * @template TError
 */
var /**
 * @template TError
 */
SubscribeCustomError = /** @class */ (function () {
    function SubscribeCustomError() {
    }
    return SubscribeCustomError;
}());
/**
 * @template TError
 */
export { SubscribeCustomError };
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
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(x, success); }, function (error) { return _this.processErrorResponse(error, failure); });
        }
        return httpResponse;
    };
    /**
     * @template T, TError
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.getUsingCustomError = /**
     * @template T, TError
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, success, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(x, success); }, function (error) { return _this.processCustomErrorResponse((/** @type {?} */ (error)), failure); });
        }
        return httpResponse;
    };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.post = /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, model, success, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(x, success); }, function (error) { return _this.processErrorResponse(error, failure); });
        }
        return httpResponse;
    };
    /**
     * @template TRequest, TResponse, TError
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.postUsingCustomError = /**
     * @template TRequest, TResponse, TError
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, model, success, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(x, success); }, function (error) { return _this.processCustomErrorResponse((/** @type {?} */ (error)), failure); });
        }
        return httpResponse;
    };
    /**
     * @private
     * @template TResponse
     * @param {?} response
     * @param {?} success
     * @return {?}
     */
    HttpClientExt.prototype.processSuccessResponse = /**
     * @private
     * @template TResponse
     * @param {?} response
     * @param {?} success
     * @return {?}
     */
    function (response, success) {
        if (success != null) {
            if (response.ok) {
                /** @type {?} */
                var subscribe = new Subscribe();
                subscribe.ok = response.ok;
                subscribe.status = response.status;
                subscribe.statusText = response.statusText;
                subscribe.body = response.body;
                subscribe.headers = response.headers;
                success(subscribe);
            }
        }
    };
    /**
     * @private
     * @param {?} error
     * @param {?} failure
     * @return {?}
     */
    HttpClientExt.prototype.processErrorResponse = /**
     * @private
     * @param {?} error
     * @param {?} failure
     * @return {?}
     */
    function (error, failure) {
        if (failure != null) {
            /** @type {?} */
            var subscribe = new SubscribeError();
            subscribe.ok = false;
            subscribe.headers = error.headers;
            subscribe.message = error.message;
            subscribe.status = error.status;
            subscribe.statusText = error.statusText;
            failure(subscribe);
        }
    };
    /**
     * @private
     * @template TError
     * @param {?} error
     * @param {?} failure
     * @return {?}
     */
    HttpClientExt.prototype.processCustomErrorResponse = /**
     * @private
     * @template TError
     * @param {?} error
     * @param {?} failure
     * @return {?}
     */
    function (error, failure) {
        if (failure != null) {
            debugger;
            /** @type {?} */
            var subscribe = new SubscribeCustomError();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7OztBQUVELGlDQUVDOzs7O0FBRUQsc0NBRUM7Ozs7O0FBRUQsNENBRUM7Ozs7QUFFRCxvQ0FLQzs7O0lBSkcsNEJBQVk7O0lBQ1osaUNBQXFCOztJQUNyQixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7OztBQUd2QixnQ0FJQzs7O0lBSEcsd0JBQVk7O0lBQ1osMEJBQVE7O0lBQ1IsNkJBQXFCOzs7OztBQUd6Qjs7OztJQUFBO0lBTUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7Ozs7SUFMRyx1QkFBWTs7SUFDWix5QkFBUTs7SUFDUiw0QkFBcUI7O0lBQ3JCLDJCQUFlOztJQUNmLCtCQUFtQjs7Ozs7QUFHdkIscUNBSUM7OztJQUhHLGtDQUFnQjs7SUFDaEIsaUNBQWU7O0lBQ2YscUNBQW1COzs7Ozs7QUFHdkIsMkNBS0M7OztJQUpDLHNDQUFjOztJQUNkLHdDQUFnQjs7SUFDaEIsdUNBQWU7O0lBQ2YsMkNBQW1COztBQUdyQjtJQUFBO0lBTUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMRyw0QkFBWTs7SUFDWixpQ0FBcUI7O0lBQ3JCLGlDQUFnQjs7SUFDaEIsZ0NBQWU7O0lBQ2Ysb0NBQW1COzs7OztBQUd2Qjs7OztJQUFBO0lBT0EsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7Ozs7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O1lBQ2xDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFFeEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Z0JBMUdGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBdEZRLFVBQVU7Ozt3QkFEbkI7Q0FnTUMsQUEzR0QsSUEyR0M7U0F4R1ksYUFBYTs7Ozs7O0lBRVosK0JBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgSU9ic2VydmFibGVCYXNlIHtcbiAgICAoc3Vic2NyaWJlOiBJU3Vic2NyaWJlPFQ+KSA6IHZvaWQ7ICAgIFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlRXJyb3IgZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIChlcnJvcjogSVN1YnNjcmliZUVycm9yKSA6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVDdXN0b21FcnJvcjxURXJyb3I+IGV4dGVuZHMgSU9ic2VydmFibGVCYXNlIHtcbiAgICAoZXJyb3I6IElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+KSA6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUJhc2Uge1xuICAgIG9rOiBib29sZWFuO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZzsgICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZTxUPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBib2R5OiBUO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xufVxuXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlPFQ+IGltcGxlbWVudHMgSVN1YnNjcmliZTxUPiB7XG4gICAgb2s6IGJvb2xlYW47XG4gICAgYm9keTogVDtcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBzdGF0dXM6IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUVycm9yIGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzdGF0dXM6IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XG4gIGVycm9yOiBURXJyb3I7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgc3RhdHVzOiBudW1iZXI7XG4gIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUVycm9yIGltcGxlbWVudHMgSVN1YnNjcmliZUVycm9yIHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBudW1iZXI7XG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiBpbXBsZW1lbnRzIElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IHtcbiAgb2s6IGJvb2xlYW47XG4gIGVycm9yOiBURXJyb3I7XG4gIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHN0YXR1czogbnVtYmVyO1xuICBzdGF0dXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUh0dHBDbGllbnRFeHRlbmRlZCB7XG4gICAgZ2V0PFQ+KHVybDogc3RyaW5nLCBzdWNjZXNzPzogSU9ic2VydmFibGU8VD4sIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcbiAgICBcbiAgICBnZXRVc2luZ0N1c3RvbUVycm9yPFQsIFRFcnJvcj4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XG5cbiAgICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFRSZXNwb25zZT4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3IsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj47XG5cbiAgICBwb3N0VXNpbmdDdXN0b21FcnJvcjxUUmVxdWVzdCwgVFJlc3BvbnNlLCBURXJyb3I+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUN1c3RvbUVycm9yPFRFcnJvcj4sIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnRFeHQgaW1wbGVtZW50cyBJSHR0cENsaWVudEV4dGVuZGVkIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaWVudDogSHR0cENsaWVudClcbiAge1xuICB9XG5cbiAgZ2V0PFQ+KHVybDogc3RyaW5nLCBzdWNjZXNzPzogSU9ic2VydmFibGU8VD4sIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7ICAgICAgICAgICAgICAgIFxuICAgICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LmdldDxUPih1cmwsIG9wdGlvbnMgIT0gbnVsbCA/IHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pXG5cbiAgICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlKSk7XG4gICAgICB9ICAgICAgICBcblxuICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXG4gIH1cblxuICBnZXRVc2luZ0N1c3RvbUVycm9yPFQsIFRFcnJvcj4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj4ge1xuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5nZXQ8VD4odXJsLCBvcHRpb25zICE9IG51bGwgPyB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuXG4gICAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICAgICAgaHR0cFJlc3BvbnNlXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzQ3VzdG9tRXJyb3JSZXNwb25zZSg8VEVycm9yPmVycm9yLCBmYWlsdXJlKSk7XG4gICAgICB9ICAgICAgICBcblxuICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXG4gIH1cblxuXG4gIHBvc3Q8VFJlcXVlc3QsIFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvciwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PiB7ICAgICAgICAgICAgICAgIFxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wb3N0PFRSZXNwb25zZT4odXJsLCBtb2RlbCwgb3B0aW9ucyAhPSBudWxsID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSlcbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICAgIGh0dHBSZXNwb25zZVxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlKSk7XG4gICAgfSAgICAgICAgXG5cbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfVxuXG4gIHBvc3RVc2luZ0N1c3RvbUVycm9yPFRSZXF1ZXN0LCBUUmVzcG9uc2UsIFRFcnJvcj4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVDdXN0b21FcnJvcjxURXJyb3I+LCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+IHsgICAgICAgICAgICAgICAgXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LnBvc3Q8VFJlc3BvbnNlPih1cmwsIG1vZGVsLCBvcHRpb25zICE9IG51bGwgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgaHR0cFJlc3BvbnNlXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0N1c3RvbUVycm9yUmVzcG9uc2UoPFRFcnJvcj5lcnJvciwgZmFpbHVyZSkpO1xuICAgIH0gICAgICAgIFxuXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXG4gIH0gIFxuXG4gIHByaXZhdGUgcHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZTxUUmVzcG9uc2U+KHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgc3VjY2VzczogSU9ic2VydmFibGU8VFJlc3BvbnNlPikgOiB2b2lkIHtcblxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmU8VFJlc3BvbnNlPiA9IG5ldyBTdWJzY3JpYmU8VFJlc3BvbnNlPigpO1xuICAgICAgICBzdWJzY3JpYmUub2sgPSByZXNwb25zZS5vaztcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xuICAgICAgICBzdWJzY3JpYmUuYm9keSA9IHJlc3BvbnNlLmJvZHk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHN1YnNjcmliZS5oZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgc3VjY2VzcyhzdWJzY3JpYmUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9ICAgICAgXG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yOiBhbnksIGZhaWx1cmU6IElPYnNlcnZhYmxlRXJyb3IpIDogdm9pZCB7XG5cbiAgICBpZiAoZmFpbHVyZSAhPSBudWxsKSB7XG4gICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmVFcnJvciA9IG5ldyBTdWJzY3JpYmVFcnJvcigpO1xuICAgICAgc3Vic2NyaWJlLm9rID0gZmFsc2U7XG4gICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IGVycm9yLmhlYWRlcnM7XG4gICAgICBzdWJzY3JpYmUubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICBzdWJzY3JpYmUuc3RhdHVzID0gZXJyb3Iuc3RhdHVzO1xuICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSBlcnJvci5zdGF0dXNUZXh0O1xuXG4gICAgICBmYWlsdXJlKHN1YnNjcmliZSk7XG4gICAgfSAgICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQ3VzdG9tRXJyb3JSZXNwb25zZTxURXJyb3I+KGVycm9yOiBhbnksIGZhaWx1cmU6IElPYnNlcnZhYmxlQ3VzdG9tRXJyb3I8VEVycm9yPikgOiB2b2lkIHtcblxuICAgIGlmIChmYWlsdXJlICE9IG51bGwpIHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgbGV0IHN1YnNjcmliZTogU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiA9IG5ldyBTdWJzY3JpYmVDdXN0b21FcnJvcigpO1xuICAgICAgc3Vic2NyaWJlLm9rID0gZmFsc2U7XG4gICAgICBpZiAoZXJyb3IuZXJyb3IpIHtcbiAgICAgICAgc3Vic2NyaWJlLmVycm9yID0gZXJyb3IuZXJyb3I7XG4gICAgICB9ICAgICAgICBcbiAgICAgIHN1YnNjcmliZS5oZWFkZXJzID0gZXJyb3IuaGVhZGVycztcbiAgICAgIHN1YnNjcmliZS5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XG4gICAgICBzdWJzY3JpYmUuc3RhdHVzVGV4dCA9IGVycm9yLnN0YXR1c1RleHQ7XG5cbiAgICAgIGZhaWx1cmUoc3Vic2NyaWJlKTtcbiAgICB9ICAgICAgXG4gIH0gIFxufSJdfQ==