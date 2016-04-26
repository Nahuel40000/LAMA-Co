import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
AnnonceList = new Mongo.Collection('annonce');
UserList = new Mongo.Collection('user');
						//LE CODE DE BASE DU JS CLIENT
						Template.hello.onCreated(function helloOnCreated() {
						  // counter starts at 0
						  this.counter = new ReactiveVar(0);
						});

						Template.hello.helpers({
						  counter() {
						    return Template.instance().counter.get();
						  },
						});

						Template.hello.events({
						  'click button'(event, instance) {
						    // increment the counter when button is clicked
						    instance.counter.set(instance.counter.get() + 1);
						  },
						});
						
//Le code qui correspond au if(meteorisclient) de l'ancien fichier 1.2
  Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
    }