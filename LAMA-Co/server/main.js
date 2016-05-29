import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.startup( function() {
  process.env.MAIL_URL = "smtp://postmaster%40sandboxa02d0e41cae7443fbe64c29545e8a256.mailgun.org:0448f718cfdda8a1ef3b3cfb0f55b165@smtp.mailgun.org:587";

}); // Serveur d'envoi Mailgun

Accounts.config({sendVerificationEmail: true, forbidClientAccountCreation: false}); // Autorisation de la vérification par mail dans Account.config du package Account-UI


Meteor.methods({
  sendVerificationLink() {
    let userId = Meteor.userId();
    if ( userId ) {
      return Accounts.sendVerificationEmail( userId );
    }
  }
}); // récupération du mail utilisé en login pour l'envoi mail 

  
Accounts.emailTemplates.siteName = "UniBooks";
Accounts.emailTemplates.from     = "UniBooks <admin@unibooks.com>";

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "[UniBooks] Verify Your Email Address";
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace( '#/', '' ),
        supportEmail   = "support@unibooks.com",
        emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
}; // Paramétrage de l'email envoyé (Adresse d'envoi, sujet, objet, contenu texte + URL de vérification)

FlowRouter.route( '/verify-email/:token', {
  name: 'verify-email',
  action( params ) {
    Accounts.verifyEmail( params.token, ( error ) =>{
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        FlowRouter.go( '/' );
        Bert.alert( 'Email verified! Thanks!', 'success' );
      }
    });
  }
}); // création d'une route Flowrouter pour la vérification du lien (vérification booléenne du login)



Accounts.config({restrictCreationByEmailDomain:'unil.ch'}); // restriction du domaine mail


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
    min:17,
    optional: true
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


//fait le lien entre la base client et la transfert à AnnonceList
 Meteor.publish( 'annonce', function( search ) {
  check( search, Match.OneOf( String, null, undefined ) ); //permet de vérifier le contenu de la recherche

  let query      = {},
      projection = { limit: 10, sort: { title: 1 } }; //on trie les annonces selon leur titre

  if ( search ) {
    let regex = new RegExp( search, 'i' );

    query = {
      $or: [
        { title: regex }, //permet de taper Pascal, pascal ou PASCAL et de toujour trouver la même chose
        { author: regex },
      ]
    };

    projection.limit = 100;
  }

  return AnnonceList.find( query, projection );
});