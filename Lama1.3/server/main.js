import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

AnnonceList = new Mongo.Collection('annonce');

//package Collection2 pour la structure de la DB --> je vais encore le changer pour que ça corresponde à ce qu'on avait dit (c'était juste pour tester)
AnnonceList.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Titre",
  },
  author: {
    type: String,
    label: "Auteur",
  },
  isbn: {
    type: String,
    label: "ISBN",
    max: 17,
    min:17
  },
  prix: {
    type: Number,
    label: "Prix",
  },
  contact: {
    type: String,
    label: "L'adresse mail à laquelle vous voulez être connecté"
  },
  remarque: {
    type: String,
    label: "Remarque",
    optional: true,
    max: 1000
  }
}));