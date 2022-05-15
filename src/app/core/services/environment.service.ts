import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export interface Environment {
    production: boolean;
    api: {
        key: string;
        baseUrl: string;
    };
}

export const ENVIRONMENT = new InjectionToken<Environment>('Environment');

const ENVIRONMENT_DEFAULT: Environment = {
    production: false,
    api: {
        key: '',
        baseUrl: '',
    },
};

@Injectable({
    providedIn: 'root',
})
export class EnvironmentService {
    readonly environments: Environment;
    constructor(
        @Optional()
        @Inject(ENVIRONMENT)
        private readonly environment: Environment | null
    ) {
        this.environments = {
            ...(environment ?? ENVIRONMENT_DEFAULT),
        };
    }

    getEnvironment(): Environment {
        return this.environment ?? ENVIRONMENT_DEFAULT;
    }
}
