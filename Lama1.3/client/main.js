import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import './main.html';

AnnonceList = new Mongo.Collection('annonce');
UserList = new Mongo.Collection('user');


	


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
  });