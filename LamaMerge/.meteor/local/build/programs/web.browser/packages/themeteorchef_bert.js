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
var Session = Package.session.Session;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Bert;

var require = meteorInstall({"node_modules":{"meteor":{"themeteorchef:bert":{"templates":{"template.bert-alert.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/themeteorchef_bert/templates/template.bert-alert.js                                   //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  // 1
Template.__checkName("bertAlert");                                                                // 2
Template["bertAlert"] = new Template("Template.bertAlert", (function() {                          // 3
  var view = this;                                                                                // 4
  return HTML.DIV({                                                                               // 5
    "class": function() {                                                                         // 6
      return [ "bert-alert ", Spacebars.mustache(Spacebars.dot(view.lookup("alert"), "style")), " ", Spacebars.mustache(Spacebars.dot(view.lookup("alert"), "type")), " clearfix" ];
    }                                                                                             // 8
  }, "\n    ", HTML.DIV({                                                                         // 9
    "class": "bert-container"                                                                     // 10
  }, "\n      ", HTML.DIV({                                                                       // 11
    "class": "bert-gem"                                                                           // 12
  }, "\n        ", HTML.I({                                                                       // 13
    "class": function() {                                                                         // 14
      return [ "fa ", Spacebars.mustache(Spacebars.dot(view.lookup("alert"), "icon")) ];          // 15
    }                                                                                             // 16
  }), "\n      "), "\n      ", HTML.DIV({                                                         // 17
    "class": "bert-content"                                                                       // 18
  }, "\n        ", Blaze.If(function() {                                                          // 19
    return Spacebars.call(Spacebars.dot(view.lookup("alert"), "title"));                          // 20
  }, function() {                                                                                 // 21
    return HTML.H5(Blaze.View("lookup:alert.title", function() {                                  // 22
      return Spacebars.mustache(Spacebars.dot(view.lookup("alert"), "title"));                    // 23
    }));                                                                                          // 24
  }), "\n        ", HTML.P(Blaze.View("lookup:alert.message", function() {                        // 25
    return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(view.lookup("alert"), "message")));
  })), "\n      "), "\n    "), "\n  ");                                                           // 27
}));                                                                                              // 28
                                                                                                  // 29
////////////////////////////////////////////////////////////////////////////////////////////////////

},"bert-alert.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/themeteorchef_bert/templates/bert-alert.js                                            //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
Template.bertAlert.helpers({                                                                      // 1
  alert: function () {                                                                            // 2
    function alert() {                                                                            //
      return Session.get('bertAlert');                                                            // 2
    }                                                                                             //
                                                                                                  //
    return alert;                                                                                 //
  }()                                                                                             //
});                                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.body.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/themeteorchef_bert/templates/template.body.js                                         //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  // 1
Template.body.addContent((function() {                                                            // 2
  var view = this;                                                                                // 3
  return Spacebars.include(view.lookupTemplate("bertAlert"));                                     // 4
}));                                                                                              // 5
Meteor.startup(Template.body.renderToDocument);                                                   // 6
                                                                                                  // 7
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bert.js":["babel-runtime/helpers/typeof","babel-runtime/helpers/classCallCheck",function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/themeteorchef_bert/bert.js                                                            //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _typeof2 = require('babel-runtime/helpers/typeof');                                           //
                                                                                                  //
var _typeof3 = _interopRequireDefault(_typeof2);                                                  //
                                                                                                  //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                           //
                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                  //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
                                                                                                  //
var BertAlert = function () {                                                                     //
  function BertAlert() {                                                                          // 2
    (0, _classCallCheck3['default'])(this, BertAlert);                                            //
                                                                                                  //
    this.styles = ['fixed-top', 'fixed-bottom', 'growl-top-left', 'growl-top-right', 'growl-bottom-left', 'growl-bottom-right'];
                                                                                                  //
    this.types = ['default', 'success', 'info', 'warning', 'danger'];                             // 12
                                                                                                  //
    this.icons = {                                                                                // 20
      'default': 'fa-bell',                                                                       // 21
      success: 'fa-check',                                                                        // 22
      info: 'fa-info',                                                                            // 23
      warning: 'fa-warning',                                                                      // 24
      danger: 'fa-remove'                                                                         // 25
    };                                                                                            //
                                                                                                  //
    this.defaults = {                                                                             // 28
      hideDelay: 3500,                                                                            // 29
      style: 'fixed-top',                                                                         // 30
      type: 'default'                                                                             // 31
    };                                                                                            //
  }                                                                                               //
                                                                                                  //
  BertAlert.prototype.alert = function () {                                                       // 1
    function alert() {                                                                            //
      var _this = this,                                                                           //
          _arguments = arguments;                                                                 //
                                                                                                  //
      if (this.isVisible()) {                                                                     // 36
        this.hide();                                                                              // 37
        setTimeout(function () {                                                                  // 38
          _this.handleAlert(_arguments);                                                          // 38
        }, 300);                                                                                  //
      } else {                                                                                    //
        this.handleAlert(arguments);                                                              // 40
      }                                                                                           //
    }                                                                                             //
                                                                                                  //
    return alert;                                                                                 //
  }();                                                                                            //
                                                                                                  //
  BertAlert.prototype.isVisible = function () {                                                   // 1
    function isVisible() {                                                                        //
      return $('.bert-alert').hasClass('show');                                                   // 45
    }                                                                                             //
                                                                                                  //
    return isVisible;                                                                             //
  }();                                                                                            //
                                                                                                  //
  BertAlert.prototype.handleAlert = function () {                                                 // 1
    function handleAlert(alert) {                                                                 //
      var _this2 = this;                                                                          //
                                                                                                  //
      this.registerClickHandler();                                                                // 49
      this.setBertOnSession(alert);                                                               // 50
      setTimeout(function () {                                                                    // 51
        _this2.show();                                                                            // 51
      }, 20);                                                                                     //
      this.bertTimer();                                                                           // 52
    }                                                                                             //
                                                                                                  //
    return handleAlert;                                                                           //
  }();                                                                                            //
                                                                                                  //
  BertAlert.prototype.registerClickHandler = function () {                                        // 1
    function registerClickHandler() {                                                             //
      var _this3 = this;                                                                          //
                                                                                                  //
      $('.bert-alert').off('click');                                                              // 56
      $('.bert-alert').on('click', function () {                                                  // 57
        _this3.hide();                                                                            // 57
      });                                                                                         //
    }                                                                                             //
                                                                                                  //
    return registerClickHandler;                                                                  //
  }();                                                                                            //
                                                                                                  //
  BertAlert.prototype.bertTimer = function () {                                                   // 1
    function bertTimer() {                                                                        //
      var _this4 = this;                                                                          //
                                                                                                  //
      clearTimeout(this.timer);                                                                   // 61
      this.timer = setTimeout(function () {                                                       // 62
        _this4.hide();                                                                            // 62
      }, this.defaults.hideDelay);                                                                //
      return this.timer;                                                                          // 63
    }                                                                                             //
                                                                                                  //
    return bertTimer;                                                                             //
  }();                                                                                            //
                                                                                                  //
  BertAlert.prototype.show = function () {                                                        // 1
    function show() {                                                                             //
      $('.bert-alert').addClass('show').delay(25).queue(function () {                             // 67
        $('.bert-alert').addClass('animate').dequeue();                                           // 68
      });                                                                                         //
    }                                                                                             //
                                                                                                  //
    return show;                                                                                  //
  }();                                                                                            //
                                                                                                  //
  BertAlert.prototype.hide = function () {                                                        // 1
    function hide() {                                                                             //
      $('.bert-alert').removeClass('animate');                                                    // 73
      setTimeout(function () {                                                                    // 74
        $('.bert-alert').removeClass('show');                                                     // 75
        Session.set('bertAlert', null);                                                           // 76
      }, 300);                                                                                    //
    }                                                                                             //
                                                                                                  //
    return hide;                                                                                  //
  }();                                                                                            //
                                                                                                  //
  BertAlert.prototype.setBertOnSession = function () {                                            // 1
    function setBertOnSession(alert) {                                                            //
      if ((0, _typeof3['default'])(alert[0]) === 'object') {                                      // 81
        var type = alert[0].type || this.defaults.type;                                           // 82
                                                                                                  //
        Session.set('bertAlert', {                                                                // 84
          title: alert[0].title || "",                                                            // 85
          message: alert[0].message || "",                                                        // 86
          type: type,                                                                             // 87
          style: alert[0].style || this.defaults.style,                                           // 88
          icon: alert[0].icon || this.icons[type]                                                 // 89
        });                                                                                       //
      } else {                                                                                    //
        var _type = alert[1] || this.defaults.type;                                               // 92
                                                                                                  //
        Session.set('bertAlert', {                                                                // 94
          message: alert[0] || "",                                                                // 95
          type: _type,                                                                            // 96
          style: alert[2] || this.defaults.style,                                                 // 97
          icon: alert[3] || this.icons[_type]                                                     // 98
        });                                                                                       //
      }                                                                                           //
    }                                                                                             //
                                                                                                  //
    return setBertOnSession;                                                                      //
  }();                                                                                            //
                                                                                                  //
  return BertAlert;                                                                               //
}();                                                                                              //
                                                                                                  //
Bert = new BertAlert();                                                                           // 104
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json",".html",".scss"]});
require("./node_modules/meteor/themeteorchef:bert/templates/template.bert-alert.js");
require("./node_modules/meteor/themeteorchef:bert/templates/bert-alert.js");
require("./node_modules/meteor/themeteorchef:bert/templates/template.body.js");
require("./node_modules/meteor/themeteorchef:bert/bert.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['themeteorchef:bert'] = {}, {
  Bert: Bert
});

})();
