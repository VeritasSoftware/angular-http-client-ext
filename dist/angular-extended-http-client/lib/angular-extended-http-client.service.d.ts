import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IObservableBase {
}
export interface IObservableErrorBase {
}
export interface IObservable<T> extends IObservableBase {
    (subscribe: T): void;
}
export interface IObservableHttpResponse<T> extends IObservableBase {
    (subscribe: ISubscribe<T>): void;
}
export interface IObservableError extends IObservableErrorBase {
    (error: ISubscribeError): void;
}
export interface IObservableCustomError<TError> extends IObservableErrorBase {
    (error: TError): void;
}
export interface IObservableHttpCustomError<TError> extends IObservableErrorBase {
    (error: ISubscribeCustomError<TError>): void;
}
export interface ISubscribeBase {
    ok: boolean;
    headers: HttpHeaders;
    status: number;
    statusText: string;
}
export interface ISubscribe<T> extends ISubscribeBase {
    ok: boolean;
    body: T;
    headers: HttpHeaders;
}
export declare class Subscribe<T> implements ISubscribe<T> {
    ok: boolean;
    body: T;
    headers: HttpHeaders;
    status: number;
    statusText: string;
}
export interface ISubscribeError extends ISubscribeBase {
    message: string;
    status: number;
    statusText: string;
}
export interface ISubscribeCustomError<TError> extends ISubscribeBase {
    error: TError;
    message: string;
    status: number;
    statusText: string;
}
export declare class SubscribeError implements ISubscribeError {
    ok: boolean;
    headers: HttpHeaders;
    message: string;
    status: number;
    statusText: string;
}
export declare class SubscribeCustomError<TError> implements ISubscribeCustomError<TError> {
    ok: boolean;
    error: TError;
    headers: HttpHeaders;
    message: string;
    status: number;
    statusText: string;
}
export declare enum ErrorType {
    IObservableError = 0,
    IObservableCustomError = 1,
    IObservableHttpCustomError = 2
}
export interface IHttpClientExtended {
    get<T>(url: string, success?: IObservable<T>, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<T>>;
    getUsingHttpResponse<T>(url: string, success?: IObservableHttpResponse<T>, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<T>>;
    post<TRequest, TResponse>(url: string, model: TRequest, success?: IObservable<TResponse>, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<TResponse>>;
    postUsingHttpResponse<TRequest, TResponse>(url: string, model: TRequest, success?: IObservableHttpResponse<TResponse>, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<TResponse>>;
}
export declare class HttpClientExt implements IHttpClientExtended {
    private client;
    constructor(client: HttpClient);
    get<T>(url: string, success?: IObservable<T>, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<T>>;
    getUsingHttpResponse<T>(url: string, success?: IObservableHttpResponse<T>, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<T>>;
    post<TRequest, TResponse>(url: string, model: TRequest, success?: IObservable<TResponse>, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<TResponse>>;
    postUsingHttpResponse<TRequest, TResponse>(url: string, model: TRequest, success?: IObservableHttpResponse<TResponse>, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<TResponse>>;
    private processSuccessResponse;
    private processSuccessHttpResponse;
    private processErrorResponse;
}
