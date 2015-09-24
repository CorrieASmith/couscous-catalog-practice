import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('index');
    },

    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      params.category.save();
      this.transitionTo('category', params.category);
    },
  }
});
