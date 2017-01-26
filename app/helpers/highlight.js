/* globals hljs */
import Ember from 'ember';
import { htmlSafe } from 'ember-string';

/*
  Highlights code with highlightjs library, imported as a bower component. See ember-cli-build.js
*/ 

export function highlight([code]/*, hash*/) {
  const highlightedCode = hljs.highlightAuto(code).value;
  return htmlSafe(highlightedCode);
}

export default Ember.Helper.helper(highlight);

