import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  actions: {
    displayWarning() {
      console.log('You pressed the notify button');
      this.get('notify').warning('Hello there!');
    }
  }
});
