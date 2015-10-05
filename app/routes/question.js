import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    delete(question) {
      if (confirm('This will completely erase this question and all its answers.  Are you sure you want to delete it?')) {
        this.send('destroyQuestion', question);
      }
    },

    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
