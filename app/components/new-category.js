import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
    },

    save4() {
      var params = {
        name: this.get('name'),
        posts: this.get('posts'),
      };
      this.set('addNewCategory', false),
      this.sendAction('save5', params);
    }
  }
});
