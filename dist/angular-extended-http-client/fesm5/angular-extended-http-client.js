import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
Subscribe = /** @class */ (function () {
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
        /** @type {?} */
        var httpResponse = this.client.get(url, options != null ? { headers: options.headers, observe: 'response' } : { observe: 'response' });
        if (success != null) {
            httpResponse
                .subscribe(function (x) {
                if (x.ok) {
                    /** @type {?} */
                    var subscribe = new Subscribe();
                    subscribe.ok = x.ok;
                    subscribe.status = x.status;
                    subscribe.statusText = x.statusText;
                    subscribe.body = x.body;
                    subscribe.headers = x.headers;
                    success(subscribe);
                }
            }, function (error) {
                /** @type {?} */
                var subscribe = new SubscribeError();
                subscribe.ok = false;
                subscribe.headers = error.headers;
                subscribe.message = error.message;
                subscribe.status = error.status;
                subscribe.statusText = error.statusText;
                failure(subscribe);
            });
        }
        return httpResponse;
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
    /** @nocollapse */ HttpClientExt.ngInjectableDef = defineInjectable({ factory: function HttpClientExt_Factory() { return new HttpClientExt(inject(HttpClient)); }, token: HttpClientExt, providedIn: "root" });
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
        { type: NgModule, args: [{
                    imports: [HttpClientModule],
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

export { Subscribe, SubscribeError, HttpClientExt, HttpClientExtModule };

//# sourceMappingURL=angular-extended-http-client.js.map