(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('angular-extended-http-client', ['exports', 'rxjs/operators', '@angular/core', '@angular/common/http'], factory) :
    (factory((global['angular-extended-http-client'] = {}),global.rxjs.operators,global.ng.core,global.ng.common.http));
}(this, (function (exports,operators,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SubscribeBase = /** @class */ (function () {
        function SubscribeBase() {
        }
        return SubscribeBase;
    }());
    /**
     * @template T
     */
    var /**
     * @template T
     */ Subscribe = /** @class */ (function () {
        function Subscribe() {
        }
        return Subscribe;
    }());
    var SubscribeError = /** @class */ (function () {
        function SubscribeError() {
        }
        return SubscribeError;
    }());
    /**
     * @template TError
     */
    var /**
     * @template TError
     */ SubscribeCustomError = /** @class */ (function () {
        function SubscribeCustomError() {
        }
        return SubscribeCustomError;
    }());
    /** @enum {number} */
    var ResponseType = {
        IObservable: 0,
        IObservableHttpResponse: 1,
        IObservableHttpCustomResponse: 2,
    };
    ResponseType[ResponseType.IObservable] = 'IObservable';
    ResponseType[ResponseType.IObservableHttpResponse] = 'IObservableHttpResponse';
    ResponseType[ResponseType.IObservableHttpCustomResponse] = 'IObservableHttpCustomResponse';
    /** @enum {number} */
    var ErrorType = {
        IObservableError: 0,
        IObservableHttpError: 1,
        IObservableHttpCustomError: 2,
    };
    ErrorType[ErrorType.IObservableError] = 'IObservableError';
    ErrorType[ErrorType.IObservableHttpError] = 'IObservableHttpError';
    ErrorType[ErrorType.IObservableHttpCustomError] = 'IObservableHttpCustomError';
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
                        httpResponse = httpResponse.pipe(operators.retry(options.retry));
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
                        httpResponse = httpResponse.pipe(operators.retry(options.retry));
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
                        httpResponse = httpResponse.pipe(operators.retry(options.retry));
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
                        httpResponse = httpResponse.pipe(operators.retry(options.retry));
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
                        httpResponse = httpResponse.pipe(operators.retry(options.retry));
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
                                var iObservable = ( /** @type {?} */(success));
                                iObservable(( /** @type {?} */(response)).body);
                                break;
                            case ResponseType.IObservableHttpResponse:
                                /** @type {?} */
                                var iObservableHttpResponse = ( /** @type {?} */(success));
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
                                var iObservableHttpCustomResponse = ( /** @type {?} */(success));
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
                            var observableError = ( /** @type {?} */(failure));
                            observableError(( /** @type {?} */(error)).error);
                            break;
                        case ErrorType.IObservableHttpError:
                            /** @type {?} */
                            var observableHttpError = ( /** @type {?} */(failure));
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
                            var observableHttpCustomError = ( /** @type {?} */(failure));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HttpClientExt.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ HttpClientExt.ngInjectableDef = i0.defineInjectable({ factory: function HttpClientExt_Factory() { return new HttpClientExt(i0.inject(i1.HttpClient)); }, token: HttpClientExt, providedIn: "root" });
        return HttpClientExt;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpClientExtModule = /** @class */ (function () {
        function HttpClientExtModule() {
        }
        HttpClientExtModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.HttpClientModule],
                        providers: [HttpClientExt]
                    },] }
        ];
        return HttpClientExtModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SubscribeBase = SubscribeBase;
    exports.Subscribe = Subscribe;
    exports.SubscribeError = SubscribeError;
    exports.SubscribeCustomError = SubscribeCustomError;
    exports.ResponseType = ResponseType;
    exports.ErrorType = ErrorType;
    exports.HttpClientExt = HttpClientExt;
    exports.HttpClientExtModule = HttpClientExtModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-extended-http-client.umd.js.map