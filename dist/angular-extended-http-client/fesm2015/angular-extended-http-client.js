import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class Subscribe {
}
class SubscribeError {
}
class HttpClientExt {
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
     * @private
     * @template TResponse
     * @param {?} response
     * @param {?} success
     * @return {?}
     */
    processSuccessResponse(response, success) {
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

export { Subscribe, SubscribeError, HttpClientExt, HttpClientExtModule };

//# sourceMappingURL=angular-extended-http-client.js.map