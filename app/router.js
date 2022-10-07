import EmberRouter from '@ember/routing/router';
import config from 'myapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('services');
  this.route('contact');
  this.route('test');

  this.route('posts', {path: '/posts'}, function (){
    this.route('new');
    this.route('post', {path:':post_id'});
  })
});
