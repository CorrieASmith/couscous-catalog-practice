import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image'),
        category: this.get('category'),
      };
      this.set('addNewPost', false),
      this.sendAction('savePost', params);
    }
  }
});
