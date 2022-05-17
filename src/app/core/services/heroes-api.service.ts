import { Injectable } from '@angular/core';
import { heroesStub } from '@core/utils/stubs/heroes.stub';
import { Hero } from '@pages/heroes/common/hero.interface';
import { map, Observable, of, scan } from 'rxjs';
import { ApiService } from './api.service';
import { EnvironmentService } from './environment.service';

@Injectable({
    providedIn: 'root',
})
export class HeroesApiService {
    private readonly baseUrl: string;
    private readonly apiKey: string;
    constructor(
        private apiService: ApiService,
        private readonly environmentService: EnvironmentService
    ) {
        const env = this.environmentService.getEnvironment();
        this.baseUrl = env.api.baseUrl;
        this.apiKey = env.api.key;
    }

    loadHeroes(): Observable<Hero[]> {
        return of(heroesStub).pipe(
            map((values) => {
                const vals = Object.values(values);
                return vals;
            })
        );
        // return this.apiService.get<Hero[]>(`${this.baseUrl}heroes`, {
        //     headers: {
        //         Authorization: `Bearer ${this.apiKey}`,
        //     },
        //     params: {
        //         api_key: this.apiKey,
        //     },
        // });
    }
}
