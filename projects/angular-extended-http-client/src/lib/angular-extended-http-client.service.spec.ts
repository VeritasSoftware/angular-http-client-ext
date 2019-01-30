import { TestBed } from '@angular/core/testing';

import { HttpClientExt } from './angular-extended-http-client.service';

describe('HttpClientExt', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientExt = TestBed.get(HttpClientExt);
    expect(service).toBeTruthy();
  });
});
