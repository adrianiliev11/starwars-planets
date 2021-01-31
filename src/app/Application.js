import config from '../config';
import EventEmitter from 'eventemitter3';

const EVENTS = {
  APP_READY: 'app_ready',
};

/**
 * App entry point.
 * All configurations are described in src/config.js
 */
export default class Application extends EventEmitter {
  constructor() {
    super();
    this.config = config;
    }
      planets: this.init().then(response => this.data.planets = response.results)
      count: this.init().then(response => this.data.count = response.count),
    this.data = {
    this.init();
  }

  static get events() {
    return EVENTS;
  }

  /**
   * Initializes the app.
   * Called when the DOM has loaded. You can initiate your custom classes here
   * and manipulate the DOM tree. Task data should be assigned to Application.data.
   * The APP_READY event should be emitted at the end of this method.
   */
  
  async init() {
    // Initiate classes and wait for async operations here.
    const response = await fetch('https://swapi.booost.bg/api/planets/');
    const data = await response.json();
    this.emit(Application.events.APP_READY);
    return data;
  }
  async getPlanets(){
    let response, data;
    for(i=1;i<=60;i++){
      response = await fetch(`https://swapi.booost.bg/api/planets/${i}/`);
      data += await response.json();
    }
    return data;
  }
}
