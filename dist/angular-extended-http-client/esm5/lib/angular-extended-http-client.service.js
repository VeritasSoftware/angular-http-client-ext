/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
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
     * @param {?=} pipe
     * @return {?}
     */
    IHttpClientExtended.prototype.get = function (url, responseType, success, failureType, failure, options, pipe) { };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @param {?=} pipe
     * @return {?}
     */
    IHttpClientExtended.prototype.post = function (url, model, responseType, success, failureType, failure, options, pipe) { };
    /**
     * @template T
     * @param {?} url
     * @param {?} model
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @param {?=} pipe
     * @return {?}
     */
    IHttpClientExtended.prototype.put = function (url, model, responseType, success, failureType, failure, options, pipe) { };
    /**
     * @template T
     * @param {?} url
     * @param {?} model
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @param {?=} pipe
     * @return {?}
     */
    IHttpClientExtended.prototype.patch = function (url, model, responseType, success, failureType, failure, options, pipe) { };
    /**
     * @template TResponse
     * @param {?} url
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @param {?=} pipe
     * @return {?}
     */
    IHttpClientExtended.prototype.delete = function (url, responseType, success, failureType, failure, options, pipe) { };
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
     * @param {?=} pipe
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
     * @param {?=} pipe
     * @return {?}
     */
    function (url, responseType, success, failureType, failure, options, pipe) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (responseType != null && success != null) {
            if (pipe != null) {
                httpResponse = httpResponse.pipe(pipe);
            }
            if (options != null && options.retry != null && options.retry > 0) {
                httpResponse = httpResponse.pipe(retry(options.retry));
            }
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(responseType, x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
        }
        return httpResponse;
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
     * @param {?=} pipe
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
     * @param {?=} pipe
     * @return {?}
     */
    function (url, model, responseType, success, failureType, failure, options, pipe) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (responseType != null && success != null) {
            if (pipe != null) {
                httpResponse = httpResponse.pipe(pipe);
            }
            if (options != null && options.retry != null && options.retry > 0) {
                httpResponse = httpResponse.pipe(retry(options.retry));
            }
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
     * @param {?=} pipe
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
     * @param {?=} pipe
     * @return {?}
     */
    function (url, model, responseType, success, failureType, failure, options, pipe) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.put(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (responseType != null && success != null) {
            if (pipe != null) {
                httpResponse = httpResponse.pipe(pipe);
            }
            if (options != null && options.retry != null && options.retry > 0) {
                httpResponse = httpResponse.pipe(retry(options.retry));
            }
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
     * @param {?=} pipe
     * @return {?}
     */
    HttpClientExt.prototype.patch = /**
     * @template T
     * @param {?} url
     * @param {?} model
     * @param {?=} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @param {?=} pipe
     * @return {?}
     */
    function (url, model, responseType, success, failureType, failure, options, pipe) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.patch(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (responseType != null && success != null) {
            if (pipe != null) {
                httpResponse = httpResponse.pipe(pipe);
            }
            if (options != null && options.retry != null && options.retry > 0) {
                httpResponse = httpResponse.pipe(retry(options.retry));
            }
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
     * @param {?=} pipe
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
     * @param {?=} pipe
     * @return {?}
     */
    function (url, responseType, success, failureType, failure, options, pipe) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.delete(url, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (responseType != null && success != null) {
            if (pipe != null) {
                httpResponse = httpResponse.pipe(pipe);
            }
            if (options != null && options.retry != null && options.retry > 0) {
                httpResponse = httpResponse.pipe(retry(options.retry));
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUV2QyxxQ0FFQzs7OztBQUVELDBDQUVDOzs7OztBQUtELGlDQUVDOzs7O0FBS0QsNkNBRUM7Ozs7O0FBS0QsbURBRUM7Ozs7O0FBS0Qsc0NBRUM7Ozs7QUFLRCwwQ0FFQzs7Ozs7QUFLRCxnREFFQzs7OztBQUVELG9DQUtDOzs7SUFKRyw0QkFBWTs7SUFDWixpQ0FBcUI7O0lBQ3JCLGdDQUFlOztJQUNmLG9DQUFtQjs7Ozs7O0FBR3ZCLGdDQUlDOzs7SUFIRyx3QkFBWTs7SUFDWiwwQkFBUTs7SUFDUiw2QkFBcUI7O0FBR3pCO0lBQUE7SUFLQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpDLDJCQUFZOztJQUNaLGdDQUFxQjs7SUFDckIsK0JBQWU7O0lBQ2YsbUNBQW1COzs7OztBQUdyQjs7OztJQUFBO0lBTUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7Ozs7SUFMRyx1QkFBWTs7SUFDWix5QkFBUTs7SUFDUiw0QkFBcUI7O0lBQ3JCLDJCQUFlOztJQUNmLCtCQUFtQjs7Ozs7QUFHdkIscUNBSUM7OztJQUhHLGtDQUFnQjs7SUFDaEIsaUNBQWU7O0lBQ2YscUNBQW1COzs7Ozs7QUFHdkIsMkNBS0M7OztJQUpDLHNDQUFjOztJQUNkLHdDQUFnQjs7SUFD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LFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXBLUSxVQUFVOzs7d0JBRG5CO0NBeVdDLEFBdE1ELElBc01DO1NBbk1ZLGFBQWE7Ozs7OztJQUVaLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVCYXNlIHtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAgIFxyXG59XHJcblxyXG4vKlxyXG5TdWNjZXNzIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgbW9kZWwgZnJvbSB0aGUgYm9keSBvZiB0aGUgQVBJIHJlc3BvbnNlXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGU8VD4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gICAgKHN1YnNjcmliZTogVCkgOiB2b2lkOyAgICBcclxufVxyXG5cclxuLypcclxuU3VjY2VzcyBjYWxsYmFjayAtIHJldHVybnMgdGhlIGh0dHAgcmVzcG9uc2UuXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVIdHRwUmVzcG9uc2UgZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gIChzdWJzY3JpYmU6IElTdWJzY3JpYmVCYXNlKSA6IHZvaWQ7ICAgIFxyXG59XHJcblxyXG4vKlxyXG5TdWNjZXNzIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgaHR0cCByZXNwb25zZSBhbmQgdGhlIG1vZGVsIGZyb20gdGhlIGJvZHkgb2YgdGhlIEFQSSByZXNwb25zZVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlPFQ+IGV4dGVuZHMgSU9ic2VydmFibGVCYXNlIHtcclxuICAoc3Vic2NyaWJlOiBJU3Vic2NyaWJlPFQ+KSA6IHZvaWQ7ICAgIFxyXG59XHJcblxyXG4vKiBcclxuRmFpbHVyZSBjYWxsYmFjayAtIHJldHVybnMgdGhlIEFQSSB0aHJvd24gY3VzdG9tIGV4Y2VwdGlvblxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlRXJyb3I8VEVycm9yPiBleHRlbmRzIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAgIChlcnJvcjogVEVycm9yKSA6IHZvaWQ7XHJcbn1cclxuXHJcbi8qIFxyXG5GYWlsdXJlIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgaHR0cCBlcnJvciByZXNwb25zZSB0aHJvdWdoIGludGVyZmFjZSBJU3Vic2NyaWJlRXJyb3JcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUh0dHBFcnJvciBleHRlbmRzIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAoZXJyb3I6IElTdWJzY3JpYmVFcnJvcikgOiB2b2lkO1xyXG59XHJcblxyXG4vKiBcclxuRmFpbHVyZSBjYWxsYmFjayAtIHJldHVybnMgdGhlIGh0dHAgZXJyb3IgcmVzcG9uc2UgYW5kIHRoZSBBUEkgdGhyb3cgY3VzdG9tIGV4Y2VwdGlvbiB0aHJvdWdoIGludGVyZmFjZSBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPlxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUVycm9yQmFzZSB7XHJcbiAgKGVycm9yOiBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPikgOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdWJzY3JpYmVCYXNlIHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIHN0YXR1c1RleHQ6IHN0cmluZzsgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZTxUPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgYm9keTogVDtcclxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlQmFzZSBpbXBsZW1lbnRzIElTdWJzY3JpYmVCYXNlIHtcclxuICBvazogYm9vbGVhbjtcclxuICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmU8VD4gaW1wbGVtZW50cyBJU3Vic2NyaWJlPFQ+IHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgYm9keTogVDtcclxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUVycm9yIGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XHJcbiAgZXJyb3I6IFRFcnJvcjtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlRXJyb3IgaW1wbGVtZW50cyBJU3Vic2NyaWJlRXJyb3Ige1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiBpbXBsZW1lbnRzIElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IHtcclxuICBvazogYm9vbGVhbjtcclxuICBlcnJvcjogVEVycm9yO1xyXG4gIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJlc3BvbnNlVHlwZSB7XHJcbiAgSU9ic2VydmFibGUsXHJcbiAgSU9ic2VydmFibGVIdHRwUmVzcG9uc2UsXHJcbiAgSU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2VcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXJyb3JUeXBlIHtcclxuICBJT2JzZXJ2YWJsZUVycm9yLFxyXG4gIElPYnNlcnZhYmxlSHR0cEVycm9yLFxyXG4gIElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUh0dHBDbGllbnRFeHRlbmRlZCB7XHJcbiAgZ2V0PFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIFxyXG4gICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsIFxyXG4gICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSwgXHJcbiAgICAgICAgICAgICAgICAgIHBpcGU/OiBPcGVyYXRvckZ1bmN0aW9uPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4pIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj47XHJcblxyXG4gIHBvc3Q8VFJlcXVlc3QsIFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZT86IFJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlPzogT3BlcmF0b3JGdW5jdGlvbjxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+O1xyXG5cclxuXHJcbiAgcHV0PFQ+KHVybDogc3RyaW5nLCBtb2RlbDogVCxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnksIFxyXG4gICAgICAgICAgICBwaXBlPzogT3BlcmF0b3JGdW5jdGlvbjxIdHRwUmVzcG9uc2U8VD4sIEh0dHBSZXNwb25zZTxUPj4pIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG5cclxuICBwYXRjaDxUPih1cmw6IHN0cmluZywgbW9kZWw6IFQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZT86IFJlc3BvbnNlVHlwZSwgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsXHJcbiAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBcclxuICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55LCBcclxuICAgICAgICAgICAgcGlwZT86IE9wZXJhdG9yRnVuY3Rpb248SHR0cFJlc3BvbnNlPFQ+LCBIdHRwUmVzcG9uc2U8VD4+KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjsgICAgICAgICAgICBcclxuXHJcbiAgZGVsZXRlPFRSZXNwb25zZT4odXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwaXBlPzogT3BlcmF0b3JGdW5jdGlvbjxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50RXh0IGltcGxlbWVudHMgSUh0dHBDbGllbnRFeHRlbmRlZCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xpZW50OiBIdHRwQ2xpZW50KVxyXG4gIHtcclxuICB9XHJcbiAgXHJcbiAgZ2V0PFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIFxyXG4gICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsIFxyXG4gICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSwgXHJcbiAgICAgICAgICAgICAgICAgIHBpcGU/OiBPcGVyYXRvckZ1bmN0aW9uPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4pIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5nZXQ8VFJlc3BvbnNlPih1cmwsIG9wdGlvbnMgIT0gbnVsbCA/IHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZVR5cGUgIT0gbnVsbCAmJiBzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAocGlwZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBodHRwUmVzcG9uc2UgPSBodHRwUmVzcG9uc2UucGlwZShwaXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT0gbnVsbCAmJiBvcHRpb25zLnJldHJ5ICE9IG51bGwgJiYgb3B0aW9ucy5yZXRyeSA+IDApIHtcclxuICAgICAgICAgIGh0dHBSZXNwb25zZSA9IGh0dHBSZXNwb25zZS5waXBlKHJldHJ5KG9wdGlvbnMucmV0cnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHR0cFJlc3BvbnNlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UocmVzcG9uc2VUeXBlLCB4LCBzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSwgZmFpbHVyZVR5cGUpKTtcclxuICAgIH0gICAgICAgIFxyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgcG9zdDxUUmVxdWVzdCwgVFJlc3BvbnNlPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpcGU/OiBPcGVyYXRvckZ1bmN0aW9uPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4pIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wb3N0PFRSZXNwb25zZT4odXJsLCBtb2RlbCwgb3B0aW9ucyAhPSBudWxsID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAhPSBudWxsICYmIHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChwaXBlICE9IG51bGwpIHtcclxuICAgICAgICAgIGh0dHBSZXNwb25zZSA9IGh0dHBSZXNwb25zZS5waXBlKHBpcGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyAhPSBudWxsICYmIG9wdGlvbnMucmV0cnkgIT0gbnVsbCAmJiBvcHRpb25zLnJldHJ5ID4gMCkge1xyXG4gICAgICAgICAgaHR0cFJlc3BvbnNlID0gaHR0cFJlc3BvbnNlLnBpcGUocmV0cnkob3B0aW9ucy5yZXRyeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodHRwUmVzcG9uc2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZShyZXNwb25zZVR5cGUsIHgsIHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlLCBmYWlsdXJlVHlwZSkpO1xyXG4gICAgfSAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBwdXQ8VD4odXJsOiBzdHJpbmcsIG1vZGVsOiBULFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsIFxyXG4gICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLFxyXG4gICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSwgXHJcbiAgICAgICAgICAgIHBpcGU/OiBPcGVyYXRvckZ1bmN0aW9uPEh0dHBSZXNwb25zZTxUPiwgSHR0cFJlc3BvbnNlPFQ+PikgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wdXQ8VD4odXJsLCBtb2RlbCwgb3B0aW9ucyAhPSBudWxsID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAhPSBudWxsICYmIHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChwaXBlICE9IG51bGwpIHtcclxuICAgICAgICAgIGh0dHBSZXNwb25zZSA9IGh0dHBSZXNwb25zZS5waXBlKHBpcGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyAhPSBudWxsICYmIG9wdGlvbnMucmV0cnkgIT0gbnVsbCAmJiBvcHRpb25zLnJldHJ5ID4gMCkge1xyXG4gICAgICAgICAgaHR0cFJlc3BvbnNlID0gaHR0cFJlc3BvbnNlLnBpcGUocmV0cnkob3B0aW9ucy5yZXRyeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodHRwUmVzcG9uc2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZShyZXNwb25zZVR5cGUsIHgsIHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlLCBmYWlsdXJlVHlwZSkpO1xyXG4gICAgfSAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBwYXRjaDxUPih1cmw6IHN0cmluZywgbW9kZWw6IFQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZT86IFJlc3BvbnNlVHlwZSwgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsXHJcbiAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBcclxuICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55LCBcclxuICAgICAgICAgICAgcGlwZT86IE9wZXJhdG9yRnVuY3Rpb248SHR0cFJlc3BvbnNlPFQ+LCBIdHRwUmVzcG9uc2U8VD4+KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LnBhdGNoPFQ+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICAgIGlmIChyZXNwb25zZVR5cGUgIT0gbnVsbCAmJiBzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAocGlwZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBodHRwUmVzcG9uc2UgPSBodHRwUmVzcG9uc2UucGlwZShwaXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT0gbnVsbCAmJiBvcHRpb25zLnJldHJ5ICE9IG51bGwgJiYgb3B0aW9ucy5yZXRyeSA+IDApIHtcclxuICAgICAgICAgIGh0dHBSZXNwb25zZSA9IGh0dHBSZXNwb25zZS5waXBlKHJldHJ5KG9wdGlvbnMucmV0cnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHR0cFJlc3BvbnNlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UocmVzcG9uc2VUeXBlLCB4LCBzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSwgZmFpbHVyZVR5cGUpKTtcclxuICAgIH0gICAgICAgIFxyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxyXG4gIH0gIFxyXG5cclxuICBkZWxldGU8VFJlc3BvbnNlPih1cmw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZT86IFJlc3BvbnNlVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55LCBcclxuICAgICAgICAgICAgICAgICAgICAgIHBpcGU/OiBPcGVyYXRvckZ1bmN0aW9uPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4pIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5kZWxldGU8VFJlc3BvbnNlPih1cmwsIG9wdGlvbnMgIT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAhPSBudWxsICYmIHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChwaXBlICE9IG51bGwpIHtcclxuICAgICAgICAgIGh0dHBSZXNwb25zZSA9IGh0dHBSZXNwb25zZS5waXBlKHBpcGUpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIGlmIChvcHRpb25zICE9IG51bGwgJiYgb3B0aW9ucy5yZXRyeSAhPSBudWxsICYmIG9wdGlvbnMucmV0cnkgPiAwKSB7XHJcbiAgICAgICAgICBodHRwUmVzcG9uc2UgPSBodHRwUmVzcG9uc2UucGlwZShyZXRyeShvcHRpb25zLnJldHJ5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlVHlwZSwgeCwgc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcclxuICB9ICBcclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlPFRSZXNwb25zZT4ocmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLCByZXNwb25zZT86IEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlKSA6IHZvaWQge1xyXG5cclxuICAgIGlmIChyZXNwb25zZVR5cGUgIT0gbnVsbCAmJiBzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgc3dpdGNoKHJlc3BvbnNlVHlwZSkgeyAgICAgICAgXHJcbiAgICAgICAgICBjYXNlIFJlc3BvbnNlVHlwZS5JT2JzZXJ2YWJsZTpcclxuICAgICAgICAgICAgbGV0IGlPYnNlcnZhYmxlID0gPElPYnNlcnZhYmxlPFRSZXNwb25zZT4+c3VjY2VzcztcclxuICAgICAgICAgICAgaU9ic2VydmFibGUocmVzcG9uc2UhLmJvZHkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgUmVzcG9uc2VUeXBlLklPYnNlcnZhYmxlSHR0cFJlc3BvbnNlOlxyXG4gICAgICAgICAgICBsZXQgaU9ic2VydmFibGVIdHRwUmVzcG9uc2UgPSA8SU9ic2VydmFibGVIdHRwUmVzcG9uc2U+c3VjY2VzcztcclxuICAgICAgICAgICAgbGV0IHN1YnNjcmliZTE6IElTdWJzY3JpYmVCYXNlID0gbmV3IFN1YnNjcmliZUJhc2UoKTtcclxuICAgICAgICAgICAgc3Vic2NyaWJlMS5vayA9IHJlc3BvbnNlLm9rO1xyXG4gICAgICAgICAgICBzdWJzY3JpYmUxLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgICAgICAgc3Vic2NyaWJlMS5oZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaU9ic2VydmFibGVIdHRwUmVzcG9uc2Uoc3Vic2NyaWJlMSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgUmVzcG9uc2VUeXBlLklPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlOlxyXG4gICAgICAgICAgICBsZXQgaU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2UgPSA8SU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2U8VFJlc3BvbnNlPj5zdWNjZXNzO1xyXG4gICAgICAgICAgICBsZXQgc3Vic2NyaWJlMjogSVN1YnNjcmliZTxUUmVzcG9uc2U+ID0gbmV3IFN1YnNjcmliZTxUUmVzcG9uc2U+KCk7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTIub2sgPSByZXNwb25zZS5vaztcclxuICAgICAgICAgICAgc3Vic2NyaWJlMi5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTIuc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTIuYm9keSA9IHJlc3BvbnNlLmJvZHk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1YnNjcmliZTIuaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlKHN1YnNjcmliZTIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzRXJyb3JSZXNwb25zZTxURXJyb3I+KGVycm9yOiBhbnksIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgZXJyb3JUeXBlPzogRXJyb3JUeXBlKSA6IHZvaWQge1xyXG5cclxuICAgIGlmIChmYWlsdXJlICE9IG51bGwgJiYgZXJyb3JUeXBlICE9IG51bGwpIHtcclxuICAgICAgc3dpdGNoKGVycm9yVHlwZSlcclxuICAgICAge1xyXG4gICAgICAgIGNhc2UgRXJyb3JUeXBlLklPYnNlcnZhYmxlRXJyb3I6XHJcbiAgICAgICAgICBsZXQgb2JzZXJ2YWJsZUVycm9yID0gPElPYnNlcnZhYmxlRXJyb3I8VEVycm9yPj4gZmFpbHVyZTtcclxuICAgICAgICAgIG9ic2VydmFibGVFcnJvcihlcnJvciEuZXJyb3IpOyAgICAgICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEVycm9yVHlwZS5JT2JzZXJ2YWJsZUh0dHBFcnJvcjpcclxuICAgICAgICAgIGxldCBvYnNlcnZhYmxlSHR0cEVycm9yID0gPElPYnNlcnZhYmxlSHR0cEVycm9yPiBmYWlsdXJlO1xyXG4gICAgICAgICAgbGV0IHN1YnNjcmliZTE6IFN1YnNjcmliZUVycm9yID0gbmV3IFN1YnNjcmliZUVycm9yKCk7XHJcbiAgICAgICAgICBzdWJzY3JpYmUxLm9rID0gZmFsc2U7XHJcbiAgICAgICAgICBzdWJzY3JpYmUxLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xyXG4gICAgICAgICAgc3Vic2NyaWJlMS5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgIHN1YnNjcmliZTEuc3RhdHVzID0gZXJyb3Iuc3RhdHVzO1xyXG4gICAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcclxuICBcclxuICAgICAgICAgIG9ic2VydmFibGVIdHRwRXJyb3Ioc3Vic2NyaWJlMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEVycm9yVHlwZS5JT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjpcclxuICAgICAgICAgIGxldCBvYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yID0gPElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4+IGZhaWx1cmU7XHJcbiAgICAgICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+ID0gbmV3IFN1YnNjcmliZUN1c3RvbUVycm9yKCk7XHJcbiAgICAgICAgICBzdWJzY3JpYmUub2sgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChlcnJvci5lcnJvcikge1xyXG4gICAgICAgICAgICBzdWJzY3JpYmUuZXJyb3IgPSBlcnJvci5lcnJvcjtcclxuICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgc3Vic2NyaWJlLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xyXG4gICAgICAgICAgc3Vic2NyaWJlLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcclxuICAgICAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcclxuICBcclxuICAgICAgICAgIG9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3Ioc3Vic2NyaWJlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6ICAgICAgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9ICAgIFxyXG4gIH0gIFxyXG59Il19