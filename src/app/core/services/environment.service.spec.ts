import { TestBed } from '@angular/core/testing';

import {
    ENVIRONMENT,
    Environment,
    EnvironmentService,
    ENVIRONMENT_DEFAULT,
} from './environment.service';

const ENVIRONMENT_STUB: Environment = {
    production: true,
    api: {
        key: 'duper-secret-key',
        baseUrl: 'my-url',
    },
};

describe('EnvironmentService', () => {
    let service: EnvironmentService;

    describe('Without Environment passed', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({});
            service = TestBed.inject(EnvironmentService);
        });

        describe('INIT', () => {
            it('should create', () => {
                expect(service).toBeTruthy();
            });

            it('should use default environment', () => {
                expect(service.environments).toEqual(ENVIRONMENT_DEFAULT);
            });
        });

        describe('METHOD: getEnvironment', () => {
            it('should return default environment', () => {
                expect(service.getEnvironment()).toEqual(ENVIRONMENT_DEFAULT);
            });
        });
    });

    describe('With Environment passed', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    { provide: ENVIRONMENT, useValue: ENVIRONMENT_STUB },
                ],
            });
            service = TestBed.inject(EnvironmentService);
        });

        describe('INIT', () => {
            it('should use passed environment', () => {
                expect(service.environments).toEqual(ENVIRONMENT_STUB);
            });
        });

        describe('METHOD: getEnvironment', () => {
            it('should return environment', () => {
                expect(service.getEnvironment()).toEqual(ENVIRONMENT_STUB);
            });
        });
    });
});
