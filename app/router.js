import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('messages');

  this.route('admin', function() {
    this.route('invitation');
    this.route('messages');
  });

  this.route("libraries", function(){
  	this.route("new");
  });
});

export default Router;
