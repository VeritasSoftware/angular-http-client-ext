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
 * @template T
 */
export function IObservable() { }
/**
 * @record
 */
export function IObservableError() { }
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
var /**
 * @template T
 */
Subscribe = /** @class */ (function () {
    function Subscribe() {
    }
    return Subscribe;
}());
/**
 * @template T
 */
export { Subscribe };
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
var SubscribeError = /** @class */ (function () {
    function SubscribeError() {
    }
    return SubscribeError;
}());
export { SubscribeError };
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
 * @record
 */
export function IHttpClientExtended() { }
if (false) {
    /**
     * @template T
     * @param {?} url
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.get = function (url, success, failure, options) { };
    /**
     * @template TRequest, TResponse
     * @param {?} url
     * @param {?} model
     * @param {?=} success
     * @param {?=} failure
     * @param {?=} options
     * @return {?}
     */
    IHttpClientExtended.prototype.post = function (url, model, success, failure, options) { };
}
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpClientExt.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpClientExt.ngInjectableDef = i0.defineInjectable({ factory: function HttpClientExt_Factory() { return new HttpClientExt(i0.inject(i1.HttpClient)); }, token: HttpClientExt, providedIn: "root" });
    return HttpClientExt;
}());
export { HttpClientExt };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpClientExt.prototype.client;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1leHRlbmRlZC1odHRwLWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWV4dGVuZGVkLWh0dHAtY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRzdFLHFDQUVDOzs7OztBQUVELGlDQUVDOzs7O0FBRUQsc0NBRUM7Ozs7QUFFRCxvQ0FLQzs7O0lBSkcsNEJBQVk7O0lBQ1osaUNBQXFCOztJQUNyQixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7OztBQUd2QixnQ0FJQzs7O0lBSEcsd0JBQVk7O0lBQ1osMEJBQVE7O0lBQ1IsNkJBQXFCOzs7OztBQUd6Qjs7OztJQUFBO0lBTUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7Ozs7SUFMRyx1QkFBWTs7SUFDWix5QkFBUTs7SUFDUiw0QkFBcUI7O0lBQ3JCLDJCQUFlOztJQUNmLCtCQUFtQjs7Ozs7QUFHdkIscUNBSUM7OztJQUhHLGtDQUFnQjs7SUFDaEIsaUNBQWU7O0lBQ2YscUNBQW1COztBQUd2QjtJQUFBO0lBTUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMRyw0QkFBWTs7SUFDWixpQ0FBcUI7O0lBQ3JCLGlDQUFnQjs7SUFDaEIsZ0NBQWU7O0lBQ2Ysb0NBQW1COzs7OztBQUd2Qix5Q0FNQzs7Ozs7Ozs7OztJQUxHLGtGQUF1SDs7Ozs7Ozs7OztJQUV2SCwwRkFFMkc7O0FBRy9HO0lBS0ksdUJBQW9CLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7SUFFdEMsQ0FBQzs7Ozs7Ozs7O0lBRUQsMkJBQUc7Ozs7Ozs7O0lB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QUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUV4QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDOztnQkE5REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkE1RFEsVUFBVTs7O3dCQURuQjtDQTBIQyxBQS9ERCxJQStEQztTQTVEWSxhQUFhOzs7Ozs7SUFFViwrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElPYnNlcnZhYmxlQmFzZSB7XG4gICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGU8VD4gZXh0ZW5kcyBJT2JzZXJ2YWJsZUJhc2Uge1xuICAgIChzdWJzY3JpYmU6IElTdWJzY3JpYmU8VD4pIDogdm9pZDsgICAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9ic2VydmFibGVFcnJvciBleHRlbmRzIElPYnNlcnZhYmxlQmFzZSB7XG4gICAgKGVycm9yOiBJU3Vic2NyaWJlRXJyb3IpIDogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlQmFzZSB7XG4gICAgb2s6IGJvb2xlYW47XG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG4gICAgc3RhdHVzOiBudW1iZXI7XG4gICAgc3RhdHVzVGV4dDogc3RyaW5nOyAgICBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlPFQ+IGV4dGVuZHMgSVN1YnNjcmliZUJhc2Uge1xuICAgIG9rOiBib29sZWFuO1xuICAgIGJvZHk6IFQ7XG4gICAgaGVhZGVyczogSHR0cEhlYWRlcnM7XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmU8VD4gaW1wbGVtZW50cyBJU3Vic2NyaWJlPFQ+IHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBib2R5OiBUO1xuICAgIGhlYWRlcnM6IEh0dHBIZWFkZXJzO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3Vic2NyaWJlRXJyb3IgZXh0ZW5kcyBJU3Vic2NyaWJlQmFzZSB7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIHN0YXR1c1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFN1YnNjcmliZUVycm9yIGltcGxlbWVudHMgSVN1YnNjcmliZUVycm9yIHtcbiAgICBvazogYm9vbGVhbjtcbiAgICBoZWFkZXJzOiBIdHRwSGVhZGVycztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBudW1iZXI7XG4gICAgc3RhdHVzVGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElIdHRwQ2xpZW50RXh0ZW5kZWQge1xuICAgIGdldDxUPih1cmw6IHN0cmluZywgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFQ+LCBmYWlsdXJlPzogSU9ic2VydmFibGVFcnJvciwgb3B0aW9ucz86IGFueSkgOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XG5cbiAgICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcz86IElPYnNlcnZhYmxlPFRSZXNwb25zZT4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3IsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VFJlc3BvbnNlPj47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBDbGllbnRFeHQgaW1wbGVtZW50cyBJSHR0cENsaWVudEV4dGVuZGVkIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xpZW50OiBIdHRwQ2xpZW50KVxuICAgIHtcbiAgICB9XG5cbiAgICBnZXQ8VD4odXJsOiBzdHJpbmcsIHN1Y2Nlc3M/OiBJT2JzZXJ2YWJsZTxUPiwgZmFpbHVyZT86IElPYnNlcnZhYmxlRXJyb3IsIG9wdGlvbnM/OiBhbnkpIDogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHsgICAgICAgICAgICAgICAgXG4gICAgICAgIGxldCBodHRwUmVzcG9uc2UgPSB0aGlzLmNsaWVudC5nZXQ8VD4odXJsLCBvcHRpb25zICE9IG51bGwgPyB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9IDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuXG4gICAgICAgIGlmIChzdWNjZXNzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGh0dHBSZXNwb25zZVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB0aGlzLnByb2Nlc3NTdWNjZXNzUmVzcG9uc2UoeCxzdWNjZXNzKSwgZXJyb3IgPT4gdGhpcy5wcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvciwgZmFpbHVyZSkpO1xuICAgICAgICB9ICAgICAgICBcblxuICAgICAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBwb3N0PFRSZXF1ZXN0LCBUUmVzcG9uc2U+KHVybDogc3RyaW5nLCBtb2RlbDogVFJlcXVlc3QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzPzogSU9ic2VydmFibGU8VFJlc3BvbnNlPiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmU/OiBJT2JzZXJ2YWJsZUVycm9yLCBvcHRpb25zPzogYW55KSA6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFRSZXNwb25zZT4+IHsgICAgICAgICAgICAgICAgXG4gICAgICBsZXQgaHR0cFJlc3BvbnNlID0gdGhpcy5jbGllbnQucG9zdDxUUmVzcG9uc2U+KHVybCwgbW9kZWwsIG9wdGlvbnMgIT0gbnVsbCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge29ic2VydmU6ICdyZXNwb25zZSd9KVxuICAgICAgaWYgKHN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgICAgIGh0dHBSZXNwb25zZVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4gdGhpcy5wcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKHgsc3VjY2VzcyksIGVycm9yID0+IHRoaXMucHJvY2Vzc0Vycm9yUmVzcG9uc2UoZXJyb3IsIGZhaWx1cmUpKTtcbiAgICAgIH0gICAgICAgIFxuXG4gICAgICByZXR1cm4gaHR0cFJlc3BvbnNlOyAgICAgICAgICAgICAgICAgICBcbiAgfSAgICBcblxuICBwcml2YXRlIHByb2Nlc3NTdWNjZXNzUmVzcG9uc2U8VFJlc3BvbnNlPihyZXNwb25zZTogSHR0cFJlc3BvbnNlPFRSZXNwb25zZT4sIHN1Y2Nlc3M6IElPYnNlcnZhYmxlPFRSZXNwb25zZT4pIDogdm9pZCB7XG5cbiAgICBpZiAoc3VjY2VzcyAhPSBudWxsKSB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgbGV0IHN1YnNjcmliZTogU3Vic2NyaWJlPFRSZXNwb25zZT4gPSBuZXcgU3Vic2NyaWJlPFRSZXNwb25zZT4oKTtcbiAgICAgICAgc3Vic2NyaWJlLm9rID0gcmVzcG9uc2Uub2s7XG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgc3Vic2NyaWJlLmJvZHkgPSByZXNwb25zZS5ib2R5OyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBzdWJzY3JpYmUuaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIHN1Y2Nlc3Moc3Vic2NyaWJlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfSAgICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzRXJyb3JSZXNwb25zZShlcnJvcjogYW55LCBmYWlsdXJlOiBJT2JzZXJ2YWJsZUVycm9yKSA6IHZvaWQge1xuXG4gICAgaWYgKGZhaWx1cmUgIT0gbnVsbCkge1xuICAgICAgbGV0IHN1YnNjcmliZTogU3Vic2NyaWJlRXJyb3IgPSBuZXcgU3Vic2NyaWJlRXJyb3IoKTtcbiAgICAgIHN1YnNjcmliZS5vayA9IGZhbHNlO1xuICAgICAgc3Vic2NyaWJlLmhlYWRlcnMgPSBlcnJvci5oZWFkZXJzO1xuICAgICAgc3Vic2NyaWJlLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgc3Vic2NyaWJlLnN0YXR1cyA9IGVycm9yLnN0YXR1cztcbiAgICAgIHN1YnNjcmliZS5zdGF0dXNUZXh0ID0gZXJyb3Iuc3RhdHVzVGV4dDtcblxuICAgICAgZmFpbHVyZShzdWJzY3JpYmUpO1xuICAgIH0gICAgICBcbiAgfSAgXG59Il19