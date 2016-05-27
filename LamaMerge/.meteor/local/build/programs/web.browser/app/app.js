var require = meteorInstall({"client":{"main.html":["./template.main.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.html                                                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.main.js");                                                                     // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/template.main.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.body.addContent((function() {                                                                              // 2
  var view = this;                                                                                                  // 3
  return [ Spacebars.include(view.lookupTemplate("accueil")), "\n\n  ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n  \n  ", Blaze.Unless(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("currentUser"), "emails", "0", "verified"));                    // 5
  }, function() {                                                                                                   // 6
    return "\n  ";                                                                                                  // 7
  }), " \n\n\n  ", Blaze.Unless(function() {                                                                        // 8
    return Spacebars.call(Spacebars.dot(view.lookup("currentUser"), "emails", "0", "verified"));                    // 9
  }, function() {                                                                                                   // 10
    return [ "\n  ", Spacebars.include(view.lookupTemplate("index")), "\n  " ];                                     // 11
  }, function() {                                                                                                   // 12
    return [ " \n", HTML.P("----------------------------------"), "\n  ", Spacebars.include(view.lookupTemplate("rechercheAnnonce")), "\n", HTML.P("----------------------------------"), "\n  ", HTML.H2("Insert:"), "\n  ", HTML.Comment("{{> creer_annonce}}"), "\n  ", Spacebars.include(view.lookupTemplate("insertAnnonceForm")), "\n", HTML.P("----------------------------------"), "\n", HTML.Comment("  <h2>Update:</h2>\n  {{> updateAnnonceForm}}\n"), "\n", HTML.P("**********************************"), "\n  ", Spacebars.include(view.lookupTemplate("ajout")), "\n  ", HTML.BR(), HTML.BR(), HTML.BR(), "\n  ", HTML.UL("\n    ", HTML.FORM({
      name: "ad"                                                                                                    // 14
    }, "\n      ", HTML.INPUT({                                                                                     // 15
      type: "number",                                                                                               // 16
      name: "price",                                                                                                // 17
      placeholder: "Prix"                                                                                           // 18
    }), "\n      ", HTML.INPUT({                                                                                    // 19
      type: "text",                                                                                                 // 20
      name: "com",                                                                                                  // 21
      placeholder: "Remarque"                                                                                       // 22
    }), "\n      ", HTML.INPUT({                                                                                    // 23
      type: "text",                                                                                                 // 24
      name: "cont",                                                                                                 // 25
      placeholder: "Adresse de contact"                                                                             // 26
    }), "\n      ", HTML.INPUT({                                                                                    // 27
      type: "button",                                                                                               // 28
      "class": "AddAnnonce",                                                                                        // 29
      value: "Ajouter l'annonce"                                                                                    // 30
    }), "\n      \n  "), "\n    ", Blaze.Each(function() {                                                          // 31
      return Spacebars.call(view.lookup("result"));                                                                 // 32
    }, function() {                                                                                                 // 33
      return [ "\n      ", Spacebars.include(view.lookupTemplate("resultat")), "\n    " ];                          // 34
    }), "\n  "), "\n", HTML.P("**********************************"), "\n  " ];                                      // 35
  }) ];                                                                                                             // 36
}));                                                                                                                // 37
Meteor.startup(Template.body.renderToDocument);                                                                     // 38
                                                                                                                    // 39
Template.__checkName("accueil");                                                                                    // 40
Template["accueil"] = new Template("Template.accueil", (function() {                                                // 41
  var view = this;                                                                                                  // 42
  return HTML.Raw("<h1>Bienvenue sur l'app LAMA</h1>");                                                             // 43
}));                                                                                                                // 44
                                                                                                                    // 45
Template.__checkName("signup");                                                                                     // 46
Template["signup"] = new Template("Template.signup", (function() {                                                  // 47
  var view = this;                                                                                                  // 48
  return HTML.Raw('<div class="row">\n    <div class="col-xs-12 col-sm-6 col-md-4">\n      <h4 class="page-header">Création de compte</h4>\n      <form id="signup" class="signup">\n        <div class="form-group">\n          <label for="emailAddress">Email Address</label>\n          <input type="email" name="emailAddress" class="form-control" placeholder="Email Address">\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" name="password" class="form-control" placeholder="Password">\n        </div>\n        <div class="form-group">\n          <input type="submit" class="btn btn-success" value="Créer le compte">\n        </div>\n      </form>\n    </div>\n  </div>');
}));                                                                                                                // 50
                                                                                                                    // 51
Template.__checkName("index");                                                                                      // 52
Template["index"] = new Template("Template.index", (function() {                                                    // 53
  var view = this;                                                                                                  // 54
  return HTML.Raw('<p class="alert alert-warning">Vous devez procéder à la vérification de compte via le lien envoyé automatiquement à l\'adresse email que vous avez spécifiée avant de pouvoir utiliser Unibooks. <a href="#" class="resend-verification-link">Renvoyer le lien de vérification</a>.</p>');
}));                                                                                                                // 56
                                                                                                                    // 57
Template.__checkName("ajout");                                                                                      // 58
Template["ajout"] = new Template("Template.ajout", (function() {                                                    // 59
  var view = this;                                                                                                  // 60
  return HTML.Raw('<p>Rechercher un livre:</p>\n  <form name="searchitem">\n    Entrer l\'ISBN, le titre du livre ou l\'auteur: <input type="text" name="champinfo">\n    <input type="button" class="SearchIPA" name="infolivre" value="Search in Google IPA">\n  </form>');
}));                                                                                                                // 62
                                                                                                                    // 63
Template.__checkName("resultat");                                                                                   // 64
Template["resultat"] = new Template("Template.resultat", (function() {                                              // 65
  var view = this;                                                                                                  // 66
  return HTML.LI({                                                                                                  // 67
    id: "koala",                                                                                                    // 68
    "class": function() {                                                                                           // 69
      return [ "book ", Spacebars.mustache(view.lookup("selectedClass")) ];                                         // 70
    }                                                                                                               // 71
  }, Blaze.View("lookup:volumeInfo.title", function() {                                                             // 72
    return Spacebars.mustache(Spacebars.dot(view.lookup("volumeInfo"), "title"));                                   // 73
  }), HTML.Raw("<br>"), Blaze.View("lookup:volumeInfo.authors", function() {                                        // 74
    return Spacebars.mustache(Spacebars.dot(view.lookup("volumeInfo"), "authors"));                                 // 75
  }), HTML.Raw("<br>"), HTML.IMG({                                                                                  // 76
    src: function() {                                                                                               // 77
      return Spacebars.mustache(Spacebars.dot(view.lookup("volumeInfo"), "imageLinks", "thumbnail"));               // 78
    },                                                                                                              // 79
    alt: "Image non disponible"                                                                                     // 80
  }), "\n    ");                                                                                                    // 81
}));                                                                                                                // 82
                                                                                                                    // 83
Template.__checkName("insertAnnonceForm");                                                                          // 84
Template["insertAnnonceForm"] = new Template("Template.insertAnnonceForm", (function() {                            // 85
  var view = this;                                                                                                  // 86
  return Blaze._TemplateWith(function() {                                                                           // 87
    return {                                                                                                        // 88
      collection: Spacebars.call("AnnonceList"),                                                                    // 89
      id: Spacebars.call("insertAnnonceForm"),                                                                      // 90
      type: Spacebars.call("insert")                                                                                // 91
    };                                                                                                              // 92
  }, function() {                                                                                                   // 93
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                     // 94
  });                                                                                                               // 95
}));                                                                                                                // 96
                                                                                                                    // 97
Template.__checkName("rechercheAnnonce");                                                                           // 98
Template["rechercheAnnonce"] = new Template("Template.rechercheAnnonce", (function() {                              // 99
  var view = this;                                                                                                  // 100
  return HTML.Raw('<p>Rechercher un livre:</p>\n<form>\n<input type="text" placeholder="Entrez le nom de l\'auteur ou du livre"><br>\n<input type="button" value="Rechercher"><br>\n</form>');
}));                                                                                                                // 102
                                                                                                                    // 103
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","meteor/mongo","./main.html",function(require){

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
                                                                                                                    //
/*                                                                                                                  //
Template.rechercheAnnonce.events({                                                                                  //
  'submit Rechercher' (event, template) {                                                                           //
    event.preventDefault();                                                                                         //
                                                                                                                    //
    let user = {                                                                                                    //
      var a: template.find( '[name="author"]' ).value,                                                              //
      var b: template.find( '[name="title"]' ).value                                                                //
    };                                                                                                              //
console.log(AnnonceList.find({$or:[{"author":"a"},{"title":"b"}]}).fetch());}});                                    //
// Afficher annonces par utilisateur                                                                                //
var username = Meteor.userId();                                                                                     //
console.log(AnnonceList.find(username));                                                                            //
Template.body.helpers({                                                                                             //
  AnnonceList() {                                                                                                   //
    return AnnonceList.find({});                                                                                    //
  }                                                                                                                 //
});                                                                                                                 //
*/                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./client/main.js");