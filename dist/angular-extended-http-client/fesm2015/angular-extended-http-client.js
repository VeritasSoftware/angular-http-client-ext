import { retry } from 'rxjs/operators';
import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubscribeBase {
}
/**
 * @template T
 */
class Subscribe {
}
class SubscribeError {
}
/**
 * @template TError
 */
class SubscribeCustomError {
}
/** @enum {number} */
const ResponseType = {
    IObservable: 0,
    IObservableHttpResponse: 1,
    IObservableHttpCustomResponse: 2,
};
ResponseType[ResponseType.IObservable] = 'IObservable';
ResponseType[ResponseType.IObservableHttpResponse] = 'IObservableHttpResponse';
ResponseType[ResponseType.IObservableHttpCustomResponse] = 'IObservableHttpCustomResponse';
/** @enum {number} */
const ErrorType = {
    IObservableError: 0,
    IObservableHttpError: 1,
    IObservableHttpCustomError: 2,
};
ErrorType[ErrorType.IObservableError] = 'IObservableError';
ErrorType[ErrorType.IObservableHttpError] = 'IObservableHttpError';
ErrorType[ErrorType.IObservableHttpCustomError] = 'IObservableHttpCustomError';
class HttpClientExt {
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
            httpResponse
                .pipe(retry((options == null || options.retry == null) ? 0 : options.retry))
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
            httpResponse
                .pipe(retry((options == null || options.retry == null) ? 0 : options.retry))
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
            httpResponse
                .pipe(retry((options == null || options.retry == null) ? 0 : options.retry))
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
            httpResponse
                .pipe(retry((options == null || options.retry == null) ? 0 : options.retry))
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
/** @nocollapse */ HttpClientExt.ngInjectableDef = defineInjectable({ factory: function HttpClientExt_Factory() { return new HttpClientExt(inject(HttpClient)); }, token: HttpClientExt, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpClientExtModule {
}
HttpClientExtModule.decorators = [
    { type: NgModule, args: [{
                imports: [HttpClientModule],
                providers: [HttpClientExt]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SubscribeBase, Subscribe, SubscribeError, SubscribeCustomError, ResponseType, ErrorType, HttpClientExt, HttpClientExtModule };

//# sourceMappingURL=angular-extended-http-client.js.map