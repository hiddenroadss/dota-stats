import { Environment } from '@core/services/environment.service';

//TODO remove it
declare var process: any;

export const environment: Environment = {
    production: true,
    api: {
        key: process.env['API_KEY'] || '',
        baseUrl: 'https://api.opendota.com/api/',
    },
};
