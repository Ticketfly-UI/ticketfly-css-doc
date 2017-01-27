import Ember from 'ember';
import fetch from 'fetch';
import MODULE_NAMES from 'ticketfly-css-doc/module-names';

const { RSVP } = Ember;

export default Ember.Route.extend({
  model() {
    const modules = MODULE_NAMES.map(name => {
      return this._fetchModule(name).then(body => {
        return { name, body };
      });
    });

    return RSVP.all(modules);
  },

  _fetchModule(name) {
    const url = this._githubURLFor(name);
    return fetch(url).then(response => {
      return response.text();
    });
  },

  _githubURLFor(moduleName) {
    return `https://raw.githubusercontent.com/Ticketfly-UI/${moduleName}/master/index.css`;
  },

  actions: {
    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
});
