import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

import { HeroesApiService } from './heroes-api.service';

describe('HeroesApiService', () => {
    let service: HeroesApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApiService],
        });
        service = TestBed.inject(HeroesApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
