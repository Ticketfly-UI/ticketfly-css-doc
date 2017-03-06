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
    this.route('components');
    this.route('resources');
  });
});

export default Router;
