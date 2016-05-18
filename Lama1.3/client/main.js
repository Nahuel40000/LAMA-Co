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
	

// Toute cette partie contient du code lié au LOGIN 
  
Template.signup.events({
  'submit form' ( event, template ) {
    event.preventDefault(); // création d'une event lorsque l'utilisateur soumet sa demande de création de compte
    
    let user = {
      email: template.find( '[name="emailAddress"]' ).value,
      password: template.find( '[name="password"]' ).value
    }; // récupération de l'email de l'utilisateur demandant la création de compte

    Accounts.createUser( user, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        Meteor.call( 'sendVerificationLink', ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Bienvenue!', 'success' );
          }
        });
      }
    });
  }
}); // Génère des alertes grâce à Bert en fonction des données entrées par l'utilisateur (mauvais mdp, email. etc.)



Template.index.events({
  'click .resend-verification-link' ( event, template ) {
    Meteor.call( 'sendVerificationLink', ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        let email = Meteor.user().emails[ 0 ].address;
        Bert.alert( `Vérification envoyée à ${ email }!`, 'success' );
      }
    });
  }
}); // lien pour renvoyé un mail de vérification au format alerte Bert

FlowRouter.route( '/verify-email/:token', {
  name: 'verify-email',
  action( params ) {
    Accounts.verifyEmail( params.token, ( error ) =>{
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( '/' );
        Bert.alert( 'Vérification réussie! Merci et bonne visite!', 'success' );
      }
    });
  }
}); // Création du routing de vérification grâce à Flowrouter. 

// Fin de la partie LOGIN 
