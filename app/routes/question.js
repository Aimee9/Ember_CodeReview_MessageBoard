import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key, params[key]);
        }
      });
      rental.save();
      this.transitionTo('question', question_id);
    },

    delete(question) {
      if (confirm('This will completely erase this question and all its answers.  Are you sure you want to delete it?')) {
        this.send('destroyQuestion', question);
      }
    },

    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      })
      this.transitionTo('question', params.question);
    }
  }
});
