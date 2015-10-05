import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  name: DS.attr(),
  notes: DS.attr()

});
