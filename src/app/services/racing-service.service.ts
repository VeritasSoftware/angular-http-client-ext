import { Injectable, Inject } from '@angular/core'
import { RacingResponse, APIException } from '../models/models'
import { APP_CONFIG, AppConfig } from '../app-config.module';
import { HttpClientExt, IObservable, IObservableError, IObservableHttpError, ResponseType, ErrorType } from '../../../dist/angular-extended-http-client';
//import { HttpClientExt, IObservable, IObservableError, IObservableHttpError, ResponseType, ErrorType } from '../../../projects/angular-extended-http-client/src/lib/angular-extended-http-client.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class RacingService {
    constructor(private client: HttpClientExt, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getRaceInfo(success: IObservable<RacingResponse>, failure?: IObservableHttpError) {
        let url = this.config.apiEndpoint;

        this.client.get(url, ResponseType.IObservable, success, ErrorType.IObservableHttpError, failure);
    }
}