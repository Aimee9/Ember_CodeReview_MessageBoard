import Ember from 'ember';

export default Ember.Component.extend({

  addNewQuestion: false,
  actions: {
    questionForm() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        name: this.get('name'),
        mainQ: this.get('mainQ'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false),
      this.sendAction('save', params);
    }
  }
});
