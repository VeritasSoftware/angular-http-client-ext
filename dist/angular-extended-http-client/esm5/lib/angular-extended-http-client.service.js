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
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.get = function (url, success, failureType, failure, options) { };
    /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.getUsingHttpResponse = function (url, success, failureType, failure, options) { };
    /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.getUsingHttpCustomResponse = function (url, success, failureType, failure, options) { };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.post = function (url, model, success, failureType, failure, options) { };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.postUsingHttpResponse = function (url, model, success, failureType, failure, options) { };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.postUsingHttpCustomResponse = function (url, model, success, failureType, failure, options) { };
}
var HttpClientExt = /** @class */ (function () {
    function HttpClientExt(client) {
        this.client = client;
    }
    /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.get = /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, success, failureType, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
        }
        return httpResponse;
    };
    /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.getUsingHttpResponse = /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, success, failureType, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessHttpResponse(x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
        }
        return httpResponse;
    };
    /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.getUsingHttpCustomResponse = /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, success, failureType, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessHttpCustomResponse(x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
        }
        return httpResponse;
    };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
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
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, model, success, failureType, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessResponse(x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
        }
        return httpResponse;
    };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.postUsingHttpResponse = /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, model, success, failureType, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessHttpResponse(x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
        }
        return httpResponse;
    };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    HttpClientExt.prototype.postUsingHttpCustomResponse = /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    function (url, model, success, failureType, failure, options) {
        var _this = this;
        /** @type {?} */
        var httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) { return _this.processSuccessHttpCustomResponse(x, success); }, function (error) { return _this.processErrorResponse(error, failure, failureType); });
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
                var subscribe = new SubscribeBase();
                subscribe.ok = response.ok;
                subscribe.status = response.status;
                subscribe.statusText = response.statusText;
                subscribe.headers = response.headers;
                success(subscribe);
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
    HttpClientExt.prototype.processSuccessHttpCustomResponse = /**
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
     * @template TError
     * @param {?} error
     * @param {?} failure
     * @param {?} errorType
     * @return {?}
     */
    HttpClientExt.prototype.processErrorResponse = /**
     * @private
     * @template TError
     * @param {?} error
     * @param {?} failure
     * @param {?} errorType
     * @return {?}
     */
    function (error, failure, errorType) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7O0FBRUQsMENBRUM7Ozs7O0FBS0QsaUNBRUM7Ozs7QUFLRCw2Q0FFQzs7Ozs7QUFLRCxtREFFQzs7Ozs7QUFLRCxzQ0FFQzs7OztBQUtELDBDQUVDOzs7OztBQUtELGdEQUVDOzs7O0FBRUQsb0NBS0M7OztJQUpHLDRCQUFZOztJQUNaLGlDQUFxQjs7SUFDckIsZ0NBQWU7O0lBQ2Ysb0NBQW1COzs7Ozs7QUFHdkIsZ0NBSUM7OztJQUhHLHdCQUFZOztJQUNaLDBCQUFROztJQUNSLDZCQUFxQjs7QUFHekI7SUFBQTtJQUtBLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSkMsMkJBQVk7O0lBQ1osZ0NBQXFCOztJQUNyQiwrQkFBZTs7SUFDZixtQ0FBbUI7Ozs7O0FBR3JCOzs7O0lBQUE7SUFNQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7Ozs7OztJQUxHLHVCQUFZOztJQUNaLHlCQUFROztJQUNSLDRCQUFxQjs7SUFDckIsMkJBQWU7O0lBQ2YsK0JBQW1COzs7OztBQUd2QixxQ0FJQzs7O0lBSEcsa0NBQWdCOztJQUNoQixpQ0FBZTs7SUFDZixxQ0FBbUI7Ozs7OztBQUd2QiwyQ0FLQzs7O0lBSkMsc0NBQWM7O0lBQ2Qsd0NBQWdCOztJQUNoQix1Q0FBZTs7SUFDZiwyQ0FBbUI7O0FBR3JCO0lBQUE7SUFNQSxDQUFD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QUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2pDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFFekMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDUixLQUFLLFNBQVMsQ0FBQywwQkFBMEI7O29CQUNuQyx5QkFBeUIsR0FBRyxtQkFBcUMsT0FBTyxFQUFBOztvQkFDeEUsU0FBUyxHQUFpQyxJQUFJLG9CQUFvQixFQUFFO2dCQUN4RSxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO29CQUNmLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDL0I7Z0JBQ0QsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNsQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUV4Qyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckMsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7O2dCQXpLRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXBKUSxVQUFVOzs7d0JBRG5CO0NBNlRDLEFBMUtELElBMEtDO1NBdktZLGFBQWE7Ozs7OztJQUVaLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVFcnJvckJhc2Uge1xyXG4gICAgXHJcbn1cclxuXHJcbi8qXHJcblN1Y2Nlc3MgY2FsbGJhY2sgLSByZXR1cm5zIHRoZSBtb2RlbCBmcm9tIHRoZSBib2R5IG9mIHRoZSBBUEkgcmVzcG9uc2VcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZTxUPiBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XHJcbiAgICAoc3Vic2NyaWJlOiBUKSA6IHZvaWQ7ICAgIFxyXG59XHJcblxyXG4vKlxyXG5TdWNjZXNzIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgaHR0cCByZXNwb25zZS5cclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUh0dHBSZXNwb25zZSBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XHJcbiAgKHN1YnNjcmliZTogSVN1YnNjcmliZUJhc2UpIDogdm9pZDsgICAgXHJcbn1cclxuXHJcbi8qXHJcblN1Y2Nlc3MgY2FsbGJhY2sgLSByZXR1cm5zIHRoZSBodHRwIHJlc3BvbnNlIGFuZCB0aGUgbW9kZWwgZnJvbSB0aGUgYm9keSBvZiB0aGUgQVBJIHJlc3BvbnNlXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2U8VD4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gIChzdWJzY3JpYmU6IElTdWJzY3JpYmU8VD4pIDogdm9pZDsgICAgXHJcbn1cclxuXHJcbi8qIFxyXG5GYWlsdXJlIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgQVBJIHRocm93biBjdXN0b20gZXhjZXB0aW9uXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVFcnJvcjxURXJyb3I+IGV4dGVuZHMgSU9ic2VydmFibGVFcnJvckJhc2Uge1xyXG4gICAgKGVycm9yOiBURXJyb3IpIDogdm9pZDtcclxufVxyXG5cclxuLyogXHJcbkZhaWx1cmUgY2FsbGJhY2sgLSByZXR1cm5zIHRoZSBodHRwIGVycm9yIHJlc3BvbnNlIHRocm91Z2ggaW50ZXJmYWNlIElTdWJzY3JpYmVFcnJvclxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cEVycm9yIGV4dGVuZHMgSU9ic2VydmFibGVFcnJvckJhc2Uge1xyXG4gIChlcnJvcjogSVN1YnNjcmliZUVycm9yKSA6IHZvaWQ7XHJcbn1cclxuXHJcbi8qIFxyXG5GYWlsdXJlIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgaHR0cCBlcnJvciByZXNwb25zZSBhbmQgdGhlIEFQSSB0aHJvdyBjdXN0b20gZXhjZXB0aW9uIHRocm91Z2ggaW50ZXJmYWNlIElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+XHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I8VEVycm9yPiBleHRlbmRzIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAoZXJyb3I6IElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+KSA6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUJhc2Uge1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgc3RhdHVzVGV4dDogc3RyaW5nOyAgICBcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlPFQ+IGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbiAgICBib2R5OiBUO1xyXG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVCYXNlIGltcGxlbWVudHMgSVN1YnNjcmliZUJhc2Uge1xyXG4gIG9rOiBib29sZWFuO1xyXG4gIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZTxUPiBpbXBsZW1lbnRzIElTdWJzY3JpYmU8VD4ge1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbiAgICBib2R5OiBUO1xyXG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlRXJyb3IgZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcclxuICBlcnJvcjogVEVycm9yO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVFcnJvciBpbXBsZW1lbnRzIElTdWJzY3JpYmVFcnJvciB7XHJcbiAgICBvazogYm9vbGVhbjtcclxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IGltcGxlbWVudHMgSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4ge1xyXG4gIG9rOiBib29sZWFuO1xyXG4gIGVycm9yOiBURXJyb3I7XHJcbiAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXJyb3JUeXBlIHtcclxuICBJT2JzZXJ2YWJsZUVycm9yLFxyXG4gIElPYnNlcnZhYmxlSHR0cEVycm9yLFxyXG4gIElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUh0dHBDbGllbnRFeHRlbmRlZCB7XHJcbiAgICBnZXQ8VD4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XHJcblxyXG4gICAgZ2V0VXNpbmdIdHRwUmVzcG9uc2U8VD4odXJsOiBzdHJpbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVIdHRwUmVzcG9uc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XHJcblxyXG4gICAgZ2V0VXNpbmdIdHRwQ3VzdG9tUmVzcG9uc2U8VD4odXJsOiBzdHJpbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2U8VD4sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XHJcblxyXG4gICAgcG9zdDxUUmVxdWVzdCwgVFJlc3BvbnNlPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+O1xyXG5cclxuICAgIHBvc3RVc2luZ0h0dHBSZXNwb25zZTxUUmVxdWVzdCwgVFJlc3BvbnNlPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVIdHRwUmVzcG9uc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIHBvc3RVc2luZ0h0dHBDdXN0b21SZXNwb25zZTxUUmVxdWVzdCwgVFJlc3BvbnNlPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlPFRSZXNwb25zZT4sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnRFeHQgaW1wbGVtZW50cyBJSHR0cENsaWVudEV4dGVuZGVkIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbGllbnQ6IEh0dHBDbGllbnQpXHJcbiAge1xyXG4gIH1cclxuICBcclxuICBnZXQ8VD4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5nZXQ8VD4odXJsLCBvcHRpb25zICE9IG51bGwgPyB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IDoge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuXHJcbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XHJcbiAgICAgICAgaHR0cFJlc3BvbnNlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSwgZmFpbHVyZVR5cGUpKTtcclxuICAgIH0gICAgICAgIFxyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0VXNpbmdIdHRwUmVzcG9uc2U8VD4odXJsOiBzdHJpbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LmdldDxUPih1cmwsIG9wdGlvbnMgIT0gbnVsbCA/IHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG5cclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBodHRwUmVzcG9uc2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NIdHRwUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSwgZmFpbHVyZVR5cGUpKTtcclxuICAgIH0gICAgICAgIFxyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0VXNpbmdIdHRwQ3VzdG9tUmVzcG9uc2U8VD4odXJsOiBzdHJpbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlPFQ+LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LmdldDxUPih1cmwsIG9wdGlvbnMgIT0gbnVsbCA/IHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG5cclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBodHRwUmVzcG9uc2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NIdHRwQ3VzdG9tUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSwgZmFpbHVyZVR5cGUpKTtcclxuICAgIH0gICAgICAgIFxyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgcG9zdDxUUmVxdWVzdCwgVFJlc3BvbnNlPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFRSZXNwb25zZT4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucG9zdDxUUmVzcG9uc2U+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBodHRwUmVzcG9uc2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlLCBmYWlsdXJlVHlwZSkpO1xyXG4gICAgfSAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBwb3N0VXNpbmdIdHRwUmVzcG9uc2U8VFJlcXVlc3QsIFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUh0dHBSZXNwb25zZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wb3N0PFRSZXNwb25zZT4odXJsLCBtb2RlbCwgb3B0aW9ucyAhPSBudWxsID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc0h0dHBSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlLCBmYWlsdXJlVHlwZSkpO1xyXG4gICAgfSAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBwb3N0VXNpbmdIdHRwQ3VzdG9tUmVzcG9uc2U8VFJlcXVlc3QsIFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUh0dHBDdXN0b21SZXNwb25zZTxUUmVzcG9uc2U+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LnBvc3Q8VFJlc3BvbnNlPih1cmwsIG1vZGVsLCBvcHRpb25zICE9IG51bGwgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XHJcbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XHJcbiAgICAgICAgaHR0cFJlc3BvbnNlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzSHR0cEN1c3RvbVJlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcclxuICB9ICBcclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlPFRSZXNwb25zZT4ocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBzdWNjZXNzOiBJT2JzZXJ2YWJsZTxUUmVzcG9uc2U+KSA6IHZvaWQge1xyXG5cclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgc3VjY2VzcyhyZXNwb25zZSEuYm9keSk7XHJcbiAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH0gICAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc1N1Y2Nlc3NIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPihyZXNwb25zZTogSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIHN1Y2Nlc3M6IElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlKSA6IHZvaWQge1xyXG5cclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgbGV0IHN1YnNjcmliZTogSVN1YnNjcmliZUJhc2UgPSBuZXcgU3Vic2NyaWJlQmFzZSgpO1xyXG4gICAgICAgIHN1YnNjcmliZS5vayA9IHJlc3BvbnNlLm9rO1xyXG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xyXG4gICAgICAgIHN1YnNjcmliZS5oZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHN1Y2Nlc3Moc3Vic2NyaWJlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH0gICAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc1N1Y2Nlc3NIdHRwQ3VzdG9tUmVzcG9uc2U8VFJlc3BvbnNlPihyZXNwb25zZTogSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIHN1Y2Nlc3M6IElPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlPFRSZXNwb25zZT4pIDogdm9pZCB7XHJcblxyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBsZXQgc3Vic2NyaWJlOiBJU3Vic2NyaWJlPFRSZXNwb25zZT4gPSBuZXcgU3Vic2NyaWJlPFRSZXNwb25zZT4oKTtcclxuICAgICAgICBzdWJzY3JpYmUub2sgPSByZXNwb25zZS5vaztcclxuICAgICAgICBzdWJzY3JpYmUuc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgICBzdWJzY3JpYmUuYm9keSA9IHJlc3BvbnNlLmJvZHk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc3Vic2NyaWJlLmhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc3VjY2VzcyhzdWJzY3JpYmUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfSAgICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzRXJyb3JSZXNwb25zZTxURXJyb3I+KGVycm9yOiBhbnksIGZhaWx1cmU6IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBlcnJvclR5cGU6IEVycm9yVHlwZSkgOiB2b2lkIHtcclxuXHJcbiAgICBzd2l0Y2goZXJyb3JUeXBlKVxyXG4gICAge1xyXG4gICAgICBjYXNlIEVycm9yVHlwZS5JT2JzZXJ2YWJsZUVycm9yOlxyXG4gICAgICAgIGxldCBvYnNlcnZhYmxlRXJyb3IgPSA8SU9ic2VydmFibGVFcnJvcjxURXJyb3I+PiBmYWlsdXJlO1xyXG4gICAgICAgIG9ic2VydmFibGVFcnJvcihlcnJvciEuZXJyb3IpOyAgICAgICAgXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRXJyb3JUeXBlLklPYnNlcnZhYmxlSHR0cEVycm9yOlxyXG4gICAgICAgIGxldCBvYnNlcnZhYmxlSHR0cEVycm9yID0gPElPYnNlcnZhYmxlSHR0cEVycm9yPiBmYWlsdXJlO1xyXG4gICAgICAgIGxldCBzdWJzY3JpYmUxOiBTdWJzY3JpYmVFcnJvciA9IG5ldyBTdWJzY3JpYmVFcnJvcigpO1xyXG4gICAgICAgIHN1YnNjcmliZTEub2sgPSBmYWxzZTtcclxuICAgICAgICBzdWJzY3JpYmUxLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xyXG4gICAgICAgIHN1YnNjcmliZTEubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XHJcbiAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcclxuXHJcbiAgICAgICAgb2JzZXJ2YWJsZUh0dHBFcnJvcihzdWJzY3JpYmUxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFcnJvclR5cGUuSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I6XHJcbiAgICAgICAgbGV0IG9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3IgPSA8SU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I8VEVycm9yPj4gZmFpbHVyZTtcclxuICAgICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+ID0gbmV3IFN1YnNjcmliZUN1c3RvbUVycm9yKCk7XHJcbiAgICAgICAgc3Vic2NyaWJlLm9rID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGVycm9yLmVycm9yKSB7XHJcbiAgICAgICAgICBzdWJzY3JpYmUuZXJyb3IgPSBlcnJvci5lcnJvcjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IGVycm9yLmhlYWRlcnM7XHJcbiAgICAgICAgc3Vic2NyaWJlLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XHJcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSBlcnJvci5zdGF0dXNUZXh0O1xyXG5cclxuICAgICAgICBvYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yKHN1YnNjcmliZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6ICAgICAgICBcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9ICBcclxufSJdfQ==