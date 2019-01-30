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
                .subscribe(x => {
                if (x.ok) {
                    /** @type {?} */
                    let subscribe = new Subscribe();
                    subscribe.ok = x.ok;
                    subscribe.status = x.status;
                    subscribe.statusText = x.statusText;
                    subscribe.body = x.body;
                    subscribe.headers = x.headers;
                    success(subscribe);
                }
            }, error => {
                /** @type {?} */
                let subscribe = new SubscribeError();
                subscribe.ok = false;
                subscribe.headers = error.headers;
                subscribe.message = error.message;
                subscribe.status = error.status;
                subscribe.statusText = error.statusText;
                failure(subscribe);
            });
        }
        return httpResponse;
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