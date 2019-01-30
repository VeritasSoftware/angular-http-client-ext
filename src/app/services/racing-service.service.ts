import { Injectable, Inject } from '@angular/core'
import { RacingResponse } from '../models/models'
import { APP_CONFIG, AppConfig } from '../app-config.module';
import { HttpClientExt, IObservable, IObservableError } from '../../../projects/angular-extended-http-client/src/lib/angular-extended-http-client.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class RacingService {
    constructor(private client: HttpClientExt, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getRaceInfo(success: IObservable<RacingResponse>, failure?: IObservableError) {
        let url = this.config.apiEndpoint;

        this.client.get(url, success, failure);
    }

    getRaceInfoTraditional() : Observable<HttpResponse<RacingResponse>> {
        let url = this.config.apiEndpoint;

        return this.client.get(url)
    }
}