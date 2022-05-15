import { Injectable } from '@angular/core';
import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface RouterUrlState {
  url: string;
  params: Params;
  queryParams: Params;
  data?: Record<string, any>;
}

@Injectable()
export class RootRouterStateSerializerService implements RouterStateSerializer<RouterUrlState> {

  serialize(routerState: RouterStateSnapshot): RouterUrlState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params, data } = route;

    return { url, params, queryParams, data };
  }
}
