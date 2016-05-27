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
  return HTML.DIV({                                                                                                 // 4
    "class": "container-fluid"                                                                                      // 5
  }, "\n\n  ", Spacebars.include(view.lookupTemplate("accueil")), "\n\n  ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n  \n  ", Blaze.Unless(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("currentUser"), "emails", "0", "verified"));                    // 7
  }, function() {                                                                                                   // 8
    return "\n  ";                                                                                                  // 9
  }), " \n\n\n  ", Blaze.Unless(function() {                                                                        // 10
    return Spacebars.call(Spacebars.dot(view.lookup("currentUser"), "emails", "0", "verified"));                    // 11
  }, function() {                                                                                                   // 12
    return [ "\n  ", Spacebars.include(view.lookupTemplate("index")), "\n  " ];                                     // 13
  }, function() {                                                                                                   // 14
    return [ " \n", HTML.P("----------------------------------"), "\n  ", Spacebars.include(view.lookupTemplate("rechercheAnnonce")), "\n", HTML.P("----------------------------------"), "\n\n", HTML.DIV({
      "class": "row"                                                                                                // 16
    }, "\n", HTML.DIV({                                                                                             // 17
      "class": "col-md-4"                                                                                           // 18
    }, "\n", HTML.P("----------------------------------"), "\n  ", Spacebars.include(view.lookupTemplate("affichage_annonce")), "\n  "), "\n  "), "\n  \n  ", HTML.P("----------------------------------"), "\n  ", HTML.DIV({
      "class": "row"                                                                                                // 20
    }, "\n", HTML.DIV({                                                                                             // 21
      "class": "col-md-3"                                                                                           // 22
    }, "\n  ", HTML.H2("Insert:"), "\n  ", HTML.Comment("{{> creer_annonce}}"), "\n\n  ", Spacebars.include(view.lookupTemplate("insertAnnonceForm")), "\n  "), "\n  "), "\n\n", HTML.P("----------------------------------"), "\n\n\n", HTML.Comment("  <h2>Update:</h2>\n  {{> updateAnnonceForm}}\n"), "\n", HTML.P("**********************************"), "\n  ", Spacebars.include(view.lookupTemplate("ajout")), "\n  ", HTML.BR(), HTML.BR(), HTML.BR(), "\n\n  ", Spacebars.include(view.lookupTemplate("fieldsafterchoice")), "\n  " ];
  }), "\n   ", Blaze.Each(function() {                                                                              // 24
    return Spacebars.call(view.lookup("result"));                                                                   // 25
  }, function() {                                                                                                   // 26
    return [ "\n      ", Spacebars.include(view.lookupTemplate("resultat")), "\n    " ];                            // 27
  }), "\n  ");                                                                                                      // 28
}));                                                                                                                // 29
Meteor.startup(Template.body.renderToDocument);                                                                     // 30
                                                                                                                    // 31
Template.__checkName("accueil");                                                                                    // 32
Template["accueil"] = new Template("Template.accueil", (function() {                                                // 33
  var view = this;                                                                                                  // 34
  return HTML.Raw("<h1>Bienvenue sur UniBooks</h1>");                                                               // 35
}));                                                                                                                // 36
                                                                                                                    // 37
Template.__checkName("signup");                                                                                     // 38
Template["signup"] = new Template("Template.signup", (function() {                                                  // 39
  var view = this;                                                                                                  // 40
  return HTML.Raw('<div class="row">\n    <div class="col-xs-12 col-sm-6 col-md-4">\n      <h4 class="page-header">Création de compte</h4>\n      <form id="signup" class="signup">\n        <div class="form-group">\n          <label for="emailAddress">Adresse Email</label>\n          <input type="email" name="emailAddress" class="form-control" value="@unil.ch">\n        </div>\n        <div class="form-group">\n          <label for="password">Mot de passe</label>\n          <input type="password" name="password" class="form-control" placeholder="Mot de passe">\n        </div>\n        <div class="form-group">\n          <input type="submit" class="btn btn-success" value="Créer le compte">\n        </div>\n      </form>\n    </div>\n  </div>');
}));                                                                                                                // 42
                                                                                                                    // 43
Template.__checkName("index");                                                                                      // 44
Template["index"] = new Template("Template.index", (function() {                                                    // 45
  var view = this;                                                                                                  // 46
  return HTML.Raw('<p class="alert alert-warning">Vous devez procéder à la vérification de compte via le lien envoyé automatiquement à l\'adresse email que vous avez spécifiée avant de pouvoir utiliser UniBooks. <a href="#" class="resend-verification-link">Renvoyer le lien de vérification</a>.</p>');
}));                                                                                                                // 48
                                                                                                                    // 49
Template.__checkName("ajout");                                                                                      // 50
Template["ajout"] = new Template("Template.ajout", (function() {                                                    // 51
  var view = this;                                                                                                  // 52
  return HTML.Raw('<p>Rechercher un livre:</p>\n  <form name="searchitem">\n    Entrer l\'ISBN, le titre du livre ou l\'auteur: <input type="text" name="champinfo">\n    <input type="button" class="SearchIPA" name="infolivre" value="Search in Google IPA">\n  </form>');
}));                                                                                                                // 54
                                                                                                                    // 55
Template.__checkName("resultat");                                                                                   // 56
Template["resultat"] = new Template("Template.resultat", (function() {                                              // 57
  var view = this;                                                                                                  // 58
  return HTML.LI({                                                                                                  // 59
    id: "koala",                                                                                                    // 60
    "class": function() {                                                                                           // 61
      return [ "book ", Spacebars.mustache(view.lookup("selectedClass")) ];                                         // 62
    }                                                                                                               // 63
  }, Blaze.View("lookup:volumeInfo.title", function() {                                                             // 64
    return Spacebars.mustache(Spacebars.dot(view.lookup("volumeInfo"), "title"));                                   // 65
  }), HTML.Raw("<br>"), Blaze.View("lookup:volumeInfo.authors", function() {                                        // 66
    return Spacebars.mustache(Spacebars.dot(view.lookup("volumeInfo"), "authors"));                                 // 67
  }), HTML.Raw("<br>"), HTML.IMG({                                                                                  // 68
    src: function() {                                                                                               // 69
      return Spacebars.mustache(Spacebars.dot(view.lookup("volumeInfo"), "imageLinks", "thumbnail"));               // 70
    },                                                                                                              // 71
    alt: "Image non disponible"                                                                                     // 72
  }), "\n    ");                                                                                                    // 73
}));                                                                                                                // 74
                                                                                                                    // 75
Template.__checkName("insertAnnonceForm");                                                                          // 76
Template["insertAnnonceForm"] = new Template("Template.insertAnnonceForm", (function() {                            // 77
  var view = this;                                                                                                  // 78
  return Blaze._TemplateWith(function() {                                                                           // 79
    return {                                                                                                        // 80
      collection: Spacebars.call("AnnonceList"),                                                                    // 81
      id: Spacebars.call("insertAnnonceForm"),                                                                      // 82
      type: Spacebars.call("insert")                                                                                // 83
    };                                                                                                              // 84
  }, function() {                                                                                                   // 85
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                     // 86
  });                                                                                                               // 87
}));                                                                                                                // 88
                                                                                                                    // 89
Template.__checkName("rechercheAnnonce");                                                                           // 90
Template["rechercheAnnonce"] = new Template("Template.rechercheAnnonce", (function() {                              // 91
  var view = this;                                                                                                  // 92
  return HTML.Raw('<p>Rechercher un livre:</p>\n<form>\n<input type="text" placeholder="Entrez le nom de l\'auteur ou du livre"><br>\n<input type="button" value="Rechercher"><br>\n</form>');
}));                                                                                                                // 94
                                                                                                                    // 95
Template.__checkName("affichage_annonce");                                                                          // 96
Template["affichage_annonce"] = new Template("Template.affichage_annonce", (function() {                            // 97
  var view = this;                                                                                                  // 98
  return HTML.Raw('<h2>Quelques annonces du moment...</h2>\n  <ul class="list-group">\n    <li class="list-group-item">\n      <h3>Annonce 1</h3>\n      <div>Prix</div>\n    </li>\n    <li class="list-group-item">\n      <h3>Annonce 2</h3>\n      <div>Prix</div> \n    </li>\n    <li class="list-group-item">\n      <h3>Annonce 3</h3>\n      <div>Prix</div> \n    </li>\n  </ul>');
}));                                                                                                                // 100
                                                                                                                    // 101
Template.__checkName("fieldsafterchoice");                                                                          // 102
Template["fieldsafterchoice"] = new Template("Template.fieldsafterchoice", (function() {                            // 103
  var view = this;                                                                                                  // 104
  return HTML.Raw('<h2>Entrez les informations de votre offre</h2>\n	\n    <form name="ad">\n	    <div class="form-group">\n		    <label for="price">Prix</label>\n		    <input type="number" name="price" placeholder="Prix">\n		</div>\n		<div class="form-group">\n		    <label for="price">Remarques</label>\n	      	<input type="text" name="com" placeholder="Etat, annoté, ...">\n	    </div>	\n	    <div class="form-group">\n	    	<label for="price">Adresse de contact</label>\n	     	<input type="text" name="cont" placeholder="Adresse Unil non-requise">\n	      </div>\n	      <button type="submit" class="AddAnnonce btn btn-primary">Ajouter l\'annonce </button>  \n  </form>');
}));                                                                                                                // 106
                                                                                                                    // 107
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