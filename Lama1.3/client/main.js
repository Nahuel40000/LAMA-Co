import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import './main.html';

AnnonceList = new Mongo.Collection('annonce');

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
  etat: {
    type: String,
    label: "Etat du livre"
  },
  remarque: {
    type: String,
    label: "Remarque",
    optional: true,
    max: 1000
  },
  prix: {
    type: Number,
    label: "Prix",
    min: 0,
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
/*var a = "[name=author]".val();
var b = "[name=title]".val();
console.log(AnnonceList.find({$or:[{"author":"a"},{"title":"b"}]}).fetch());*/
// affiche toutes les annonces
 var a = "pascal";
// console.log(AnnonceList.find({"pascal": {$in: ["author", "title"]}}).fetch());
//console.log(AnnonceList.find({"author":"pascal"}).fetch());
console.log(AnnonceList.find({$or:[{"author":"pascal"},{"title":"pascal"}]}).fetch());

// chercher une annonce par son titre ou son auteur
// console.log(AnnonceList.find ({label: {$in: ["Author", "Title"]}}));

var username = Meteor.userId();
console.log(AnnonceList.find(username));