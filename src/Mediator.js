import { observable, action, computed } from 'mobx';

import history from './history';

const fromState = new Map();
fromState.set('overview', '/overview');
fromState.set('listings.view', '/listings');
fromState.set('reservation', '/reservations');

const urlToStateMap = new Map();
urlToStateMap.set('/overview', 'overview');
urlToStateMap.set('/inbox', 'inbox');
urlToStateMap.set('/listings', 'listings.view');

class Mediator{
  @observable iframe;
  @observable action;
  @observable payload = {};

  constructor(){
    window.addEventListener('message', this.listenRouteChange);
  }

  logoutHandler({ toState: url = '' }){
    if(url.includes('logout')){
      history.push('/login');
    }
  }

  @action init = ({ target }) =>{
    this.iframe = target;
  };

  @action notifyRouteChange = (payload) =>{
    if(!this.iframe) return;

    console.log('Notifying:NEW', payload);

    const action = 'ROUTE_CHANGE';
    this.iframe.contentWindow.postMessage({ action, payload }, '*');

    // Handle logout case
    this.logoutHandler(payload);
  };

  @action listenRouteChange = ({ data: { action = '', payload = {} } }) =>{
    if(!action) return;
    console.log('Received:NEW', action, payload);

    this.action = action;
    this.payload = payload;

    const { toState } = payload;
    const to = fromState.get(toState);
    to && history.push(to);
  };

  @computed
  get isLoggedIn(){
    return !!this.payload.isLoggedIn;
  }
}

export default new Mediator();
