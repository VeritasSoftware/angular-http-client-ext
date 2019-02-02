(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('angular-extended-http-client', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (factory((global['angular-extended-http-client'] = {}),global.ng.core,global.ng.common.http));
}(this, (function (exports,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
    var ErrorType = {
        IObservableError: 0,
        IObservableCustomError: 1,
        IObservableHttpCustomError: 2,
    };
    ErrorType[ErrorType.IObservableError] = 'IObservableError';
    ErrorType[ErrorType.IObservableCustomError] = 'IObservableCustomError';
    ErrorType[ErrorType.IObservableHttpCustomError] = 'IObservableHttpCustomError';
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
                        success(( /** @type {?} */(response)).body);
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
                        var observableError = ( /** @type {?} */(failure));
                        /** @type {?} */
                        var subscribe1 = new SubscribeError();
                        subscribe1.ok = false;
                        subscribe1.headers = error.headers;
                        subscribe1.message = error.message;
                        subscribe1.status = error.status;
                        subscribe1.statusText = error.statusText;
                        observableError(subscribe1);
                        break;
                    case ErrorType.IObservableCustomError:
                        /** @type {?} */
                        var observableCustomError = ( /** @type {?} */(failure));
                        observableCustomError(( /** @type {?} */(error)).error);
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

    exports.Subscribe = Subscribe;
    exports.SubscribeError = SubscribeError;
    exports.SubscribeCustomError = SubscribeCustomError;
    exports.ErrorType = ErrorType;
    exports.HttpClientExt = HttpClientExt;
    exports.HttpClientExtModule = HttpClientExtModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-extended-http-client.umd.js.map