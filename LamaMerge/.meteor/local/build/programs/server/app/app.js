var require = meteorInstall({"server":{"main.js":["meteor/meteor",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// server/main.js                                                                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _meteor = require("meteor/meteor");                                                                  // 1
                                                                                                         //
_meteor.Meteor.startup(function () {                                                                     // 3
  // code to run on server at startup                                                                    //
});                                                                                                      //
                                                                                                         //
_meteor.Meteor.startup(function () {                                                                     // 7
  process.env.MAIL_URL = "smtp://postmaster%40sandboxa02d0e41cae7443fbe64c29545e8a256.mailgun.org:0448f718cfdda8a1ef3b3cfb0f55b165@smtp.mailgun.org:587";
}); // Serveur d'envoi Mailgun                                                                           //
                                                                                                         //
Accounts.config({ sendVerificationEmail: true, forbidClientAccountCreation: false }); // Autorisation de la vérification par mail dans Account.config du package Account-UI
                                                                                                         //
_meteor.Meteor.methods({                                                                                 // 15
  sendVerificationLink: function () {                                                                    // 16
    function sendVerificationLink() {                                                                    //
      var userId = _meteor.Meteor.userId();                                                              // 17
      if (userId) {                                                                                      // 18
        return Accounts.sendVerificationEmail(userId);                                                   // 19
      }                                                                                                  //
    }                                                                                                    //
                                                                                                         //
    return sendVerificationLink;                                                                         //
  }()                                                                                                    //
}); // récupération du mail utilisé en login pour l'envoi mail                                           //
                                                                                                         //
Accounts.emailTemplates.siteName = "UniBooks";                                                           // 25
Accounts.emailTemplates.from = "UniBooks <admin@unibooks.com>";                                          // 26
                                                                                                         //
Accounts.emailTemplates.verifyEmail = {                                                                  // 28
  subject: function () {                                                                                 // 29
    function subject() {                                                                                 //
      return "[UniBooks] Verify Your Email Address";                                                     // 30
    }                                                                                                    //
                                                                                                         //
    return subject;                                                                                      //
  }(),                                                                                                   //
  text: function () {                                                                                    // 32
    function text(user, url) {                                                                           //
      var emailAddress = user.emails[0].address,                                                         // 33
          urlWithoutHash = url.replace('#/', ''),                                                        //
          supportEmail = "support@unibooks.com",                                                         //
          emailBody = "To verify your email address (" + emailAddress + ") visit the following link:\n\n" + urlWithoutHash + "\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: " + supportEmail + ".";
                                                                                                         //
      return emailBody;                                                                                  // 38
    }                                                                                                    //
                                                                                                         //
    return text;                                                                                         //
  }()                                                                                                    //
}; // Paramétrage de l'email envoyé (Adresse d'envoi, sujet, objet, contenu texte + URL de vérification)
                                                                                                         //
FlowRouter.route('/verify-email/:token', {                                                               // 42
  name: 'verify-email',                                                                                  // 43
  action: function () {                                                                                  // 44
    function action(params) {                                                                            //
      Accounts.verifyEmail(params.token, function (error) {                                              // 45
        if (error) {                                                                                     // 46
          Bert.alert(error.reason, 'danger');                                                            // 47
        } else {                                                                                         //
          FlowRouter.go('/');                                                                            // 49
          Bert.alert('Email verified! Thanks!', 'success');                                              // 50
        }                                                                                                //
      });                                                                                                //
    }                                                                                                    //
                                                                                                         //
    return action;                                                                                       //
  }()                                                                                                    //
}); // création d'une route Flowrouter pour la vérification du lien (vérification booléenne du login)    //
                                                                                                         //
Accounts.config({ restrictCreationByEmailDomain: 'unil.ch' }); // restriction du domaine mail            // 58
                                                                                                         //
AnnonceList = new Mongo.Collection('annonce');                                                           // 61
                                                                                                         //
//package Collection2 pour la structure de la DB --> je vais encore le changer pour que ça corresponde à ce qu'on avait dit (c'était juste pour tester)
AnnonceList.attachSchema(new SimpleSchema({                                                              // 64
  title: {                                                                                               // 65
    type: String,                                                                                        // 66
    label: "Titre"                                                                                       // 67
  },                                                                                                     //
  author: {                                                                                              // 69
    type: String,                                                                                        // 70
    label: "Auteur"                                                                                      // 71
  },                                                                                                     //
  isbn: {                                                                                                // 73
    type: String,                                                                                        // 74
    label: "ISBN",                                                                                       // 75
    max: 17,                                                                                             // 76
    min: 17,                                                                                             // 77
    optional: true                                                                                       // 78
  },                                                                                                     //
  prix: {                                                                                                // 80
    type: Number,                                                                                        // 81
    label: "Prix"                                                                                        // 82
  },                                                                                                     //
  contact: {                                                                                             // 84
    type: String,                                                                                        // 85
    label: "L'adresse mail à laquelle vous voulez être connecté"                                         // 86
  },                                                                                                     //
  remarque: {                                                                                            // 88
    type: String,                                                                                        // 89
    label: "Remarque",                                                                                   // 90
    optional: true,                                                                                      // 91
    max: 1000                                                                                            // 92
  }                                                                                                      //
}));                                                                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
