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
 * @template T
 */
export function IObservableHttpResponse() { }
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
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.getUsingHttpResponse = function (url, success, failure, options) { };
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
     * @template T, TError
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.getUsingHttpCustomError = function (url, success, failure, options) { };
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
    IHttpClientExtended.prototype.postUsingHttpResponse = function (url, model, success, failure, options) { };
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
    /**
     * @template TRequest, TResponse, TError
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.postUsingHttpCustomError = function (url, model, success, failure, options) { };
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
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.getUsingHttpResponse = /**
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
                .subscribe(function (x) { return _this.processSuccessHttpResponse(x, success); }, function (error) { return _this.processErrorResponse(error, failure); });
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
    HttpClientExt.prototype.getUsingHttpCustomError = /**
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
                .subscribe(function (x) { return _this.processSuccessResponse(x, success); }, function (error) { return _this.processHttpCustomError((/** @type {?} */ (error)), failure); });
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
    HttpClientExt.prototype.postUsingHttpResponse = /**
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
                .subscribe(function (x) { return _this.processSuccessHttpResponse(x, success); }, function (error) { return _this.processCustomErrorResponse((/** @type {?} */ (error)), failure); });
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
     * @template TRequest, TResponse, TError
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.postUsingHttpCustomError = /**
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
                .subscribe(function (x) { return _this.processSuccessResponse(x, success); }, function (error) { return _this.processHttpCustomError((/** @type {?} */ (error)), failure); });
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
                success((/** @type {?} */ (response)).body);
            }
        }
    };
    /**
     * @private
     * @template TResponse
     * @param {?} response
     * @param {?} success
     * @return {?}
     */
    HttpClientExt.prototype.processSuccessHttpResponse = /**
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
            failure((/** @type {?} */ (error)).error);
        }
    };
    /**
     * @private
     * @template TError
     * @param {?} error
     * @param {?} failure
     * @return {?}
     */
    HttpClientExt.prototype.processHttpCustomError = /**
     * @private
     * @template TError
     * @param {?} error
     * @param {?} failure
     * @return {?}
     */
    function (error, failure) {
        if (failure != null) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7OztBQUVELGlDQUdDOzs7OztBQUVELDZDQUVDOzs7O0FBRUQsc0NBRUM7Ozs7O0FBRUQsNENBRUM7Ozs7O0FBRUQsZ0RBRUM7Ozs7QUFFRCxvQ0FLQzs7O0lBSkcsNEJBQVk7O0lBQ1osaUNBQXFCOztJQUNyQixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7OztBQUd2QixnQ0FJQzs7O0lBSEcsd0JBQVk7O0lBQ1osMEJBQVE7O0lBQ1IsNkJBQXFCOzs7OztBQUd6Qjs7OztJQUFBO0lBTUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7Ozs7SUFMRyx1QkFBWTs7SUFDWix5QkFBUTs7SUFDUiw0QkFBcUI7O0lBQ3JCLDJCQUFlOztJQUNmLCtCQUFtQjs7Ozs7QUFHdkIscUNBSUM7OztJQUhHLGtDQUFnQjs7SUFDaEIsaUNBQWU7O0lBQ2YscUNBQW1COzs7Ozs7QUFHdkIsMkNBS0M7OztJQUpDLHNDQUFjOztJQUNkLHdDQUFnQjs7SUFDaEIsdUNBQWU7O0lBQ2YsMkNBQW1COztBQUdyQjtJQUFBO0lBTUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMRyw0QkFBWTs7SUFDWixpQ0FBcUI7O0lBQ3JCLGlDQUFnQjs7SUFDaEIsZ0NBQWU7O0lBQ2Ysb0NBQW1COzs7OztBQUd2Qjs7OztJQUFBO0lBT0EsQ0FBQztJQUFELDJC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QUM7WUFDaEMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBRXhDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7O2dCQTVLRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQTNHUSxVQUFVOzs7d0JBRG5CO0NBdVJDLEFBN0tELElBNktDO1NBMUtZLGFBQWE7Ozs7OztJQUVaLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVCYXNlIHtcbiAgICBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZTxUPiBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XG4gICAgLy8oc3Vic2NyaWJlOiBJU3Vic2NyaWJlPFQ+KSA6IHZvaWQ7ICAgIFxuICAgIChzdWJzY3JpYmU6IFQpIDogdm9pZDsgICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVIdHRwUmVzcG9uc2U8VD4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xuICAoc3Vic2NyaWJlOiBJU3Vic2NyaWJlPFQ+KSA6IHZvaWQ7ICAgIFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlRXJyb3IgZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIChlcnJvcjogSVN1YnNjcmliZUVycm9yKSA6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVDdXN0b21FcnJvcjxURXJyb3I+IGV4dGVuZHMgSU9ic2VydmFibGVCYXNlIHtcbiAgICAoZXJyb3I6IFRFcnJvcikgOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xuICAoZXJyb3I6IElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+KSA6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUJhc2Uge1xuICAgIG9rOiBib29sZWFuO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZzsgICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZTxUPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBib2R5OiBUO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xufVxuXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlPFQ+IGltcGxlbWVudHMgSVN1YnNjcmliZTxUPiB7XG4gICAgb2s6IGJvb2xlYW47XG4gICAgYm9keTogVDtcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBzdGF0dXM6IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUVycm9yIGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzdGF0dXM6IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XG4gIGVycm9yOiBURXJyb3I7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgc3RhdHVzOiBudW1iZXI7XG4gIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUVycm9yIGltcGxlbWVudHMgSVN1YnNjcmliZUVycm9yIHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBudW1iZXI7XG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiBpbXBsZW1lbnRzIElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IHtcbiAgb2s6IGJvb2xlYW47XG4gIGVycm9yOiBURXJyb3I7XG4gIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHN0YXR1czogbnVtYmVyO1xuICBzdGF0dXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUh0dHBDbGllbnRFeHRlbmRlZCB7XG4gICAgZ2V0PFQ+KHVybDogc3RyaW5nLCBzdWNjZXNzPzogSU9ic2VydmFibGU8VD4sIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcblxuICAgIGdldFVzaW5nSHR0cFJlc3BvbnNlPFQ+KHVybDogc3RyaW5nLCBzdWNjZXNzPzogSU9ic2VydmFibGVIdHRwUmVzcG9uc2U8VD4sIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcblxuICAgIGdldFVzaW5nQ3VzdG9tRXJyb3I8VCwgVEVycm9yPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFQ+LCBmYWlsdXJlPzogSU9ic2VydmFibGVDdXN0b21FcnJvcjxURXJyb3I+LCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcblxuICAgIGdldFVzaW5nSHR0cEN1c3RvbUVycm9yPFQsIFRFcnJvcj4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4sIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xuXG4gICAgcG9zdDxUUmVxdWVzdCwgVFJlc3BvbnNlPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFRSZXNwb25zZT4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvciwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjtcblxuICAgIHBvc3RVc2luZ0h0dHBSZXNwb25zZTxUUmVxdWVzdCwgVFJlc3BvbnNlLCBURXJyb3I+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUN1c3RvbUVycm9yPFRFcnJvcj4sIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICBwb3N0VXNpbmdDdXN0b21FcnJvcjxUUmVxdWVzdCwgVFJlc3BvbnNlLCBURXJyb3I+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUN1c3RvbUVycm9yPFRFcnJvcj4sIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICBwb3N0VXNpbmdIdHRwQ3VzdG9tRXJyb3I8VFJlcXVlc3QsIFRSZXNwb25zZSwgVEVycm9yPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFRSZXNwb25zZT4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50RXh0IGltcGxlbWVudHMgSUh0dHBDbGllbnRFeHRlbmRlZCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbGllbnQ6IEh0dHBDbGllbnQpXG4gIHtcbiAgfVxuXG4gIGdldDxUPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFQ+LCBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvciwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj4geyAgICAgICAgICAgICAgICBcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQuZ2V0PFQ+KHVybCwgb3B0aW9ucyAhPSBudWxsID8geyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSlcblxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgaHR0cFJlc3BvbnNlXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUpKTtcbiAgICB9ICAgICAgICBcblxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxuICB9ICBcblxuICBnZXRVc2luZ0N1c3RvbUVycm9yPFQsIFRFcnJvcj4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj4ge1xuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5nZXQ8VD4odXJsLCBvcHRpb25zICE9IG51bGwgPyB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuXG4gICAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICAgICAgaHR0cFJlc3BvbnNlXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzQ3VzdG9tRXJyb3JSZXNwb25zZSg8VEVycm9yPmVycm9yLCBmYWlsdXJlKSk7XG4gICAgICB9ICAgICAgICBcblxuICAgICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXG4gIH1cblxuICBnZXRVc2luZ0h0dHBSZXNwb25zZTxUPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlPFQ+LCBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvciwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj4geyAgICAgICAgICAgICAgICBcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQuZ2V0PFQ+KHVybCwgb3B0aW9ucyAhPSBudWxsID8geyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSlcblxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgaHR0cFJlc3BvbnNlXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc0h0dHBSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlKSk7XG4gICAgfSAgICAgICAgXG5cbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfVxuXG5cbiAgZ2V0VXNpbmdIdHRwQ3VzdG9tRXJyb3I8VCwgVEVycm9yPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFQ+LCBmYWlsdXJlPzogSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj4ge1xuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5nZXQ8VD4odXJsLCBvcHRpb25zICE9IG51bGwgPyB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuXG4gICAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICAgICAgaHR0cFJlc3BvbnNlXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzSHR0cEN1c3RvbUVycm9yKDxURXJyb3I+ZXJyb3IsIGZhaWx1cmUpKTtcbiAgICAgIH0gICAgICAgIFxuXG4gICAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfSAgXG5cblxuICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFRSZXNwb25zZT4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3IsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucG9zdDxUUmVzcG9uc2U+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSkpO1xuICAgIH0gICAgICAgIFxuXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXG4gIH1cblxuICBwb3N0VXNpbmdIdHRwUmVzcG9uc2U8VFJlcXVlc3QsIFRSZXNwb25zZSwgVEVycm9yPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUN1c3RvbUVycm9yPFRFcnJvcj4sIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucG9zdDxUUmVzcG9uc2U+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzSHR0cFJlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0N1c3RvbUVycm9yUmVzcG9uc2UoPFRFcnJvcj5lcnJvciwgZmFpbHVyZSkpO1xuICAgIH0gICAgICAgIFxuXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXG4gIH1cblxuICBwb3N0VXNpbmdDdXN0b21FcnJvcjxUUmVxdWVzdCwgVFJlc3BvbnNlLCBURXJyb3I+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFRSZXNwb25zZT4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PiB7ICAgICAgICAgICAgICAgIFxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wb3N0PFRSZXNwb25zZT4odXJsLCBtb2RlbCwgb3B0aW9ucyAhPSBudWxsID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSlcbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICAgIGh0dHBSZXNwb25zZVxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NDdXN0b21FcnJvclJlc3BvbnNlKDxURXJyb3I+ZXJyb3IsIGZhaWx1cmUpKTtcbiAgICB9ICAgICAgICBcblxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxuICB9XG4gIFxuICBwb3N0VXNpbmdIdHRwQ3VzdG9tRXJyb3I8VFJlcXVlc3QsIFRSZXNwb25zZSwgVEVycm9yPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUUmVzcG9uc2U+LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjxURXJyb3I+LCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+IHsgICAgICAgICAgICAgICAgXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LnBvc3Q8VFJlc3BvbnNlPih1cmwsIG1vZGVsLCBvcHRpb25zICE9IG51bGwgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgaHR0cFJlc3BvbnNlXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0h0dHBDdXN0b21FcnJvcig8VEVycm9yPmVycm9yLCBmYWlsdXJlKSk7XG4gICAgfSAgICAgICAgXG5cbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfSAgXG5cbiAgcHJpdmF0ZSBwcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlPFRSZXNwb25zZT4ocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBzdWNjZXNzOiBJT2JzZXJ2YWJsZTxUUmVzcG9uc2U+KSA6IHZvaWQge1xuXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UhLmJvZHkpO1xuICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH0gICAgICBcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc1N1Y2Nlc3NIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPihyZXNwb25zZTogSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIHN1Y2Nlc3M6IElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4pIDogdm9pZCB7XG5cbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgbGV0IHN1YnNjcmliZTogU3Vic2NyaWJlPFRSZXNwb25zZT4gPSBuZXcgU3Vic2NyaWJlPFRSZXNwb25zZT4oKTtcbiAgICAgICAgc3Vic2NyaWJlLm9rID0gcmVzcG9uc2Uub2s7XG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgc3Vic2NyaWJlLmJvZHkgPSByZXNwb25zZS5ib2R5OyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIHN1Y2Nlc3Moc3Vic2NyaWJlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfSAgICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvcjogYW55LCBmYWlsdXJlOiBJT2JzZXJ2YWJsZUVycm9yKSA6IHZvaWQge1xuXG4gICAgaWYgKGZhaWx1cmUgIT0gbnVsbCkge1xuICAgICAgbGV0IHN1YnNjcmliZTogU3Vic2NyaWJlRXJyb3IgPSBuZXcgU3Vic2NyaWJlRXJyb3IoKTtcbiAgICAgIHN1YnNjcmliZS5vayA9IGZhbHNlO1xuICAgICAgc3Vic2NyaWJlLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xuICAgICAgc3Vic2NyaWJlLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcbiAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcblxuICAgICAgZmFpbHVyZShzdWJzY3JpYmUpO1xuICAgIH0gICAgICBcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0N1c3RvbUVycm9yUmVzcG9uc2U8VEVycm9yPihlcnJvcjogYW55LCBmYWlsdXJlOiBJT2JzZXJ2YWJsZUN1c3RvbUVycm9yPFRFcnJvcj4pIDogdm9pZCB7XG5cbiAgICBpZiAoZmFpbHVyZSAhPSBudWxsKSB7ICAgICAgXG4gICAgICBmYWlsdXJlKGVycm9yIS5lcnJvcik7XG4gICAgfSAgICAgIFxuICB9IFxuXG4gIHByaXZhdGUgcHJvY2Vzc0h0dHBDdXN0b21FcnJvcjxURXJyb3I+KGVycm9yOiBhbnksIGZhaWx1cmU6IElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4pIDogdm9pZCB7XG5cbiAgICBpZiAoZmFpbHVyZSAhPSBudWxsKSB7XG4gICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+ID0gbmV3IFN1YnNjcmliZUN1c3RvbUVycm9yKCk7XG4gICAgICBzdWJzY3JpYmUub2sgPSBmYWxzZTtcbiAgICAgIGlmIChlcnJvci5lcnJvcikge1xuICAgICAgICBzdWJzY3JpYmUuZXJyb3IgPSBlcnJvci5lcnJvcjtcbiAgICAgIH0gICAgICAgIFxuICAgICAgc3Vic2NyaWJlLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xuICAgICAgc3Vic2NyaWJlLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcbiAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcblxuICAgICAgZmFpbHVyZShzdWJzY3JpYmUpO1xuICAgIH0gICAgICBcbiAgfSAgIFxufSJdfQ==