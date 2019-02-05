import { Injectable, Inject } from '@angular/core'
import { RacingResponse, APIException } from '../models/models'
import { APP_CONFIG, AppConfig } from '../app-config.module';
import { HttpClientExt, IObservable, IObservableError, IObservableHttpError, ResponseType, ErrorType } from 'angular-extended-http-client';
//import { HttpClientExt, IObservable, IObservableError, IObservableHttpError, ResponseType, ErrorType } from '../../../dist/angular-extended-http-client';
//import { HttpClientExt, IObservable, IObservableError, IObservableHttpError, ResponseType, ErrorType } from '../../../projects/angular-extended-http-client/src/lib/angular-extended-http-client.service';
import { Observable } from 'rxjs';
import { HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RacingService {
    constructor(private client: HttpClientExt, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getRaceInfo(success: IObservable<RacingResponse>, failure?: IObservableHttpError) {
        let url = this.config.apiEndpoint;

        let options = this.addRequestHeaderOptions();

        this.client.get(url, ResponseType.IObservable, success, ErrorType.IObservableHttpError, failure, options);
    }

    getRaceInfoTraditional() : Observable<HttpResponse<RacingResponse>> {
        let url = this.config.apiEndpoint;

        return this.client.get(url)
    }    

    private addRequestHeaderOptions() : any {
        var httpHeaders = new HttpHeaders();
        httpHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc2OTg1MzgsIm5iZiI6MTU0NzY5NDIxOCwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InN0cmluZyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InN0cmluZyIsIkRPQiI6IjEvMTcvMjAxOSIsImlzcyI6InlvdXIgYXBwIiwiYXVkIjoidGhlIGNsaWVudCBvZiB5b3VyIGFwcCJ9.qxFdcdAVKG2Idcsk_tftnkkyB2vsaQx5py1KSMy3fT4");

        let options = {
            headers: httpHeaders
        };

        return options;
    }
}