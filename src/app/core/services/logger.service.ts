import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EnvironmentService } from './environment.service';


export interface LoggerData {
  context: Record<string, any>;
  level: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private readonly url: string;

  constructor(private readonly environmentService: EnvironmentService, @Inject(PLATFORM_ID) private readonly platformId: any) {
    this.url = `${this.environmentService.getEnvironment().api.baseUrl}/logger`
   }

   log(data: Partial<LoggerData> = {}): void {
     if (isPlatformBrowser(this.platformId) && window['XMLHttpRequest'] !== null) {
       data.context = { ...data.context};

       if (!data.level) {
         data.level = 'warning';
       }

       if (!data.message) {
         data.message = 'Js unhandled error';
       }

       if (data.context['error'] && !data.context['stack']) {
         data.context['stack'] = data.context['error'].stack.toString();
       }

       const xhr = new XMLHttpRequest();
       xhr.open('POST', this.url, true);
       xhr.setRequestHeader('Content-type', 'application/json');
       xhr.setRequestHeader('Accept', 'application/json');
       xhr.send(JSON.stringify(data));
     }
   }
}
