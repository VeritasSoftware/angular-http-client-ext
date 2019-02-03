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
    /**
     * @template T
     * @param {?} url
     * @param {?} model
     * @param {?} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.put = function (url, model, responseType, success, failureType, failure, options) { };
    /**
     * @template T
     * @param {?} url
     * @param {?} model
     * @param {?} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.delete = function (url, model, responseType, success, failureType, failure, options) { };
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
     * @template T
     * @param {?} url
     * @param {?} model
     * @param {?} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    put(url, model, responseType, success, failureType, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.put(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessResponse(responseType, x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
    }
    /**
     * @template T
     * @param {?} url
     * @param {?} model
     * @param {?} responseType
     * @param {?=} success
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    delete(url, model, responseType, success, failureType, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.delete(url, options != null ?
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7O0FBRUQsMENBRUM7Ozs7O0FBS0QsaUNBRUM7Ozs7QUFLRCw2Q0FFQzs7Ozs7QUFLRCxtREFFQzs7Ozs7QUFLRCxzQ0FFQzs7OztBQUtELDBDQUVDOzs7OztBQUtELGdEQUVDOzs7O0FBRUQsb0NBS0M7OztJQUpHLDRCQUFZOztJQUNaLGlDQUFxQjs7SUFDckIsZ0NBQWU7O0lBQ2Ysb0NBQW1COzs7Ozs7QUFHdkIsZ0NBSUM7OztJQUhHLHdCQUFZOztJQUNaLDBCQUFROztJQUNSLDZCQUFxQjs7QUFHekIsTUFBTSxPQUFPLGFBQWE7Q0FLekI7OztJQUpDLDJCQUFZOztJQUNaLGdDQUFxQjs7SUFDckIsK0JBQWU7O0lBQ2YsbUNBQW1COzs7OztBQUdyQixNQUFNLE9BQU8sU0FBUztDQU1yQjs7O0lBTEcsdUJBQVk7O0lBQ1oseUJBQVE7O0lBQ1IsNEJBQXFCOztJQUNyQiwyQkFBZTs7SUFDZiwrQkFBbUI7Ozs7O0FBR3ZCLHFDQUlDOzs7SUFIRyxrQ0FBZ0I7O0lBQ2hCLGlDQUFlOztJQUNmLHFDQUFtQjs7Ozs7O0FBR3ZCLDJDQUtDOzs7SUFKQyxzQ0FBYzs7SUFDZCx3Q0FBZ0I7O0lBQ2hCLHVDQUFlOztJQUNmLDJDQUFtQjs7QUFHckIsTUFBTSxPQUFPLGNBQWM7Q0FNMUI7OztJQUxHLDRCQUFZOztJQUNaLGlDQUFxQjs7SUFDckIsaUNBQWdCOztJQUNoQixnQ0FB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QUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDakMsVUFBVSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUV6QyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssU0FBUyxDQUFDLDBCQUEwQjs7b0JBQ25DLHlCQUF5QixHQUFHLG1CQUFxQyxPQUFPLEVBQUE7O29CQUN4RSxTQUFTLEdBQWlDLElBQUksb0JBQW9CLEVBQUU7Z0JBQ3hFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7b0JBQ2YsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUMvQjtnQkFDRCxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBRXhDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7O1lBdktGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXhKUSxVQUFVOzs7Ozs7OztJQTJKTCwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVCYXNlIHtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAgIFxyXG59XHJcblxyXG4vKlxyXG5TdWNjZXNzIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgbW9kZWwgZnJvbSB0aGUgYm9keSBvZiB0aGUgQVBJIHJlc3BvbnNlXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGU8VD4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gICAgKHN1YnNjcmliZTogVCkgOiB2b2lkOyAgICBcclxufVxyXG5cclxuLypcclxuU3VjY2VzcyBjYWxsYmFjayAtIHJldHVybnMgdGhlIGh0dHAgcmVzcG9uc2UuXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVIdHRwUmVzcG9uc2UgZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gIChzdWJzY3JpYmU6IElTdWJzY3JpYmVCYXNlKSA6IHZvaWQ7ICAgIFxyXG59XHJcblxyXG4vKlxyXG5TdWNjZXNzIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgaHR0cCByZXNwb25zZSBhbmQgdGhlIG1vZGVsIGZyb20gdGhlIGJvZHkgb2YgdGhlIEFQSSByZXNwb25zZVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlPFQ+IGV4dGVuZHMgSU9ic2VydmFibGVCYXNlIHtcclxuICAoc3Vic2NyaWJlOiBJU3Vic2NyaWJlPFQ+KSA6IHZvaWQ7ICAgIFxyXG59XHJcblxyXG4vKiBcclxuRmFpbHVyZSBjYWxsYmFjayAtIHJldHVybnMgdGhlIEFQSSB0aHJvd24gY3VzdG9tIGV4Y2VwdGlvblxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlRXJyb3I8VEVycm9yPiBleHRlbmRzIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAgIChlcnJvcjogVEVycm9yKSA6IHZvaWQ7XHJcbn1cclxuXHJcbi8qIFxyXG5GYWlsdXJlIGNhbGxiYWNrIC0gcmV0dXJucyB0aGUgaHR0cCBlcnJvciByZXNwb25zZSB0aHJvdWdoIGludGVyZmFjZSBJU3Vic2NyaWJlRXJyb3JcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUh0dHBFcnJvciBleHRlbmRzIElPYnNlcnZhYmxlRXJyb3JCYXNlIHtcclxuICAoZXJyb3I6IElTdWJzY3JpYmVFcnJvcikgOiB2b2lkO1xyXG59XHJcblxyXG4vKiBcclxuRmFpbHVyZSBjYWxsYmFjayAtIHJldHVybnMgdGhlIGh0dHAgZXJyb3IgcmVzcG9uc2UgYW5kIHRoZSBBUEkgdGhyb3cgY3VzdG9tIGV4Y2VwdGlvbiB0aHJvdWdoIGludGVyZmFjZSBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPlxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUVycm9yQmFzZSB7XHJcbiAgKGVycm9yOiBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPikgOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdWJzY3JpYmVCYXNlIHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIHN0YXR1c1RleHQ6IHN0cmluZzsgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZTxUPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgYm9keTogVDtcclxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlQmFzZSBpbXBsZW1lbnRzIElTdWJzY3JpYmVCYXNlIHtcclxuICBvazogYm9vbGVhbjtcclxuICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmU8VD4gaW1wbGVtZW50cyBJU3Vic2NyaWJlPFQ+IHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgYm9keTogVDtcclxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUVycm9yIGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XHJcbiAgZXJyb3I6IFRFcnJvcjtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlRXJyb3IgaW1wbGVtZW50cyBJU3Vic2NyaWJlRXJyb3Ige1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiBpbXBsZW1lbnRzIElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IHtcclxuICBvazogYm9vbGVhbjtcclxuICBlcnJvcjogVEVycm9yO1xyXG4gIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBzdGF0dXNUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJlc3BvbnNlVHlwZSB7XHJcbiAgSU9ic2VydmFibGUsXHJcbiAgSU9ic2VydmFibGVIdHRwUmVzcG9uc2UsXHJcbiAgSU9ic2VydmFibGVIdHRwQ3VzdG9tUmVzcG9uc2VcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRXJyb3JUeXBlIHtcclxuICBJT2JzZXJ2YWJsZUVycm9yLFxyXG4gIElPYnNlcnZhYmxlSHR0cEVycm9yLFxyXG4gIElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUh0dHBDbGllbnRFeHRlbmRlZCB7XHJcbiAgZ2V0PFQ+KHVybDogc3RyaW5nLCBcclxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogUmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSwgXHJcbiAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG5cclxuICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IFJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj47XHJcblxyXG5cclxuICBwdXQ8VD4odXJsOiBzdHJpbmcsIG1vZGVsOiBULFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6IFJlc3BvbnNlVHlwZSwgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsXHJcbiAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBcclxuICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuXHJcbiAgZGVsZXRlPFQ+KHVybDogc3RyaW5nLCBtb2RlbDogVCxcclxuICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IFJlc3BvbnNlVHlwZSwgXHJcbiAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudEV4dCBpbXBsZW1lbnRzIElIdHRwQ2xpZW50RXh0ZW5kZWQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaWVudDogSHR0cENsaWVudClcclxuICB7XHJcbiAgfVxyXG4gIFxyXG4gIGdldDxUPih1cmw6IHN0cmluZywgXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogUmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLCBcclxuICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQuZ2V0PFQ+KHVybCwgb3B0aW9ucyAhPSBudWxsID8geyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XHJcblxyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlVHlwZSwgeCwgc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcclxuICB9XHJcblxyXG5cclxuICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wb3N0PFRSZXNwb25zZT4odXJsLCBtb2RlbCwgb3B0aW9ucyAhPSBudWxsID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlVHlwZSwgeCwgc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcclxuICB9XHJcblxyXG4gIHB1dDxUPih1cmw6IHN0cmluZywgbW9kZWw6IFQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucHV0PFQ+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBodHRwUmVzcG9uc2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZShyZXNwb25zZVR5cGUsIHgsIHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlLCBmYWlsdXJlVHlwZSkpO1xyXG4gICAgfSAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG4gIFxyXG4gIGRlbGV0ZTxUPih1cmw6IHN0cmluZywgbW9kZWw6IFQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQuZGVsZXRlPFQ+KHVybCwgb3B0aW9ucyAhPSBudWxsID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XHJcbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XHJcbiAgICAgICAgaHR0cFJlc3BvbnNlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UocmVzcG9uc2VUeXBlLCB4LCBzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSwgZmFpbHVyZVR5cGUpKTtcclxuICAgIH0gICAgICAgIFxyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxyXG4gIH0gIFxyXG5cclxuICBwcml2YXRlIHByb2Nlc3NTdWNjZXNzUmVzcG9uc2U8VFJlc3BvbnNlPihyZXNwb25zZVR5cGU6IFJlc3BvbnNlVHlwZSwgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBzdWNjZXNzOiBJT2JzZXJ2YWJsZUJhc2UpIDogdm9pZCB7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHN3aXRjaChyZXNwb25zZVR5cGUpIHsgICAgICAgIFxyXG4gICAgICAgIGNhc2UgUmVzcG9uc2VUeXBlLklPYnNlcnZhYmxlOlxyXG4gICAgICAgICAgbGV0IGlPYnNlcnZhYmxlID0gPElPYnNlcnZhYmxlPFRSZXNwb25zZT4+c3VjY2VzcztcclxuICAgICAgICAgIGlPYnNlcnZhYmxlKHJlc3BvbnNlIS5ib2R5KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUmVzcG9uc2VUeXBlLklPYnNlcnZhYmxlSHR0cFJlc3BvbnNlOlxyXG4gICAgICAgICAgbGV0IGlPYnNlcnZhYmxlSHR0cFJlc3BvbnNlID0gPElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlPnN1Y2Nlc3M7XHJcbiAgICAgICAgICBsZXQgc3Vic2NyaWJlMTogSVN1YnNjcmliZUJhc2UgPSBuZXcgU3Vic2NyaWJlQmFzZSgpO1xyXG4gICAgICAgICAgc3Vic2NyaWJlMS5vayA9IHJlc3BvbnNlLm9rO1xyXG4gICAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICBzdWJzY3JpYmUxLnN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xyXG4gICAgICAgICAgc3Vic2NyaWJlMS5oZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBpT2JzZXJ2YWJsZUh0dHBSZXNwb25zZShzdWJzY3JpYmUxKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJlc3BvbnNlVHlwZS5JT2JzZXJ2YWJsZUh0dHBDdXN0b21SZXNwb25zZTpcclxuICAgICAgICAgIGxldCBpT2JzZXJ2YWJsZUh0dHBDdXN0b21SZXNwb25zZSA9IDxJT2JzZXJ2YWJsZUh0dHBDdXN0b21SZXNwb25zZTxUUmVzcG9uc2U+PnN1Y2Nlc3M7XHJcbiAgICAgICAgICBsZXQgc3Vic2NyaWJlMjogSVN1YnNjcmliZTxUUmVzcG9uc2U+ID0gbmV3IFN1YnNjcmliZTxUUmVzcG9uc2U+KCk7XHJcbiAgICAgICAgICBzdWJzY3JpYmUyLm9rID0gcmVzcG9uc2Uub2s7XHJcbiAgICAgICAgICBzdWJzY3JpYmUyLnN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgIHN1YnNjcmliZTIuc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICBzdWJzY3JpYmUyLmJvZHkgPSByZXNwb25zZS5ib2R5OyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgc3Vic2NyaWJlMi5oZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBpT2JzZXJ2YWJsZUh0dHBDdXN0b21SZXNwb25zZShzdWJzY3JpYmUyKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc1N1Y2Nlc3NIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPihyZXNwb25zZTogSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIHN1Y2Nlc3M6IElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlKSA6IHZvaWQge1xyXG5cclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH0gICAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc1N1Y2Nlc3NIdHRwQ3VzdG9tUmVzcG9uc2U8VFJlc3BvbnNlPihyZXNwb25zZTogSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIHN1Y2Nlc3M6IElPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlPFRSZXNwb25zZT4pIDogdm9pZCB7XHJcblxyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBsZXQgc3Vic2NyaWJlOiBJU3Vic2NyaWJlPFRSZXNwb25zZT4gPSBuZXcgU3Vic2NyaWJlPFRSZXNwb25zZT4oKTtcclxuICAgICAgICBzdWJzY3JpYmUub2sgPSByZXNwb25zZS5vaztcclxuICAgICAgICBzdWJzY3JpYmUuc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcclxuICAgICAgICBzdWJzY3JpYmUuYm9keSA9IHJlc3BvbnNlLmJvZHk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc3Vic2NyaWJlLmhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc3VjY2VzcyhzdWJzY3JpYmUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfSAgICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzRXJyb3JSZXNwb25zZTxURXJyb3I+KGVycm9yOiBhbnksIGZhaWx1cmU6IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBlcnJvclR5cGU6IEVycm9yVHlwZSkgOiB2b2lkIHtcclxuXHJcbiAgICBzd2l0Y2goZXJyb3JUeXBlKVxyXG4gICAge1xyXG4gICAgICBjYXNlIEVycm9yVHlwZS5JT2JzZXJ2YWJsZUVycm9yOlxyXG4gICAgICAgIGxldCBvYnNlcnZhYmxlRXJyb3IgPSA8SU9ic2VydmFibGVFcnJvcjxURXJyb3I+PiBmYWlsdXJlO1xyXG4gICAgICAgIG9ic2VydmFibGVFcnJvcihlcnJvciEuZXJyb3IpOyAgICAgICAgXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRXJyb3JUeXBlLklPYnNlcnZhYmxlSHR0cEVycm9yOlxyXG4gICAgICAgIGxldCBvYnNlcnZhYmxlSHR0cEVycm9yID0gPElPYnNlcnZhYmxlSHR0cEVycm9yPiBmYWlsdXJlO1xyXG4gICAgICAgIGxldCBzdWJzY3JpYmUxOiBTdWJzY3JpYmVFcnJvciA9IG5ldyBTdWJzY3JpYmVFcnJvcigpO1xyXG4gICAgICAgIHN1YnNjcmliZTEub2sgPSBmYWxzZTtcclxuICAgICAgICBzdWJzY3JpYmUxLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xyXG4gICAgICAgIHN1YnNjcmliZTEubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XHJcbiAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcclxuXHJcbiAgICAgICAgb2JzZXJ2YWJsZUh0dHBFcnJvcihzdWJzY3JpYmUxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFcnJvclR5cGUuSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I6XHJcbiAgICAgICAgbGV0IG9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3IgPSA8SU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I8VEVycm9yPj4gZmFpbHVyZTtcclxuICAgICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+ID0gbmV3IFN1YnNjcmliZUN1c3RvbUVycm9yKCk7XHJcbiAgICAgICAgc3Vic2NyaWJlLm9rID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGVycm9yLmVycm9yKSB7XHJcbiAgICAgICAgICBzdWJzY3JpYmUuZXJyb3IgPSBlcnJvci5lcnJvcjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IGVycm9yLmhlYWRlcnM7XHJcbiAgICAgICAgc3Vic2NyaWJlLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XHJcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSBlcnJvci5zdGF0dXNUZXh0O1xyXG5cclxuICAgICAgICBvYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yKHN1YnNjcmliZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6ICAgICAgICBcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9ICBcclxufSJdfQ==