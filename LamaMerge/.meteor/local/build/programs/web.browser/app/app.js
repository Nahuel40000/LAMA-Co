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
    return [ " \n", HTML.P("----------------------------------"), "\n  ", Spacebars.include(view.lookupTemplate("search")), "\n", HTML.P("----------------------------------"), "\n", Blaze.View("lookup:Mes", function() {
      return Spacebars.mustache(view.lookup("Mes"), view.lookup("annonces"));                                       // 14
    }), "\n  ", HTML.H2("Insert:"), "\n  ", HTML.Comment("{{> creer_annonce}}"), "\n  ", Spacebars.include(view.lookupTemplate("insertAnnonceForm")), "\n", HTML.P("----------------------------------"), "\n", HTML.Comment("  <h2>Update:</h2>\n  {{> updateAnnonceForm}}\n"), "\n", HTML.P("**********************************"), "\n  ", Spacebars.include(view.lookupTemplate("ajout")), "\n  ", HTML.BR(), HTML.BR(), HTML.BR(), "\n  ", HTML.UL("\n    ", HTML.FORM({
      name: "ad"                                                                                                    // 16
    }, "\n      ", HTML.INPUT({                                                                                     // 17
      type: "number",                                                                                               // 18
      name: "price",                                                                                                // 19
      placeholder: "Prix"                                                                                           // 20
    }), "\n      ", HTML.INPUT({                                                                                    // 21
      type: "text",                                                                                                 // 22
      name: "com",                                                                                                  // 23
      placeholder: "Remarque"                                                                                       // 24
    }), "\n      ", HTML.INPUT({                                                                                    // 25
      type: "text",                                                                                                 // 26
      name: "cont",                                                                                                 // 27
      placeholder: "Adresse de contact"                                                                             // 28
    }), "\n      ", HTML.INPUT({                                                                                    // 29
      type: "button",                                                                                               // 30
      "class": "AddAnnonce",                                                                                        // 31
      value: "Ajouter l'annonce"                                                                                    // 32
    }), "\n      \n  "), "\n    ", Blaze.Each(function() {                                                          // 33
      return Spacebars.call(view.lookup("result"));                                                                 // 34
    }, function() {                                                                                                 // 35
      return [ "\n      ", Spacebars.include(view.lookupTemplate("resultat")), "\n    " ];                          // 36
    }), "\n  "), "\n", HTML.P("**********************************"), "\n  " ];                                      // 37
  }) ];                                                                                                             // 38
}));                                                                                                                // 39
Meteor.startup(Template.body.renderToDocument);                                                                     // 40
                                                                                                                    // 41
Template.__checkName("accueil");                                                                                    // 42
Template["accueil"] = new Template("Template.accueil", (function() {                                                // 43
  var view = this;                                                                                                  // 44
  return HTML.Raw("<h1>Bienvenue sur l'app LAMA</h1>");                                                             // 45
}));                                                                                                                // 46
                                                                                                                    // 47
Template.__checkName("signup");                                                                                     // 48
Template["signup"] = new Template("Template.signup", (function() {                                                  // 49
  var view = this;                                                                                                  // 50
  return HTML.Raw('<div class="row">\n    <div class="col-xs-12 col-sm-6 col-md-4">\n      <h4 class="page-header">Création de compte</h4>\n      <form id="signup" class="signup">\n        <div class="form-group">\n          <label for="emailAddress">Email Address</label>\n          <input type="email" name="emailAddress" class="form-control" placeholder="Email Address">\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" name="password" class="form-control" placeholder="Password">\n        </div>\n        <div class="form-group">\n          <input type="submit" class="btn btn-success" value="Créer le compte">\n        </div>\n      </form>\n    </div>\n  </div>');
}));                                                                                                                // 52
                                                                                                                    // 53
Template.__checkName("index");                                                                                      // 54
Template["index"] = new Template("Template.index", (function() {                                                    // 55
  var view = this;                                                                                                  // 56
  return HTML.Raw('<p class="alert alert-warning">Vous devez procéder à la vérification de compte via le lien envoyé automatiquement à l\'adresse email que vous avez spécifiée avant de pouvoir utiliser Unibooks. <a href="#" class="resend-verification-link">Renvoyer le lien de vérification</a>.</p>');
}));                                                                                                                // 58
                                                                                                                    // 59
Template.__checkName("ajout");                                                                                      // 60
Template["ajout"] = new Template("Template.ajout", (function() {                                                    // 61
  var view = this;                                                                                                  // 62
  return HTML.Raw('<p>Rechercher un livre:</p>\n  <form name="searchitem">\n    Entrer l\'ISBN, le titre du livre ou l\'auteur: <input type="text" name="champinfo">\n    <input type="button" class="SearchIPA" name="infolivre" value="Search in Google IPA">\n  </form>');
}));                                                                                                                // 64
                                                                                                                    // 65
Template.__checkName("resultat");                                                                                   // 66
Template["resultat"] = new Template("Template.resultat", (function() {                                              // 67
  var view = this;                                                                                                  // 68
  return HTML.LI({                                                                                                  // 69
    id: "koala",                                                                                                    // 70
    "class": function() {                                                                                           // 71
      return [ "book ", Spacebars.mustache(view.lookup("selectedClass")) ];                                         // 72
    }                                                                                                               // 73
  }, Blaze.View("lookup:volumeInfo.title", function() {                                                             // 74
    return Spacebars.mustache(Spacebars.dot(view.lookup("volumeInfo"), "title"));                                   // 75
  }), HTML.Raw("<br>"), Blaze.View("lookup:volumeInfo.authors", function() {                                        // 76
    return Spacebars.mustache(Spacebars.dot(view.lookup("volumeInfo"), "authors"));                                 // 77
  }), HTML.Raw("<br>"), HTML.IMG({                                                                                  // 78
    src: function() {                                                                                               // 79
      return Spacebars.mustache(Spacebars.dot(view.lookup("volumeInfo"), "imageLinks", "thumbnail"));               // 80
    },                                                                                                              // 81
    alt: "Image non disponible"                                                                                     // 82
  }), "\n    ");                                                                                                    // 83
}));                                                                                                                // 84
                                                                                                                    // 85
Template.__checkName("insertAnnonceForm");                                                                          // 86
Template["insertAnnonceForm"] = new Template("Template.insertAnnonceForm", (function() {                            // 87
  var view = this;                                                                                                  // 88
  return Blaze._TemplateWith(function() {                                                                           // 89
    return {                                                                                                        // 90
      collection: Spacebars.call("AnnonceList"),                                                                    // 91
      id: Spacebars.call("insertAnnonceForm"),                                                                      // 92
      type: Spacebars.call("insert")                                                                                // 93
    };                                                                                                              // 94
  }, function() {                                                                                                   // 95
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                     // 96
  });                                                                                                               // 97
}));                                                                                                                // 98
                                                                                                                    // 99
Template.__checkName("search");                                                                                     // 100
Template["search"] = new Template("Template.search", (function() {                                                  // 101
  var view = this;                                                                                                  // 102
  return HTML.DIV({                                                                                                 // 103
    "class": "page-header clearfix"                                                                                 // 104
  }, HTML.Raw('\n     <h4 class="pull-left">Rechercher une Annonce</h4>\n    '), HTML.DIV({                         // 105
    "class": "pull-right"                                                                                           // 106
  }, "\n      ", HTML.Raw('<input type="text" name="search" class="form-control" placeholder="Rechercher par titre ou par auteur">'), "\n\n  ", HTML.UL({
    "class": "list-group"                                                                                           // 108
  }, "\n    ", Blaze.If(function() {                                                                                // 109
    return Spacebars.call(view.lookup("searching"));                                                                // 110
  }, function() {                                                                                                   // 111
    return [ "\n      ", Spacebars.include(view.lookupTemplate("loading")), "\n    " ];                             // 112
  }, function() {                                                                                                   // 113
    return [ "\n      ", Blaze.Each(function() {                                                                    // 114
      return Spacebars.call(view.lookup("annonce"));                                                                // 115
    }, function() {                                                                                                 // 116
      return [ "\n        ", HTML.LI({                                                                              // 117
        "class": "list-group-item clearfix"                                                                         // 118
      }, "\n          ", HTML.SPAN({                                                                                // 119
        "class": "pull-left"                                                                                        // 120
      }, " ", Blaze.View("lookup:title", function() {                                                               // 121
        return Spacebars.mustache(view.lookup("title"));                                                            // 122
      }), " by ", Blaze.View("lookup:author", function() {                                                          // 123
        return Spacebars.mustache(view.lookup("author"));                                                           // 124
      })), "\n        "), "\n      " ];                                                                             // 125
    }, function() {                                                                                                 // 126
      return [ "\n        ", HTML.P({                                                                               // 127
        "class": "alert alert-warning"                                                                              // 128
      }, " Aucun résultat ", Blaze.View("lookup:query", function() {                                                // 129
        return Spacebars.mustache(view.lookup("query"));                                                            // 130
      }), "."), " ", HTML.Comment("alert disant que l'on a rien trouvé"), "\n      " ];                             // 131
    }), "\n    " ];                                                                                                 // 132
  }), "\n  ")));                                                                                                    // 133
}));                                                                                                                // 134
                                                                                                                    // 135
Template.__checkName("mesAnnonces");                                                                                // 136
Template["mesAnnonces"] = new Template("Template.mesAnnonces", (function() {                                        // 137
  var view = this;                                                                                                  // 138
  return HTML.Raw('<form>\n<input type="button" value="rechercherMesAnnonces"></form>');                            // 139
}));                                                                                                                // 140
                                                                                                                    // 141
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
require("./client/template.main.js");
require("./client/main.js");