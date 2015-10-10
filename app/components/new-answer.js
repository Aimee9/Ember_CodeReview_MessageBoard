import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    newAnswerForm() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        name: this.get('name'),
        explanation: this.get('explanation'),
        question: this.question,
        date_added: Date.now()
      };
      this.set('addNewAnswer', false),
      this.sendAction('saveAnswer', params);
    }
  }
});
