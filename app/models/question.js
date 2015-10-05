import DS from 'ember-data';

export default DS.Model.extend({
  mainQ: DS.attr(),
  name: DS.attr(),
  notes: DS.attr()

});
