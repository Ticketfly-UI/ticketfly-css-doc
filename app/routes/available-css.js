import Ember from 'ember';
import fetch from 'fetch';

const { RSVP } = Ember;

const MODULE_NAMES = [
  'ticketfly-css-normalize',
  'ticketfly-css-core-variables',
  'ticketfly-css-box-shadow-variables',
  'ticketfly-css-color-variables',
  'ticketfly-css-spacing-variables',
  'ticketfly-css-display-utilities',
  'ticketfly-css-flex-utilities',
  'ticketfly-css-overflow-utilities',
  'ticketfly-css-sizing-utilities',
  'ticketfly-css-spacing-utilities',
  'ticketfly-css-text-utilities',
  'ticketfly-css-z-index-utilities',
  'ticketfly-css-box-objects',
  'ticketfly-css-grid-objects',
  'ticketfly-css-tap-target-objects',
  'ticketfly-css-box-shadow-garnishes',
  'ticketfly-css-color-garnishes',
  'ticketfly-css-reset-garnishes'
];

export default Ember.Route.extend({
  model() {
    const cssFiles = MODULE_NAMES.map((name) => {
      return this._fetchModule(name);
    });

    return RSVP.all(cssFiles);
  },

  _fetchModule(name) {
    const url = this._githubURLFor(name);
    return fetch(url).then((response) => {
      return response.text();
    }).then((body) => {
      return { name, body};
    });
  },

  _githubURLFor(moduleName) {
    return `https://raw.githubusercontent.com/Ticketfly-UI/${moduleName}/master/index.css`;
  }
});
