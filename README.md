# angular-extended-http-client
# Extended HttpClient library
## The library allows using Angular's HttpClient with strongly-typed callbacks.
### HttpClientExt

The Angular component is an extended HttpClient. It uses HttpClient under the covers.

**HttpClientExt** exposes HttpClient data via strongly-typed callbacks.

## ![Raison d'être](https://github.com/VeritasSoftware/angular-http-client-ext/blob/master/raison-d-etre.png)

When using Observable with HttpClient, you have to repeat **.subscribe(x => ...)** all over the rest of your code.

Due to this, there is **tight coupling** between the **http layer** and the **rest of your code**.

This library encapsulates the **.subscribe(x => ...)** part and exposes only the data and error through your Models.

**So, you only have to deal with your Models in the rest of your code when using strongly-typed callbacks.**

## Strongly-typed callback types

### IObservable\<T\> success callback

This returns the **your response model** from the underlying HttpClient call.

### IObservableHttpResponse\<T\> success callback

This returns the **http response with your model** from the underlying HttpClient call.

| Response object | Type |
| ---- | ---- |
| ok | boolean |
| body | T |
| headers | HttpHeaders |
| status | number |
| statusText | string |

### IObservableError failure callback

This returns the **http error** from the underlying HttpClient call.

| Error object | Type |
| ---- | ---- |
| ok | boolean |
| message | string |
| headers | HttpHeaders |
| status | number |
| statusText | string |

### IObservableCustomError\<TError\> failure callback

This returns the your **error model** from the underlying HttpClient call.

### IObservableHttpCustomError\<TError\> failure callback

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

### Your Models

```typescript
export class RacingResponse {
    result: string;
}
```

### Your Service

In your Service, you just create params with these callback types.

Then, pass them on to the HttpClientExt's get method.

```typescript
import { Injectable, Inject } from '@angular/core'
import { RacingResponse } from '../models/models'
import { HttpClientExt, IObservable, IObservableError, ErrorType } from '../../../dist/angular-extended-http-client';
.
.

@Injectable()
export class RacingService {

    //Inject HttpClientExt component.
    constructor(private client: HttpClientExt, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    //Declare params of type IObservable<T> and IObservableError.
    //These are the success and failure callbacks.
    //The success callback will return the response objects returned by the underlying HttpClient call.
    //The failure callback will return the error objects returned by the underlying HttpClient call.
    getRaceInfo(success: IObservable<RacingResponse>, failure?: IObservableError) {
        let url = this.config.apiEndpoint;

        this.client.get(url, success, ErrorType.IObservableError, failure);
    }
}
```

### Your Component

In your Component, your Service is injected and the **getRaceInfo** API called as shown below.

```typescript
  ngOnInit() {
    
    this.service.getRaceInfo(response => this.result = response.result,
                                error => this.errorMsg = error.message);

  }
```

Both, **response** and **error** returned in the callbacks are strongly typed.
Eg. **response** is type **RacingResponse**.

You only with deal with Models in these strongly-typed callbacks.

So, the rest of your code knows only about your Models.

Also, you can still use the traditional route and return **Observable** from Service API.

```typescript
    getRaceInfo() : Observable<HttpResponse<RacingResponse>> {
        let url = this.config.apiEndpoint;

        return this.client.get(url)
    }
```

### Implementation details

So far, the **HttpClientExt** component implements below strongly-typed API.

```typescript
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
```

# Demo Angular 7 app
## App demoes the library.

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