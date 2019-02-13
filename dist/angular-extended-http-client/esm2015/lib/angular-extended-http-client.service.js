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
export class HttpClientExt {
    /**
     * @param {?} client
     */
    constructor(client) {
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
    get(url, responseType, success, failureType, failure, options, pipe) {
        /** @type {?} */
        let httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (responseType != null && success != null) {
            if (pipe != null) {
                httpResponse = httpResponse.pipe(pipe);
            }
            if (options != null && options.retry != null && options.retry > 0) {
                httpResponse = httpResponse.pipe(retry(options.retry));
            }
            httpResponse
                .subscribe(x => this.processSuccessResponse(responseType, x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
    }
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
    post(url, model, responseType, success, failureType, failure, options, pipe) {
        /** @type {?} */
        let httpResponse = this.client.post(url, model, options != null ?
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
                .subscribe(x => this.processSuccessResponse(responseType, x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
    }
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
    put(url, model, responseType, success, failureType, failure, options, pipe) {
        /** @type {?} */
        let httpResponse = this.client.put(url, model, options != null ?
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
                .subscribe(x => this.processSuccessResponse(responseType, x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
    }
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
    patch(url, model, responseType, success, failureType, failure, options, pipe) {
        /** @type {?} */
        let httpResponse = this.client.patch(url, model, options != null ?
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
                .subscribe(x => this.processSuccessResponse(responseType, x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
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
    delete(url, responseType, success, failureType, failure, options, pipe) {
        /** @type {?} */
        let httpResponse = this.client.delete(url, options != null ?
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
                .subscribe(x => this.processSuccessResponse(responseType, x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
    }
    /**
     * @private
     * @template TResponse
     * @param {?=} responseType
     * @param {?=} response
     * @param {?=} success
     * @return {?}
     */
    processSuccessResponse(responseType, response, success) {
        if (responseType != null && success != null) {
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
    }
    /**
     * @private
     * @template TError
     * @param {?} error
     * @param {?=} failure
     * @param {?=} errorType
     * @return {?}
     */
    processErrorResponse(error, failure, errorType) {
        if (failure != null && errorType != null) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUV2QyxxQ0FFQzs7OztBQUVELDBDQUVDOzs7OztBQUtELGlDQUVDOzs7O0FBS0QsNkNBRUM7Ozs7O0FBS0QsbURBRUM7Ozs7O0FBS0Qsc0NBRUM7Ozs7QUFLRCwwQ0FFQzs7Ozs7QUFLRCxnREFFQzs7OztBQUVELG9DQUtDOzs7SUFKRyw0QkFBWTs7SUFDWixpQ0FBcUI7O0lBQ3JCLGdDQUFlOztJQUNmLG9DQUFtQjs7Ozs7O0FBR3ZCLGdDQUlDOzs7SUFIRyx3QkFBWTs7SUFDWiwwQkFBUTs7SUFDUiw2QkFBcUI7O0FBR3pCLE1BQU0sT0FBTyxhQUFhO0NBS3pCOzs7SUFKQywyQkFBWTs7SUFDWixnQ0FBcUI7O0lBQ3JCLCtCQUFlOztJQUNmLG1DQUFtQjs7Ozs7QUFHckIsTUFBTSxPQUFPLFNBQVM7Q0FNckI7OztJQUxHLHVCQUFZOztJQUNaLHlCQUFROztJQUNSLDRCQUFxQjs7SUFDckIsMkJBQWU7O0lBQ2YsK0JBQW1COzs7OztBQUd2QixxQ0FJQzs7O0lBSEcsa0NBQWdCOztJQUNoQixpQ0FBZTs7SUFDZixxQ0FBbUI7Ozs7OztBQUd2QiwyQ0FLQzs7O0lBSkMsc0NBQWM7O0lBQ2Qsd0NBQWdCOztJQUNoQix1Q0FBZTs7SUFDZiwyQ0FBbUI7O0FBR3JCLE1BQU0sT0FBTyxjQUFjO0NBTTFCOzs7SUFMRyw0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QyxNQUFNO2dCQUNSLEtBQUssU0FBUyxDQUFDLDBCQUEwQjs7d0JBQ25DLHlCQUF5QixHQUFHLG1CQUFxQyxPQUFPLEVBQUE7O3dCQUN4RSxTQUFTLEdBQWlDLElBQUksb0JBQW9CLEVBQUU7b0JBQ3hFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7d0JBQ2YsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO3FCQUMvQjtvQkFDRCxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ2xDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDbEMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNoQyxTQUFTLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7b0JBRXhDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtTQUNGO0lBQ0gsQ0FBQzs7O1lBck1GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXBLUSxVQUFVOzs7Ozs7OztJQXVLTCwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yRnVuY3Rpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgcmV0cnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlQmFzZSB7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUVycm9yQmFzZSB7XHJcbiAgICBcclxufVxyXG5cclxuLypcclxuU3VjY2VzcyBjYWxsYmFjayAtIHJldHVybnMgdGhlIG1vZGVsIGZyb20gdGhlIGJvZHkgb2YgdGhlIEFQSSByZXNwb25zZVxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgSU9ic2VydmFibGVCYXNlIHtcclxuICAgIChzdWJzY3JpYmU6IFQpIDogdm9pZDsgICAgXHJcbn1cclxuXHJcbi8qXHJcblN1Y2Nlc3MgY2FsbGJhY2sgLSByZXR1cm5zIHRoZSBodHRwIHJlc3BvbnNlLlxyXG4qL1xyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlIGV4dGVuZHMgSU9ic2VydmFibGVCYXNlIHtcclxuICAoc3Vic2NyaWJlOiBJU3Vic2NyaWJlQmFzZSkgOiB2b2lkOyAgICBcclxufVxyXG5cclxuLypcclxuU3VjY2VzcyBjYWxsYmFjayAtIHJldHVybnMgdGhlIGh0dHAgcmVzcG9uc2UgYW5kIHRoZSBtb2RlbCBmcm9tIHRoZSBib2R5IG9mIHRoZSBBUEkgcmVzcG9uc2VcclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUh0dHBDdXN0b21SZXNwb25zZTxUPiBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XHJcbiAgKHN1YnNjcmliZTogSVN1YnNjcmliZTxUPikgOiB2b2lkOyAgICBcclxufVxyXG5cclxuLyogXHJcbkZhaWx1cmUgY2FsbGJhY2sgLSByZXR1cm5zIHRoZSBBUEkgdGhyb3duIGN1c3RvbSBleGNlcHRpb25cclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUVycm9yQmFzZSB7XHJcbiAgICAoZXJyb3I6IFRFcnJvcikgOiB2b2lkO1xyXG59XHJcblxyXG4vKiBcclxuRmFpbHVyZSBjYWxsYmFjayAtIHJldHVybnMgdGhlIGh0dHAgZXJyb3IgcmVzcG9uc2UgdGhyb3VnaCBpbnRlcmZhY2UgSVN1YnNjcmliZUVycm9yXHJcbiovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVIdHRwRXJyb3IgZXh0ZW5kcyBJT2JzZXJ2YWJsZUVycm9yQmFzZSB7XHJcbiAgKGVycm9yOiBJU3Vic2NyaWJlRXJyb3IpIDogdm9pZDtcclxufVxyXG5cclxuLyogXHJcbkZhaWx1cmUgY2FsbGJhY2sgLSByZXR1cm5zIHRoZSBodHRwIGVycm9yIHJlc3BvbnNlIGFuZCB0aGUgQVBJIHRocm93IGN1c3RvbSBleGNlcHRpb24gdGhyb3VnaCBpbnRlcmZhY2UgSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj5cclxuKi9cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjxURXJyb3I+IGV4dGVuZHMgSU9ic2VydmFibGVFcnJvckJhc2Uge1xyXG4gIChlcnJvcjogSVN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4pIDogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlQmFzZSB7XHJcbiAgICBvazogYm9vbGVhbjtcclxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG4gICAgc3RhdHVzOiBudW1iZXI7XHJcbiAgICBzdGF0dXNUZXh0OiBzdHJpbmc7ICAgIFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdWJzY3JpYmU8VD4gZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XHJcbiAgICBvazogYm9vbGVhbjtcclxuICAgIGJvZHk6IFQ7XHJcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUJhc2UgaW1wbGVtZW50cyBJU3Vic2NyaWJlQmFzZSB7XHJcbiAgb2s6IGJvb2xlYW47XHJcbiAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlPFQ+IGltcGxlbWVudHMgSVN1YnNjcmliZTxUPiB7XHJcbiAgICBvazogYm9vbGVhbjtcclxuICAgIGJvZHk6IFQ7XHJcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdWJzY3JpYmVFcnJvciBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xyXG4gIGVycm9yOiBURXJyb3I7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUVycm9yIGltcGxlbWVudHMgSVN1YnNjcmliZUVycm9yIHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4gaW1wbGVtZW50cyBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiB7XHJcbiAgb2s6IGJvb2xlYW47XHJcbiAgZXJyb3I6IFRFcnJvcjtcclxuICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZXNwb25zZVR5cGUge1xyXG4gIElPYnNlcnZhYmxlLFxyXG4gIElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlLFxyXG4gIElPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVycm9yVHlwZSB7XHJcbiAgSU9ic2VydmFibGVFcnJvcixcclxuICBJT2JzZXJ2YWJsZUh0dHBFcnJvcixcclxuICBJT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIdHRwQ2xpZW50RXh0ZW5kZWQge1xyXG4gIGdldDxUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBcclxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLCBcclxuICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnksIFxyXG4gICAgICAgICAgICAgICAgICBwaXBlPzogT3BlcmF0b3JGdW5jdGlvbjxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+O1xyXG5cclxuICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlwZT86IE9wZXJhdG9yRnVuY3Rpb248SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PikgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjtcclxuXHJcblxyXG4gIHB1dDxUPih1cmw6IHN0cmluZywgbW9kZWw6IFQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZT86IFJlc3BvbnNlVHlwZSwgXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsXHJcbiAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBcclxuICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55LCBcclxuICAgICAgICAgICAgcGlwZT86IE9wZXJhdG9yRnVuY3Rpb248SHR0cFJlc3BvbnNlPFQ+LCBIdHRwUmVzcG9uc2U8VD4+KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuXHJcbiAgcGF0Y2g8VD4odXJsOiBzdHJpbmcsIG1vZGVsOiBULFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsIFxyXG4gICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLFxyXG4gICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSwgXHJcbiAgICAgICAgICAgIHBpcGU/OiBPcGVyYXRvckZ1bmN0aW9uPEh0dHBSZXNwb25zZTxUPiwgSHR0cFJlc3BvbnNlPFQ+PikgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47ICAgICAgICAgICAgXHJcblxyXG4gIGRlbGV0ZTxUUmVzcG9uc2U+KHVybDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZUJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGlwZT86IE9wZXJhdG9yRnVuY3Rpb248SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PikgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudEV4dCBpbXBsZW1lbnRzIElIdHRwQ2xpZW50RXh0ZW5kZWQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaWVudDogSHR0cENsaWVudClcclxuICB7XHJcbiAgfVxyXG4gIFxyXG4gIGdldDxUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBcclxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLCBcclxuICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnksIFxyXG4gICAgICAgICAgICAgICAgICBwaXBlPzogT3BlcmF0b3JGdW5jdGlvbjxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQuZ2V0PFRSZXNwb25zZT4odXJsLCBvcHRpb25zICE9IG51bGwgPyB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IDoge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2VUeXBlICE9IG51bGwgJiYgc3VjY2VzcyAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHBpcGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgaHR0cFJlc3BvbnNlID0gaHR0cFJlc3BvbnNlLnBpcGUocGlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zICE9IG51bGwgJiYgb3B0aW9ucy5yZXRyeSAhPSBudWxsICYmIG9wdGlvbnMucmV0cnkgPiAwKSB7XHJcbiAgICAgICAgICBodHRwUmVzcG9uc2UgPSBodHRwUmVzcG9uc2UucGlwZShyZXRyeShvcHRpb25zLnJldHJ5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlVHlwZSwgeCwgc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHBvc3Q8VFJlcXVlc3QsIFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXBlPzogT3BlcmF0b3JGdW5jdGlvbjxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucG9zdDxUUmVzcG9uc2U+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICAgIGlmIChyZXNwb25zZVR5cGUgIT0gbnVsbCAmJiBzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAocGlwZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBodHRwUmVzcG9uc2UgPSBodHRwUmVzcG9uc2UucGlwZShwaXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT0gbnVsbCAmJiBvcHRpb25zLnJldHJ5ICE9IG51bGwgJiYgb3B0aW9ucy5yZXRyeSA+IDApIHtcclxuICAgICAgICAgIGh0dHBSZXNwb25zZSA9IGh0dHBSZXNwb25zZS5waXBlKHJldHJ5KG9wdGlvbnMucmV0cnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHR0cFJlc3BvbnNlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UocmVzcG9uc2VUeXBlLCB4LCBzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSwgZmFpbHVyZVR5cGUpKTtcclxuICAgIH0gICAgICAgIFxyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgcHV0PFQ+KHVybDogc3RyaW5nLCBtb2RlbDogVCxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogUmVzcG9uc2VUeXBlLCBcclxuICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnksIFxyXG4gICAgICAgICAgICBwaXBlPzogT3BlcmF0b3JGdW5jdGlvbjxIdHRwUmVzcG9uc2U8VD4sIEh0dHBSZXNwb25zZTxUPj4pIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucHV0PFQ+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICAgIGlmIChyZXNwb25zZVR5cGUgIT0gbnVsbCAmJiBzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAocGlwZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBodHRwUmVzcG9uc2UgPSBodHRwUmVzcG9uc2UucGlwZShwaXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgIT0gbnVsbCAmJiBvcHRpb25zLnJldHJ5ICE9IG51bGwgJiYgb3B0aW9ucy5yZXRyeSA+IDApIHtcclxuICAgICAgICAgIGh0dHBSZXNwb25zZSA9IGh0dHBSZXNwb25zZS5waXBlKHJldHJ5KG9wdGlvbnMucmV0cnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHR0cFJlc3BvbnNlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UocmVzcG9uc2VUeXBlLCB4LCBzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSwgZmFpbHVyZVR5cGUpKTtcclxuICAgIH0gICAgICAgIFxyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgcGF0Y2g8VD4odXJsOiBzdHJpbmcsIG1vZGVsOiBULFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsIFxyXG4gICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVCYXNlLFxyXG4gICAgICAgICAgICBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgXHJcbiAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSwgXHJcbiAgICAgICAgICAgIHBpcGU/OiBPcGVyYXRvckZ1bmN0aW9uPEh0dHBSZXNwb25zZTxUPiwgSHR0cFJlc3BvbnNlPFQ+PikgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wYXRjaDxUPih1cmwsIG1vZGVsLCBvcHRpb25zICE9IG51bGwgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XHJcbiAgICBpZiAocmVzcG9uc2VUeXBlICE9IG51bGwgJiYgc3VjY2VzcyAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHBpcGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgaHR0cFJlc3BvbnNlID0gaHR0cFJlc3BvbnNlLnBpcGUocGlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zICE9IG51bGwgJiYgb3B0aW9ucy5yZXRyeSAhPSBudWxsICYmIG9wdGlvbnMucmV0cnkgPiAwKSB7XHJcbiAgICAgICAgICBodHRwUmVzcG9uc2UgPSBodHRwUmVzcG9uc2UucGlwZShyZXRyeShvcHRpb25zLnJldHJ5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlVHlwZSwgeCwgc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcclxuICB9ICBcclxuXHJcbiAgZGVsZXRlPFRSZXNwb25zZT4odXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU/OiBSZXNwb25zZVR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwaXBlPzogT3BlcmF0b3JGdW5jdGlvbjxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQuZGVsZXRlPFRSZXNwb25zZT4odXJsLCBvcHRpb25zICE9IG51bGwgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICAgIGlmIChyZXNwb25zZVR5cGUgIT0gbnVsbCAmJiBzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBpZiAocGlwZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICBodHRwUmVzcG9uc2UgPSBodHRwUmVzcG9uc2UucGlwZShwaXBlKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICBpZiAob3B0aW9ucyAhPSBudWxsICYmIG9wdGlvbnMucmV0cnkgIT0gbnVsbCAmJiBvcHRpb25zLnJldHJ5ID4gMCkge1xyXG4gICAgICAgICAgaHR0cFJlc3BvbnNlID0gaHR0cFJlc3BvbnNlLnBpcGUocmV0cnkob3B0aW9ucy5yZXRyeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodHRwUmVzcG9uc2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZShyZXNwb25zZVR5cGUsIHgsIHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlLCBmYWlsdXJlVHlwZSkpO1xyXG4gICAgfSAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXHJcbiAgfSAgXHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZTxUUmVzcG9uc2U+KHJlc3BvbnNlVHlwZT86IFJlc3BvbnNlVHlwZSwgcmVzcG9uc2U/OiBIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPiwgc3VjY2Vzcz86IElPYnNlcnZhYmxlQmFzZSkgOiB2b2lkIHtcclxuXHJcbiAgICBpZiAocmVzcG9uc2VUeXBlICE9IG51bGwgJiYgc3VjY2VzcyAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHN3aXRjaChyZXNwb25zZVR5cGUpIHsgICAgICAgIFxyXG4gICAgICAgICAgY2FzZSBSZXNwb25zZVR5cGUuSU9ic2VydmFibGU6XHJcbiAgICAgICAgICAgIGxldCBpT2JzZXJ2YWJsZSA9IDxJT2JzZXJ2YWJsZTxUUmVzcG9uc2U+PnN1Y2Nlc3M7XHJcbiAgICAgICAgICAgIGlPYnNlcnZhYmxlKHJlc3BvbnNlIS5ib2R5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFJlc3BvbnNlVHlwZS5JT2JzZXJ2YWJsZUh0dHBSZXNwb25zZTpcclxuICAgICAgICAgICAgbGV0IGlPYnNlcnZhYmxlSHR0cFJlc3BvbnNlID0gPElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlPnN1Y2Nlc3M7XHJcbiAgICAgICAgICAgIGxldCBzdWJzY3JpYmUxOiBJU3Vic2NyaWJlQmFzZSA9IG5ldyBTdWJzY3JpYmVCYXNlKCk7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTEub2sgPSByZXNwb25zZS5vaztcclxuICAgICAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTEuc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTEuaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlPYnNlcnZhYmxlSHR0cFJlc3BvbnNlKHN1YnNjcmliZTEpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFJlc3BvbnNlVHlwZS5JT2JzZXJ2YWJsZUh0dHBDdXN0b21SZXNwb25zZTpcclxuICAgICAgICAgICAgbGV0IGlPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlID0gPElPYnNlcnZhYmxlSHR0cEN1c3RvbVJlc3BvbnNlPFRSZXNwb25zZT4+c3VjY2VzcztcclxuICAgICAgICAgICAgbGV0IHN1YnNjcmliZTI6IElTdWJzY3JpYmU8VFJlc3BvbnNlPiA9IG5ldyBTdWJzY3JpYmU8VFJlc3BvbnNlPigpO1xyXG4gICAgICAgICAgICBzdWJzY3JpYmUyLm9rID0gcmVzcG9uc2Uub2s7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTIuc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgICAgICBzdWJzY3JpYmUyLnN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xyXG4gICAgICAgICAgICBzdWJzY3JpYmUyLmJvZHkgPSByZXNwb25zZS5ib2R5OyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdWJzY3JpYmUyLmhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpT2JzZXJ2YWJsZUh0dHBDdXN0b21SZXNwb25zZShzdWJzY3JpYmUyKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc0Vycm9yUmVzcG9uc2U8VEVycm9yPihlcnJvcjogYW55LCBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIGVycm9yVHlwZT86IEVycm9yVHlwZSkgOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoZmFpbHVyZSAhPSBudWxsICYmIGVycm9yVHlwZSAhPSBudWxsKSB7XHJcbiAgICAgIHN3aXRjaChlcnJvclR5cGUpXHJcbiAgICAgIHtcclxuICAgICAgICBjYXNlIEVycm9yVHlwZS5JT2JzZXJ2YWJsZUVycm9yOlxyXG4gICAgICAgICAgbGV0IG9ic2VydmFibGVFcnJvciA9IDxJT2JzZXJ2YWJsZUVycm9yPFRFcnJvcj4+IGZhaWx1cmU7XHJcbiAgICAgICAgICBvYnNlcnZhYmxlRXJyb3IoZXJyb3IhLmVycm9yKTsgICAgICAgIFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFcnJvclR5cGUuSU9ic2VydmFibGVIdHRwRXJyb3I6XHJcbiAgICAgICAgICBsZXQgb2JzZXJ2YWJsZUh0dHBFcnJvciA9IDxJT2JzZXJ2YWJsZUh0dHBFcnJvcj4gZmFpbHVyZTtcclxuICAgICAgICAgIGxldCBzdWJzY3JpYmUxOiBTdWJzY3JpYmVFcnJvciA9IG5ldyBTdWJzY3JpYmVFcnJvcigpO1xyXG4gICAgICAgICAgc3Vic2NyaWJlMS5vayA9IGZhbHNlO1xyXG4gICAgICAgICAgc3Vic2NyaWJlMS5oZWFkZXJzID0gZXJyb3IuaGVhZGVycztcclxuICAgICAgICAgIHN1YnNjcmliZTEubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICBzdWJzY3JpYmUxLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcclxuICAgICAgICAgIHN1YnNjcmliZTEuc3RhdHVzVGV4dCA9IGVycm9yLnN0YXR1c1RleHQ7XHJcbiAgXHJcbiAgICAgICAgICBvYnNlcnZhYmxlSHR0cEVycm9yKHN1YnNjcmliZTEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBFcnJvclR5cGUuSU9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3I6XHJcbiAgICAgICAgICBsZXQgb2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvciA9IDxJT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjxURXJyb3I+PiBmYWlsdXJlO1xyXG4gICAgICAgICAgbGV0IHN1YnNjcmliZTogU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiA9IG5ldyBTdWJzY3JpYmVDdXN0b21FcnJvcigpO1xyXG4gICAgICAgICAgc3Vic2NyaWJlLm9rID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IpIHtcclxuICAgICAgICAgICAgc3Vic2NyaWJlLmVycm9yID0gZXJyb3IuZXJyb3I7XHJcbiAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgIHN1YnNjcmliZS5oZWFkZXJzID0gZXJyb3IuaGVhZGVycztcclxuICAgICAgICAgIHN1YnNjcmliZS5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XHJcbiAgICAgICAgICBzdWJzY3JpYmUuc3RhdHVzVGV4dCA9IGVycm9yLnN0YXR1c1RleHQ7XHJcbiAgXHJcbiAgICAgICAgICBvYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yKHN1YnNjcmliZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiAgICAgICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSAgICBcclxuICB9ICBcclxufSJdfQ==