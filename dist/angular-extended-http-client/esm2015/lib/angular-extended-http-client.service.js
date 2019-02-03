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
export class SubscribeBase {
}
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
/** @enum {number} */
const ResponseType = {
    IObservable: 0,
    IObservableHttpResponse: 1,
    IObservableHttpCustomResponse: 2,
};
export { ResponseType };
ResponseType[ResponseType.IObservable] = 'IObservable';
ResponseType[ResponseType.IObservableHttpResponse] = 'IObservableHttpResponse';
ResponseType[ResponseType.IObservableHttpCustomResponse] = 'IObservableHttpCustomResponse';
/** @enum {number} */
const ErrorType = {
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
     * @param {?} responseType
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
     * @param {?} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.post = function (url, model, responseType, success, failureType, failure, options) { };
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
     * @param {?} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    get(url, responseType, success, failureType, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessResponse(responseType, x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
    }
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    post(url, model, responseType, success, failureType, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessResponse(responseType, x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
    }
    /**
     * @private
     * @template TResponse
     * @param {?} responseType
     * @param {?} response
     * @param {?} success
     * @return {?}
     */
    processSuccessResponse(responseType, response, success) {
        if (response.ok) {
            switch (responseType) {
                case ResponseType.IObservable:
                    /** @type {?} */
                    let iObservable = (/** @type {?} */ (success));
                    iObservable((/** @type {?} */ (response)).body);
                    break;
                case ResponseType.IObservableHttpResponse:
                    /** @type {?} */
                    let iObservableHttpResponse = (/** @type {?} */ (success));
                    /** @type {?} */
                    let subscribe1 = new SubscribeBase();
                    subscribe1.ok = response.ok;
                    subscribe1.status = response.status;
                    subscribe1.statusText = response.statusText;
                    subscribe1.headers = response.headers;
                    iObservableHttpResponse(subscribe1);
                    break;
                case ResponseType.IObservableHttpCustomResponse:
                    /** @type {?} */
                    let iObservableHttpCustomResponse = (/** @type {?} */ (success));
                    /** @type {?} */
                    let subscribe2 = new Subscribe();
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
    processSuccessHttpCustomResponse(response, success) {
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
     * @template TError
     * @param {?} error
     * @param {?} failure
     * @param {?} errorType
     * @return {?}
     */
    processErrorResponse(error, failure, errorType) {
        switch (errorType) {
            case ErrorType.IObservableError:
                /** @type {?} */
                let observableError = (/** @type {?} */ (failure));
                observableError((/** @type {?} */ (error)).error);
                break;
            case ErrorType.IObservableHttpError:
                /** @type {?} */
                let observableHttpError = (/** @type {?} */ (failure));
                /** @type {?} */
                let subscribe1 = new SubscribeError();
                subscribe1.ok = false;
                subscribe1.headers = error.headers;
                subscribe1.message = error.message;
                subscribe1.status = error.status;
                subscribe1.statusText = error.statusText;
                observableHttpError(subscribe1);
                break;
            case ErrorType.IObservableHttpCustomError:
                /** @type {?} */
                let observableHttpCustomError = (/** @type {?} */ (failure));
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
                observableHttpCustomError(subscribe);
                break;
            default:
                break;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7O0FBRUQsMENBRUM7Ozs7O0FBS0QsaUNBRUM7Ozs7QUFLRCw2Q0FFQzs7Ozs7QUFLRCxtREFFQzs7Ozs7QUFLRCxzQ0FFQzs7OztBQUtELDBDQUVDOzs7OztBQUtELGdEQUVDOzs7O0FBRUQsb0NBS0M7OztJQUpHLDRCQUFZOztJQUNaLGlDQUFxQjs7SUFDckIsZ0NBQWU7O0lBQ2Ysb0NBQW1COzs7Ozs7QUFHdkIsZ0NBSUM7OztJQUhHLHdCQUFZOztJQUNaLDBCQUFROztJQUNSLDZCQUFxQjs7QUFHekIsTUFBTSxPQUFPLGFBQWE7Q0FLekI7OztJQUpDLDJCQUFZOztJQUNaLGdDQUFxQjs7SUFDckIsK0JBQWU7O0lBQ2YsbUNBQW1COzs7OztBQUdyQixNQUFNLE9BQU8sU0FBUztDQU1yQjs7O0lBTEcsdUJBQVk7O0lBQ1oseUJBQVE7O0lBQ1IsNEJBQXFCOztJQUNyQiwyQkFBZTs7SUFDZiwrQkFBbUI7Ozs7O0FBR3ZCLHFDQUlDOzs7SUFIRyxrQ0FBZ0I7O0lBQ2hCLGlDQUFlOztJQUNmLHFDQUFtQjs7Ozs7O0FBR3ZCLDJDQUtDOzs7SUFKQyxzQ0FBYzs7SUFDZCx3Q0FBZ0I7O0lBQ2hCLHVDQUFlOztJQUNmLDJDQUFtQjs7QUFHckIsTUFBTSxPQUFPLGNBQWM7Q0FNMUI7OztJQUxHLDRCQUFZOztJQUNaLGlDQUFxQjs7SUFDckIsaUNBQWdCOztJQUNoQixnQ0FB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QWlDLElBQUksb0JBQW9CLEVBQUU7Z0JBQ3hFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7b0JBQ2YsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUMvQjtnQkFDRCxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBRXhDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7O1lBdklGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQTNJUSxVQUFVOzs7Ozs7OztJQThJTCwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVCYXNlIHtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAgIFxyXG59XHJcblxyXG4vKlxyXG5TdWNjZXNzIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgbW9kZWwgZnJvbSB0aGUgYm9keSBvZiB0aGUgQVBJIHJlc3BvbnNlXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGU8VD4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gICAgKHN1YnNjcmliZTogVCkgOiB2b2lkOyAgICBcclxufVxyXG5cclxuLypcclxuU3VjY2VzcyBjYWxsYmFjayAtIHJldHVybnMgdGhlIGh0dHAgcmVzcG9uc2UuXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVIdHRwUmVzcG9uc2UgZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gIChzdWJzY3JpYmU6IElTdWJzY3JpYmVCYXNlKSA6IHZvaWQ7ICAgIFxyXG59XHJcblxyXG4vKlxyXG5TdWNjZXNzIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgaHR0cCByZXNwb25zZSBhbmQgdGhlIG1vZGVsIGZyb20gdGhlIGJvZHkgb2YgdGhlIEFQSSByZXNwb25zZVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlPFQ+IGV4dGVuZHMgSU9ic2VydmFibGVCYXNlIHtcclxuICAoc3Vic2NyaWJlOiBJU3Vic2NyaWJlPFQ+KSA6IHZvaWQ7ICAgIFxyXG59XHJcblxyXG4vKiBcclxuRmFpbHVyZSBjYWxsYmFjayAtIHJldHVybnMgdGhlIEFQSSB0aHJvd24gY3VzdG9tIGV4Y2VwdGlvblxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlRXJyb3I8VEVycm9yPiBleHRlbmRzIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAgIChlcnJvcjogVEVycm9yKSA6IHZvaWQ7XHJcbn1cclxuXHJcbi8qIFxyXG5GYWlsdXJlIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgaHR0cCBlcnJvciByZXNwb25zZSB0aHJvdWdoIGludGVyZmFjZSBJU3Vic2NyaWJlRXJyb3JcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUh0dHBFcnJvciBleHRlbmRzIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAoZXJyb3I6IElTdWJzY3JpYmVFcnJvcikgOiB2b2lkO1xyXG59XHJcblxyXG4vKiBcclxuRmFpbHVyZSBjYWxsYmFjayAtIHJldHVybnMgdGhlIGh0dHAgZXJyb3IgcmVzcG9uc2UgYW5kIHRoZSBBUEkgdGhyb3cgY3VzdG9tIGV4Y2VwdGlvbiB0aHJvdWdoIGludGVyZmFjZSBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPlxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUVycm9yQmFzZSB7XHJcbiAgKGVycm9yOiBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPikgOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdWJzY3JpYmVCYXNlIHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIHN0YXR1c1RleHQ6IHN0cmluZzsgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZTxUPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgYm9keTogVDtcclxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlQmFzZSBpbXBsZW1lbnRzIElTdWJzY3JpYmVCYXNlIHtcclxuICBvazogYm9vbGVhbjtcclxuICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmU8VD4gaW1wbGVtZW50cyBJU3Vic2NyaWJlPFQ+IHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgYm9keTogVDtcclxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUVycm9yIGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XHJcbiAgZXJyb3I6IFRFcnJvcjtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlRXJyb3IgaW1wbGVtZW50cyBJU3Vic2NyaWJlRXJyb3Ige1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiBpbXBsZW1lbnRzIElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IHtcclxuICBvazogYm9vbGVhbjtcclxuICBlcnJvcjogVEVycm9yO1xyXG4gIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJlc3BvbnNlVHlwZSB7XHJcbiAgSU9ic2VydmFibGUsXHJcbiAgSU9ic2VydmFibGVIdHRwUmVzcG9uc2UsXHJcbiAgSU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2VcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXJyb3JUeXBlIHtcclxuICBJT2JzZXJ2YWJsZUVycm9yLFxyXG4gIElPYnNlcnZhYmxlSHR0cEVycm9yLFxyXG4gIElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUh0dHBDbGllbnRFeHRlbmRlZCB7XHJcbiAgICBnZXQ8VD4odXJsOiBzdHJpbmcsIFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IFJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSwgXHJcbiAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBcclxuICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuXHJcbiAgICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogUmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudEV4dCBpbXBsZW1lbnRzIElIdHRwQ2xpZW50RXh0ZW5kZWQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaWVudDogSHR0cENsaWVudClcclxuICB7XHJcbiAgfVxyXG4gIFxyXG4gIGdldDxUPih1cmw6IHN0cmluZywgXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogUmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLCBcclxuICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQuZ2V0PFQ+KHVybCwgb3B0aW9ucyAhPSBudWxsID8geyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XHJcblxyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlVHlwZSwgeCwgc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcclxuICB9XHJcblxyXG5cclxuICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wb3N0PFRSZXNwb25zZT4odXJsLCBtb2RlbCwgb3B0aW9ucyAhPSBudWxsID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlVHlwZSwgeCwgc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZTxUUmVzcG9uc2U+KHJlc3BvbnNlVHlwZTogUmVzcG9uc2VUeXBlLCByZXNwb25zZTogSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIHN1Y2Nlc3M6IElPYnNlcnZhYmxlQmFzZSkgOiB2b2lkIHtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgc3dpdGNoKHJlc3BvbnNlVHlwZSkgeyAgICAgICAgXHJcbiAgICAgICAgY2FzZSBSZXNwb25zZVR5cGUuSU9ic2VydmFibGU6XHJcbiAgICAgICAgICBsZXQgaU9ic2VydmFibGUgPSA8SU9ic2VydmFibGU8VFJlc3BvbnNlPj5zdWNjZXNzO1xyXG4gICAgICAgICAgaU9ic2VydmFibGUocmVzcG9uc2UhLmJvZHkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSZXNwb25zZVR5cGUuSU9ic2VydmFibGVIdHRwUmVzcG9uc2U6XHJcbiAgICAgICAgICBsZXQgaU9ic2VydmFibGVIdHRwUmVzcG9uc2UgPSA8SU9ic2VydmFibGVIdHRwUmVzcG9uc2U+c3VjY2VzcztcclxuICAgICAgICAgIGxldCBzdWJzY3JpYmUxOiBJU3Vic2NyaWJlQmFzZSA9IG5ldyBTdWJzY3JpYmVCYXNlKCk7XHJcbiAgICAgICAgICBzdWJzY3JpYmUxLm9rID0gcmVzcG9uc2Uub2s7XHJcbiAgICAgICAgICBzdWJzY3JpYmUxLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgIHN1YnNjcmliZTEuc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICBzdWJzY3JpYmUxLmhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIGlPYnNlcnZhYmxlSHR0cFJlc3BvbnNlKHN1YnNjcmliZTEpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUmVzcG9uc2VUeXBlLklPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlOlxyXG4gICAgICAgICAgbGV0IGlPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlID0gPElPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlPFRSZXNwb25zZT4+c3VjY2VzcztcclxuICAgICAgICAgIGxldCBzdWJzY3JpYmUyOiBJU3Vic2NyaWJlPFRSZXNwb25zZT4gPSBuZXcgU3Vic2NyaWJlPFRSZXNwb25zZT4oKTtcclxuICAgICAgICAgIHN1YnNjcmliZTIub2sgPSByZXNwb25zZS5vaztcclxuICAgICAgICAgIHN1YnNjcmliZTIuc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgICAgc3Vic2NyaWJlMi5zdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgICAgIHN1YnNjcmliZTIuYm9keSA9IHJlc3BvbnNlLmJvZHk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBzdWJzY3JpYmUyLmhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIGlPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlKHN1YnNjcmliZTIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9ICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzU3VjY2Vzc0h0dHBSZXNwb25zZTxUUmVzcG9uc2U+KHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgc3VjY2VzczogSU9ic2VydmFibGVIdHRwUmVzcG9uc2UpIDogdm9pZCB7XHJcblxyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBcclxuICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfSAgICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzU3VjY2Vzc0h0dHBDdXN0b21SZXNwb25zZTxUUmVzcG9uc2U+KHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgc3VjY2VzczogSU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2U8VFJlc3BvbnNlPikgOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGxldCBzdWJzY3JpYmU6IElTdWJzY3JpYmU8VFJlc3BvbnNlPiA9IG5ldyBTdWJzY3JpYmU8VFJlc3BvbnNlPigpO1xyXG4gICAgICAgIHN1YnNjcmliZS5vayA9IHJlc3BvbnNlLm9rO1xyXG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xyXG4gICAgICAgIHN1YnNjcmliZS5ib2R5ID0gcmVzcG9uc2UuYm9keTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBzdWNjZXNzKHN1YnNjcmliZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9ICAgICAgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc3NFcnJvclJlc3BvbnNlPFRFcnJvcj4oZXJyb3I6IGFueSwgZmFpbHVyZTogSU9ic2VydmFibGVFcnJvckJhc2UsIGVycm9yVHlwZTogRXJyb3JUeXBlKSA6IHZvaWQge1xyXG5cclxuICAgIHN3aXRjaChlcnJvclR5cGUpXHJcbiAgICB7XHJcbiAgICAgIGNhc2UgRXJyb3JUeXBlLklPYnNlcnZhYmxlRXJyb3I6XHJcbiAgICAgICAgbGV0IG9ic2VydmFibGVFcnJvciA9IDxJT2JzZXJ2YWJsZUVycm9yPFRFcnJvcj4+IGZhaWx1cmU7XHJcbiAgICAgICAgb2JzZXJ2YWJsZUVycm9yKGVycm9yIS5lcnJvcik7ICAgICAgICBcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFcnJvclR5cGUuSU9ic2VydmFibGVIdHRwRXJyb3I6XHJcbiAgICAgICAgbGV0IG9ic2VydmFibGVIdHRwRXJyb3IgPSA8SU9ic2VydmFibGVIdHRwRXJyb3I+IGZhaWx1cmU7XHJcbiAgICAgICAgbGV0IHN1YnNjcmliZTE6IFN1YnNjcmliZUVycm9yID0gbmV3IFN1YnNjcmliZUVycm9yKCk7XHJcbiAgICAgICAgc3Vic2NyaWJlMS5vayA9IGZhbHNlO1xyXG4gICAgICAgIHN1YnNjcmliZTEuaGVhZGVycyA9IGVycm9yLmhlYWRlcnM7XHJcbiAgICAgICAgc3Vic2NyaWJlMS5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICBzdWJzY3JpYmUxLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcclxuICAgICAgICBzdWJzY3JpYmUxLnN0YXR1c1RleHQgPSBlcnJvci5zdGF0dXNUZXh0O1xyXG5cclxuICAgICAgICBvYnNlcnZhYmxlSHR0cEVycm9yKHN1YnNjcmliZTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVycm9yVHlwZS5JT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjpcclxuICAgICAgICBsZXQgb2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvciA9IDxJT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjxURXJyb3I+PiBmYWlsdXJlO1xyXG4gICAgICAgIGxldCBzdWJzY3JpYmU6IFN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4gPSBuZXcgU3Vic2NyaWJlQ3VzdG9tRXJyb3IoKTtcclxuICAgICAgICBzdWJzY3JpYmUub2sgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZXJyb3IuZXJyb3IpIHtcclxuICAgICAgICAgIHN1YnNjcmliZS5lcnJvciA9IGVycm9yLmVycm9yO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHN1YnNjcmliZS5oZWFkZXJzID0gZXJyb3IuaGVhZGVycztcclxuICAgICAgICBzdWJzY3JpYmUubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcclxuICAgICAgICBzdWJzY3JpYmUuc3RhdHVzVGV4dCA9IGVycm9yLnN0YXR1c1RleHQ7XHJcblxyXG4gICAgICAgIG9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3Ioc3Vic2NyaWJlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDogICAgICAgIFxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0gIFxyXG59Il19