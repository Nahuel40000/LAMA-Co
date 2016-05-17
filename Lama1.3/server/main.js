import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(AnnonceList.find().count() === 0){

  	AnnonceList.insert({title: "Cat on a Hot Tin Roof", author: "Tennessee Williams", prix: 10, etat: "bon"});
  	AnnonceList.insert({title: "Sherlock Holms", author: "Arthur Conan Doyle", prix: 8, etat: "moyen"});
    AnnonceList.insert({title: "Les fleurs du mal", author: "Beaudelaire", prix: 15, etat: "mauvais"});
}});

AnnonceList = new Mongo.Collection('annonce');

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
  },
   prix: {
    type: Number,
    label: "Prix",
    min: 0,
  }  
}));