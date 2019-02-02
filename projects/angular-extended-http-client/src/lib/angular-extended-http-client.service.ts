import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IObservableBase {
    
}

export interface IObservableErrorBase {
    
}

export interface IObservable<T> extends IObservableBase {
    (subscribe: T) : void;    
}

export interface IObservableHttpResponse<T> extends IObservableBase {
  (subscribe: ISubscribe<T>) : void;    
}

export interface IObservableError extends IObservableErrorBase {
    (error: ISubscribeError) : void;
}

export interface IObservableCustomError<TError> extends IObservableErrorBase {
    (error: TError) : void;
}

export interface IObservableHttpCustomError<TError> extends IObservableErrorBase {
  (error: ISubscribeCustomError<TError>) : void;
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

export class Subscribe<T> implements ISubscribe<T> {
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

export class SubscribeError implements ISubscribeError {
    ok: boolean;
    headers: HttpHeaders;
    message: string;
    status: number;
    statusText: string;
}

export class SubscribeCustomError<TError> implements ISubscribeCustomError<TError> {
  ok: boolean;
  error: TError;
  headers: HttpHeaders;
  message: string;
  status: number;
  statusText: string;
}

export enum ErrorType {
  IObservableError,
  IObservableCustomError,
  IObservableHttpCustomError
}

export interface IHttpClientExtended {
    get<T>(url: string, success?: IObservable<T>, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any) : Observable<HttpResponse<T>>;

    getUsingHttpResponse<T>(url: string, 
                              success?: IObservableHttpResponse<T>, 
                              failureType?: ErrorType, 
                              failure?: IObservableErrorBase, options?: any) : Observable<HttpResponse<T>>;

    post<TRequest, TResponse>(url: string, model: TRequest, 
                                success?: IObservable<TResponse>, 
                                failureType?: ErrorType,
                                failure?: IObservableErrorBase, options?: any) : Observable<HttpResponse<TResponse>>;

    postUsingHttpResponse<TRequest, TResponse>(url: string, model: TRequest, 
                                                        success?: IObservableHttpResponse<TResponse>, 
                                                        failureType?: ErrorType,
                                                        failure?: IObservableErrorBase, options?: any) : Observable<HttpResponse<TResponse>>;                              
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientExt implements IHttpClientExtended {

  constructor(private client: HttpClient)
  {
  }
  
  get<T>(url: string, success?: IObservable<T>, failureType?: ErrorType, failure?: IObservableErrorBase, options?: any) : Observable<HttpResponse<T>> {                
    let httpResponse = this.client.get<T>(url, options != null ? { headers: options.headers, observe: 'response' } : {observe: 'response'});

    if (success != null) {
        httpResponse
            .subscribe(x => this.processSuccessResponse(x,success), error => this.processErrorResponse(error, failure, failureType));
    }        

    return httpResponse;                   
  }

  getUsingHttpResponse<T>(url: string, 
                            success?: IObservableHttpResponse<T>, 
                            failureType?: ErrorType,
                            failure?: IObservableErrorBase, options?: any) : Observable<HttpResponse<T>> {                
    let httpResponse = this.client.get<T>(url, options != null ? { headers: options.headers, observe: 'response' } : {observe: 'response'});

    if (success != null) {
        httpResponse
            .subscribe(x => this.processSuccessHttpResponse(x,success), error => this.processErrorResponse(error, failure, failureType));
    }        

    return httpResponse;                   
  }

  post<TRequest, TResponse>(url: string, model: TRequest, 
                              success?: IObservable<TResponse>,
                              failureType?: ErrorType, 
                              failure?: IObservableErrorBase, options?: any) : Observable<HttpResponse<TResponse>> {                
    let httpResponse = this.client.post<TResponse>(url, model, options != null ? 
                                                                { headers: options.headers, observe: 'response' } 
                                                                : {observe: 'response'});
    if (success != null) {
        httpResponse
            .subscribe(x => this.processSuccessResponse(x,success), error => this.processErrorResponse(error, failure, failureType));
    }        

    return httpResponse;                   
  }

  postUsingHttpResponse<TRequest, TResponse>(url: string, model: TRequest, 
                                                      success?: IObservableHttpResponse<TResponse>,
                                                      failureType?: ErrorType, 
                                                      failure?: IObservableErrorBase, options?: any) : Observable<HttpResponse<TResponse>> {                
    let httpResponse = this.client.post<TResponse>(url, model, options != null ? 
                                                                { headers: options.headers, observe: 'response' } 
                                                                : {observe: 'response'});
    if (success != null) {
        httpResponse
            .subscribe(x => this.processSuccessHttpResponse(x,success), error => this.processErrorResponse(error, failure, failureType));
    }        

    return httpResponse;                   
  }

  private processSuccessResponse<TResponse>(response: HttpResponse<TResponse>, success: IObservable<TResponse>) : void {

    if (success != null) {
      if (response.ok) {
        success(response!.body);
      }                        
    }      
  }

  private processSuccessHttpResponse<TResponse>(response: HttpResponse<TResponse>, success: IObservableHttpResponse<TResponse>) : void {

    if (success != null) {
      if (response.ok) {
        let subscribe: Subscribe<TResponse> = new Subscribe<TResponse>();
        subscribe.ok = response.ok;
        subscribe.status = response.status;
        subscribe.statusText = response.statusText;
        subscribe.body = response.body;                        
        subscribe.headers = response.headers;
                
        success(subscribe);                            
      }                        
    }      
  }

  private processErrorResponse<TError>(error: any, failure: IObservableErrorBase, errorType: ErrorType) : void {

    switch(errorType)
    {
      case ErrorType.IObservableError:
        let observableError = <IObservableError> failure;
        let subscribe1: SubscribeError = new SubscribeError();
        subscribe1.ok = false;
        subscribe1.headers = error.headers;
        subscribe1.message = error.message;
        subscribe1.status = error.status;
        subscribe1.statusText = error.statusText;

        observableError(subscribe1);
        break;
      case ErrorType.IObservableCustomError:
        let observableCustomError = <IObservableCustomError<TError>> failure;
        observableCustomError(error!.error);
        break;
      case ErrorType.IObservableHttpCustomError:
        let observableHttpCustomError = <IObservableHttpCustomError<TError>> failure;
        let subscribe: SubscribeCustomError<TError> = new SubscribeCustomError();
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