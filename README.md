# angular-extended-http-client
# Extended HttpClient library
## The library allows using Angular's HttpClient with strongly-typed callbacks.

[**NPM package**](https://www.npmjs.com/package/angular-extended-http-client)

### HttpClientExt

The Angular component is an extended HttpClient. It uses HttpClient under the covers.

**HttpClientExt** exposes HttpClient data via strongly-typed callbacks.

**API**

*   get
*   post
*   put
*   patch
*   delete

These API are strongly-typed too.

## Raison d'être - (n.) a reason for existing

When using Observable with HttpClient, you have to repeat **.subscribe(x => ...)** all over the rest of your code.

This is because **Observable\<HttpResponse\<T\>\>** is tied to **HttpResponse**.

Due to this, there is **tight coupling** between the **http layer** and the **rest of your code**.

This library encapsulates the **.subscribe(x => ...)** part and exposes only the data and error through your Models.

**So, with strongly-typed callbacks, you only have to deal with your Models in the rest of your code.**

Also, with this abstraction, **you could potentially remove HttpClient** as the underlying http implementation without affecting the rest of your code.
You can do this by using the callbacks (tied only to models) with a different http implementation.

## Strongly-typed callback types

## Success

### IObservable\<T\>

This returns the **your response model** from the **body** of the underlying HttpClient call.

### IObservableHttpResponse

This returns the **http response** from the underlying HttpClient call.

| Response object | Type |
| ---- | ---- |
| ok | boolean |
| headers | HttpHeaders |
| status | number |
| statusText | string |

### IObservableHttpCustomResponse\<T\>

This returns the **http response with your response model** from the underlying HttpClient call.

| Response object | Type |
| ---- | ---- |
| ok | boolean |
| body | T |
| headers | HttpHeaders |
| status | number |
| statusText | string |

## Failure

### IObservableError\<TError\>

This returns **your error model** from the underlying HttpClient call.

This is the custom exception thrown by the API.

It gets this from HttpClient's **error.error** returned from the API.

### IObservableHttpError

This returns the **http error** from the underlying HttpClient call.

| Error object | Type |
| ---- | ---- |
| ok | boolean |
| message | string |
| headers | HttpHeaders |
| status | number |
| statusText | string |

### IObservableHttpCustomError\<TError\>

This returns the **http error with your error model** from the underlying HttpClient call.

| Error object | Type |
| ---- | ---- |
| ok | boolean |
| error | TError |
| message | string |
| headers | HttpHeaders |
| status | number |
| statusText | string |

## Sample Usage

Add the **HttpClientExtModule** to your app module.

```typescript
import { HttpClientExtModule } from 'angular-extended-http-client';
```

and in the **@NgModule** imports

```typescript
  imports: [
    .
    .
    .
    HttpClientExtModule
  ],
```

### Your Models

```typescript
//Normal response returned by the API.
export class RacingResponse {
    result: RacingItem[];
}

//Custom exception thrown by the API.
export class APIException {
    className: string;
}
```

### Your Service

In your Service, you just create params with these callback types.

Then, pass them on to the HttpClientExt's get method.

```typescript
import { Injectable, Inject } from '@angular/core'
import { HttpHeaders } from '@angular/common/http';

import { RacingResponse, APIException } from '../models/models'
import { HttpClientExt, IObservable, IObservableError, ResponseType, ErrorType } from 'angular-extended-http-client';
.
.

@Injectable()
export class RacingService {

    //Inject HttpClientExt component.
    constructor(private client: HttpClientExt, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    //Declare params of type IObservable<T> and IObservableError<TError>.
    //These are the success and failure callbacks.
    //The success callback will return the response objects returned by the underlying HttpClient call.
    //The failure callback will return the error objects returned by the underlying HttpClient call.
    getRaceInfo(success: IObservable<RacingResponse>, failure?: IObservableError<APIException>) {
        let url = this.config.apiEndpoint;

        let options = this.addRequestHeaderOptions();        

        this.client.get(url, ResponseType.IObservable, success, ErrorType.IObservableError, failure, options);
    }

    private addRequestHeaderOptions() : any {
        var httpHeaders = new HttpHeaders()
                            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc2OTg1MzgsIm5iZiI6MTU0NzY5NDIxOCwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InN0cmluZyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InN0cmluZyIsIkRPQiI6IjEvMTcvMjAxOSIsImlzcyI6InlvdXIgYXBwIiwiYXVkIjoidGhlIGNsaWVudCBvZiB5b3VyIGFwcCJ9.qxFdcdAVKG2Idcsk_tftnkkyB2vsaQx5py1KSMy3fT4");

        let options = {
            headers: httpHeaders,
            retry: 1
        };

        return options;
    }    
}
```

### Your Component

In your Component, your Service is injected and the **getRaceInfo** API called as shown below.

```typescript
  ngOnInit() {
    
    this.service.getRaceInfo(response => this.items = response.result,
                                error => this.errorMsg = error.className);

  }
```

Both, **response** and **error** returned in the callbacks are strongly-typed.
Eg. **response** is type **RacingResponse** and **error** is of type **APIException**.

You only with deal with Models in these strongly-typed callbacks.

So, the rest of your code knows only about your Models.

Also, you can still use the traditional route and return **Observable** from Service API.

```typescript
    getRaceInfo() : Observable<HttpResponse<RacingResponse>> {
        let url = this.config.apiEndpoint;

        return this.client.get(url)
    }
```

## Implementation details

The **HttpClientExt** component implements below strongly-typed interface.

```typescript
export enum ResponseType {
  IObservable,
  IObservableHttpResponse,
  IObservableHttpCustomResponse
}

export enum ErrorType {
  IObservableError,
  IObservableHttpError,
  IObservableHttpCustomError
}

export interface IHttpClientExtended {
  get<TResponse>(url: string, 
                  responseType?: ResponseType,
                  success?: IObservableBase, 
                  failureType?: ErrorType, 
                  failure?: IObservableErrorBase, options?: any, 
                  pipe?: OperatorFunction<HttpResponse<TResponse>, HttpResponse<TResponse>>) : Observable<HttpResponse<TResponse>>;

  post<TRequest, TResponse>(url: string, model: TRequest, 
                              responseType?: ResponseType,
                              success?: IObservableBase, 
                              failureType?: ErrorType,
                              failure?: IObservableErrorBase, options?: any, 
                              pipe?: OperatorFunction<HttpResponse<TResponse>, HttpResponse<TResponse>>) : Observable<HttpResponse<TResponse>>;


  put<T>(url: string, model: T,
            responseType?: ResponseType, 
            success?: IObservableBase,
            failureType?: ErrorType, 
            failure?: IObservableErrorBase, options?: any, 
            pipe?: OperatorFunction<HttpResponse<T>, HttpResponse<T>>) : Observable<HttpResponse<T>>;

  patch<T>(url: string, model: T,
            responseType?: ResponseType, 
            success?: IObservableBase,
            failureType?: ErrorType, 
            failure?: IObservableErrorBase, options?: any, 
            pipe?: OperatorFunction<HttpResponse<T>, HttpResponse<T>>) : Observable<HttpResponse<T>>;            

  delete<TResponse>(url: string,
                      responseType?: ResponseType, 
                      success?: IObservableBase,
                      failureType?: ErrorType, 
                      failure?: IObservableErrorBase, options?: any, 
                      pipe?: OperatorFunction<HttpResponse<TResponse>, HttpResponse<TResponse>>) : Observable<HttpResponse<TResponse>>;
}
```

You can use underlying HttpClient's **.pipe** as an optional param.

# Demo Angular 7 app
## App demoes the library.

All http calls in the demo app use the library.

## Screenshot

![Demo UI app](https://github.com/VeritasSoftware/angular-http-client-ext/blob/master/DemoUI.jpg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

### To run the Angular app

*   Download/clone the source code.
*   Open the source code folder in Visual Studio Code.
*   Run below Powershell commands in Integrated Terminal (from View menu)
    *   npm install
    *   ng serve
*   Navigate to http://localhost:4200 in the browser.