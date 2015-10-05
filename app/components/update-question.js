import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        name: this.get('name'),
        mainQ: this.get('mainQ'),
        notes: this.get('notes'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
