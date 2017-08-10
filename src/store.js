import { observable, action } from 'mobx';
import history from './history';
import mediator from './Mediator';

const urlToStateMap = new Map();
urlToStateMap.set('/overview', 'overview');
urlToStateMap.set('/inbox', 'inbox');
urlToStateMap.set('/listings', 'listings.view');

class AppStore {
  @observable active = '/';

  @action navigate = (to) => {
    history.push(to);
    const toState = urlToStateMap.get(to);
    toState && mediator.notifyRouteChange({ toState })
  };

  @action setActive = (location) => {
    this.active = location;
  }
}

export default new AppStore();
