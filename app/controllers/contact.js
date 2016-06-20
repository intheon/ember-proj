import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: Ember.computed.gte('emailAddress', 5),


});
