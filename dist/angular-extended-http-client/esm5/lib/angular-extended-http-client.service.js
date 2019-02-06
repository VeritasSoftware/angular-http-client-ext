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
 */
export function IObservableErrorBase() { }
/**
 * @record
 * @template T
 */
export function IObservable() { }
/**
 * @record
 */
export function IObservableHttpResponse() { }
/**
 * @record
 * @template T
 */
export function IObservableHttpCustomResponse() { }
/**
 * @record
 * @template TError
 */
export function IObservableError() { }
/**
 * @record
 */
export function IObservableHttpError() { }
/**
 * @record
 * @template TError
 */
export function IObservableHttpCustomError() { }
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
var SubscribeBase = /** @class */ (function () {
    function SubscribeBase() {
    }
    return SubscribeBase;
}());
export { SubscribeBase };
if (false) {
    /** @type {?} */
    SubscribeBase.prototype.ok;
    /** @type {?} */
    SubscribeBase.prototype.headers;
    /** @type {?} */
    SubscribeBase.prototype.status;
    /** @type {?} */
    SubscribeBase.prototype.statusText;
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
/** @enum {number} */
var ResponseType = {
    IObservable: 0,
    IObservableHttpResponse: 1,
    IObservableHttpCustomResponse: 2,
};
export { ResponseType };
ResponseType[ResponseType.IObservable] = 'IObservable';
ResponseType[ResponseType.IObservableHttpResponse] = 'IObservableHttpResponse';
ResponseType[ResponseType.IObservableHttpCustomResponse] = 'IObservableHttpCustomResponse';
/** @enum {number} */
var ErrorType = {
    IObservableError: 0,
    IObservableHttpError: 1,
    IObservableHttpCustomError: 2,
};
export { ErrorType };
ErrorType[ErrorType.IObservableError] = 'IObservableError';
ErrorType[ErrorType.IObservableHttpError] = 'IObservableHttpError';
ErrorType[ErrorType.IObservableHttpCustomError] = 'IObservableHttpCustomError';
/**
 * @record
 */
export function IHttpClientExtended() { }
if (false) {
    /**
     * @template TResponse
     * @param {?} url
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.get = function (url, responseType, success, failureType, failure, options) { };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.post = function (url, model, responseType, success, failureType, failure, options) { };
    /**
     * @template T
     * @param {?} url
     * @param {?} model
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.put = function (url, model, responseType, success, failureType, failure, options) { };
    /**
     * @template TResponse
     * @param {?} url
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.delete = function (url, responseType, success, failureType, failure, options) { };
}
var HttpClientExt = /** @class */ (function () {
    function HttpClientExt(client) {
        this.client = client;
    }
    /**
     * @template TResponse
     * @param {?} url
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.get = /**
     * @template TResponse
     * @param {?} url
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, responseType, success, failureType, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(responseType, x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
        }
        return httpResponse.pipe();
    };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.post = /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, model, responseType, success, failureType, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(responseType, x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
        }
        return httpResponse;
    };
    /**
     * @template T
     * @param {?} url
     * @param {?} model
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.put = /**
     * @template T
     * @param {?} url
     * @param {?} model
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, model, responseType, success, failureType, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.put(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(responseType, x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
        }
        return httpResponse;
    };
    /**
     * @template TResponse
     * @param {?} url
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.delete = /**
     * @template TResponse
     * @param {?} url
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, responseType, success, failureType, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.delete(url, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(responseType, x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
        }
        return httpResponse;
    };
    /**
     * @private
     * @template TResponse
     * @param {?=} responseType
     * @param {?=} response
     * @param {?=} success
     * @return {?}
     */
    HttpClientExt.prototype.processSuccessResponse = /**
     * @private
     * @template TResponse
     * @param {?=} responseType
     * @param {?=} response
     * @param {?=} success
     * @return {?}
     */
    function (responseType, response, success) {
        if (responseType != null && success != null) {
            if (response.ok) {
                switch (responseType) {
                    case ResponseType.IObservable:
                        /** @type {?} */
                        var iObservable = (/** @type {?} */ (success));
                        iObservable((/** @type {?} */ (response)).body);
                        break;
                    case ResponseType.IObservableHttpResponse:
                        /** @type {?} */
                        var iObservableHttpResponse = (/** @type {?} */ (success));
                        /** @type {?} */
                        var subscribe1 = new SubscribeBase();
                        subscribe1.ok = response.ok;
                        subscribe1.status = response.status;
                        subscribe1.statusText = response.statusText;
                        subscribe1.headers = response.headers;
                        iObservableHttpResponse(subscribe1);
                        break;
                    case ResponseType.IObservableHttpCustomResponse:
                        /** @type {?} */
                        var iObservableHttpCustomResponse = (/** @type {?} */ (success));
                        /** @type {?} */
                        var subscribe2 = new Subscribe();
                        subscribe2.ok = response.ok;
                        subscribe2.status = response.status;
                        subscribe2.statusText = response.statusText;
                        subscribe2.body = response.body;
                        subscribe2.headers = response.headers;
                        iObservableHttpCustomResponse(subscribe2);
                        break;
                }
            }
        }
    };
    /**
     * @private
     * @template TError
     * @param {?} error
     * @param {?=} failure
     * @param {?=} errorType
     * @return {?}
     */
    HttpClientExt.prototype.processErrorResponse = /**
     * @private
     * @template TError
     * @param {?} error
     * @param {?=} failure
     * @param {?=} errorType
     * @return {?}
     */
    function (error, failure, errorType) {
        if (failure != null && errorType != null) {
            switch (errorType) {
                case ErrorType.IObservableError:
                    /** @type {?} */
                    var observableError = (/** @type {?} */ (failure));
                    observableError((/** @type {?} */ (error)).error);
                    break;
                case ErrorType.IObservableHttpError:
                    /** @type {?} */
                    var observableHttpError = (/** @type {?} */ (failure));
                    /** @type {?} */
                    var subscribe1 = new SubscribeError();
                    subscribe1.ok = false;
                    subscribe1.headers = error.headers;
                    subscribe1.message = error.message;
                    subscribe1.status = error.status;
                    subscribe1.statusText = error.statusText;
                    observableHttpError(subscribe1);
                    break;
                case ErrorType.IObservableHttpCustomError:
                    /** @type {?} */
                    var observableHttpCustomError = (/** @type {?} */ (failure));
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
                    observableHttpCustomError(subscribe);
                    break;
                default:
                    break;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7O0FBRUQsMENBRUM7Ozs7O0FBS0QsaUNBRUM7Ozs7QUFLRCw2Q0FFQzs7Ozs7QUFLRCxtREFFQzs7Ozs7QUFLRCxzQ0FFQzs7OztBQUtELDBDQUVDOzs7OztBQUtELGdEQUVDOzs7O0FBRUQsb0NBS0M7OztJQUpHLDRCQUFZOztJQUNaLGlDQUFxQjs7SUFDckIsZ0NBQWU7O0lBQ2Ysb0NBQW1COzs7Ozs7QUFHdkIsZ0NBSUM7OztJQUhHLHdCQUFZOztJQUNaLDBCQUFROztJQUNSLDZCQUFxQjs7QUFHekI7SUFBQTtJQUtBLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSkMsMkJBQVk7O0lBQ1osZ0NBQXFCOztJQUNyQiwrQkFBZTs7SUFDZixtQ0FBbUI7Ozs7O0FBR3JCOzs7O0lBQUE7SUFNQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7Ozs7OztJQUxHLHVCQUFZOztJQUNaLHlCQUFROztJQUNSLDRCQUFxQjs7SUFDckIsMkJBQWU7O0lBQ2YsK0JBQW1COzs7OztBQUd2QixxQ0FJQzs7O0lBSEcsa0NBQWdCOztJQUNoQixpQ0FBZTs7SUFDZixxQ0FBbUI7Ozs7OztBQUd2QiwyQ0FLQzs7O0lBSkMsc0NBQWM7O0lBQ2Qsd0NBQWdCOztJQUNoQix1Q0FBZTs7SUFDZiwyQ0FBbUI7O0FBR3JCO0lBQUE7SUFNQSxDQUFD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VUFBVSxDQUFDO29CQUV6QyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtnQkFDUixLQUFLLFNBQVMsQ0FBQywwQkFBMEI7O3dCQUNuQyx5QkFBeUIsR0FBRyxtQkFBcUMsT0FBTyxFQUFBOzt3QkFDeEUsU0FBUyxHQUFpQyxJQUFJLG9CQUFvQixFQUFFO29CQUN4RSxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztvQkFDckIsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO3dCQUNmLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztxQkFDL0I7b0JBQ0QsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNsQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ2xDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO29CQUV4Qyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDckMsTUFBTTtnQkFDUjtvQkFDRSxNQUFNO2FBQ1Q7U0FDRjtJQUNILENBQUM7O2dCQWxKRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXhKUSxVQUFVOzs7d0JBRG5CO0NBMFNDLEFBbkpELElBbUpDO1NBaEpZLGFBQWE7Ozs7OztJQUVaLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVFcnJvckJhc2Uge1xyXG4gICAgXHJcbn1cclxuXHJcbi8qXHJcblN1Y2Nlc3MgY2FsbGJhY2sgLSByZXR1cm5zIHRoZSBtb2RlbCBmcm9tIHRoZSBib2R5IG9mIHRoZSBBUEkgcmVzcG9uc2VcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZTxUPiBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XHJcbiAgICAoc3Vic2NyaWJlOiBUKSA6IHZvaWQ7ICAgIFxyXG59XHJcblxyXG4vKlxyXG5TdWNjZXNzIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgaHR0cCByZXNwb25zZS5cclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUh0dHBSZXNwb25zZSBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XHJcbiAgKHN1YnNjcmliZTogSVN1YnNjcmliZUJhc2UpIDogdm9pZDsgICAgXHJcbn1cclxuXHJcbi8qXHJcblN1Y2Nlc3MgY2FsbGJhY2sgLSByZXR1cm5zIHRoZSBodHRwIHJlc3BvbnNlIGFuZCB0aGUgbW9kZWwgZnJvbSB0aGUgYm9keSBvZiB0aGUgQVBJIHJlc3BvbnNlXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2U8VD4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gIChzdWJzY3JpYmU6IElTdWJzY3JpYmU8VD4pIDogdm9pZDsgICAgXHJcbn1cclxuXHJcbi8qIFxyXG5GYWlsdXJlIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgQVBJIHRocm93biBjdXN0b20gZXhjZXB0aW9uXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVFcnJvcjxURXJyb3I+IGV4dGVuZHMgSU9ic2VydmFibGVFcnJvckJhc2Uge1xyXG4gICAgKGVycm9yOiBURXJyb3IpIDogdm9pZDtcclxufVxyXG5cclxuLyogXHJcbkZhaWx1cmUgY2FsbGJhY2sgLSByZXR1cm5zIHRoZSBodHRwIGVycm9yIHJlc3BvbnNlIHRocm91Z2ggaW50ZXJmYWNlIElTdWJzY3JpYmVFcnJvclxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cEVycm9yIGV4dGVuZHMgSU9ic2VydmFibGVFcnJvckJhc2Uge1xyXG4gIChlcnJvcjogSVN1YnNjcmliZUVycm9yKSA6IHZvaWQ7XHJcbn1cclxuXHJcbi8qIFxyXG5GYWlsdXJlIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgaHR0cCBlcnJvciByZXNwb25zZSBhbmQgdGhlIEFQSSB0aHJvdyBjdXN0b20gZXhjZXB0aW9uIHRocm91Z2ggaW50ZXJmYWNlIElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+XHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I8VEVycm9yPiBleHRlbmRzIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAoZXJyb3I6IElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+KSA6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUJhc2Uge1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgc3RhdHVzVGV4dDogc3RyaW5nOyAgICBcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlPFQ+IGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbiAgICBib2R5OiBUO1xyXG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVCYXNlIGltcGxlbWVudHMgSVN1YnNjcmliZUJhc2Uge1xyXG4gIG9rOiBib29sZWFuO1xyXG4gIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZTxUPiBpbXBsZW1lbnRzIElTdWJzY3JpYmU8VD4ge1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbiAgICBib2R5OiBUO1xyXG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlRXJyb3IgZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcclxuICBlcnJvcjogVEVycm9yO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVFcnJvciBpbXBsZW1lbnRzIElTdWJzY3JpYmVFcnJvciB7XHJcbiAgICBvazogYm9vbGVhbjtcclxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IGltcGxlbWVudHMgSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4ge1xyXG4gIG9rOiBib29sZWFuO1xyXG4gIGVycm9yOiBURXJyb3I7XHJcbiAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVzcG9uc2VUeXBlIHtcclxuICBJT2JzZXJ2YWJsZSxcclxuICBJT2JzZXJ2YWJsZUh0dHBSZXNwb25zZSxcclxuICBJT2JzZXJ2YWJsZUh0dHBDdXN0b21SZXNwb25zZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBFcnJvclR5cGUge1xyXG4gIElPYnNlcnZhYmxlRXJyb3IsXHJcbiAgSU9ic2VydmFibGVIdHRwRXJyb3IsXHJcbiAgSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSHR0cENsaWVudEV4dGVuZGVkIHtcclxuICBnZXQ8VFJlc3BvbnNlPih1cmw6IHN0cmluZywgXHJcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZT86IFJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSwgXHJcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+O1xyXG5cclxuICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+O1xyXG5cclxuXHJcbiAgcHV0PFQ+KHVybDogc3RyaW5nLCBtb2RlbDogVCxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG5cclxuICBkZWxldGU8VFJlc3BvbnNlPih1cmw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZT86IFJlc3BvbnNlVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50RXh0IGltcGxlbWVudHMgSUh0dHBDbGllbnRFeHRlbmRlZCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xpZW50OiBIdHRwQ2xpZW50KVxyXG4gIHtcclxuICB9XHJcbiAgXHJcbiAgZ2V0PFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIFxyXG4gICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsIFxyXG4gICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LmdldDxUUmVzcG9uc2U+KHVybCwgb3B0aW9ucyAhPSBudWxsID8geyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XHJcblxyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlVHlwZSwgeCwgc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlLnBpcGUoKTsgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgcG9zdDxUUmVxdWVzdCwgVFJlc3BvbnNlPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LnBvc3Q8VFJlc3BvbnNlPih1cmwsIG1vZGVsLCBvcHRpb25zICE9IG51bGwgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XHJcbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XHJcbiAgICAgICAgaHR0cFJlc3BvbnNlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UocmVzcG9uc2VUeXBlLCB4LCBzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSwgZmFpbHVyZVR5cGUpKTtcclxuICAgIH0gICAgICAgIFxyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgcHV0PFQ+KHVybDogc3RyaW5nLCBtb2RlbDogVCxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucHV0PFQ+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBodHRwUmVzcG9uc2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZShyZXNwb25zZVR5cGUsIHgsIHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlLCBmYWlsdXJlVHlwZSkpO1xyXG4gICAgfSAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG4gIFxyXG4gIGRlbGV0ZTxUUmVzcG9uc2U+KHVybDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5kZWxldGU8VFJlc3BvbnNlPih1cmwsIG9wdGlvbnMgIT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlVHlwZSwgeCwgc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcclxuICB9ICBcclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlPFRSZXNwb25zZT4ocmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLCByZXNwb25zZT86IEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlKSA6IHZvaWQge1xyXG5cclxuICAgIGlmIChyZXNwb25zZVR5cGUgIT0gbnVsbCAmJiBzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgc3dpdGNoKHJlc3BvbnNlVHlwZSkgeyAgICAgICAgXHJcbiAgICAgICAgICBjYXNlIFJlc3BvbnNlVHlwZS5JT2JzZXJ2YWJsZTpcclxuICAgICAgICAgICAgbGV0IGlPYnNlcnZhYmxlID0gPElPYnNlcnZhYmxlPFRSZXNwb25zZT4+c3VjY2VzcztcclxuICAgICAgICAgICAgaU9ic2VydmFibGUocmVzcG9uc2UhLmJvZHkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgUmVzcG9uc2VUeXBlLklPYnNlcnZhYmxlSHR0cFJlc3BvbnNlOlxyXG4gICAgICAgICAgICBsZXQgaU9ic2VydmFibGVIdHRwUmVzcG9uc2UgPSA8SU9ic2VydmFibGVIdHRwUmVzcG9uc2U+c3VjY2VzcztcclxuICAgICAgICAgICAgbGV0IHN1YnNjcmliZTE6IElTdWJzY3JpYmVCYXNlID0gbmV3IFN1YnNjcmliZUJhc2UoKTtcclxuICAgICAgICAgICAgc3Vic2NyaWJlMS5vayA9IHJlc3BvbnNlLm9rO1xyXG4gICAgICAgICAgICBzdWJzY3JpYmUxLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgICAgICAgc3Vic2NyaWJlMS5oZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaU9ic2VydmFibGVIdHRwUmVzcG9uc2Uoc3Vic2NyaWJlMSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgUmVzcG9uc2VUeXBlLklPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlOlxyXG4gICAgICAgICAgICBsZXQgaU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2UgPSA8SU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2U8VFJlc3BvbnNlPj5zdWNjZXNzO1xyXG4gICAgICAgICAgICBsZXQgc3Vic2NyaWJlMjogSVN1YnNjcmliZTxUUmVzcG9uc2U+ID0gbmV3IFN1YnNjcmliZTxUUmVzcG9uc2U+KCk7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTIub2sgPSByZXNwb25zZS5vaztcclxuICAgICAgICAgICAgc3Vic2NyaWJlMi5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTIuc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTIuYm9keSA9IHJlc3BvbnNlLmJvZHk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1YnNjcmliZTIuaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlKHN1YnNjcmliZTIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzRXJyb3JSZXNwb25zZTxURXJyb3I+KGVycm9yOiBhbnksIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgZXJyb3JUeXBlPzogRXJyb3JUeXBlKSA6IHZvaWQge1xyXG5cclxuICAgIGlmIChmYWlsdXJlICE9IG51bGwgJiYgZXJyb3JUeXBlICE9IG51bGwpIHtcclxuICAgICAgc3dpdGNoKGVycm9yVHlwZSlcclxuICAgICAge1xyXG4gICAgICAgIGNhc2UgRXJyb3JUeXBlLklPYnNlcnZhYmxlRXJyb3I6XHJcbiAgICAgICAgICBsZXQgb2JzZXJ2YWJsZUVycm9yID0gPElPYnNlcnZhYmxlRXJyb3I8VEVycm9yPj4gZmFpbHVyZTtcclxuICAgICAgICAgIG9ic2VydmFibGVFcnJvcihlcnJvciEuZXJyb3IpOyAgICAgICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEVycm9yVHlwZS5JT2JzZXJ2YWJsZUh0dHBFcnJvcjpcclxuICAgICAgICAgIGxldCBvYnNlcnZhYmxlSHR0cEVycm9yID0gPElPYnNlcnZhYmxlSHR0cEVycm9yPiBmYWlsdXJlO1xyXG4gICAgICAgICAgbGV0IHN1YnNjcmliZTE6IFN1YnNjcmliZUVycm9yID0gbmV3IFN1YnNjcmliZUVycm9yKCk7XHJcbiAgICAgICAgICBzdWJzY3JpYmUxLm9rID0gZmFsc2U7XHJcbiAgICAgICAgICBzdWJzY3JpYmUxLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xyXG4gICAgICAgICAgc3Vic2NyaWJlMS5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgIHN1YnNjcmliZTEuc3RhdHVzID0gZXJyb3Iuc3RhdHVzO1xyXG4gICAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcclxuICBcclxuICAgICAgICAgIG9ic2VydmFibGVIdHRwRXJyb3Ioc3Vic2NyaWJlMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEVycm9yVHlwZS5JT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjpcclxuICAgICAgICAgIGxldCBvYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yID0gPElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4+IGZhaWx1cmU7XHJcbiAgICAgICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+ID0gbmV3IFN1YnNjcmliZUN1c3RvbUVycm9yKCk7XHJcbiAgICAgICAgICBzdWJzY3JpYmUub2sgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChlcnJvci5lcnJvcikge1xyXG4gICAgICAgICAgICBzdWJzY3JpYmUuZXJyb3IgPSBlcnJvci5lcnJvcjtcclxuICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgc3Vic2NyaWJlLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xyXG4gICAgICAgICAgc3Vic2NyaWJlLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcclxuICAgICAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcclxuICBcclxuICAgICAgICAgIG9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3Ioc3Vic2NyaWJlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6ICAgICAgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9ICAgIFxyXG4gIH0gIFxyXG59Il19