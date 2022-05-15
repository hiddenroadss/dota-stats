import { Injectable } from '@angular/core';
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

    loadHeroes() {
        return this.apiService.get(`${this.baseUrl}`, {
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
            },
            params: {
                api_key: this.apiKey,
            },
        });
    }
}
