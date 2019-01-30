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
    exports.HttpClientExt = HttpClientExt;
    exports.HttpClientExtModule = HttpClientExtModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-extended-http-client.umd.js.map