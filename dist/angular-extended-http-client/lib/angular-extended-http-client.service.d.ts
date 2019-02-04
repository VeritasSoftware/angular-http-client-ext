import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IObservableBase {
}
export interface IObservableErrorBase {
}
export interface IObservable<T> extends IObservableBase {
    (subscribe: T): void;
}
export interface IObservableHttpResponse extends IObservableBase {
    (subscribe: ISubscribeBase): void;
}
export interface IObservableHttpCustomResponse<T> extends IObservableBase {
    (subscribe: ISubscribe<T>): void;
}
export interface IObservableError<TError> extends IObservableErrorBase {
    (error: TError): void;
}
export interface IObservableHttpError extends IObservableErrorBase {
    (error: ISubscribeError): void;
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
export declare class SubscribeBase implements ISubscribeBase {
    ok: boolean;
    headers: HttpHeaders;
    status: number;
    statusText: string;
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
export declare enum ResponseType {
    IObservable = 0,
    IObservableHttpResponse = 1,
    IObservableHttpCustomResponse = 2
}
export declare enum ErrorType {
    IObservableError = 0,
    IObservableHttpError = 1,
    IObservableHttpCustomError = 2
}
export interface IHttpClientExtended {
    get<TResponse>(url: string, responseType?: ResponseType, success?: IObservableBase, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<TResponse>>;
    post<TRequest, TResponse>(url: string, model: TRequest, responseType?: ResponseType, success?: IObservableBase, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<TResponse>>;
    put<T>(url: string, model: T, responseType?: ResponseType, success?: IObservableBase, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<T>>;
    delete<TResponse>(url: string, responseType?: ResponseType, success?: IObservableBase, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<TResponse>>;
}
export declare class HttpClientExt implements IHttpClientExtended {
    private client;
    constructor(client: HttpClient);
    get<TResponse>(url: string, responseType?: ResponseType, success?: IObservableBase, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<TResponse>>;
    post<TRequest, TResponse>(url: string, model: TRequest, responseType?: ResponseType, success?: IObservableBase, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<TResponse>>;
    put<T>(url: string, model: T, responseType?: ResponseType, success?: IObservableBase, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<T>>;
    delete<TResponse>(url: string, responseType?: ResponseType, success?: IObservableBase, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any): Observable<HttpResponse<TResponse>>;
    private processSuccessResponse;
    private processSuccessHttpResponse;
    private processSuccessHttpCustomResponse;
    private processErrorResponse;
}
