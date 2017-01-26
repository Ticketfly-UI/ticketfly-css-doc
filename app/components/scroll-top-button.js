import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['c-scroll-top-button'],

  click() {
    window.scrollTo(0, 0);
  }
});
