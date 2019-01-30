# angular-extended-http-client
# Extended HttpClient library
## The library allows using Angular's HttpClient with strongly-typed callbacks.
### HttpClientExt

The Angular component is an extended HttpClient. It uses HttpClient under the covers.

**HttpClientExt** exposes HttpClient data via strongly-typed callbacks.

This keeps the code cleaner by not having to repeat **.subscribe(x => ...)** all over your code when using **Observables**.

The component encapsulates the **.subscribe(x => ...)** part.

It exposes just the **response objects** from the underlying HttpClient call through a strongly-typed **success callback** called **IObservable\<T\>**.

### IObservable\<T\> success callback

| Reponse object | Type |
| ---- | ---- |
| ok | boolean |
| body | T |
| headers | HttpHeaders |
| status | number |
| statusText | string |

It also exposes just the **error objects** from the underlying HttpClient call through a strongly-typed **failure callback** called **IObservableError**.

### IObservableError failure callback

| Error object | Type |
| ---- | ---- |
| ok | boolean |
| message | string |
| headers | HttpHeaders |
| status | number |
| statusText | string |

## Sample Usage

In your Service, you just create params with these callback types.

Then, pass them on to the HttpClientExt's get method.

```typescript
export class RacingResponse {
    result: string;
}
```

```typescript
import { Injectable, Inject } from '@angular/core'
import { RacingResponse } from '../models/models'
import { HttpClientExt, IObservable, IObservableError } from '../../../dist/angular-extended-http-client';
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

        this.client.get(url, success, failure);
    }
}
```

In your Component, your Service is injected and the **getRaceInfo** API called as shown below.

```typescript
  ngOnInit() {    
    this.service.getRaceInfo(response => this.result = response.body!.result,
                                error => this.errorMsg = error.message);

  }
```

Both, **response** and **error** returned in the callbacks are strongly typed.
Eg. **response.body** is type RacingResponse.

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
    get<T>(url: string, success?: IObservable<T>, failure?: IObservableError, options?: any) : Observable<HttpResponse<T>>

    post<TRequest, TResponse>(url: string, model: TRequest, 
                              success?: IObservable<TResponse>, 
                              failure?: IObservableError, options?: any) : Observable<HttpResponse<TResponse>>
```

# Demo Angular 7 app
## App demoes the library.

## Screenshot

![Demo UI app](https://github.com/VeritasSoftware/angular-http-client-ext/blob/master/DemoUI.jpg)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
