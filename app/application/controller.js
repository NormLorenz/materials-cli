import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    indexButton() {
      console.log('You pressed a index button from a component');
      this.transitionToRoute('index');
    },
    setupButton() {
      console.log('You pressed a setup button from a component');
       this.transitionToRoute('setup');
   },
    aboutButton() {
      console.log('You pressed a about button from a component');
      this.transitionToRoute('about');
    }
  }
});