import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('available-css');
  this.route('demo', function() {
    this.route('color');
    this.route('typography');
    this.route('grid');
    this.route('components', function() {
      this.route('buttons');
      this.route('cards');
      this.route('dialogs');
      this.route('fields');
      this.route('loaders');
      this.route('menus');
      this.route('pagination');
      this.route('selection-controls');
      this.route('tables');
      this.route('toasts');
      this.route('tooltips');
    });
    this.route('resources');
  });
});

export default Router;
