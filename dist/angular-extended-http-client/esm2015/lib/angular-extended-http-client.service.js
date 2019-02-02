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
/** @enum {number} */
const ErrorType = {
    IObservableError: 0,
    IObservableCustomError: 1,
    IObservableHttpCustomError: 2,
};
export { ErrorType };
ErrorType[ErrorType.IObservableError] = 'IObservableError';
ErrorType[ErrorType.IObservableCustomError] = 'IObservableCustomError';
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
     * @param {?=} failureType
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    get(url, success, failureType, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessResponse(x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
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
    getUsingHttpResponse(url, success, failureType, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessHttpResponse(x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
    }
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
    post(url, model, success, failureType, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessResponse(x, success), error => this.processErrorResponse(error, failure, failureType));
        }
        return httpResponse;
    }
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
    postUsingHttpResponse(url, model, success, failureType, failure, options) {
        /** @type {?} */
        let httpResponse = this.client.post(url, model, options != null ?
            { headers: options.headers, observe: 'response' }
            : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(x => this.processSuccessHttpResponse(x, success), error => this.processErrorResponse(error, failure, failureType));
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
                /** @type {?} */
                let subscribe1 = new SubscribeError();
                subscribe1.ok = false;
                subscribe1.headers = error.headers;
                subscribe1.message = error.message;
                subscribe1.status = error.status;
                subscribe1.statusText = error.statusText;
                observableError(subscribe1);
                break;
            case ErrorType.IObservableCustomError:
                /** @type {?} */
                let observableCustomError = (/** @type {?} */ (failure));
                observableCustomError((/** @type {?} */ (error)).error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7O0FBRUQsMENBRUM7Ozs7O0FBRUQsaUNBRUM7Ozs7O0FBRUQsNkNBRUM7Ozs7QUFFRCxzQ0FFQzs7Ozs7QUFFRCw0Q0FFQzs7Ozs7QUFFRCxnREFFQzs7OztBQUVELG9DQUtDOzs7SUFKRyw0QkFBWTs7SUFDWixpQ0FBcUI7O0lBQ3JCLGdDQUFlOztJQUNmLG9DQUFtQjs7Ozs7O0FBR3ZCLGdDQUlDOzs7SUFIRyx3QkFBWTs7SUFDWiwwQkFBUTs7SUFDUiw2QkFBcUI7Ozs7O0FBR3pCLE1BQU0sT0FBTyxTQUFTO0NBTXJCOzs7SUFMRyx1QkFBWTs7SUFDWix5QkFBUTs7SUFDUiw0QkFBcUI7O0lBQ3JCLDJCQUFlOztJQUNmLCtCQUFtQjs7Ozs7QUFHdkIscUNBSUM7OztJQUhHLGtDQUFnQjs7SUFDaEIsaUNBQWU7O0lBQ2YscUNBQW1COzs7Ozs7QUFHdkIsMkNBS0M7OztJQUpDLHNDQUFjOztJQUNkLHdDQUFnQjs7SUFDaEIsdUNBQWU7O0lBQ2YsMkNBQW1COztBQUdyQixNQUFNLE9BQU8sY0FBYztDQU0xQjs7O0lBTEcsNEJBQVk7O0lBQ1osaUNBQXFCOztJQUNyQixpQ0FBZ0I7O0lBQ2hCLGdDQUFlOztJQUNmLG9DQUFtQjs7Ozs7QUFHdkIsTUFBTSxPQUFPLG9CQUFvQjtDQU9oQzs7O0lBTkMsa0NBQVk7O0lBQ1oscUNBQWM7O0lBQ2QsdUNBQXFCOztJQUNyQix1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b0IsRUFBRTtnQkFDeEUsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtvQkFDZixTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQy9CO2dCQUNELFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsU0FBUyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNsQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFFeEMseUJBQXlCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDOzs7WUE3SEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBN0dRLFVBQVU7Ozs7Ozs7O0lBZ0hMLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVFcnJvckJhc2Uge1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGU8VD4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xyXG4gICAgKHN1YnNjcmliZTogVCkgOiB2b2lkOyAgICBcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUh0dHBSZXNwb25zZTxUPiBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XHJcbiAgKHN1YnNjcmliZTogSVN1YnNjcmliZTxUPikgOiB2b2lkOyAgICBcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUVycm9yIGV4dGVuZHMgSU9ic2VydmFibGVFcnJvckJhc2Uge1xyXG4gICAgKGVycm9yOiBJU3Vic2NyaWJlRXJyb3IpIDogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT2JzZXJ2YWJsZUN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUVycm9yQmFzZSB7XHJcbiAgICAoZXJyb3I6IFRFcnJvcikgOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlSHR0cEN1c3RvbUVycm9yPFRFcnJvcj4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUVycm9yQmFzZSB7XHJcbiAgKGVycm9yOiBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPikgOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdWJzY3JpYmVCYXNlIHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIHN0YXR1c1RleHQ6IHN0cmluZzsgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1YnNjcmliZTxUPiBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgYm9keTogVDtcclxuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlPFQ+IGltcGxlbWVudHMgSVN1YnNjcmliZTxUPiB7XHJcbiAgICBvazogYm9vbGVhbjtcclxuICAgIGJvZHk6IFQ7XHJcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdWJzY3JpYmVFcnJvciBleHRlbmRzIElTdWJzY3JpYmVCYXNlIHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdWJzY3JpYmVDdXN0b21FcnJvcjxURXJyb3I+IGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xyXG4gIGVycm9yOiBURXJyb3I7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUVycm9yIGltcGxlbWVudHMgSVN1YnNjcmliZUVycm9yIHtcclxuICAgIG9rOiBib29sZWFuO1xyXG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4gaW1wbGVtZW50cyBJU3Vic2NyaWJlQ3VzdG9tRXJyb3I8VEVycm9yPiB7XHJcbiAgb2s6IGJvb2xlYW47XHJcbiAgZXJyb3I6IFRFcnJvcjtcclxuICBoZWFkZXJzOiBIdHRwSGVhZGVycztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgc3RhdHVzVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFcnJvclR5cGUge1xyXG4gIElPYnNlcnZhYmxlRXJyb3IsXHJcbiAgSU9ic2VydmFibGVDdXN0b21FcnJvcixcclxuICBJT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElIdHRwQ2xpZW50RXh0ZW5kZWQge1xyXG4gICAgZ2V0PFQ+KHVybDogc3RyaW5nLCBzdWNjZXNzPzogSU9ic2VydmFibGU8VD4sIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG5cclxuICAgIGdldFVzaW5nSHR0cFJlc3BvbnNlPFQ+KHVybDogc3RyaW5nLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlPFQ+LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG5cclxuICAgIHBvc3Q8VFJlcXVlc3QsIFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFRSZXNwb25zZT4sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjtcclxuXHJcbiAgICBwb3N0VXNpbmdIdHRwUmVzcG9uc2U8VFJlcXVlc3QsIFRSZXNwb25zZT4odXJsOiBzdHJpbmcsIG1vZGVsOiBUUmVxdWVzdCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yQmFzZSwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+PjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudEV4dCBpbXBsZW1lbnRzIElIdHRwQ2xpZW50RXh0ZW5kZWQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaWVudDogSHR0cENsaWVudClcclxuICB7XHJcbiAgfVxyXG4gIFxyXG4gIGdldDxUPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFQ+LCBmYWlsdXJlVHlwZT86IEVycm9yVHlwZSwgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgbGV0IGh0dHBSZXNwb25zZSA9IHRoaXMuY2xpZW50LmdldDxUPih1cmwsIG9wdGlvbnMgIT0gbnVsbCA/IHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0gOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG5cclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBodHRwUmVzcG9uc2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlLCBmYWlsdXJlVHlwZSkpO1xyXG4gICAgfSAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBnZXRVc2luZ0h0dHBSZXNwb25zZTxUPih1cmw6IHN0cmluZywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGVIdHRwUmVzcG9uc2U8VD4sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQuZ2V0PFQ+KHVybCwgb3B0aW9ucyAhPSBudWxsID8geyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSA6IHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XHJcblxyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc0h0dHBSZXNwb25zZSh4LHN1Y2Nlc3MpLCBlcnJvciA9PiB0aGlzLnByb2Nlc3NFcnJvclJlc3BvbnNlKGVycm9yLCBmYWlsdXJlLCBmYWlsdXJlVHlwZSkpO1xyXG4gICAgfSAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIGh0dHBSZXNwb25zZTsgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVR5cGU/OiBFcnJvclR5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvckJhc2UsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj4geyAgICAgICAgICAgICAgICBcclxuICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5wb3N0PFRSZXNwb25zZT4odXJsLCBtb2RlbCwgb3B0aW9ucyAhPSBudWxsID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIGh0dHBSZXNwb25zZVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUsIGZhaWx1cmVUeXBlKSk7XHJcbiAgICB9ICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcclxuICB9XHJcblxyXG4gIHBvc3RVc2luZ0h0dHBSZXNwb25zZTxUUmVxdWVzdCwgVFJlc3BvbnNlPih1cmw6IHN0cmluZywgbW9kZWw6IFRSZXF1ZXN0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVUeXBlPzogRXJyb3JUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3JCYXNlLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+IHsgICAgICAgICAgICAgICAgXHJcbiAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucG9zdDxUUmVzcG9uc2U+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KTtcclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgICBodHRwUmVzcG9uc2VcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucHJvY2Vzc1N1Y2Nlc3NIdHRwUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSwgZmFpbHVyZVR5cGUpKTtcclxuICAgIH0gICAgICAgIFxyXG5cclxuICAgIHJldHVybiBodHRwUmVzcG9uc2U7ICAgICAgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlPFRSZXNwb25zZT4ocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxUUmVzcG9uc2U+LCBzdWNjZXNzOiBJT2JzZXJ2YWJsZTxUUmVzcG9uc2U+KSA6IHZvaWQge1xyXG5cclxuICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgc3VjY2VzcyhyZXNwb25zZSEuYm9keSk7XHJcbiAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIH0gICAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2Vzc1N1Y2Nlc3NIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPihyZXNwb25zZTogSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIHN1Y2Nlc3M6IElPYnNlcnZhYmxlSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4pIDogdm9pZCB7XHJcblxyXG4gICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBsZXQgc3Vic2NyaWJlOiBTdWJzY3JpYmU8VFJlc3BvbnNlPiA9IG5ldyBTdWJzY3JpYmU8VFJlc3BvbnNlPigpO1xyXG4gICAgICAgIHN1YnNjcmliZS5vayA9IHJlc3BvbnNlLm9rO1xyXG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0dXNUZXh0O1xyXG4gICAgICAgIHN1YnNjcmliZS5ib2R5ID0gcmVzcG9uc2UuYm9keTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBzdWNjZXNzKHN1YnNjcmliZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9ICAgICAgXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc3NFcnJvclJlc3BvbnNlPFRFcnJvcj4oZXJyb3I6IGFueSwgZmFpbHVyZTogSU9ic2VydmFibGVFcnJvckJhc2UsIGVycm9yVHlwZTogRXJyb3JUeXBlKSA6IHZvaWQge1xyXG5cclxuICAgIHN3aXRjaChlcnJvclR5cGUpXHJcbiAgICB7XHJcbiAgICAgIGNhc2UgRXJyb3JUeXBlLklPYnNlcnZhYmxlRXJyb3I6XHJcbiAgICAgICAgbGV0IG9ic2VydmFibGVFcnJvciA9IDxJT2JzZXJ2YWJsZUVycm9yPiBmYWlsdXJlO1xyXG4gICAgICAgIGxldCBzdWJzY3JpYmUxOiBTdWJzY3JpYmVFcnJvciA9IG5ldyBTdWJzY3JpYmVFcnJvcigpO1xyXG4gICAgICAgIHN1YnNjcmliZTEub2sgPSBmYWxzZTtcclxuICAgICAgICBzdWJzY3JpYmUxLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xyXG4gICAgICAgIHN1YnNjcmliZTEubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XHJcbiAgICAgICAgc3Vic2NyaWJlMS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcclxuXHJcbiAgICAgICAgb2JzZXJ2YWJsZUVycm9yKHN1YnNjcmliZTEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVycm9yVHlwZS5JT2JzZXJ2YWJsZUN1c3RvbUVycm9yOlxyXG4gICAgICAgIGxldCBvYnNlcnZhYmxlQ3VzdG9tRXJyb3IgPSA8SU9ic2VydmFibGVDdXN0b21FcnJvcjxURXJyb3I+PiBmYWlsdXJlO1xyXG4gICAgICAgIG9ic2VydmFibGVDdXN0b21FcnJvcihlcnJvciEuZXJyb3IpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVycm9yVHlwZS5JT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjpcclxuICAgICAgICBsZXQgb2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvciA9IDxJT2JzZXJ2YWJsZUh0dHBDdXN0b21FcnJvcjxURXJyb3I+PiBmYWlsdXJlO1xyXG4gICAgICAgIGxldCBzdWJzY3JpYmU6IFN1YnNjcmliZUN1c3RvbUVycm9yPFRFcnJvcj4gPSBuZXcgU3Vic2NyaWJlQ3VzdG9tRXJyb3IoKTtcclxuICAgICAgICBzdWJzY3JpYmUub2sgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZXJyb3IuZXJyb3IpIHtcclxuICAgICAgICAgIHN1YnNjcmliZS5lcnJvciA9IGVycm9yLmVycm9yO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHN1YnNjcmliZS5oZWFkZXJzID0gZXJyb3IuaGVhZGVycztcclxuICAgICAgICBzdWJzY3JpYmUubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcclxuICAgICAgICBzdWJzY3JpYmUuc3RhdHVzVGV4dCA9IGVycm9yLnN0YXR1c1RleHQ7XHJcblxyXG4gICAgICAgIG9ic2VydmFibGVIdHRwQ3VzdG9tRXJyb3Ioc3Vic2NyaWJlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDogICAgICAgIFxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0gIFxyXG59Il19