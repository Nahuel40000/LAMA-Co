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
    min: 0
  }  
}));
	

// Toute cette partie contient du code lié au LOGIN 
  
Template.signup.events({
  'submit form' ( event, template ) {
    event.preventDefault(); // création d'un event lorsque l'utilisateur soumet sa demande de création de compte
    
    let user = {
      email: template.find( '[name="emailAddress"]' ).value,
      password: template.find( '[name="password"]' ).value
    }; // récupération de l'email de l'utilisateur demandant la création de compte

<<<<<<< HEAD
//Le code qui correspond au if(meteorisclient) de l'ancien fichier 1.2
  Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val() ;
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
    }
  });

// affiche toutes les annonces
//console.log(AnnonceList.find().fetch());

// chercher une annonce par son titre ou son auteur

// db.restaurants.find({ $or: [ { "cuisine": "Italian" }, { "address.zipcode": "10075" } ] })

//db.insertAnnonceForm.find ({"Title": "mock-bird"})
=======
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

Template.register.events({
'submit #register-form' : function(e, t) {
  e.preventDefault();
  var email = t.find('#account-email').value
    , password = t.find('#account-password').value;

    // Trim and validate the input

  Accounts.onCreateUser({email: email, password : password}, function(err){
      if (err) {
        // Inform the user that account creation failed
      } else {
        // Success. Account has been created and the user
        // has logged in successfully.
       Accounts.sendVerificationEmail(this.userId, email);
      }
    });

  return false;
}  });


// Fin de la partie LOGIN 
>>>>>>> origin/Login-terminé

// rechercher une annonce par son titre ou son utilisateur
var Author = $('[name=author]').val();
var Title = $('[name=title]').val();
console.log(AnnonceList.find({$or:[{"author":"Author"},{"title":"Title"}]}).fetch());
// Afficher annonces par utilisateur
var username = Meteor.userId();
console.log(AnnonceList.find(username));
Template.body.helpers({
  AnnonceList() {
    return AnnonceList.find({}, { sort: { insertAnnonce: -1 } });
  },
});
