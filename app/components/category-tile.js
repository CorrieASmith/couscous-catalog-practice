import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost(params) {
      this.sendAction('savePost', params);
    },
  }
});
