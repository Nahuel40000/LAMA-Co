var require = meteorInstall({"client":{"main.js":["meteor/templating","meteor/reactive-var","meteor/mongo","./main.html",function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.js                                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _templating = require('meteor/templating');                                                                     // 1
                                                                                                                    //
var _reactiveVar = require('meteor/reactive-var');                                                                  // 2
                                                                                                                    //
var _mongo = require('meteor/mongo');                                                                               // 3
                                                                                                                    //
require('./main.html');                                                                                             // 4
                                                                                                                    //
AnnonceList = new _mongo.Mongo.Collection('annonce');                                                               // 6
                                                                                                                    //
AnnonceList.attachSchema(new SimpleSchema({                                                                         // 8
  title: {                                                                                                          // 9
    type: String,                                                                                                   // 10
    label: "Titre"                                                                                                  // 11
  },                                                                                                                //
  author: {                                                                                                         // 13
    type: String,                                                                                                   // 14
    label: "Auteur"                                                                                                 // 15
  },                                                                                                                //
  isbn: {                                                                                                           // 17
    type: String,                                                                                                   // 18
    label: "ISBN",                                                                                                  // 19
    max: 17,                                                                                                        // 20
    min: 17,                                                                                                        // 21
    optional: true                                                                                                  // 22
  },                                                                                                                //
  prix: {                                                                                                           // 24
    type: Number,                                                                                                   // 25
    label: "Prix"                                                                                                   // 26
  },                                                                                                                //
  contact: {                                                                                                        // 28
    type: String,                                                                                                   // 29
    label: "L'adresse mail à laquelle vous voulez être contacté"                                                    // 30
  },                                                                                                                //
  remarque: {                                                                                                       // 32
    type: String,                                                                                                   // 33
    label: "Remarque",                                                                                              // 34
    optional: true,                                                                                                 // 35
    max: 1000                                                                                                       // 36
  }                                                                                                                 //
}));                                                                                                                //
                                                                                                                    //
// Toute cette partie contient du code lié au LOGIN                                                                 //
                                                                                                                    //
_templating.Template.signup.events({                                                                                // 43
  'submit form': function () {                                                                                      // 44
    function submitForm(event, template) {                                                                          //
      event.preventDefault(); // création d'un event lorsque l'utilisateur soumet sa demande de création de compte  // 45
                                                                                                                    //
      var user = {                                                                                                  // 44
        email: template.find('[name="emailAddress"]').value,                                                        // 48
        password: template.find('[name="password"]').value                                                          // 49
      }; // récupération de l'email de l'utilisateur demandant la création de compte                                //
                                                                                                                    //
      Accounts.createUser(user, function (error) {                                                                  // 44
        if (error) {                                                                                                // 53
          Bert.alert(error.reason, 'danger');                                                                       // 54
        } else {                                                                                                    //
          Meteor.call('sendVerificationLink', function (error, response) {                                          // 56
            if (error) {                                                                                            // 57
              Bert.alert(error.reason, 'danger');                                                                   // 58
            } else {                                                                                                //
              Bert.alert('Bienvenue!', 'success');                                                                  // 60
            }                                                                                                       //
          });                                                                                                       //
        }                                                                                                           //
      });                                                                                                           //
    }                                                                                                               //
                                                                                                                    //
    return submitForm;                                                                                              //
  }()                                                                                                               //
}); // Génère des alertes grâce à Bert en fonction des données entrées par l'utilisateur (mauvais mdp, email. etc.)
                                                                                                                    //
// Rechercher une annonce                                                                                           //
_templating.Template.index.events({                                                                                 // 70
  'click .resend-verification-link': function () {                                                                  // 71
    function clickResendVerificationLink(event, template) {                                                         //
      Meteor.call('sendVerificationLink', function (error, response) {                                              // 72
        if (error) {                                                                                                // 73
          Bert.alert(error.reason, 'danger');                                                                       // 74
        } else {                                                                                                    //
          var email = Meteor.user().emails[0].address;                                                              // 76
          Bert.alert('Vérification envoyée à ' + email + '!', 'success');                                           // 77
        }                                                                                                           //
      });                                                                                                           //
    }                                                                                                               //
                                                                                                                    //
    return clickResendVerificationLink;                                                                             //
  }()                                                                                                               //
}); // lien pour renvoyé un mail de vérification au format alerte Bert                                              //
                                                                                                                    //
FlowRouter.route('/verify-email/:token', {                                                                          // 83
  name: 'verify-email',                                                                                             // 84
  action: function () {                                                                                             // 85
    function action(params) {                                                                                       //
      Accounts.verifyEmail(params.token, function (error) {                                                         // 86
        if (error) {                                                                                                // 87
          Bert.alert(error.reason, 'danger');                                                                       // 88
        } else {                                                                                                    //
          FlowRouter.go('/');                                                                                       // 90
          Bert.alert('Vérification réussie! Merci et bonne visite!', 'success');                                    // 91
        }                                                                                                           //
      });                                                                                                           //
    }                                                                                                               //
                                                                                                                    //
    return action;                                                                                                  //
  }()                                                                                                               //
}); // Création du routing de vérification grâce à Flowrouter.                                                      //
                                                                                                                    //
// Fin de la partie LOGIN                                                                                           //
                                                                                                                    //
_templating.Template.body.helpers({                                                                                 // 99
  // définit le contexte de résultats                                                                               //
  'result': function () {                                                                                           // 101
    function result() {                                                                                             // 101
      var listRes = Session.get('selectedbook');                                                                    // 102
      console.log(listRes);                                                                                         // 103
      Session.set('listResult', listRes);                                                                           // 104
      return listRes;                                                                                               // 105
    }                                                                                                               //
                                                                                                                    //
    return result;                                                                                                  //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.resultat.helpers({                                                                             // 109
  'selectedClass': function () {                                                                                    // 110
    function selectedClass() {                                                                                      // 110
      var bookChoisi = this.id;                                                                                     // 111
      var livreclicked = Session.get('livreclicked', bookChoisi);                                                   // 112
      if (bookChoisi == livreclicked) {                                                                             // 113
        return "selected";                                                                                          // 114
      }                                                                                                             //
    }                                                                                                               //
                                                                                                                    //
    return selectedClass;                                                                                           //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.ajout.events({                                                                                 // 120
  'click .SearchIPA': function () {                                                                                 // 121
    function clickSearchIPA() {                                                                                     // 121
      var infolivre = document.forms['searchitem'].champinfo.value;                                                 // 122
      var stringsearch = "https://www.googleapis.com/books/v1/volumes?q=search+" + infolivre;                       // 123
      //   alert("requête envoyée: "+stringsearch);                                                                 //
      var data;                                                                                                     // 121
      $.get(stringsearch, function (data) {                                                                         // 126
        // alert("Données reçues: "+data);                                                                          //
        Session.set('selectedbook', data.items);                                                                    // 128
      });                                                                                                           //
    }                                                                                                               //
                                                                                                                    //
    return clickSearchIPA;                                                                                          //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.resultat.events({                                                                              // 133
  'click .book': function () {                                                                                      // 134
    function clickBook() {                                                                                          // 134
      var bookChoisi = this.id;                                                                                     // 135
      console.log(bookChoisi);                                                                                      // 136
      Session.set('livreclicked', bookChoisi);                                                                      // 137
    }                                                                                                               //
                                                                                                                    //
    return clickBook;                                                                                               //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.body.events({                                                                                  // 141
  'click .AddAnnonce': function () {                                                                                // 142
    function clickAddAnnonce() {                                                                                    // 142
      var chain = $("#koala").html();                                                                               // 143
      console.log(chain);                                                                                           // 144
      chain = chain.split(/<br>/);                                                                                  // 145
      console.log(chain);                                                                                           // 146
      var tit = chain[0];                                                                                           // 147
      var aut = chain[1];                                                                                           // 148
      var img = chain[2];                                                                                           // 149
      var rem = document.forms['ad'].com.value;                                                                     // 150
      var price = document.forms['ad'].price.value;                                                                 // 151
      var cont = document.forms['ad'].cont.value;                                                                   // 152
      AnnonceList.insert({                                                                                          // 153
        title: chain[0],                                                                                            // 155
        author: chain[1],                                                                                           // 156
        prix: price,                                                                                                // 157
        contact: cont,                                                                                              // 158
        remarque: rem                                                                                               // 159
                                                                                                                    //
      });                                                                                                           //
    }                                                                                                               //
                                                                                                                    //
    return clickAddAnnonce;                                                                                         //
  }()                                                                                                               //
});                                                                                                                 //
// code nous permettant de stocker n'importe quoi sur ce template                                                   //
_templating.Template.search.onCreated(function () {                                                                 // 166
  var template = _templating.Template.instance();                                                                   // 167
                                                                                                                    //
  template.searchQuery = new _reactiveVar.ReactiveVar(); //permet d'afficher la valeur la plus récente              // 169
  template.searching = new _reactiveVar.ReactiveVar(false);                                                         // 166
                                                                                                                    //
  template.autorun(function () {                                                                                    // 172
    template.subscribe('annonce', template.searchQuery.get(), function () {                                         // 173
      //searchQuery nous permet de retenir la valeur qui a été placée dans la barre de recherche                    //
      setTimeout(function () {                                                                                      // 174
        template.searching.set(false);                                                                              // 175
      }, 300);                                                                                                      //
    });                                                                                                             //
  });                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.search.helpers({                                                                               // 181
  searching: function () {                                                                                          // 182
    function searching() {                                                                                          //
      return _templating.Template.instance().searching.get();                                                       // 183
    }                                                                                                               //
                                                                                                                    //
    return searching;                                                                                               //
  }(),                                                                                                              //
  query: function () {                                                                                              // 185
    function query() {                                                                                              //
      return _templating.Template.instance().searchQuery.get();                                                     // 186
    }                                                                                                               //
                                                                                                                    //
    return query;                                                                                                   //
  }(),                                                                                                              //
  book: function () {                                                                                               // 188
    function book() {                                                                                               //
      var annonce = AnnonceList.find();                                                                             // 189
      if (annonce) {                                                                                                // 190
        return annonce;                                                                                             // 191
      }                                                                                                             //
    }                                                                                                               //
                                                                                                                    //
    return book;                                                                                                    //
  }()                                                                                                               //
});                                                                                                                 //
                                                                                                                    //
_templating.Template.search.events({                                                                                // 196
  'keyup [name="search"]': function () {                                                                            // 197
    function keyupNameSearch(event, template) {                                                                     //
      var value = event.target.value.trim();                                                                        // 198
                                                                                                                    //
      if (value !== '' && event.keyCode === 13) {                                                                   // 200
        template.searchQuery.set(value);                                                                            // 201
        template.searching.set(true);                                                                               // 202
      }                                                                                                             //
                                                                                                                    //
      if (value === '') {                                                                                           // 205
        template.searchQuery.set(value);                                                                            // 206
      }                                                                                                             //
    }                                                                                                               //
                                                                                                                    //
    return keyupNameSearch;                                                                                         //
  }()                                                                                                               //
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/main.js");