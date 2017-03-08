import Ember from 'ember';
import computed from 'ember-computed';
import { capitalize } from 'ember-string';
import get from 'ember-metal/get';

export default Ember.Component.extend({
  color: 'gray',
  title: computed('color', {
    get() {
      return capitalize(get(this, 'color'));
    }
  }),
  classNames: ['u-width-30', 'u-inline-block', 'u-mr-sm', 'u-mt-sm', 'u-valign-top']
});
