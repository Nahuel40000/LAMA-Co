import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import './main.html';

AnnonceList = new Mongo.Collection('annonce');
UserList = new Mongo.Collection('user');

//package Collection2 pour la structure de la DB --> je vais encore le changer pour que ça corresponde à ce qu'on avait dit (c'était juste pour tester)
AnnonceList.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  copies: {
    type: Number,
    label: "Number of copies",
    min: 0
  },
  etat: {
    type: String,
    label: "Etat du livre"
  },
  remarque: {
    type: String,
    label: "Remarque",
    optional: true,
    max: 1000
  }
}));
	


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