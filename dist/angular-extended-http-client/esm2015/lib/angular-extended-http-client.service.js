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
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    getUsingHttpResponse(url, success, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessHttpResponse(x, success), error => this.processErrorResponse(error, failure));
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
    getUsingHttpCustomError(url, success, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessResponse(x, success), error => this.processHttpCustomError((/** @type {?} */ (error)), failure));
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
    postUsingHttpResponse(url, model, success, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessHttpResponse(x, success), error => this.processCustomErrorResponse((/** @type {?} */ (error)), failure));
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
     * @template TRequest, TResponse, TError
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    postUsingHttpCustomError(url, model, success, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessResponse(x, success), error => this.processHttpCustomError((/** @type {?} */ (error)), failure));
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
                success((/** @type {?} */ (response)).body);
            }
        }
    }
    /**
     * @private
     * @template TResponse
     * @param {?} response
     * @param {?} success
     * @return {?}
     */
    processSuccessHttpResponse(response, success) {
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
            failure((/** @type {?} */ (error)).error);
        }
    }
    /**
     * @private
     * @template TError
     * @param {?} error
     * @param {?} failure
     * @return {?}
     */
    processHttpCustomError(error, failure) {
        if (failure != null) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7OztBQUVELGlDQUdDOzs7OztBQUVELDZDQUVDOzs7O0FBRUQsc0NBRUM7Ozs7O0FBRUQsNENBRUM7Ozs7O0FBRUQsZ0RBRUM7Ozs7QUFFRCxvQ0FLQzs7O0lBSkcsNEJBQVk7O0lBQ1osaUNBQXFCOztJQUNyQixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7OztBQUd2QixnQ0FJQzs7O0lBSEcsd0JBQVk7O0lBQ1osMEJBQVE7O0lBQ1IsNkJBQXFCOzs7OztBQUd6QixNQUFNLE9BQU8sU0FBUztDQU1yQjs7O0lBTEcsdUJBQVk7O0lBQ1oseUJBQVE7O0lBQ1IsNEJBQXFCOztJQUNyQiwyQkFBZTs7SUFDZiwrQkFBbUI7Ozs7O0FBR3ZCLHFDQUlDOzs7SUFIRyxrQ0FBZ0I7O0lBQ2hCLGlDQUFlOztJQUNmLHFDQUFtQjs7Ozs7O0FBR3ZCLDJDQUtDOzs7SUFKQyxzQ0FBYzs7SUFDZCx3Q0FBZ0I7O0lBQ2hCLHVDQUFlOztJQUNmLDJDQUFtQjs7QUFHckIsTUFBTSxPQUFPLGNBQWM7Q0FNMUI7OztJQUxHLDRCQUFZOztJQUNaLGlDQUFxQjs7SUFDckIsaUNBQWdCOztJQUNoQixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7O0FBR3ZCLE1BQU0sT0FBTyxvQkFBb0I7Q0FPaEM7OztJQU5DLGtDQUFZOztJQUNaLHFDQUFjOztJQUNkLHVDQUFxQjs7SUFDckIsdUNBQWdCOztJQUNoQixz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U0FDdkI7SUFDSCxDQUFDOzs7Ozs7OztJQUVPLHNCQUFzQixDQUFTLEtBQVUsRUFBRSxPQUEyQztRQUU1RixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7O2dCQUNmLFNBQVMsR0FBaUMsSUFBSSxvQkFBb0IsRUFBRTtZQUN4RSxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQy9CO1lBQ0QsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNsQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDaEMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBRXhDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7OztZQTVLRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUEzR1EsVUFBVTs7Ozs7Ozs7SUE4R0wsK0JBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgSU9ic2VydmFibGVCYXNlIHtcbiAgICAvLyhzdWJzY3JpYmU6IElTdWJzY3JpYmU8VD4pIDogdm9pZDsgICAgXG4gICAgKHN1YnNjcmliZTogVCkgOiB2b2lkOyAgICBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUh0dHBSZXNwb25zZTxUPiBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XG4gIChzdWJzY3JpYmU6IElTdWJzY3JpYmU8VD4pIDogdm9pZDsgICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVFcnJvciBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XG4gICAgKGVycm9yOiBJU3Vic2NyaWJlRXJyb3IpIDogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIChlcnJvcjogVEVycm9yKSA6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I8VEVycm9yPiBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XG4gIChlcnJvcjogSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4pIDogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlQmFzZSB7XG4gICAgb2s6IGJvb2xlYW47XG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgc3RhdHVzOiBudW1iZXI7XG4gICAgc3RhdHVzVGV4dDogc3RyaW5nOyAgICBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlPFQ+IGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xuICAgIG9rOiBib29sZWFuO1xuICAgIGJvZHk6IFQ7XG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmU8VD4gaW1wbGVtZW50cyBJU3Vic2NyaWJlPFQ+IHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBib2R5OiBUO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlRXJyb3IgZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcbiAgZXJyb3I6IFRFcnJvcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBzdGF0dXM6IG51bWJlcjtcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlRXJyb3IgaW1wbGVtZW50cyBJU3Vic2NyaWJlRXJyb3Ige1xuICAgIG9rOiBib29sZWFuO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzdGF0dXM6IG51bWJlcjtcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IGltcGxlbWVudHMgSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4ge1xuICBvazogYm9vbGVhbjtcbiAgZXJyb3I6IFRFcnJvcjtcbiAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgc3RhdHVzOiBudW1iZXI7XG4gIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSHR0cENsaWVudEV4dGVuZGVkIHtcbiAgICBnZXQ8VD4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3IsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xuXG4gICAgZ2V0VXNpbmdIdHRwUmVzcG9uc2U8VD4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUh0dHBSZXNwb25zZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3IsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xuXG4gICAgZ2V0VXNpbmdDdXN0b21FcnJvcjxULCBURXJyb3I+KHVybDogc3RyaW5nLCBzdWNjZXNzPzogSU9ic2VydmFibGU8VD4sIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUN1c3RvbUVycm9yPFRFcnJvcj4sIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xuXG4gICAgZ2V0VXNpbmdIdHRwQ3VzdG9tRXJyb3I8VCwgVEVycm9yPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFQ+LCBmYWlsdXJlPzogSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XG5cbiAgICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+O1xuXG4gICAgcG9zdFVzaW5nSHR0cFJlc3BvbnNlPFRSZXF1ZXN0LCBUUmVzcG9uc2UsIFRFcnJvcj4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgIHBvc3RVc2luZ0N1c3RvbUVycm9yPFRSZXF1ZXN0LCBUUmVzcG9uc2UsIFRFcnJvcj4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUUmVzcG9uc2U+LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgIHBvc3RVc2luZ0h0dHBDdXN0b21FcnJvcjxUUmVxdWVzdCwgVFJlc3BvbnNlLCBURXJyb3I+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjxURXJyb3I+LCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnRFeHQgaW1wbGVtZW50cyBJSHR0cENsaWVudEV4dGVuZGVkIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaWVudDogSHR0cENsaWVudClcbiAge1xuICB9XG5cbiAgZ2V0PFQ+KHVybDogc3RyaW5nLCBzdWNjZXNzPzogSU9ic2VydmFibGU8VD4sIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7ICAgICAgICAgICAgICAgIFxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5nZXQ8VD4odXJsLCBvcHRpb25zICE9IG51bGwgPyB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSkpO1xuICAgIH0gICAgICAgIFxuXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXG4gIH0gIFxuXG4gIGdldFVzaW5nQ3VzdG9tRXJyb3I8VCwgVEVycm9yPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFQ+LCBmYWlsdXJlPzogSU9ic2VydmFibGVDdXN0b21FcnJvcjxURXJyb3I+LCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7XG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LmdldDxUPih1cmwsIG9wdGlvbnMgIT0gbnVsbCA/IHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pXG5cbiAgICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NDdXN0b21FcnJvclJlc3BvbnNlKDxURXJyb3I+ZXJyb3IsIGZhaWx1cmUpKTtcbiAgICAgIH0gICAgICAgIFxuXG4gICAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfVxuXG4gIGdldFVzaW5nSHR0cFJlc3BvbnNlPFQ+KHVybDogc3RyaW5nLCBzdWNjZXNzPzogSU9ic2VydmFibGVIdHRwUmVzcG9uc2U8VD4sIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7ICAgICAgICAgICAgICAgIFxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5nZXQ8VD4odXJsLCBvcHRpb25zICE9IG51bGwgPyB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzSHR0cFJlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUpKTtcbiAgICB9ICAgICAgICBcblxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxuICB9XG5cblxuICBnZXRVc2luZ0h0dHBDdXN0b21FcnJvcjxULCBURXJyb3I+KHVybDogc3RyaW5nLCBzdWNjZXNzPzogSU9ic2VydmFibGU8VD4sIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjxURXJyb3I+LCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7XG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LmdldDxUPih1cmwsIG9wdGlvbnMgIT0gbnVsbCA/IHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pXG5cbiAgICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NIdHRwQ3VzdG9tRXJyb3IoPFRFcnJvcj5lcnJvciwgZmFpbHVyZSkpO1xuICAgICAgfSAgICAgICAgXG5cbiAgICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxuICB9ICBcblxuXG4gIHBvc3Q8VFJlcXVlc3QsIFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvciwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PiB7ICAgICAgICAgICAgICAgIFxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wb3N0PFRSZXNwb25zZT4odXJsLCBtb2RlbCwgb3B0aW9ucyAhPSBudWxsID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSlcbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICAgIGh0dHBSZXNwb25zZVxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlKSk7XG4gICAgfSAgICAgICAgXG5cbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfVxuXG4gIHBvc3RVc2luZ0h0dHBSZXNwb25zZTxUUmVxdWVzdCwgVFJlc3BvbnNlLCBURXJyb3I+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlQ3VzdG9tRXJyb3I8VEVycm9yPiwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PiB7ICAgICAgICAgICAgICAgIFxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wb3N0PFRSZXNwb25zZT4odXJsLCBtb2RlbCwgb3B0aW9ucyAhPSBudWxsID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSlcbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICAgIGh0dHBSZXNwb25zZVxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NIdHRwUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzQ3VzdG9tRXJyb3JSZXNwb25zZSg8VEVycm9yPmVycm9yLCBmYWlsdXJlKSk7XG4gICAgfSAgICAgICAgXG5cbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfVxuXG4gIHBvc3RVc2luZ0N1c3RvbUVycm9yPFRSZXF1ZXN0LCBUUmVzcG9uc2UsIFRFcnJvcj4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVDdXN0b21FcnJvcjxURXJyb3I+LCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+IHsgICAgICAgICAgICAgICAgXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LnBvc3Q8VFJlc3BvbnNlPih1cmwsIG1vZGVsLCBvcHRpb25zICE9IG51bGwgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgaHR0cFJlc3BvbnNlXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0N1c3RvbUVycm9yUmVzcG9uc2UoPFRFcnJvcj5lcnJvciwgZmFpbHVyZSkpO1xuICAgIH0gICAgICAgIFxuXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXG4gIH1cbiAgXG4gIHBvc3RVc2luZ0h0dHBDdXN0b21FcnJvcjxUUmVxdWVzdCwgVFJlc3BvbnNlLCBURXJyb3I+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFRSZXNwb25zZT4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4sIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucG9zdDxUUmVzcG9uc2U+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzSHR0cEN1c3RvbUVycm9yKDxURXJyb3I+ZXJyb3IsIGZhaWx1cmUpKTtcbiAgICB9ICAgICAgICBcblxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxuICB9ICBcblxuICBwcml2YXRlIHByb2Nlc3NTdWNjZXNzUmVzcG9uc2U8VFJlc3BvbnNlPihyZXNwb25zZTogSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIHN1Y2Nlc3M6IElPYnNlcnZhYmxlPFRSZXNwb25zZT4pIDogdm9pZCB7XG5cbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgc3VjY2VzcyhyZXNwb25zZSEuYm9keSk7XG4gICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfSAgICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzU3VjY2Vzc0h0dHBSZXNwb25zZTxUUmVzcG9uc2U+KHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgc3VjY2VzczogSU9ic2VydmFibGVIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPikgOiB2b2lkIHtcblxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmU8VFJlc3BvbnNlPiA9IG5ldyBTdWJzY3JpYmU8VFJlc3BvbnNlPigpO1xuICAgICAgICBzdWJzY3JpYmUub2sgPSByZXNwb25zZS5vaztcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xuICAgICAgICBzdWJzY3JpYmUuYm9keSA9IHJlc3BvbnNlLmJvZHk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHN1YnNjcmliZS5oZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgc3VjY2VzcyhzdWJzY3JpYmUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9ICAgICAgXG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yOiBhbnksIGZhaWx1cmU6IElPYnNlcnZhYmxlRXJyb3IpIDogdm9pZCB7XG5cbiAgICBpZiAoZmFpbHVyZSAhPSBudWxsKSB7XG4gICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmVFcnJvciA9IG5ldyBTdWJzY3JpYmVFcnJvcigpO1xuICAgICAgc3Vic2NyaWJlLm9rID0gZmFsc2U7XG4gICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IGVycm9yLmhlYWRlcnM7XG4gICAgICBzdWJzY3JpYmUubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICBzdWJzY3JpYmUuc3RhdHVzID0gZXJyb3Iuc3RhdHVzO1xuICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSBlcnJvci5zdGF0dXNUZXh0O1xuXG4gICAgICBmYWlsdXJlKHN1YnNjcmliZSk7XG4gICAgfSAgICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQ3VzdG9tRXJyb3JSZXNwb25zZTxURXJyb3I+KGVycm9yOiBhbnksIGZhaWx1cmU6IElPYnNlcnZhYmxlQ3VzdG9tRXJyb3I8VEVycm9yPikgOiB2b2lkIHtcblxuICAgIGlmIChmYWlsdXJlICE9IG51bGwpIHsgICAgICBcbiAgICAgIGZhaWx1cmUoZXJyb3IhLmVycm9yKTtcbiAgICB9ICAgICAgXG4gIH0gXG5cbiAgcHJpdmF0ZSBwcm9jZXNzSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4oZXJyb3I6IGFueSwgZmFpbHVyZTogSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I8VEVycm9yPikgOiB2b2lkIHtcblxuICAgIGlmIChmYWlsdXJlICE9IG51bGwpIHtcbiAgICAgIGxldCBzdWJzY3JpYmU6IFN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4gPSBuZXcgU3Vic2NyaWJlQ3VzdG9tRXJyb3IoKTtcbiAgICAgIHN1YnNjcmliZS5vayA9IGZhbHNlO1xuICAgICAgaWYgKGVycm9yLmVycm9yKSB7XG4gICAgICAgIHN1YnNjcmliZS5lcnJvciA9IGVycm9yLmVycm9yO1xuICAgICAgfSAgICAgICAgXG4gICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IGVycm9yLmhlYWRlcnM7XG4gICAgICBzdWJzY3JpYmUubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICBzdWJzY3JpYmUuc3RhdHVzID0gZXJyb3Iuc3RhdHVzO1xuICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSBlcnJvci5zdGF0dXNUZXh0O1xuXG4gICAgICBmYWlsdXJlKHN1YnNjcmliZSk7XG4gICAgfSAgICAgIFxuICB9ICAgXG59Il19