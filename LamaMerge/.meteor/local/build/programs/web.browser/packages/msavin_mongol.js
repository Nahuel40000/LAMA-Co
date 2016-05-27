//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package.templating.Template;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysDict, Mongol, newId, self, MongolEditingStatus, Mongol_InlineEditor, current, content, DocumentPosition, CurrentCollection, a, b, MeteorToys_Sub, sessionKey, CollectionName, CollectionCount, CurrentDocument, DocumentID, ValidatedCurrentDocument, list, docID, docIndex, currentDoc, newPosition;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/lib/common.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Grab the Dict                                                                                                       // 1
MeteorToysDict = Package["meteortoys:toykit"].MeteorToys;                                                              // 2
                                                                                                                       // 3
// Create object and reserve name across the package                                                                   // 4
if (Mongol === undefined) {                                                                                            // 5
  Mongol = {};                                                                                                         // 6
}                                                                                                                      // 7
                                                                                                                       // 8
Mongol = {                                                                                                             // 9
  'getDocumentUpdate': function (data) {                                                                               // 10
    var elementID = 'MongolDoc_' + data,                                                                               // 11
      newData = document.getElementById(elementID).textContent;                                                        // 12
                                                                                                                       // 13
    return newData;                                                                                                    // 14
  },                                                                                                                   // 15
  'error': function (data) {                                                                                           // 16
    switch (data) {                                                                                                    // 17
      case "json.parse":                                                                                               // 18
        alert("There is an error with your JSON syntax.\n\nNote: keys and string values need double quotes.");         // 19
        break;                                                                                                         // 20
      case "duplicate":                                                                                                // 21
        alert("Strange, there was an error duplicating your document.");                                               // 22
        break;                                                                                                         // 23
      case "remove":                                                                                                   // 24
        alert("Strange, there was an error removing your document.");                                                  // 25
        break;                                                                                                         // 26
      case "insert":                                                                                                   // 27
        alert("Strange, there was an error inserting your document.");                                                 // 28
        break;                                                                                                         // 29
      case "update":                                                                                                   // 30
        alert("There was an error updating your document. Please review your changes and try again.");                 // 31
        break;                                                                                                         // 32
      default:                                                                                                         // 33
        return "Unknown Error";                                                                                        // 34
        break;                                                                                                         // 35
    }                                                                                                                  // 36
  },                                                                                                                   // 37
  'parse': function (data) {                                                                                           // 38
      var newObject = null;                                                                                            // 39
      try {                                                                                                            // 40
        var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;                // 41
        var dateParser = function (key, value) {                                                                       // 42
          if (_.isString(value)) {                                                                                     // 43
            var a = reISO.exec(value);                                                                                 // 44
            if (a) {                                                                                                   // 45
              return new Date(value);                                                                                  // 46
            }                                                                                                          // 47
          }                                                                                                            // 48
          return value;                                                                                                // 49
        }                                                                                                              // 50
        newObject = JSON.parse(data, dateParser);                                                                      // 51
      }                                                                                                                // 52
      catch (error) {                                                                                                  // 53
        Mongol.error("json.parse");                                                                                    // 54
      }                                                                                                                // 55
      return newObject;                                                                                                // 56
  },                                                                                                                   // 57
  'detectCollections': function () {                                                                                   // 58
    if (MeteorToysDict.get('Mongol') === undefined) {                                                                  // 59
        // Note: this returns the actual mongo collection name                                                         // 60
        var collections = _.map(Mongo.Collection.getAll(), function (collection) {                                     // 61
        return collection.name;                                                                                        // 62
      });                                                                                                              // 63
                                                                                                                       // 64
      var defaults = {                                                                                                 // 65
        'collections': collections,                                                                                    // 66
      };                                                                                                               // 67
                                                                                                                       // 68
      MeteorToysDict.set("Mongol", defaults);                                                                          // 69
                                                                                                                       // 70
    }                                                                                                                  // 71
  },                                                                                                                   // 72
  'hideCollection': function (collectionName) {                                                                        // 73
                                                                                                                       // 74
    var MongolConfig = MeteorToysDict.get("Mongol"),                                                                   // 75
        collections  = MongolConfig.collections;                                                                       // 76
                                                                                                                       // 77
    collections = _.without(collections, collectionName);                                                              // 78
    MongolConfig.collections = collections;                                                                            // 79
    MeteorToysDict.set("Mongol", MongolConfig);                                                                        // 80
                                                                                                                       // 81
  },                                                                                                                   // 82
  'showCollection': function (collectionName) {                                                                        // 83
    // In case a collection does not get detected, like a local one                                                    // 84
    var MongolConfig = MeteorToysDict.get("Mongol"),                                                                   // 85
        collections  = MongolConfig.collections;                                                                       // 86
                                                                                                                       // 87
    collections.push(collectionName);                                                                                  // 88
                                                                                                                       // 89
    MeteorToysDict.set("Mongol", MongolConfig);                                                                        // 90
  },                                                                                                                   // 91
  'hideVelocity': function () {                                                                                        // 92
    this.hideCollection('velocityTestFiles');                                                                          // 93
    this.hideCollection('velocityFixtureFiles');                                                                       // 94
    this.hideCollection('velocityTestReports');                                                                        // 95
    this.hideCollection('velocityAggregateReports');                                                                   // 96
    this.hideCollection('velocityLogs');                                                                               // 97
    this.hideCollection('velocityMirrors');                                                                            // 98
    this.hideCollection('velocityOptions');                                                                            // 99
  },                                                                                                                   // 100
  'hideMeteorToys': function () {                                                                                      // 101
    this.hideCollection("MeteorToys.Impersonate");                                                                     // 102
    this.hideCollection("MeteorToys.JetSetter");                                                                       // 103
    this.hideCollection("MeteorToys.Mongol");                                                                          // 104
    this.hideCollection("MeteorToys.AutoPub");                                                                         // 105
    this.hideCollection("MeteorToys.Email");                                                                           // 106
    this.hideCollection("MeteorToys.Result");                                                                          // 107
    this.hideCollection("MeteorToys.Throttle");                                                                        // 108
  },                                                                                                                   // 109
  'hideMeteor': function () {                                                                                          // 110
    this.hideCollection("meteor_accounts_loginServiceConfiguration")                                                   // 111
    this.hideCollection("meteor_autoupdate_clientVersions")                                                            // 112
  },                                                                                                                   // 113
  'Collection': function (collectionName) {                                                                            // 114
                                                                                                                       // 115
    // Go through a variety of means of trying to return the correct collection                                        // 116
    return Mongo.Collection.get(collectionName)                                                                        // 117
      // This should automatically match all collections by default                                                    // 118
      // including namespaced collections                                                                              // 119
                                                                                                                       // 120
    || ((Meteor.isServer) ? eval(collectionName) : Meteor._get.apply(null,[window].concat(collectionName.split('.'))))
    // For user defined collection names                                                                               // 122
    // in the form of Meteor's Mongo.Collection names as strings                                                       // 123
                                                                                                                       // 124
    || ((Meteor.isServer) ? eval(firstToUpper(collectionName)) : Meteor._get.apply(null,[window].concat(firstToUpper(collectionName).split('.'))))
    // For user defined collections where the user has typical upper-case collection names                             // 126
    // but they've put actual mongodb collection names into the Mongol config instead of Meteor's Mongo.Collection names as strings
                                                                                                                       // 128
    || null;                                                                                                           // 129
    // If the user has gone for unconventional casing of collection names,                                             // 130
    // they'll have to get them right (i.e. Meteor's Mongo.Collection names as string) in the Mongol config manually   // 131
                                                                                                                       // 132
    // Changes the first character of a string to upper case                                                           // 133
                                                                                                                       // 134
    function firstToUpper(text) {                                                                                      // 135
                                                                                                                       // 136
      return text.charAt(0).toUpperCase() + text.substr(1);                                                            // 137
                                                                                                                       // 138
    }                                                                                                                  // 139
  },                                                                                                                   // 140
  'insertDoc': function (MongolCollection, documentData) {                                                             // 141
                                                                                                                       // 142
    check(MongolCollection, Match.Any);                                                                                // 143
    check(documentData, Match.Any);                                                                                    // 144
                                                                                                                       // 145
    if (!!Package['aldeed:simple-schema'] && !!Package['aldeed:collection2'] && _.isFunction(MongolCollection.simpleSchema) && MongolCollection._c2) {
      // This is to nullify the effects of SimpleSchema/Collection2                                                    // 147
      newId = MongolCollection.insert(documentData, {                                                                  // 148
        filter: false,                                                                                                 // 149
        autoConvert: false,                                                                                            // 150
        removeEmptyStrings: false,                                                                                     // 151
        validate: false                                                                                                // 152
      });                                                                                                              // 153
    }                                                                                                                  // 154
    else {                                                                                                             // 155
      newId = MongolCollection.insert(documentData);                                                                   // 156
    }                                                                                                                  // 157
    return newId;                                                                                                      // 158
  }                                                                                                                    // 159
}                                                                                                                      // 160
                                                                                                                       // 161
                                                                                                                       // 162
                                                                                                                       // 163
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_header/template.header.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_header");                                                                                 // 2
Template["Mongol_header"] = new Template("Template.Mongol_header", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("mongol_618")                                                                               // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n    ", HTML.STRONG("Mongol"), HTML.BR(), "\n    ", HTML.DIV({                                      // 11
        "class": "Mongol_contentView"                                                                                  // 12
      }, "\n    ", HTML.Comment("  "), "\n      ", HTML.DIV({                                                          // 13
        "class": "Mongol_docMenu",                                                                                     // 14
        style: "text-indent: 8px"                                                                                      // 15
      }, "\n        In-App MongoDB Editor\n      "), "\n      ", HTML.DIV({                                            // 16
        "class": "Mongol_documentViewer "                                                                              // 17
      }, "\n", HTML.PRE({                                                                                              // 18
        "class": "MeteorToys-off"                                                                                      // 19
      }, "{ \n  ", HTML.SPAN({                                                                                         // 20
        "class": "MeteorToys_key"                                                                                      // 21
      }, '"created_by"'), ': "', HTML.A({                                                                              // 22
        href: "http://maxsavin.com"                                                                                    // 23
      }, "Max Savin"), '",\n  ', HTML.SPAN({                                                                           // 24
        "class": "MeteorToys_key"                                                                                      // 25
      }, '"docs_at"'), ':    "', HTML.A({                                                                              // 26
        href: "https://meteor.toys"                                                                                    // 27
      }, "Meteor Toys"), '",\n  ', HTML.SPAN({                                                                         // 28
        "class": "MeteorToys_key"                                                                                      // 29
      }, '"license"'), ':    "', HTML.A({                                                                              // 30
        href: "https://github.com/MeteorToys/allthings/blob/master/LICENSE.md"                                         // 31
      }, "MT License"), '",\n}\n'), "\n      "), "\n    ", HTML.Comment("  "), "\n    "), "\n\n  " ];                  // 32
    });                                                                                                                // 33
  });                                                                                                                  // 34
}));                                                                                                                   // 35
                                                                                                                       // 36
Template.__checkName("Mongol_header_pro");                                                                             // 37
Template["Mongol_header_pro"] = new Template("Template.Mongol_header_pro", (function() {                               // 38
  var view = this;                                                                                                     // 39
  return Blaze._TemplateWith(function() {                                                                              // 40
    return {                                                                                                           // 41
      name: Spacebars.call("cmongol_618")                                                                              // 42
    };                                                                                                                 // 43
  }, function() {                                                                                                      // 44
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 45
      return [ "\n    ", HTML.STRONG("Mongol Pro"), HTML.BR(), "\n    ", HTML.DIV({                                    // 46
        "class": "Mongol_contentView"                                                                                  // 47
      }, "\n      ", HTML.Comment("  "), "\n      ", HTML.DIV({                                                        // 48
        "class": "Mongol_docMenu",                                                                                     // 49
        style: "text-indent: 8px"                                                                                      // 50
      }, "\n        Reset a Collection\n      "), "\n      ", HTML.DIV({                                               // 51
        "class": "Mongol_documentViewer ",                                                                             // 52
        style: "padding-top: 0px"                                                                                      // 53
      }, "\n        ", HTML.Comment(' <div class="MeteorToys_row Mongol_Impersonation MeteorToys_row_hoverable" style="margin-top: 0px">\n          Reset All Collections\n        </div> '), "\n        ", HTML.DIV({
        "class": "MeteorToys_row Mongol_Impersonation MeteorToys_row_hoverable",                                       // 55
        style: "margin-top: 0px; line-height: 20px"                                                                    // 56
      }, "\n          Impersonate\n        "), "\n        ", Blaze.Each(function() {                                   // 57
        return Spacebars.call(view.lookup("collection"));                                                              // 58
      }, function() {                                                                                                  // 59
        return [ "\n          ", Blaze.If(function() {                                                                 // 60
          return Spacebars.call(view.lookup("."));                                                                     // 61
        }, function() {                                                                                                // 62
          return [ "\n            ", HTML.DIV({                                                                        // 63
            "class": "MeteorToys_row MeteorToys_row_reset MeteorToys_row_hoverable",                                   // 64
            style: "margin-top: 0px; line-height: 20px"                                                                // 65
          }, "\n              ", Blaze.View("lookup:.", function() {                                                   // 66
            return Spacebars.mustache(view.lookup("."));                                                               // 67
          }), " \n            "), "\n          " ];                                                                    // 68
        }), "\n        " ];                                                                                            // 69
      }), "\n      "), "\n    "), "\n  " ];                                                                            // 70
    });                                                                                                                // 71
  });                                                                                                                  // 72
}));                                                                                                                   // 73
                                                                                                                       // 74
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_header/header.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_header_pro.events({                                                                                    // 1
  'click .MeteorToys_row_reset': function () {                                                                         // 2
    self = String(this);                                                                                               // 3
    if (confirm('This will permanently remove all the documents in ' + self  + '.')) {                                 // 4
      Meteor.call('Mongol_resetCollection', self, function (e, r) {                                                    // 5
        if (e) {                                                                                                       // 6
          alert("Sorry, there was an error removing " + self + '.')                                                    // 7
        }                                                                                                              // 8
      })                                                                                                               // 9
    }                                                                                                                  // 10
  },                                                                                                                   // 11
  'click .MeteorToys_row_reset_all': function () {                                                                     // 12
    // self = String(this);                                                                                            // 13
    if (confirm('This will permanently remove all the documents in your collections.')) {                              // 14
      Meteor.call('Mongol_resetCollections', self, function (e, r) {                                                   // 15
        if (e) {                                                                                                       // 16
          alert("Sorry, there was an error removing your collections.");                                               // 17
        }                                                                                                              // 18
      })                                                                                                               // 19
    }                                                                                                                  // 20
  },                                                                                                                   // 21
  'click .Mongol_Impersonation': function () {                                                                         // 22
    self = "MeteorToys_Impersonate";                                                                                   // 23
    if (confirm('This will reset your Impersonate list')) {                                                            // 24
      Meteor.call('Mongol_resetCollection', self, function (e, r) {                                                    // 25
        if (e) {                                                                                                       // 26
          alert("Sorry, there was an error removing " + self + '.')                                                    // 27
        }                                                                                                              // 28
      })                                                                                                               // 29
    }                                                                                                                  // 30
  }                                                                                                                    // 31
});                                                                                                                    // 32
                                                                                                                       // 33
Template.Mongol_header_pro.helpers({                                                                                   // 34
  collection: function () {                                                                                            // 35
    var x = MeteorToysDict.get("Mongol");                                                                              // 36
    return x.collections;                                                                                              // 37
  }                                                                                                                    // 38
});                                                                                                                    // 39
                                                                                                                       // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_editor/template.docViewer.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_docViewer");                                                                              // 2
Template["Mongol_docViewer"] = new Template("Template.Mongol_docViewer", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("notEmpty"));                                                                    // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Spacebars.include(view.lookupTemplate("Mongol_docControls")), "\n    ", Spacebars.With(function() {
      return Spacebars.call(view.lookup("activeDocument"));                                                            // 9
    }, function() {                                                                                                    // 10
      return [ "\n      ", Blaze.If(function() {                                                                       // 11
        return Spacebars.call(view.lookup("editStyle"));                                                               // 12
      }, function() {                                                                                                  // 13
        return [ "\n        ", HTML.DIV({                                                                              // 14
          "class": function() {                                                                                        // 15
            return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                         // 16
          },                                                                                                           // 17
          id: function() {                                                                                             // 18
            return [ "MongolDoc_", Spacebars.mustache(view.lookup("..")) ];                                            // 19
          },                                                                                                           // 20
          contenteditable: function() {                                                                                // 21
            return Spacebars.mustache(view.lookup("editContent"));                                                     // 22
          }                                                                                                            // 23
        }, "  \n          ", HTML.PRE({                                                                                // 24
          spellcheck: "false"                                                                                          // 25
        }, Blaze.View("lookup:normalJSON", function() {                                                                // 26
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("normalJSON")));                                     // 27
        })), "\n        "), "\n      " ];                                                                              // 28
      }, function() {                                                                                                  // 29
        return [ "\n        ", HTML.DIV({                                                                              // 30
          "class": function() {                                                                                        // 31
            return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                         // 32
          },                                                                                                           // 33
          id: function() {                                                                                             // 34
            return [ "MongolDoc_", Spacebars.mustache(view.lookup("..")) ];                                            // 35
          },                                                                                                           // 36
          contenteditable: function() {                                                                                // 37
            return Spacebars.mustache(view.lookup("editContent"));                                                     // 38
          }                                                                                                            // 39
        }, "  \n            ", HTML.PRE({                                                                              // 40
          spellcheck: "false"                                                                                          // 41
        }, Blaze.View("lookup:editableJSON", function() {                                                              // 42
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("editableJSON")));                                   // 43
        })), "\n        "), "\n      " ];                                                                              // 44
      }), "\n    " ];                                                                                                  // 45
    }, function() {                                                                                                    // 46
      return [ "\n      ", HTML.DIV({                                                                                  // 47
        "class": "Mongol_documentViewer",                                                                              // 48
        id: function() {                                                                                               // 49
          return [ "MongolDoc_", Spacebars.mustache(view.lookup(".")) ];                                               // 50
        }                                                                                                              // 51
      }, "  \n        ", HTML.PRE("No document found"), "\n      "), "\n    " ];                                       // 52
    }), "\n  " ];                                                                                                      // 53
  }, function() {                                                                                                      // 54
    return [ "\n    ", Spacebars.include(view.lookupTemplate("Mongol_docInsert")), "\n  " ];                           // 55
  });                                                                                                                  // 56
}));                                                                                                                   // 57
                                                                                                                       // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_editor/docViewer.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_docViewer.helpers({                                                                                    // 1
  activeDocument: function () {                                                                                        // 2
    var collectionName = String(this);                                                                                 // 3
    var currentCollection = Mongol.Collection(collectionName);                                                         // 4
    var documents = currentCollection.find({}, {transform: null}).fetch();                                             // 5
    var sessionKey = "Mongol_" + String(this);                                                                         // 6
    var docNumber = MeteorToysDict.get(sessionKey);                                                                    // 7
    var docCurrent = documents[docNumber];                                                                             // 8
    return docCurrent;                                                                                                 // 9
  },                                                                                                                   // 10
  editableJSON: function () {                                                                                          // 11
    var docCurrent = this;                                                                                             // 12
    var json_output = JSON.stringify(docCurrent, null, 2), colorize;                                                   // 13
                                                                                                                       // 14
    if (!(json_output === undefined)) {                                                                                // 15
      colorize = Package["meteortoys:toykit"].MeteorToys_JSON.colorizeEditable(json_output);                           // 16
    } else {                                                                                                           // 17
      colorize = json_output;                                                                                          // 18
    }                                                                                                                  // 19
                                                                                                                       // 20
    return colorize;                                                                                                   // 21
  },                                                                                                                   // 22
  normalJSON: function () {                                                                                            // 23
    var docCurrent  = this,                                                                                            // 24
        json_output = JSON.stringify(docCurrent, null, 2);                                                             // 25
                                                                                                                       // 26
    return json_output;                                                                                                // 27
  },                                                                                                                   // 28
  editContent: function () {                                                                                           // 29
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 30
                                                                                                                       // 31
    if (editMode) {                                                                                                    // 32
      return "true";                                                                                                   // 33
    }                                                                                                                  // 34
  },                                                                                                                   // 35
  editStyle: function () {                                                                                             // 36
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 37
                                                                                                                       // 38
    if (editMode) {                                                                                                    // 39
      return "Mongol_editable";                                                                                        // 40
    }                                                                                                                  // 41
  },                                                                                                                   // 42
  notEmpty: function () {                                                                                              // 43
    var documentCount = Mongol.Collection(String(this)) && Mongol.Collection(String(this)).find().count() || 0;        // 44
                                                                                                                       // 45
    if (documentCount >= 1) {                                                                                          // 46
      return true;                                                                                                     // 47
    }                                                                                                                  // 48
  }                                                                                                                    // 49
});                                                                                                                    // 50
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_editor/inline.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// There are four actions that the inline editor leverages:                                                            // 1
//  - focus in         - set editing state                                                                             // 2
//  - focus out        - save update                                                                                   // 3
//  - enter key        - focus out                                                                                     // 4
//  - escape key       - cancel                                                                                        // 5
                                                                                                                       // 6
// Loop for empty keys, if present remove it                                                                           // 7
// toggle true and false                                                                                               // 8
                                                                                                                       // 9
MongolEditingStatus = false;                                                                                           // 10
                                                                                                                       // 11
Mongol_InlineEditor = {                                                                                                // 12
  createBackup: function () {                                                                                          // 13
    current = MeteorToysDict.get("Mongol_currentCollection");                                                          // 14
    content = $("#MongolDoc_" + current).html();                                                                       // 15
    MeteorToysDict.set("Mongol_backup", content);                                                                      // 16
  },                                                                                                                   // 17
  restoreBackup: function () {                                                                                         // 18
    // Mongol_InlineEditor.removeTextSelection                                                                         // 19
    current = MeteorToysDict.get("Mongol_currentCollection");                                                          // 20
    content = MeteorToysDict.get("Mongol_backup");                                                                     // 21
    $("#MongolDoc_" + current).html(content);                                                                          // 22
  },                                                                                                                   // 23
  clearBackup: function () {                                                                                           // 24
    MeteorToysDict.set("Mongol_backup", null);                                                                         // 25
  },                                                                                                                   // 26
  getData: function () {                                                                                               // 27
    var target = MeteorToysDict.get("Mongol_currentCollection"),                                                       // 28
        data   = $("#Mongol_c" + target + " pre").text();                                                              // 29
                                                                                                                       // 30
    var newObject = null;                                                                                              // 31
                                                                                                                       // 32
    try {                                                                                                              // 33
      var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;                  // 34
      var dateParser = function (key, value) {                                                                         // 35
        if (_.isString(value)) {                                                                                       // 36
          var a = reISO.exec(value);                                                                                   // 37
          if (a) {                                                                                                     // 38
            return new Date(value);                                                                                    // 39
          }                                                                                                            // 40
        }                                                                                                              // 41
        return value;                                                                                                  // 42
      }                                                                                                                // 43
      newObject = JSON.parse(data, dateParser);                                                                        // 44
    }                                                                                                                  // 45
    catch (error) {                                                                                                    // 46
      Mongol_InlineEditor.restoreBackup();                                                                             // 47
    }                                                                                                                  // 48
                                                                                                                       // 49
    return newObject;                                                                                                  // 50
  },                                                                                                                   // 51
  updateData: function () {                                                                                            // 52
                                                                                                                       // 53
    var collectionName = (MeteorToysDict.equals("Mongol_currentCollection", "account_618")) ? "users" : MeteorToysDict.get("Mongol_currentCollection"),
      oldObject,                                                                                                       // 55
      newObject,                                                                                                       // 56
      newData;                                                                                                         // 57
    if (MeteorToysDict.equals("Mongol_currentCollection", "account_618")) {                                            // 58
      newData = Mongol.getDocumentUpdate("account_618");                                                               // 59
      // var newObject = Mongol.parse(newData);                                                                        // 60
      newObject = Mongol_InlineEditor.getData();                                                                       // 61
      oldObject = Meteor.user();                                                                                       // 62
      // console.log(targetCollection);                                                                                // 63
      // console.log(newData);                                                                                         // 64
      // console.log(newObject);                                                                                       // 65
    } else {                                                                                                           // 66
      var sessionKey = "Mongol_" + collectionName;                                                                     // 67
      DocumentPosition = MeteorToysDict.get(sessionKey),                                                               // 68
      CurrentCollection = Mongol.Collection(collectionName).find({}, {transform: null}).fetch();                       // 69
      newData   = Mongol.getDocumentUpdate(collectionName);                                                            // 70
      // var newObject = Mongol.parse(newData);                                                                        // 71
      newObject = Mongol_InlineEditor.getData();                                                                       // 72
      oldObject = CurrentCollection[DocumentPosition];                                                                 // 73
    }                                                                                                                  // 74
                                                                                                                       // 75
    //                                                                                                                 // 76
    delete newObject[""];                                                                                              // 77
    delete newObject[" "];                                                                                             // 78
                                                                                                                       // 79
    if (newObject) {                                                                                                   // 80
      Meteor.call("Mongol_update", collectionName, newObject, Mongol.validateDocument(oldObject), function(error, result) {
        if (!error) {                                                                                                  // 82
          // MeteorToysDict.set('Mongol_editMode', null);                                                              // 83
          // Mongol_InlineEditor.removeTextSelection();                                                                // 84
        } else {                                                                                                       // 85
          Mongol.error('update');                                                                                      // 86
          Mongol_InlineEditor.restoreBackup();                                                                         // 87
        }                                                                                                              // 88
      });                                                                                                              // 89
    }                                                                                                                  // 90
  },                                                                                                                   // 91
  bindHotkeys: function () {                                                                                           // 92
    $('.MeteorToys_inline').keydown(function(event) {                                                                  // 93
      if (event.keyCode == 10 || event.keyCode == 13) {                                                                // 94
        event.preventDefault();                                                                                        // 95
        $('.MeteorToys_inline:focus').blur();                                                                          // 96
      }                                                                                                                // 97
                                                                                                                       // 98
      if (event.keyCode == 27) {                                                                                       // 99
        Mongol_InlineEditor.restoreBackup();                                                                           // 100
        $('.MeteorToys_inline:focus').blur();                                                                          // 101
      }                                                                                                                // 102
    });                                                                                                                // 103
  },                                                                                                                   // 104
  removeTextSelection: function () {                                                                                   // 105
    if (window.getSelection) {                                                                                         // 106
      if (window.getSelection().empty) {  // Chrome                                                                    // 107
        window.getSelection().empty();                                                                                 // 108
      } else if (window.getSelection().removeAllRanges) {  // Firefox                                                  // 109
        window.getSelection().removeAllRanges();                                                                       // 110
      }                                                                                                                // 111
    } else if (document.selection) {  // IE?                                                                           // 112
      document.selection.empty();                                                                                      // 113
    }                                                                                                                  // 114
  }                                                                                                                    // 115
}                                                                                                                      // 116
                                                                                                                       // 117
Template.Mongol_docViewer.events({                                                                                     // 118
  'dblclick .Mongol_documentViewer': function () {                                                                     // 119
    MeteorToysDict.set("Mongol_editMode", true);                                                                       // 120
  },                                                                                                                   // 121
  'focusout .MeteorToys_inline': function () {                                                                         // 122
    a = Mongol_InlineEditor.updateData();                                                                              // 123
    b = Mongol_InlineEditor.removeTextSelection();                                                                     // 124
    // console.log("focusedout");                                                                                      // 125
  },                                                                                                                   // 126
  'focusin .MeteorToys_inline': function () {                                                                          // 127
    a = Mongol_InlineEditor.bindHotkeys();                                                                             // 128
    b = Mongol_InlineEditor.createBackup();                                                                            // 129
    // console.log("focusedin");                                                                                       // 130
  },                                                                                                                   // 131
  'dblclick .MeteorToys_inline': function (e,t) {                                                                      // 132
    e.stopPropagation();                                                                                               // 133
  }                                                                                                                    // 134
});                                                                                                                    // 135
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/template.account.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_account");                                                                                // 2
Template["Mongol_account"] = new Template("Template.Mongol_account", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("account_618")                                                                              // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n			", HTML.Comment(" Display sign in status "), "\n			", Blaze.If(function() {                     // 11
        return Spacebars.call(view.lookup("currentUser"));                                                             // 12
      }, function() {                                                                                                  // 13
        return [ "\n				", HTML.DIV({                                                                                  // 14
          "class": "Mongol_account_state MeteorToys-background-green"                                                  // 15
        }), "\n			" ];                                                                                                 // 16
      }, function() {                                                                                                  // 17
        return [ "\n				", HTML.DIV({                                                                                  // 18
          "class": "Mongol_account_state MeteorToys-background-red"                                                    // 19
        }), "\n			" ];                                                                                                 // 20
      }), "\n\n			", HTML.Comment(" Row Name "), "\n			", HTML.DIV({                                                   // 21
        "class": "Mongol_icon Mongol_icon_user"                                                                        // 22
      }), "\n			Account\n     \n        ", HTML.DIV({                                                                  // 23
        "class": "Mongol_contentView"                                                                                  // 24
      }, "\n\n			", HTML.Comment(" Document Viewer "), "\n			", Blaze.If(function() {                                  // 25
        return Spacebars.call(view.lookup("currentUser"));                                                             // 26
      }, function() {                                                                                                  // 27
        return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_accountViewer")), "\n			" ];                  // 28
      }, function() {                                                                                                  // 29
        return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_accountViewer_notSignedIn")), "\n			" ];      // 30
      }), "\n\n		"), "\n\n	" ];                                                                                        // 31
    });                                                                                                                // 32
  });                                                                                                                  // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/account.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/template.accountViewer.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_accountViewer");                                                                          // 2
Template["Mongol_accountViewer"] = new Template("Template.Mongol_accountViewer", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("Mongol_docControls")), "\n\n	", HTML.DIV({                           // 5
    "class": function() {                                                                                              // 6
      return [ "Mongol_documentViewer ", Spacebars.mustache(view.lookup("editStyle")) ];                               // 7
    },                                                                                                                 // 8
    id: "MongolDoc_account_618",                                                                                       // 9
    contenteditable: function() {                                                                                      // 10
      return Spacebars.mustache(view.lookup("editContent"));                                                           // 11
    }                                                                                                                  // 12
  }, "	\n		", HTML.PRE(Blaze.View("lookup:accountData", function() {                                                   // 13
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("accountData")));                                          // 14
  })), "\n	") ];                                                                                                       // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
Template.__checkName("Mongol_accountViewer_notSignedIn");                                                              // 18
Template["Mongol_accountViewer_notSignedIn"] = new Template("Template.Mongol_accountViewer_notSignedIn", (function() {
  var view = this;                                                                                                     // 20
  return HTML.Raw('<div class="Mongol_docMenu">\n			<div class="Mongol_docBar1" style="text-indent: 8px">\n				Not Signed In\n			</div>\n		</div>\n	<div class="Mongol_documentViewer">	\n		<!-- Nothing -->\n	</div>');
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_account/accountViewer.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_accountViewer.helpers({                                                                                // 1
  accountData: function () {                                                                                           // 2
                                                                                                                       // 3
    var docCurrent  = Meteor.user(),                                                                                   // 4
        json_output = JSON.stringify(docCurrent, null, 2),                                                             // 5
        colorized   = Package["meteortoys:toykit"].MeteorToys.colorizeEditable(json_output);                           // 6
    return colorized;                                                                                                  // 7
                                                                                                                       // 8
  },                                                                                                                   // 9
  editContent: function () {                                                                                           // 10
                                                                                                                       // 11
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 12
                                                                                                                       // 13
    if (editMode) {                                                                                                    // 14
      return "true";                                                                                                   // 15
    }                                                                                                                  // 16
                                                                                                                       // 17
  },                                                                                                                   // 18
  editStyle: function () {                                                                                             // 19
                                                                                                                       // 20
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 21
                                                                                                                       // 22
    if (editMode) {                                                                                                    // 23
      return "Mongol_editable";                                                                                        // 24
    }                                                                                                                  // 25
                                                                                                                       // 26
  },                                                                                                                   // 27
  usercode: function () {                                                                                              // 28
                                                                                                                       // 29
    return Meteor.userId();                                                                                            // 30
                                                                                                                       // 31
  },                                                                                                                   // 32
});                                                                                                                    // 33
                                                                                                                       // 34
                                                                                                                       // 35
Template.Mongol_accountViewer.events({                                                                                 // 36
  'focusin .MeteorToys_inline': function () {                                                                          // 37
    // UpdaterFunctions.updateData();                                                                                  // 38
    preventEnterKey();                                                                                                 // 39
    current = MeteorToysDict.get("Mongol_currentCollection");                                                          // 40
    content = $("#MongolDoc_" + current).html();                                                                       // 41
    MeteorToysDict.set("Mongol_backup", content);                                                                      // 42
                                                                                                                       // 43
  },                                                                                                                   // 44
  'focusout .MeteorToys_inline': function () {                                                                         // 45
    UpdaterFunctions.updateData();                                                                                     // 46
    removeSelection();                                                                                                 // 47
  }                                                                                                                    // 48
});                                                                                                                    // 49
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection_notFound/template.notFound.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_collection_notFound");                                                                    // 2
Template["Mongol_collection_notFound"] = new Template("Template.Mongol_collection_notFound", (function() {             // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("no_collections")                                                                           // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n    ", HTML.DIV({                                                                                  // 11
        "class": "Mongol_icon Mongol_icon_collection"                                                                  // 12
      }), "No Collections", HTML.BR(), "\n    ", HTML.DIV({                                                            // 13
        "class": "Mongol_contentView"                                                                                  // 14
      }, "\n    ", HTML.Comment("  "), "\n      ", HTML.DIV({                                                          // 15
        "class": "Mongol_docMenu",                                                                                     // 16
        style: "text-indent: 8px"                                                                                      // 17
      }, "\n        None Detected\n      "), "\n      ", HTML.DIV({                                                    // 18
        "class": "Mongol_documentViewer "                                                                              // 19
      }, "\n\n        If you think this is an error,", HTML.BR(), "\n        please report it on ", HTML.A({           // 20
        href: "https://github.com/msavin/Mongol",                                                                      // 21
        style: "color: #cc0000"                                                                                        // 22
      }, "GitHub"), ".\n        \n      "), "\n    ", HTML.Comment("  "), "\n    "), "\n\n  " ];                       // 23
    });                                                                                                                // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection_notFound/notFound.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection/template.collections.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_collection");                                                                             // 2
Template["Mongol_collection"] = new Template("Template.Mongol_collection", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call(view.lookup("."))                                                                           // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n		", HTML.Comment(" Collection Count "), "\n		", HTML.DIV({                                        // 11
        "class": "Mongol_counter"                                                                                      // 12
      }, "\n			", Blaze.If(function() {                                                                                // 13
        return Spacebars.call(view.lookup("collectionCount"));                                                         // 14
      }, function() {                                                                                                  // 15
        return [ "\n			", HTML.SPAN({                                                                                  // 16
          "class": "MongolHide"                                                                                        // 17
        }, Blaze.View("lookup:currentPosition", function() {                                                           // 18
          return Spacebars.mustache(view.lookup("currentPosition"));                                                   // 19
        }), "/") ];                                                                                                    // 20
      }), Blaze.View("lookup:collectionCount", function() {                                                            // 21
        return Spacebars.mustache(view.lookup("collectionCount"));                                                     // 22
      }), "\n		"), "\n\n		", HTML.Comment(" Collection Name "), "\n		", HTML.DIV({                                     // 23
        "class": "Mongol_row_name"                                                                                     // 24
      }, HTML.DIV({                                                                                                    // 25
        "class": "Mongol_icon Mongol_icon_collection"                                                                  // 26
      }), Blaze.View("lookup:.", function() {                                                                          // 27
        return Spacebars.mustache(view.lookup("."));                                                                   // 28
      }), Blaze.If(function() {                                                                                        // 29
        return Spacebars.call(view.lookup("xf"));                                                                      // 30
      }, function() {                                                                                                  // 31
        return Blaze.View("lookup:xf", function() {                                                                    // 32
          return Spacebars.mustache(view.lookup("xf"));                                                                // 33
        });                                                                                                            // 34
      })), "\n    	    \n		", HTML.Comment(" Document Viewer "), "\n		", HTML.DIV({                                    // 35
        "class": "Mongol_contentView"                                                                                  // 36
      }, "\n			", Spacebars.include(view.lookupTemplate("Mongol_docViewer")), "\n		"), "\n		\n	" ];                    // 37
    });                                                                                                                // 38
  });                                                                                                                  // 39
}));                                                                                                                   // 40
                                                                                                                       // 41
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_collection/collections.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_collection.events({                                                                                    // 1
  'click': function () {                                                                                               // 2
                                                                                                                       // 3
    var targetCollection = String(this),                                                                               // 4
        sessionKey       = "Mongol_" + targetCollection;                                                               // 5
                                                                                                                       // 6
    if (MeteorToysDict.equals("Mongol_currentCollection", targetCollection)) {                                         // 7
                                                                                                                       // 8
      // do nothing                                                                                                    // 9
                                                                                                                       // 10
    } else {                                                                                                           // 11
                                                                                                                       // 12
      // If the collection doesn't have an index key set,                                                              // 13
      // start it from the first document                                                                              // 14
                                                                                                                       // 15
      if (!MeteorToysDict.get(String(sessionKey))) {                                                                   // 16
        MeteorToysDict.set(String(sessionKey), 0);                                                                     // 17
      }                                                                                                                // 18
                                                                                                                       // 19
    }                                                                                                                  // 20
                                                                                                                       // 21
  },                                                                                                                   // 22
});                                                                                                                    // 23
                                                                                                                       // 24
Template.Mongol_collection.helpers({                                                                                   // 25
  collectionCount: function () {                                                                                       // 26
                                                                                                                       // 27
    var collectionName = String(this);                                                                                 // 28
    var collectionVar = Mongol.Collection(collectionName);                                                             // 29
                                                                                                                       // 30
    var count = collectionVar && collectionVar.find().count() || 0;                                                    // 31
                                                                                                                       // 32
    return count;                                                                                                      // 33
                                                                                                                       // 34
  },                                                                                                                   // 35
  currentPosition: function () {                                                                                       // 36
                                                                                                                       // 37
    var targetCollection = String(this);                                                                               // 38
    var sessionKey = "Mongol_" + targetCollection;                                                                     // 39
                                                                                                                       // 40
    var current = MeteorToysDict.get(sessionKey);                                                                      // 41
    var count = current + 1;                                                                                           // 42
                                                                                                                       // 43
    return count;                                                                                                      // 44
                                                                                                                       // 45
  }                                                                                                                    // 46
});                                                                                                                    // 47
                                                                                                                       // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_trash/template.main.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_trash");                                                                                  // 2
Template["Mongol_trash"] = new Template("Template.Mongol_trash", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("trash")                                                                                    // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n	  \n		", HTML.DIV({                                                                                 // 11
        "class": "Mongol_counter"                                                                                      // 12
      }, "\n			", Blaze.If(function() {                                                                                // 13
        return Spacebars.call(view.lookup("collectionCount"));                                                         // 14
      }, function() {                                                                                                  // 15
        return [ "\n				", HTML.SPAN({                                                                                 // 16
          "class": "MongolHide"                                                                                        // 17
        }, Blaze.View("lookup:currentPosition", function() {                                                           // 18
          return Spacebars.mustache(view.lookup("currentPosition"));                                                   // 19
        }), "/") ];                                                                                                    // 20
      }), Blaze.View("lookup:collectionCount", function() {                                                            // 21
        return Spacebars.mustache(view.lookup("collectionCount"));                                                     // 22
      }), "\n		"), "\n\n		", HTML.DIV({                                                                                // 23
        "class": "Mongol_row_name"                                                                                     // 24
      }, HTML.DIV({                                                                                                    // 25
        "class": "Mongol_icon Mongol_icon_trash"                                                                       // 26
      }), "Trash"), "\n\n		", Blaze.If(function() {                                                                    // 27
        return Spacebars.call(view.lookup("collectionCount"));                                                         // 28
      }, function() {                                                                                                  // 29
        return [ "\n			", Spacebars.include(view.lookupTemplate("Mongol_trash_viewer")), "\n		" ];                     // 30
      }, function() {                                                                                                  // 31
        return [ "\n			", Spacebars.include(view.lookupTemplate("Mongol_trash_empty")), "\n		" ];                      // 32
      }), "\n\n	" ];                                                                                                   // 33
    });                                                                                                                // 34
  });                                                                                                                  // 35
}));                                                                                                                   // 36
                                                                                                                       // 37
Template.__checkName("Mongol_trash_menu");                                                                             // 38
Template["Mongol_trash_menu"] = new Template("Template.Mongol_trash_menu", (function() {                               // 39
  var view = this;                                                                                                     // 40
  return HTML.DIV({                                                                                                    // 41
    "class": "Mongol_docMenu"                                                                                          // 42
  }, HTML.Raw('\n		<div class="Mongol_m_edit">Restore</div>\n		'), HTML.DIV({                                          // 43
    "class": function() {                                                                                              // 44
      return [ Spacebars.mustache(view.lookup("disable_right")), " Mongol_m_right" ];                                  // 45
    }                                                                                                                  // 46
  }, HTML.Raw("&rsaquo;")), "\n		", HTML.DIV({                                                                         // 47
    "class": function() {                                                                                              // 48
      return [ Spacebars.mustache(view.lookup("disable_left")), " Mongol_m_left" ];                                    // 49
    }                                                                                                                  // 50
  }, HTML.Raw("&lsaquo;")), "\n	");                                                                                    // 51
}));                                                                                                                   // 52
                                                                                                                       // 53
Template.__checkName("Mongol_trash_viewer");                                                                           // 54
Template["Mongol_trash_viewer"] = new Template("Template.Mongol_trash_viewer", (function() {                           // 55
  var view = this;                                                                                                     // 56
  return HTML.DIV({                                                                                                    // 57
    "class": "Mongol_contentView"                                                                                      // 58
  }, "\n		", Spacebars.include(view.lookupTemplate("Mongol_trash_menu")), "\n	    ", HTML.DIV({                        // 59
    "class": "Mongol_documentViewer"                                                                                   // 60
  }, "\n", HTML.PRE("From ", Blaze.View("lookup:collectionName", function() {                                          // 61
    return Spacebars.mustache(view.lookup("collectionName"));                                                          // 62
  }), " ", Blaze.View("lookup:currentDocument", function() {                                                           // 63
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("currentDocument")));                                      // 64
  })), "\n	    "), "\n	");                                                                                             // 65
}));                                                                                                                   // 66
                                                                                                                       // 67
Template.__checkName("Mongol_trash_empty");                                                                            // 68
Template["Mongol_trash_empty"] = new Template("Template.Mongol_trash_empty", (function() {                             // 69
  var view = this;                                                                                                     // 70
  return HTML.Raw('<div class="Mongol_contentView">\n		<div class="Mongol_docMenu" style="text-indent: 8px">Empty</div>\n		<div class="Mongol_documentViewer">\n<pre>When you remove documents,\nthey will appear here.</pre></div>\n	</div>');
}));                                                                                                                   // 72
                                                                                                                       // 73
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_trash/main.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_trash.events({                                                                                         // 1
  'click': function () {                                                                                               // 2
    if (!MeteorToysDict.get("Mongol_Trash_Count")) {                                                                   // 3
      MeteorToysDict.set("Mongol_Trash_Count", 0)                                                                      // 4
    }                                                                                                                  // 5
  }                                                                                                                    // 6
});                                                                                                                    // 7
                                                                                                                       // 8
Template.Mongol_trash.helpers({                                                                                        // 9
  collectionCount: function () {                                                                                       // 10
                                                                                                                       // 11
    var collectionName = "MeteorToys.Mongol";                                                                          // 12
    var collectionVar = Package["msavin:mongol"].Mongol.Collection(collectionName);                                    // 13
                                                                                                                       // 14
    var count = collectionVar && collectionVar.find().count() || 0;                                                    // 15
                                                                                                                       // 16
    return count;                                                                                                      // 17
                                                                                                                       // 18
  },                                                                                                                   // 19
  currentPosition: function () {                                                                                       // 20
                                                                                                                       // 21
    var targetCollection = "Trash_Count";                                                                              // 22
    var sessionKey = "Mongol_" + targetCollection;                                                                     // 23
                                                                                                                       // 24
    var current = MeteorToysDict.get(sessionKey);                                                                      // 25
    var count = current + 1;                                                                                           // 26
                                                                                                                       // 27
    return count;                                                                                                      // 28
                                                                                                                       // 29
  }                                                                                                                    // 30
});                                                                                                                    // 31
                                                                                                                       // 32
Template.Mongol_trash_viewer.helpers({                                                                                 // 33
  currentDocument: function () {                                                                                       // 34
    var collectionName = "MeteorToys.Mongol",                                                                          // 35
        docNumber      = MeteorToysDict.get("Mongol_Trash_Count"),                                                     // 36
        doc            = Package["msavin:mongol"].Mongol.Collection("MeteorToys.Mongol").find().fetch()[docNumber];    // 37
                                                                                                                       // 38
    if (doc) {                                                                                                         // 39
      delete doc['Mongol_origin'];                                                                                     // 40
      delete doc['Mongol_date'];                                                                                       // 41
      var content   = Package["meteortoys:toykit"].MeteorToys.colorize(JSON.stringify(doc, undefined, 2));             // 42
      return content;                                                                                                  // 43
    }                                                                                                                  // 44
  },                                                                                                                   // 45
  collectionName: function () {                                                                                        // 46
    var collectionName = "MeteorToys.Mongol",                                                                          // 47
        docNumber      = MeteorToysDict.get("Mongol_Trash_Count"),                                                     // 48
        doc            = Package["msavin:mongol"].Mongol.Collection("MeteorToys.Mongol").find().fetch()[docNumber];    // 49
    if (doc) {                                                                                                         // 50
      return doc.Mongol_origin;                                                                                        // 51
    }                                                                                                                  // 52
  }                                                                                                                    // 53
});                                                                                                                    // 54
                                                                                                                       // 55
Template.Mongol_trash_menu.events({                                                                                    // 56
  'click .Mongol_m_edit': function () {                                                                                // 57
      var collectionName = "MeteorToys.Mongol",                                                                        // 58
          docNumber      = MeteorToysDict.get("Mongol_Trash_Count"),                                                   // 59
          doc            = Package["msavin:mongol"].Mongol.Collection("MeteorToys.Mongol").find().fetch()[docNumber];  // 60
                                                                                                                       // 61
      var targetCollection = doc.Mongol_origin;                                                                        // 62
      var docID = doc._id;                                                                                             // 63
                                                                                                                       // 64
      delete doc['Mongol_origin'];                                                                                     // 65
      delete doc['Mongol_date'];                                                                                       // 66
                                                                                                                       // 67
      Meteor.call("Mongol_insert", targetCollection, doc, function (e, r) {                                            // 68
        if (e) {                                                                                                       // 69
          alert("There was an error restoring your document.");                                                        // 70
        }                                                                                                              // 71
      });                                                                                                              // 72
                                                                                                                       // 73
      Meteor.call("Mongol_remove", "MeteorToys.Mongol", docID, true, function (e, r) {                                 // 74
        if (e) {                                                                                                       // 75
          alert("There was an error removing document from trash,");                                                   // 76
        }                                                                                                              // 77
      });                                                                                                              // 78
                                                                                                                       // 79
      // Set the position                                                                                              // 80
      var sessionKey = "Mongol_Trash_Count";                                                                           // 81
      var CurrentDocument = MeteorToysDict.get(sessionKey);                                                            // 82
      var collectionVar   = Package["msavin:mongol"].Mongol.Collection("MeteorToys.Mongol");                           // 83
      var collectionCount = collectionVar.find().count() - 1;                                                          // 84
                                                                                                                       // 85
      if (collectionCount === CurrentDocument) {                                                                       // 86
        $('.Mongol_m_left').click();                                                                                   // 87
      }                                                                                                                // 88
                                                                                                                       // 89
  },                                                                                                                   // 90
  'click .Mongol_m_right': function() {                                                                                // 91
      // Verify that the button is not disabled                                                                        // 92
      if (!$('.Mongol_m_right').hasClass('Mongol_m_disabled')) {                                                       // 93
                                                                                                                       // 94
                                                                                                                       // 95
        // Set the key                                                                                                 // 96
        var sessionKey = "Mongol_Trash_Count";                                                                         // 97
                                                                                                                       // 98
        // Grab the key                                                                                                // 99
        var CurrentDocument = MeteorToysDict.get(sessionKey);                                                          // 100
        var collectionVar   = Package["msavin:mongol"].Mongol.Collection("MeteorToys.Mongol");                         // 101
        var collectionCount = collectionVar.find().count() - 1;                                                        // 102
                                                                                                                       // 103
        if (CurrentDocument > collectionCount) {                                                                       // 104
          MeteorToysDict.set(sessionKey, 0)                                                                            // 105
          return;                                                                                                      // 106
        }                                                                                                              // 107
                                                                                                                       // 108
        if (collectionCount === CurrentDocument) {                                                                     // 109
          // Go back to document 1                                                                                     // 110
          MeteorToysDict.set(sessionKey, 0);                                                                           // 111
        } else {                                                                                                       // 112
          // Go to next document                                                                                       // 113
          var MongolDocNumber = MeteorToysDict.get(sessionKey) + 1;                                                    // 114
          MeteorToysDict.set(sessionKey, MongolDocNumber);                                                             // 115
        }                                                                                                              // 116
                                                                                                                       // 117
      }                                                                                                                // 118
    },                                                                                                                 // 119
    'click .Mongol_m_left': function() {                                                                               // 120
                                                                                                                       // 121
      // Verify that the button is not disabled                                                                        // 122
      if (!$('.Mongol_m_left').hasClass('Mongol_m_disabled')) {                                                        // 123
                                                                                                                       // 124
        var sessionKey = "Mongol_Trash_Count";                                                                         // 125
        var CurrentDocument = MeteorToysDict.get(sessionKey);                                                          // 126
        var collectionVar   = Package["msavin:mongol"].Mongol.Collection("MeteorToys.Mongol");                         // 127
        var collectionCount = collectionVar.find().count() - 1;                                                        // 128
                                                                                                                       // 129
        if (CurrentDocument > collectionCount) {                                                                       // 130
          MeteorToysDict.set(sessionKey, collectionCount)                                                              // 131
          return;                                                                                                      // 132
        }                                                                                                              // 133
                                                                                                                       // 134
        if (MeteorToysDict.get(sessionKey) === 0) {                                                                    // 135
          MeteorToysDict.set(sessionKey, collectionCount)                                                              // 136
        } else {                                                                                                       // 137
          var MongolDocNumber = MeteorToysDict.get(sessionKey) - 1;                                                    // 138
          MeteorToysDict.set(sessionKey, MongolDocNumber);                                                             // 139
        }                                                                                                              // 140
                                                                                                                       // 141
      }                                                                                                                // 142
                                                                                                                       // 143
    },                                                                                                                 // 144
});                                                                                                                    // 145
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_subscriptions/template.main.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_subscriptions");                                                                          // 2
Template["Mongol_subscriptions"] = new Template("Template.Mongol_subscriptions", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      name: Spacebars.call("subscriptions_618")                                                                        // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("Mongol_Component"), function() {                                     // 10
      return [ "\n\n		\n        ", HTML.DIV({                                                                          // 11
        "class": "Mongol_toggle_selected_collection"                                                                   // 12
      }, "\n			", HTML.Comment(" Name "), "\n			", HTML.DIV({                                                          // 13
        "class": "Mongol_icon Mongol_icon_sub"                                                                         // 14
      }), "Subscriptions\n        "), "\n\n		", HTML.DIV({                                                             // 15
        "class": "Mongol_contentView"                                                                                  // 16
      }, "\n		", HTML.DIV({                                                                                            // 17
        "class": "Mongol_docMenu",                                                                                     // 18
        style: "text-indent: 8px"                                                                                      // 19
      }, "\n			", Blaze.View("lookup:subType", function() {                                                            // 20
        return Spacebars.mustache(view.lookup("subType"));                                                             // 21
      }), "\n		"), "\n		", HTML.Comment(" Document Viewer "), "\n		", HTML.DIV({                                       // 22
        "class": "Mongol_documentViewer",                                                                              // 23
        style: "Padding: 0px 7px !important"                                                                           // 24
      }, "\n			", Blaze.Each(function() {                                                                              // 25
        return Spacebars.call(view.lookup("subscription"));                                                            // 26
      }, function() {                                                                                                  // 27
        return [ "\n				", HTML.DIV({                                                                                  // 28
          "class": "Mongol_pubsub_row"                                                                                 // 29
        }, "\n					", HTML.DIV({                                                                                       // 30
          "class": "Mongol_pubsub_row_toggle"                                                                          // 31
        }, HTML.CharRef({                                                                                              // 32
          html: "&times;",                                                                                             // 33
          str: "×"                                                                                                     // 34
        })), "\n					", HTML.DIV({                                                                                     // 35
          "class": "Mongol_pubsub_row_name"                                                                            // 36
        }, Blaze.View("lookup:name", function() {                                                                      // 37
          return Spacebars.mustache(view.lookup("name"));                                                              // 38
        })), "\n					Params: ", Blaze.View("lookup:params", function() {                                               // 39
          return Spacebars.mustache(view.lookup("params"));                                                            // 40
        }), " \n				"), "\n			" ];                                                                                     // 41
      }, function() {                                                                                                  // 42
        return "\n				No subscriptions available\n			";                                                                // 43
      }), "\n		"), "\n		", HTML.Comment("  "), "\n	"), "\n		\n\n	" ];                                                  // 44
    });                                                                                                                // 45
  });                                                                                                                  // 46
}));                                                                                                                   // 47
                                                                                                                       // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/row_subscriptions/main.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x55df=["\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x73\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x72\x75\x6E\x50\x75\x62\x53\x75\x62","\x6F\x62\x73\x65\x72\x76\x65","\x64\x65\x66\x61\x75\x6C\x74\x5F\x63\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x6D\x73\x61\x76\x69\x6E\x3A\x73\x75\x62","\x6D\x73\x61\x76\x69\x6E\x3A\x6D\x6F\x6E\x67\x6F\x6C","\x5F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x6B\x65\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2F\x50\x75\x62\x53\x75\x62","\x73\x65\x74","\x67\x65\x74","\x6E\x61\x6D\x65","\x70\x61\x72\x61\x6D\x73","\x6C\x65\x6E\x67\x74\x68","\x6E\x6F\x6E\x65","\x50\x6F\x6C\x6C\x69\x6E\x67\x20\x65\x76\x65\x72\x79\x20\x33\x20\x73\x65\x63\x6F\x6E\x64\x73","\x4F\x62\x73\x65\x72\x76\x69\x6E\x67\x20\x43\x68\x61\x6E\x67\x65\x73","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x73\x74\x6F\x70","\x65\x76\x65\x6E\x74\x73"];if(!Package[_0x55df[0]]){MeteorToysDict=Package[_0x55df[2]][_0x55df[1]];MeteorToys_Sub={observe:function(){MeteorToys_Sub[_0x55df[3]]();if(!Object[_0x55df[4]]){setInterval(function(){MeteorToys_Sub[_0x55df[3]]()},3000)}else {Object[_0x55df[4]](Meteor[_0x55df[5]]._subscriptions,function(){MeteorToys_Sub[_0x55df[3]]()})};},runPubSub:function(){if(Package[_0x55df[6]]||Package[_0x55df[7]]){var _0xbcd5x1=Meteor[_0x55df[5]][_0x55df[8]],_0xbcd5x2=Object[_0x55df[9]](_0xbcd5x1);MeteorToysDict[_0x55df[11]](_0x55df[10],_0xbcd5x2);}}};MeteorToys_Sub[_0x55df[4]]();};Template[_0x55df[20]][_0x55df[19]]({subscription:function(){var _0xbcd5x3=MeteorToysDict[_0x55df[12]](_0x55df[10]);return _0xbcd5x3;},name:function(){var _0xbcd5x4=Meteor[_0x55df[5]][_0x55df[8]][this]&&Meteor[_0x55df[5]][_0x55df[8]][this][_0x55df[13]];return _0xbcd5x4;},params:function(){var _0xbcd5x5=Meteor[_0x55df[5]][_0x55df[8]][this]&&Meteor[_0x55df[5]][_0x55df[8]][this][_0x55df[14]];if(_0xbcd5x5&&_0xbcd5x5[_0x55df[15]]>0){return _0xbcd5x5}else {return _0x55df[16]};},subType:function(){if(!Object[_0x55df[4]]){return _0x55df[17]}else {return _0x55df[18]}}});Template[_0x55df[20]][_0x55df[22]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x75\x62\x73\x75\x62\x5F\x72\x6F\x77\x5F\x74\x6F\x67\x67\x6C\x65":function(){Meteor[_0x55df[5]][_0x55df[8]][this][_0x55df[21]]()}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_insert/template.docInsert.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_docInsert");                                                                              // 2
Template["Mongol_docInsert"] = new Template("Template.Mongol_docInsert", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<div class="Mongol_docMenu">\n		<div class="MeteorToys_action Mongol_docMenu_insert" style="float: right">Submit</div>\n		&nbsp;Insert a Document\n	</div>\n\n	'), HTML.DIV({
    "class": "Mongol_documentViewer ",                                                                                 // 6
    id: function() {                                                                                                   // 7
      return [ "Mongol_", Spacebars.mustache(view.lookup(".")), "_newEntry" ];                                         // 8
    },                                                                                                                 // 9
    tabindex: "-1",                                                                                                    // 10
    contenteditable: "true"                                                                                            // 11
  }, "	\n", HTML.Raw("<pre>{\n\n}</pre>"), "\n\n	") ];                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_insert/docInsert.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Mongol_docInsert.events({                                                                                     // 1
  'click .Mongol_docMenu_insert': function (e, t) {                                                                    // 2
                                                                                                                       // 3
    var CollectionName = String(this),                                                                                 // 4
        newDataID      = "Mongol_" + String(this) + "_newEntry",                                                       // 5
        newData        = document.getElementById(newDataID).textContent,                                               // 6
        newObject      = Mongol.parse(newData);                                                                        // 7
                                                                                                                       // 8
    if (newObject) {                                                                                                   // 9
      Meteor.call('Mongol_insert', CollectionName, newObject, function (error, result) {                               // 10
        if (!error) {                                                                                                  // 11
          sessionKey = "Mongol_" + CollectionName;                                                                     // 12
          MeteorToysDict.set(sessionKey, 0);                                                                           // 13
          alert("Document successfully inserted.");                                                                    // 14
          t.$("#Mongol_" + CollectionName + "_newEntry").html("{<br><br>}");                                           // 15
        } else {                                                                                                       // 16
          Mongol.error("insert");                                                                                      // 17
        }                                                                                                              // 18
      });                                                                                                              // 19
    }                                                                                                                  // 20
                                                                                                                       // 21
  }                                                                                                                    // 22
});                                                                                                                    // 23
                                                                                                                       // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/_component/template.component.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_Component");                                                                              // 2
Template["Mongol_Component"] = new Template("Template.Mongol_Component", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "Mongol_row ", Spacebars.mustache(view.lookup("active")) ];                                             // 7
    },                                                                                                                 // 8
    id: function() {                                                                                                   // 9
      return [ "Mongol_c", Spacebars.mustache(view.lookup("name")) ];                                                  // 10
    }                                                                                                                  // 11
  }, "\n		", Blaze._InOuterTemplateScope(view, function() {                                                            // 12
    return Spacebars.include(function() {                                                                              // 13
      return Spacebars.call(view.templateContentBlock);                                                                // 14
    });                                                                                                                // 15
  }), "\n	");                                                                                                          // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/_component/component.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x40e8=["\x4D\x6F\x6E\x67\x6F\x6C","\x63\x6C\x6F\x73\x65","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x75\x72\x72\x65\x6E\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x73\x65\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x64\x69\x74\x4D\x6F\x64\x65","\x77\x68\x69\x63\x68","\x6E\x61\x6D\x65","\x65\x71\x75\x61\x6C\x73","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x70\x72\x65\x76\x69\x65\x77","\x65\x76\x65\x6E\x74\x73","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x6F\x77\x5F\x65\x78\x70\x61\x6E\x64","\x68\x65\x6C\x70\x65\x72\x73"];window[_0x40e8[0]]={};window[_0x40e8[0]][_0x40e8[1]]=function(){MeteorToysDict[_0x40e8[3]](_0x40e8[2],null);MeteorToysDict[_0x40e8[3]](_0x40e8[4],false);};Template[_0x40e8[11]][_0x40e8[10]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x6F\x77":function(_0xefabx1,_0xefabx2){if(_0xefabx1[_0x40e8[5]]===1){if(MeteorToysDict[_0x40e8[7]](_0x40e8[2],this[_0x40e8[6]])){MeteorToysDict[_0x40e8[3]](_0x40e8[2],null)}else {MeteorToysDict[_0x40e8[3]](_0x40e8[2],this[_0x40e8[6]])};MeteorToysDict[_0x40e8[3]](_0x40e8[4],false);}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x56\x69\x65\x77":function(_0xefabx1){_0xefabx1[_0x40e8[8]]()},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x20\x2E\x4D\x6F\x6E\x67\x6F\x6C\x5F\x72\x6F\x77":function(){MeteorToysDict[_0x40e8[3]](_0x40e8[9],this[_0x40e8[6]])}});Template[_0x40e8[11]][_0x40e8[13]]({active:function(){if(MeteorToysDict[_0x40e8[7]](_0x40e8[2],this[_0x40e8[6]])){return _0x40e8[12]}}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/template.main.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol");                                                                                        // 2
Template["Mongol"] = new Template("Template.Mongol", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "Mongol",                                                                                                      // 6
    "class": function() {                                                                                              // 7
      return [ Spacebars.mustache(view.lookup("active")), " MeteorToys MeteorToys_hide_Mongol MeteorToysReset" ];      // 8
    },                                                                                                                 // 9
    oncontextmenu: "Mongol.close(); return false;"                                                                     // 10
  }, "\n\n		", Blaze.If(function() {                                                                                   // 11
    return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                              // 12
  }, function() {                                                                                                      // 13
    return [ "\n		\n			", Spacebars.include(view.lookupTemplate("Mongol_header_pro")), "\n			", Spacebars.include(view.lookupTemplate("Mongol_account")), "\n\n			", Blaze.Each(function() {
      return Spacebars.call(view.lookup("Mongol_collections"));                                                        // 15
    }, function() {                                                                                                    // 16
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_collection")), "\n			" ];                       // 17
    }, function() {                                                                                                    // 18
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_collection_notFound")), "\n			" ];              // 19
    }), "\n\n	", HTML.Comment(' 		{{#each Mongol_local}}\n				{{> Mongol_collection xf="local"}}\n			{{/each}} '), "\n\n\n			", Spacebars.include(view.lookupTemplate("Mongol_trash")), "\n\n		" ];
  }, function() {                                                                                                      // 21
    return [ "\n\n			", Spacebars.include(view.lookupTemplate("Mongol_header")), "\n			", Spacebars.include(view.lookupTemplate("Mongol_account")), "\n			", Spacebars.include(view.lookupTemplate("Mongol_subscriptions")), "\n			", Blaze.Each(function() {
      return Spacebars.call(view.lookup("Mongol_collections"));                                                        // 23
    }, function() {                                                                                                    // 24
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_collection")), "\n			" ];                       // 25
    }, function() {                                                                                                    // 26
      return [ "\n				", Spacebars.include(view.lookupTemplate("Mongol_collection_notFound")), "\n			" ];              // 27
    }), "\n\n\n\n\n		" ];                                                                                              // 28
  }), "\n\n	");                                                                                                        // 29
}));                                                                                                                   // 30
                                                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/main.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _0x3f94=["\x64\x65\x74\x65\x63\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x68\x69\x64\x65\x4D\x65\x74\x65\x6F\x72","\x68\x69\x64\x65\x56\x65\x6C\x6F\x63\x69\x74\x79","\x68\x69\x64\x65\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x73\x74\x61\x72\x74\x75\x70","\x4D\x6F\x6E\x67\x6F\x6C","\x67\x65\x74","\x63\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E\x73","\x77\x69\x74\x68\x6F\x75\x74","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x63\x75\x72\x72\x65\x6E\x74\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x65\x78\x70\x61\x6E\x64","\x68\x65\x6C\x70\x65\x72\x73"];Meteor[_0x3f94[6]](function(){Mongol[_0x3f94[0]]();MeteorToysDict=Package[_0x3f94[2]][_0x3f94[1]];Mongol[_0x3f94[3]]();Mongol[_0x3f94[4]]();Mongol[_0x3f94[5]]();});Template[_0x3f94[7]][_0x3f94[13]]({Mongol_collections:function(){var _0xa815x1=MeteorToysDict[_0x3f94[8]](_0x3f94[7]);return _0xa815x1&&_[_0x3f94[10]](_0xa815x1[_0x3f94[9]],null)||[];},active:function(){var _0xa815x2=MeteorToysDict[_0x3f94[8]](_0x3f94[11]);if(_0xa815x2){return _0x3f94[12]};}});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_controls/template.docControls.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Mongol_docControls");                                                                            // 2
Template["Mongol_docControls"] = new Template("Template.Mongol_docControls", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("active"));                                                                      // 6
  }, function() {                                                                                                      // 7
    return [ "\n		\n		", HTML.DIV({                                                                                    // 8
      "class": function() {                                                                                            // 9
        return [ "Mongol_docMenu ", Spacebars.mustache(view.lookup("Mongol_docMenu_editing")) ];                       // 10
      }                                                                                                                // 11
    }, "\n			", Blaze.If(function() {                                                                                  // 12
      return Spacebars.call(view.lookup("account"));                                                                   // 13
    }, function() {                                                                                                    // 14
      return [ "\n				", HTML.DIV({                                                                                    // 15
        "class": "Mongol_docBar1"                                                                                      // 16
      }, "\n					", Blaze.If(function() {                                                                              // 17
        return Spacebars.call(view.lookup("editing"));                                                                 // 18
      }, function() {                                                                                                  // 19
        return [ "\n						", HTML.DIV({                                                                                // 20
          "class": "Mongol_edit_title"                                                                                 // 21
        }, "Update Document"), "\n						", HTML.DIV({                                                                  // 22
          "class": "MeteorToys_action Mongol_edit_save"                                                                // 23
        }, "Save"), "\n						", HTML.DIV({                                                                             // 24
          "class": "MeteorToys_action Mongol_edit_cancel"                                                              // 25
        }, "Cancel"), "\n					" ];                                                                                     // 26
      }, function() {                                                                                                  // 27
        return [ "	\n						\n                        ", HTML.Comment("For some reason, the method in place does not work for this\n                        Commenting out for now"), "\n                        ", HTML.DIV({
          "class": "MeteorToys_action Mongol_m_edit Mongol_m_updateAccount"                                            // 29
        }, "Update"), "\n						\n						", HTML.Comment(" &nbsp;Currently Read-Only "), "\n						", HTML.DIV({          // 30
          "class": "MeteorToys_action Mongol_m_signout"                                                                // 31
        }, "Sign Out"), "\n                        \n					" ];                                                         // 32
      }), "\n				"), "\n			" ];                                                                                        // 33
    }, function() {                                                                                                    // 34
      return [ "\n				", HTML.DIV({                                                                                    // 35
        "class": "Mongol_docBar1"                                                                                      // 36
      }, "\n					", Blaze.If(function() {                                                                              // 37
        return Spacebars.call(view.lookup("editing"));                                                                 // 38
      }, function() {                                                                                                  // 39
        return [ "\n						", HTML.DIV({                                                                                // 40
          "class": "Mongol_edit_title"                                                                                 // 41
        }, "Update Document"), "\n						", HTML.DIV({                                                                  // 42
          "class": "MeteorToys_action Mongol_edit_save"                                                                // 43
        }, "Save"), "\n						", HTML.DIV({                                                                             // 44
          "class": "MeteorToys_action Mongol_edit_cancel"                                                              // 45
        }, "Cancel"), "\n					" ];                                                                                     // 46
      }, function() {                                                                                                  // 47
        return [ "\n						", HTML.DIV({                                                                                // 48
          "class": "MeteorToys_action Mongol_m_edit"                                                                   // 49
        }, "Update"), "\n						", HTML.DIV({                                                                           // 50
          "class": "MeteorToys_action Mongol_m_new"                                                                    // 51
        }, "Duplicate"), "\n						", HTML.DIV({                                                                        // 52
          "class": "MeteorToys_action Mongol_m_delete"                                                                 // 53
        }, "Remove"), "\n						", HTML.DIV({                                                                           // 54
          "class": function() {                                                                                        // 55
            return [ "MeteorToys_action ", Spacebars.mustache(view.lookup("disable")), " Mongol_m_right" ];            // 56
          }                                                                                                            // 57
        }, HTML.CharRef({                                                                                              // 58
          html: "&rsaquo;",                                                                                            // 59
          str: "›"                                                                                                     // 60
        })), "\n						", HTML.DIV({                                                                                    // 61
          "class": function() {                                                                                        // 62
            return [ "MeteorToys_action ", Spacebars.mustache(view.lookup("disable")), " Mongol_m_left" ];             // 63
          }                                                                                                            // 64
        }, HTML.CharRef({                                                                                              // 65
          html: "&lsaquo;",                                                                                            // 66
          str: "‹"                                                                                                     // 67
        })), "\n					" ];                                                                                              // 68
      }), "\n				"), "\n			" ];                                                                                        // 69
    }), "	\n		"), "\n\n	" ];                                                                                           // 70
  }, function() {                                                                                                      // 71
    return [ "\n\n		", HTML.DIV({                                                                                      // 72
      "class": "Mongol_docMenu"                                                                                        // 73
    }, "\n			", HTML.DIV({                                                                                             // 74
      "class": "Mongol_docBar1"                                                                                        // 75
    }, "\n				", HTML.CharRef({                                                                                        // 76
      html: "&nbsp;",                                                                                                  // 77
      str: " "                                                                                                         // 78
    }), "\n			"), "\n		"), "\n\n	" ];                                                                                  // 79
  });                                                                                                                  // 80
}));                                                                                                                   // 81
                                                                                                                       // 82
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/msavin_mongol/client/doc_controls/docControls.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
// needs to be re-thought                                                                                              // 2
                                                                                                                       // 3
// Strip out functions in case documents have had methods added to them                                                // 4
                                                                                                                       // 5
Mongol.validateDocument = function (doc) {                                                                             // 6
  var validatedDoc = {};                                                                                               // 7
  _.each(doc, function (val, key) {                                                                                    // 8
    if (_.isFunction(val)) {                                                                                           // 9
      return;                                                                                                          // 10
    }                                                                                                                  // 11
    validatedDoc[key] = val;                                                                                           // 12
  });                                                                                                                  // 13
  return validatedDoc;                                                                                                 // 14
}                                                                                                                      // 15
                                                                                                                       // 16
Mongol.inlineEditingTimer = null;                                                                                      // 17
                                                                                                                       // 18
Mongol.resetInlineEditingTimer = function() {                                                                          // 19
  if (Mongol.inlineEditingTimer) {                                                                                     // 20
	Meteor.clearTimeout(Mongol.inlineEditingTimer);                                                                       // 21
  }                                                                                                                    // 22
  MeteorToysDict.set('Mongol_noInlineEditing', true);                                                                  // 23
  Mongol.inlineEditingTimer = Meteor.setTimeout(function () {                                                          // 24
    MeteorToysDict.set('Mongol_noInlineEditing', false);                                                               // 25
  },300);                                                                                                              // 26
}                                                                                                                      // 27
                                                                                                                       // 28
Template.Mongol_docControls.events({                                                                                   // 29
  'click .Mongol_m_new': function() {                                                                                  // 30
                                                                                                                       // 31
    CollectionName    = MeteorToysDict.get("Mongol_currentCollection"),                                                // 32
    DocumentPosition  = MeteorToysDict.get("Mongol_" + String(this)),                                                  // 33
    CurrentCollection = Mongol.Collection(CollectionName).find({}, {transform: null}).fetch(),                         // 34
    CollectionCount   = Mongol.Collection(CollectionName).find().count(),                                              // 35
    CurrentDocument   = CurrentCollection[DocumentPosition],                                                           // 36
    DocumentID        = CurrentDocument._id,                                                                           // 37
    sessionKey        = "Mongol_" + String(this),                                                                      // 38
    ValidatedCurrentDocument = Mongol.validateDocument(CurrentDocument);                                               // 39
                                                                                                                       // 40
    Meteor.call("Mongol_duplicate", CollectionName, ValidatedCurrentDocument._id, function(error, result) {            // 41
      if (!error) {                                                                                                    // 42
                                                                                                                       // 43
        if (Mongol.Collection(CollectionName).findOne(result)) {                                                       // 44
                                                                                                                       // 45
          // Get position of new document                                                                              // 46
          list  = Mongol.Collection(CollectionName).find({}, {transform: null}).fetch(),                               // 47
          docID = result,                                                                                              // 48
          currentDoc;                                                                                                  // 49
                                                                                                                       // 50
          docIndex = _.map(list, function(obj, index) {                                                                // 51
            if (obj._id === docID) {                                                                                   // 52
              currentDoc = index;                                                                                      // 53
            }                                                                                                          // 54
          })                                                                                                           // 55
                                                                                                                       // 56
          MeteorToysDict.set(sessionKey, Number(currentDoc));                                                          // 57
        }                                                                                                              // 58
                                                                                                                       // 59
      } else {                                                                                                         // 60
        Mongol.error("duplicate");                                                                                     // 61
      }                                                                                                                // 62
    });                                                                                                                // 63
                                                                                                                       // 64
                                                                                                                       // 65
                                                                                                                       // 66
  },                                                                                                                   // 67
  'click .Mongol_m_edit': function() {                                                                                 // 68
    MeteorToysDict.set("Mongol_editMode", true);                                                                       // 69
  },                                                                                                                   // 70
  'click .Mongol_m_delete': function() {                                                                               // 71
                                                                                                                       // 72
    var CollectionName = MeteorToysDict.get("Mongol_currentCollection"),                                               // 73
      sessionKey = "Mongol_" + String(this);                                                                           // 74
    DocumentPosition = MeteorToysDict.get(sessionKey),                                                                 // 75
      CurrentCollection = Mongol.Collection(CollectionName).find({}, {transform: null}).fetch(),                       // 76
      CollectionCount = Mongol.Collection(CollectionName).find().count();                                              // 77
                                                                                                                       // 78
    var CurrentDocument = CurrentCollection[DocumentPosition],                                                         // 79
      DocumentID = CurrentDocument._id;                                                                                // 80
                                                                                                                       // 81
                                                                                                                       // 82
                                                                                                                       // 83
    Meteor.call('Mongol_remove', CollectionName, DocumentID, function(error, result) {                                 // 84
                                                                                                                       // 85
      if (!error) {                                                                                                    // 86
        // Log the action                                                                                              // 87
        console.log("Removed " + DocumentID + " from " + CollectionName + ". Back-up below:");                         // 88
        console.log(CurrentDocument);                                                                                  // 89
                                                                                                                       // 90
        // Adjust the position                                                                                         // 91
        if (DocumentPosition >= CollectionCount - 1) {                                                                 // 92
          newPosition = DocumentPosition - 1;                                                                          // 93
          MeteorToysDict.set(sessionKey, newPosition);                                                                 // 94
        }                                                                                                              // 95
                                                                                                                       // 96
        if (MeteorToysDict.get(sessionKey) === -1) {                                                                   // 97
          MeteorToysDict.set(sessionKey, 0);                                                                           // 98
        }                                                                                                              // 99
                                                                                                                       // 100
                                                                                                                       // 101
      } else {                                                                                                         // 102
        Mongol.error("remove");                                                                                        // 103
      }                                                                                                                // 104
                                                                                                                       // 105
    });                                                                                                                // 106
                                                                                                                       // 107
                                                                                                                       // 108
                                                                                                                       // 109
  },                                                                                                                   // 110
  'click .Mongol_m_right': function(e,t) {                                                                             // 111
    // Verify that the button is not disabled                                                                          // 112
    if (!t.$('.Mongol_m_right').hasClass('Mongol_m_disabled')) {                                                       // 113
                                                                                                                       // 114
      // Disable inline editing for 0.3s for quick flick to next doc                                                   // 115
      Mongol.resetInlineEditingTimer();                                                                                // 116
	                                                                                                                      // 117
      // Grab the key                                                                                                  // 118
                                                                                                                       // 119
      var sessionKey = "Mongol_" + String(this);                                                                       // 120
      var CurrentDocument = MeteorToysDict.get(sessionKey);                                                            // 121
      var collectionName = String(this);                                                                               // 122
      var collectionVar = Mongol.Collection(collectionName);                                                           // 123
      var collectionCount = collectionVar.find().count() - 1;                                                          // 124
                                                                                                                       // 125
      if (CurrentDocument > collectionCount) {                                                                         // 126
        MeteorToysDict.set(sessionKey, 0)                                                                              // 127
        return;                                                                                                        // 128
      }                                                                                                                // 129
                                                                                                                       // 130
      if (collectionCount === CurrentDocument) {                                                                       // 131
        // Go back to document 1                                                                                       // 132
        MeteorToysDict.set(sessionKey, 0);                                                                             // 133
      } else {                                                                                                         // 134
        // Go to next document                                                                                         // 135
        var MongolDocNumber = MeteorToysDict.get(sessionKey) + 1;                                                      // 136
        MeteorToysDict.set(sessionKey, MongolDocNumber);                                                               // 137
      }                                                                                                                // 138
                                                                                                                       // 139
    }                                                                                                                  // 140
  },                                                                                                                   // 141
  'click .Mongol_m_left': function(e,t) {                                                                              // 142
                                                                                                                       // 143
    // Verify that the button is not disabled                                                                          // 144
    if (!t.$('.Mongol_m_left').hasClass('Mongol_m_disabled')) {                                                        // 145
                                                                                                                       // 146
      // Disable inline editing for 0.3s for quick flick to next doc                                                   // 147
      Mongol.resetInlineEditingTimer();                                                                                // 148
                                                                                                                       // 149
      // Grab the key                                                                                                  // 150
      sessionKey = "Mongol_" + String(this);                                                                           // 151
      // Get the document count                                                                                        // 152
      var CurrentDocument = MeteorToysDict.get(sessionKey);                                                            // 153
      var collectionName  = String(this);                                                                              // 154
      var collectionVar   = Mongol.Collection(collectionName);                                                         // 155
      var collectionCount = collectionVar.find().count() - 1;                                                          // 156
                                                                                                                       // 157
      if (CurrentDocument > collectionCount) {                                                                         // 158
        MeteorToysDict.set(sessionKey, collectionCount)                                                                // 159
        return;                                                                                                        // 160
      }                                                                                                                // 161
                                                                                                                       // 162
      if (MeteorToysDict.get(sessionKey) === 0) {                                                                      // 163
                                                                                                                       // 164
                                                                                                                       // 165
        // Set the key to last                                                                                         // 166
        MeteorToysDict.set(sessionKey, collectionCount)                                                                // 167
      } else {                                                                                                         // 168
        var MongolDocNumber = MeteorToysDict.get(sessionKey) - 1;                                                      // 169
        MeteorToysDict.set(sessionKey, MongolDocNumber);                                                               // 170
      }                                                                                                                // 171
                                                                                                                       // 172
    }                                                                                                                  // 173
                                                                                                                       // 174
  },                                                                                                                   // 175
  'click .Mongol_edit_save': function() {                                                                              // 176
                                                                                                                       // 177
    // Get current document to get its current state                                                                   // 178
    // We need to send this to the server so we know which fields are up for change                                    // 179
    // when applying the diffing algorithm                                                                             // 180
                                                                                                                       // 181
    var collectionName = (MeteorToysDict.equals("Mongol_currentCollection", "account_618")) ? "users" : String(this);  // 182
                                                                                                                       // 183
    if (MeteorToysDict.equals("Mongol_currentCollection", "account_618")) {                                            // 184
      var newData = Mongol.getDocumentUpdate("account_618");                                                           // 185
      var newObject = Mongol.parse(newData);                                                                           // 186
      var oldObject = Meteor.user();                                                                                   // 187
      // console.log(targetCollection);                                                                                // 188
      // console.log(newData);                                                                                         // 189
      // console.log(newObject);                                                                                       // 190
    } else {                                                                                                           // 191
      var sessionKey = "Mongol_" + collectionName;                                                                     // 192
      DocumentPosition = MeteorToysDict.get(sessionKey),                                                               // 193
      CurrentCollection = Mongol.Collection(collectionName).find({}, {transform: null}).fetch();                       // 194
      var newData =   Mongol.getDocumentUpdate(collectionName);                                                        // 195
      var newObject = Mongol.parse(newData);                                                                           // 196
      var oldObject = CurrentCollection[DocumentPosition];                                                             // 197
    }                                                                                                                  // 198
                                                                                                                       // 199
    // console.log(newData);                                                                                           // 200
    // console.log(newObject);                                                                                         // 201
    // console.log(oldObject);                                                                                         // 202
                                                                                                                       // 203
    if (newObject) {                                                                                                   // 204
      Meteor.call("Mongol_update", collectionName, newObject, Mongol.validateDocument(oldObject), function(error, result) {
        if (!error) {                                                                                                  // 206
          MeteorToysDict.set('Mongol_editMode', null);                                                                 // 207
                                                                                                                       // 208
        } else {                                                                                                       // 209
          Mongol.error('update')                                                                                       // 210
        }                                                                                                              // 211
      });                                                                                                              // 212
    }                                                                                                                  // 213
  },                                                                                                                   // 214
  'click .Mongol_edit_cancel': function() {                                                                            // 215
    MeteorToysDict.set('Mongol_editMode', null);                                                                       // 216
  },                                                                                                                   // 217
  'click .Mongol_m_signout': function() {                                                                              // 218
    Meteor.logout();                                                                                                   // 219
    MeteorToysDict.set("Mongol_currentCollection", null);                                                              // 220
  },                                                                                                                   // 221
});                                                                                                                    // 222
                                                                                                                       // 223
                                                                                                                       // 224
Template.Mongol_docControls.helpers({                                                                                  // 225
  disable: function() {                                                                                                // 226
    var sessionKey = "Mongol_" + String(this);                                                                         // 227
    var CurrentDocument = MeteorToysDict.get(sessionKey);                                                              // 228
    var collectionName = String(this);                                                                                 // 229
    var collectionVar = Mongol.Collection(collectionName);                                                             // 230
    var collectionCount = collectionVar.find().count();                                                                // 231
                                                                                                                       // 232
    if (CurrentDocument >= 1) {                                                                                        // 233
      return;                                                                                                          // 234
    }                                                                                                                  // 235
                                                                                                                       // 236
    if (collectionCount === 1) {                                                                                       // 237
      return "MeteorToys_disabled";                                                                                    // 238
    }                                                                                                                  // 239
                                                                                                                       // 240
  },                                                                                                                   // 241
  editing: function() {                                                                                                // 242
    var editing = MeteorToysDict.get('Mongol_editMode');                                                               // 243
    return editing;                                                                                                    // 244
  },                                                                                                                   // 245
  editing_class: function() {                                                                                          // 246
    var edit = MeteorToysDict.get('Mongol_editMode');                                                                  // 247
    if (edit) {                                                                                                        // 248
      return "Mongol_m_wrapper_expand"                                                                                 // 249
    }                                                                                                                  // 250
  },                                                                                                                   // 251
  Mongol_docMenu_editing: function() {                                                                                 // 252
    var editMode = MeteorToysDict.get("Mongol_editMode");                                                              // 253
                                                                                                                       // 254
    if (editMode) {                                                                                                    // 255
      return "Mongol_docMenu_editing";                                                                                 // 256
    }                                                                                                                  // 257
                                                                                                                       // 258
  },                                                                                                                   // 259
  active: function() {                                                                                                 // 260
                                                                                                                       // 261
    var current = MeteorToysDict.get("Mongol_currentCollection");                                                      // 262
                                                                                                                       // 263
    // return true if collection name matches                                                                          // 264
    if (current === String(this)) {                                                                                    // 265
      return true;                                                                                                     // 266
    }                                                                                                                  // 267
                                                                                                                       // 268
    // return true if it's a user account                                                                              // 269
    if (current === "account_618") {                                                                                   // 270
      return true;                                                                                                     // 271
    }                                                                                                                  // 272
                                                                                                                       // 273
  },                                                                                                                   // 274
  account: function() {                                                                                                // 275
                                                                                                                       // 276
    var currentCollection = MeteorToysDict.get("Mongol_currentCollection");                                            // 277
    if (currentCollection === "account_618") {                                                                         // 278
      return true                                                                                                      // 279
    } else {                                                                                                           // 280
      return false                                                                                                     // 281
    }                                                                                                                  // 282
  },                                                                                                                   // 283
                                                                                                                       // 284
});                                                                                                                    // 285
                                                                                                                       // 286
// Will possibly be used in augmented document udpate UI                                                               // 287
/*Template.Mongol_docViewer.events({                                                                                   // 288
'click .Mongol_string' : function (evt,tmpl) {                                                                         // 289
var field = $(evt.target).prevAll(".Mongol_key:first").text().slice(1,-2);                                             // 290
MeteorToysDict.set('Mongol_inlineEdit',true);                                                                          // 291
Tracker.flush();                                                                                                       // 292
// Do something to trigger the editable text element                                                                   // 293
}                                                                                                                      // 294
});*/                                                                                                                  // 295
                                                                                                                       // 296
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['msavin:mongol'] = {}, {
  Mongol: Mongol
});

})();
