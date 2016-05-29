import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import './main.html';

AnnonceList = new Mongo.Collection('annonce');

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
    min: 17,
    // 17 car c'est le nombre exact de caractères en comptant les tirets
    optional: true
  },
  prix: {
    type: Number,
    label: "Prix",
  },
  contact: {
    type: String,
    label: "L'adresse mail à laquelle vous voulez être contacté"
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
    event.preventDefault(); // création d'un event lorsque l'utilisateur soumet sa demande de création de compte
    
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

Template.body.helpers({
    // définit le contexte de résultats
  'result' : function(){
    var listRes = Session.get('selectedbook');
    console.log(listRes);
    Session.set('listResult', listRes);
    return listRes;
  }
});

Template.resultat.helpers({
  'selectedClass' : function(){
    var bookChoisi = this.id;
    var livreclicked = Session.get('livreclicked', bookChoisi);
    if(bookChoisi == livreclicked){
      return "selected";
    }

  }
})

Template.ajout.events({
  'click .SearchIPA': function(){
      var infolivre = (document.forms['searchitem'].champinfo.value);
      var stringsearch="https://www.googleapis.com/books/v1/volumes?q=search+"+infolivre;
   //   alert("requête envoyée: "+stringsearch);
      var data;
      $.get(stringsearch, function(data){
       // alert("Données reçues: "+data);
        Session.set('selectedbook', data.items);
      });           
  }
})

Template.resultat.events({
   'click .book': function(){
    var bookChoisi = this.id;
    console.log(bookChoisi);
    Session.set('livreclicked', bookChoisi);
  }
})

Template.body.events({
  'click .AddAnnonce' : function(){   
      var chain = $("#koala").html();
      console.log(chain);
      chain = chain.split(/<br>/);
      console.log(chain);
      var tit = chain[0];
      var aut = chain[1];
      var img = chain[2];
      var rem = document.forms['ad'].com.value;
      var price = document.forms['ad'].price.value;
      var cont = document.forms['ad'].cont.value;
      AnnonceList.insert(
        {
          title: chain[0],
          author: chain[1],
          prix: price,
          contact: cont,
          remarque: rem

        }
      ); 
  }
})



// code nous permettant de stocker n'importe quoi sur ce template
Template.search.onCreated( () => {
  let template = Template.instance();

  template.searchQuery = new ReactiveVar(); //permet d'afficher la valeur la plus récente
  template.searching   = new ReactiveVar( false );

  template.autorun( () => {
    template.subscribe( 'annonce', template.searchQuery.get(), () => { //searchQuery nous permet de retenir la valeur qui a été placée dans la barre de recherche
      setTimeout( () => {
        template.searching.set( false );
      }, 300 ); 
    });
  });
});

Template.search.helpers({
  searching() {
    return Template.instance().searching.get();
  },
  query() {
    return Template.instance().searchQuery.get();
  },
  annonce() {
    let annonce = AnnonceList.find();
    if ( annonce ) {
      return annonce;
    }
  }
});

Template.search.events({
  'keyup [name="search"]' ( event, template ) {
    let value = event.target.value.trim();

    if ( value !== '' && event.keyCode === 13 ) {
      template.searchQuery.set( value );
      template.searching.set( true );
    }

    if ( value === '' ) {
      template.searchQuery.set( value );
    }
  }
});