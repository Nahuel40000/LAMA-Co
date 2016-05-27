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
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Session = Package.session.Session;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MeteorToysData, ToyKitData, ToyKit, password, email, MeteorToys, quote, MeteorToysDict, MeteorToys_JSON, data, keys, temp, em, pw, name, pixels, current, position, coordinate, self, MeteorToysNotifications, MeteorToysNotifyDict, Note, Counter, Data, item, NotifyClose, NotifyInternal;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/meteortoys_toykit/lib/collections.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _0x97e4=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x41\x75\x74\x6F\x50\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x45\x6D\x61\x69\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x52\x65\x73\x75\x6C\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x54\x68\x72\x6F\x74\x74\x6C\x65","\x61\x6C\x6C\x6F\x77","\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x6F\x6E\x67\x6F\x6C","\x69\x73\x53\x65\x72\x76\x65\x72","\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x41\x75\x74\x6F\x50\x75\x62","\x45\x6D\x61\x69\x6C","\x52\x65\x73\x75\x6C\x74"];MeteorToysData={"\x49\x6D\x70\x65\x72\x73\x6F\x6E\x61\x74\x65": new Mongo.Collection(_0x97e4[0]),"\x4A\x65\x74\x53\x65\x74\x74\x65\x72": new Mongo.Collection(_0x97e4[1]),"\x4D\x6F\x6E\x67\x6F\x6C": new Mongo.Collection(_0x97e4[2]),"\x41\x75\x74\x6F\x50\x75\x62": new Mongo.Collection(_0x97e4[3]),"\x45\x6D\x61\x69\x6C": new Mongo.Collection(_0x97e4[4]),"\x52\x65\x73\x75\x6C\x74": new Mongo.Collection(_0x97e4[5]),"\x54\x68\x72\x6F\x74\x74\x6C\x65": new Mongo.Collection(_0x97e4[6])};MeteorToysData[_0x97e4[8]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x97e4[9]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x97e4[10]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});if(Meteor[_0x97e4[11]]){MeteorToysData[_0x97e4[12]]= new Mongo.Collection(_0x97e4[13])};MeteorToysData[_0x97e4[14]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x97e4[15]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});MeteorToysData[_0x97e4[16]][_0x97e4[7]]({insert:function(){return true},remove:function(){return true},update:function(){return true}});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/meteortoys_toykit/client/template.main.js                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("MeteorToys");                                                                                  // 2
Template["MeteorToys"] = new Template("Template.MeteorToys", (function() {                                           // 3
  var view = this;                                                                                                   // 4
  return [ Blaze.If(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("MeteorToys"));                                                                // 6
  }, function() {                                                                                                    // 7
    return [ Blaze.If(function() {                                                                                   // 8
      return Spacebars.call(view.lookup("MeteorToys_Pro"));                                                          // 9
    }, function() {                                                                                                  // 10
      return [ Spacebars.include(view.lookupTemplate("MeteorToys_tooltip")), HTML.DIV({                              // 11
        "class": "MeteorToys_orbs MeteorToysReset"                                                                   // 12
      }, Blaze.Each(function() {                                                                                     // 13
        return Spacebars.call(view.lookup("MeteorToy"));                                                             // 14
      }, function() {                                                                                                // 15
        return Blaze._TemplateWith(function() {                                                                      // 16
          return {                                                                                                   // 17
            template: Spacebars.call(view.lookup("."))                                                               // 18
          };                                                                                                         // 19
        }, function() {                                                                                              // 20
          return Spacebars.include(function() {                                                                      // 21
            return Spacebars.call(Template.__dynamic);                                                               // 22
          });                                                                                                        // 23
        });                                                                                                          // 24
      }), Blaze.Each(function() {                                                                                    // 25
        return Spacebars.call(view.lookup("MeteorToy_addon"));                                                       // 26
      }, function() {                                                                                                // 27
        return Blaze._TemplateWith(function() {                                                                      // 28
          return {                                                                                                   // 29
            template: Spacebars.call(view.lookup("."))                                                               // 30
          };                                                                                                         // 31
        }, function() {                                                                                              // 32
          return Spacebars.include(function() {                                                                      // 33
            return Spacebars.call(Template.__dynamic);                                                               // 34
          });                                                                                                        // 35
        });                                                                                                          // 36
      })) ];                                                                                                         // 37
    }, function() {                                                                                                  // 38
      return HTML.DIV({                                                                                              // 39
        "class": "MeteorToys_orbs MeteorToysReset"                                                                   // 40
      }, Blaze._TemplateWith(function() {                                                                            // 41
        return {                                                                                                     // 42
          template: Spacebars.call(view.lookup("all"))                                                               // 43
        };                                                                                                           // 44
      }, function() {                                                                                                // 45
        return Spacebars.include(function() {                                                                        // 46
          return Spacebars.call(Template.__dynamic);                                                                 // 47
        });                                                                                                          // 48
      }), Blaze.Each(function() {                                                                                    // 49
        return Spacebars.call(view.lookup("MeteorToy_addon"));                                                       // 50
      }, function() {                                                                                                // 51
        return Blaze._TemplateWith(function() {                                                                      // 52
          return {                                                                                                   // 53
            template: Spacebars.call(view.lookup("."))                                                               // 54
          };                                                                                                         // 55
        }, function() {                                                                                              // 56
          return Spacebars.include(function() {                                                                      // 57
            return Spacebars.call(Template.__dynamic);                                                               // 58
          });                                                                                                        // 59
        });                                                                                                          // 60
      }));                                                                                                           // 61
    }), Blaze.Each(function() {                                                                                      // 62
      return Spacebars.call(view.lookup("MeteorToysPackage"));                                                       // 63
    }, function() {                                                                                                  // 64
      return Blaze._TemplateWith(function() {                                                                        // 65
        return {                                                                                                     // 66
          template: Spacebars.call(view.lookup("."))                                                                 // 67
        };                                                                                                           // 68
      }, function() {                                                                                                // 69
        return Spacebars.include(function() {                                                                        // 70
          return Spacebars.call(Template.__dynamic);                                                                 // 71
        });                                                                                                          // 72
      });                                                                                                            // 73
    }) ];                                                                                                            // 74
  }), Spacebars.include(view.lookupTemplate("MeteorToys_notification_widget")) ];                                    // 75
}));                                                                                                                 // 76
                                                                                                                     // 77
Template.__checkName("MeteorToys_basic");                                                                            // 78
Template["MeteorToys_basic"] = new Template("Template.MeteorToys_basic", (function() {                               // 79
  var view = this;                                                                                                   // 80
  return Blaze._TemplateWith(function() {                                                                            // 81
    return {                                                                                                         // 82
      name: Spacebars.call("MeteorToys_basic")                                                                       // 83
    };                                                                                                               // 84
  }, function() {                                                                                                    // 85
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                          // 86
      return [ HTML.DIV({                                                                                            // 87
        "class": "MeteorToys_sub_header MeteorToys-background-overlay1"                                              // 88
      }, HTML.DIV({                                                                                                  // 89
        "class": "MeteorToys_name"                                                                                   // 90
      }, "Activate Meteor Toys")), HTML.DIV({                                                                        // 91
        "class": "MeteorToys_sub_content"                                                                            // 92
      }, HTML.FORM(HTML.DIV({                                                                                        // 93
        "class": "MeteorToys_row"                                                                                    // 94
      }, HTML.INPUT({                                                                                                // 95
        id: "meteortoyscadf"                                                                                         // 96
      }), HTML.DIV({                                                                                                 // 97
        "class": "MeteorToys_row_name"                                                                               // 98
      }, "Email")), HTML.DIV({                                                                                       // 99
        "class": "MeteorToys_row"                                                                                    // 100
      }, HTML.INPUT({                                                                                                // 101
        id: "meteortoyspass"                                                                                         // 102
      }), HTML.DIV({                                                                                                 // 103
        "class": "MeteorToys_row_name"                                                                               // 104
      }, "Serial")), HTML.INPUT({                                                                                    // 105
        type: "submit",                                                                                              // 106
        value: "Activate",                                                                                           // 107
        style: "margin-top: -4px"                                                                                    // 108
      }), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.BR(), HTML.DIV({                    // 109
        style: "height:10px;"                                                                                        // 110
      }), "Experience the next level", HTML.BR(), " of Mongol and JetSetter. ", HTML.BR(), HTML.A({                  // 111
        href: "http://bit.ly/1FqdsPM"                                                                                // 112
      }, "See Meteor Toys ", HTML.CharRef({                                                                          // 113
        html: "&raquo;",                                                                                             // 114
        str: "»"                                                                                                     // 115
      })))) ];                                                                                                       // 116
    });                                                                                                              // 117
  });                                                                                                                // 118
}));                                                                                                                 // 119
                                                                                                                     // 120
Template.__checkName("MeteorToy");                                                                                   // 121
Template["MeteorToy"] = new Template("Template.MeteorToy", (function() {                                             // 122
  var view = this;                                                                                                   // 123
  return HTML.DIV({                                                                                                  // 124
    "class": function() {                                                                                            // 125
      return [ "MeteorToys_orb MeteorToys_hide_Orb ", Spacebars.mustache(view.lookup("type")), " ", Spacebars.mustache(view.lookup("state")) ];
    },                                                                                                               // 127
    id: function() {                                                                                                 // 128
      return Spacebars.mustache(view.lookup("name"));                                                                // 129
    },                                                                                                               // 130
    oncontextmenu: "Package['meteortoys:toykit'].MeteorToys.closeToy();return false;"                                // 131
  }, Blaze.If(function() {                                                                                           // 132
    return Spacebars.call(view.lookup("empty"));                                                                     // 133
  }, function() {                                                                                                    // 134
    return Blaze._InOuterTemplateScope(view, function() {                                                            // 135
      return Spacebars.include(function() {                                                                          // 136
        return Spacebars.call(view.templateContentBlock);                                                            // 137
      });                                                                                                            // 138
    });                                                                                                              // 139
  }, function() {                                                                                                    // 140
    return [ HTML.DIV({                                                                                              // 141
      "class": "MeteorToys_icon"                                                                                     // 142
    }), HTML.DIV({                                                                                                   // 143
      "class": "MeteorToys_orb_wrapper"                                                                              // 144
    }, Blaze.If(function() {                                                                                         // 145
      return Spacebars.call(view.lookup("load"));                                                                    // 146
    }, function() {                                                                                                  // 147
      return Blaze._InOuterTemplateScope(view, function() {                                                          // 148
        return Spacebars.include(function() {                                                                        // 149
          return Spacebars.call(view.templateContentBlock);                                                          // 150
        });                                                                                                          // 151
      });                                                                                                            // 152
    })) ];                                                                                                           // 153
  }));                                                                                                               // 154
}));                                                                                                                 // 155
                                                                                                                     // 156
Template.__checkName("MeteorToys_tooltip");                                                                          // 157
Template["MeteorToys_tooltip"] = new Template("Template.MeteorToys_tooltip", (function() {                           // 158
  var view = this;                                                                                                   // 159
  return Blaze.If(function() {                                                                                       // 160
    return Spacebars.call(view.lookup("display"));                                                                   // 161
  }, function() {                                                                                                    // 162
    return HTML.DIV({                                                                                                // 163
      "class": "MeteorToys_tooltip_wrapper MeteorToys_notification_fadeInUp",                                        // 164
      style: function() {                                                                                            // 165
        return [ "left: ", Spacebars.mustache(view.lookup("position")), "px;" ];                                     // 166
      }                                                                                                              // 167
    }, HTML.DIV({                                                                                                    // 168
      "class": "MeteorToys_tooltip "                                                                                 // 169
    }, HTML.DIV({                                                                                                    // 170
      "class": "MeteorToys_tooltip_arrow1"                                                                           // 171
    }), HTML.DIV({                                                                                                   // 172
      "class": "MeteorToys_tooltip_arrow2"                                                                           // 173
    }), Blaze.View("lookup:name", function() {                                                                       // 174
      return Spacebars.mustache(view.lookup("name"));                                                                // 175
    })));                                                                                                            // 176
  });                                                                                                                // 177
}));                                                                                                                 // 178
                                                                                                                     // 179
Template.__checkName("MeteorToys_notifications");                                                                    // 180
Template["MeteorToys_notifications"] = new Template("Template.MeteorToys_notifications", (function() {               // 181
  var view = this;                                                                                                   // 182
  return HTML.DIV({                                                                                                  // 183
    id: "MeteorToys_notifications",                                                                                  // 184
    "class": "MeteorToys_notifications MeteorToys_hide_Notifications",                                               // 185
    oncontextmenu: '$(".MeteorToys_notification").addClass("MeteorToys_Notifier_hideAnimation"); window.setTimeout(function() {Package["meteortoys:toykit"].MeteorToysNotifications.remove({});}, 300); return false;'
  }, Blaze.Each(function() {                                                                                         // 187
    return Spacebars.call(view.lookup("notifications"));                                                             // 188
  }, function() {                                                                                                    // 189
    return Blaze._TemplateWith(function() {                                                                          // 190
      return {                                                                                                       // 191
        template: Spacebars.call(view.lookup("type"))                                                                // 192
      };                                                                                                             // 193
    }, function() {                                                                                                  // 194
      return Spacebars.include(function() {                                                                          // 195
        return Spacebars.call(Template.__dynamic);                                                                   // 196
      });                                                                                                            // 197
    });                                                                                                              // 198
  }));                                                                                                               // 199
}));                                                                                                                 // 200
                                                                                                                     // 201
Template.__checkName("MeteorToys_notification_counter");                                                             // 202
Template["MeteorToys_notification_counter"] = new Template("Template.MeteorToys_notification_counter", (function() {
  var view = this;                                                                                                   // 204
  return HTML.DIV({                                                                                                  // 205
    "class": "MeteorToys_notification MeteorToys_notification_counter",                                              // 206
    id: function() {                                                                                                 // 207
      return [ "MeteorToys_", Spacebars.mustache(view.lookup("_id")) ];                                              // 208
    }                                                                                                                // 209
  }, HTML.DIV({                                                                                                      // 210
    "class": "MeteorToys_notification_symbol"                                                                        // 211
  }, HTML.STRONG(Blaze.View("lookup:data", function() {                                                              // 212
    return Spacebars.mustache(view.lookup("data"));                                                                  // 213
  }))), HTML.DIV({                                                                                                   // 214
    "class": "MeteorToys_notification_text"                                                                          // 215
  }, Blaze.View("lookup:text", function() {                                                                          // 216
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));                                               // 217
  })));                                                                                                              // 218
}));                                                                                                                 // 219
                                                                                                                     // 220
Template.__checkName("MeteorToys_notification_text");                                                                // 221
Template["MeteorToys_notification_text"] = new Template("Template.MeteorToys_notification_text", (function() {       // 222
  var view = this;                                                                                                   // 223
  return HTML.DIV({                                                                                                  // 224
    "class": "MeteorToys_notification",                                                                              // 225
    id: function() {                                                                                                 // 226
      return [ "MeteorToys_", Spacebars.mustache(view.lookup("_id")) ];                                              // 227
    }                                                                                                                // 228
  }, HTML.Raw('<div class="MeteorToys_notification_symbol"><strong></strong></div>'), HTML.DIV({                     // 229
    "class": "MeteorToys_notification_text"                                                                          // 230
  }, Blaze.View("lookup:text", function() {                                                                          // 231
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));                                               // 232
  })));                                                                                                              // 233
}));                                                                                                                 // 234
                                                                                                                     // 235
Template.__checkName("MeteorToys_notification_data");                                                                // 236
Template["MeteorToys_notification_data"] = new Template("Template.MeteorToys_notification_data", (function() {       // 237
  var view = this;                                                                                                   // 238
  return HTML.DIV({                                                                                                  // 239
    "class": function() {                                                                                            // 240
      return [ "MeteorToys_notification ", Spacebars.mustache(view.lookup("expanded")) ];                            // 241
    },                                                                                                               // 242
    id: function() {                                                                                                 // 243
      return [ "MeteorToys_", Spacebars.mustache(view.lookup("_id")) ];                                              // 244
    }                                                                                                                // 245
  }, HTML.Raw('<div class="MeteorToys_notification_symbol"><div class="MeteorToys_notification_triangle"></div></div>'), HTML.DIV({
    "class": "MeteorToys_notification_text"                                                                          // 247
  }, Blaze.View("lookup:text", function() {                                                                          // 248
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("text")));                                               // 249
  })), Blaze.If(function() {                                                                                         // 250
    return Spacebars.call(view.lookup("lazyload"));                                                                  // 251
  }, function() {                                                                                                    // 252
    return HTML.DIV({                                                                                                // 253
      "class": "MeteorToys_notification_data"                                                                        // 254
    }, HTML.PRE(Blaze.View("lookup:data", function() {                                                               // 255
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("data")));                                             // 256
    })));                                                                                                            // 257
  }));                                                                                                               // 258
}));                                                                                                                 // 259
                                                                                                                     // 260
Template.__checkName("MeteorToys_notification_widget");                                                              // 261
Template["MeteorToys_notification_widget"] = new Template("Template.MeteorToys_notification_widget", (function() {   // 262
  var view = this;                                                                                                   // 263
  return Blaze.If(function() {                                                                                       // 264
    return Spacebars.call(view.lookup("count"));                                                                     // 265
  }, function() {                                                                                                    // 266
    return HTML.DIV({                                                                                                // 267
      "class": "MeteorToys_notification_widget"                                                                      // 268
    }, Blaze.View("lookup:count", function() {                                                                       // 269
      return Spacebars.mustache(view.lookup("count"));                                                               // 270
    }));                                                                                                             // 271
  });                                                                                                                // 272
}));                                                                                                                 // 273
                                                                                                                     // 274
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/meteortoys_toykit/client/main.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _0x57c9=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2F\x54\x6F\x79\x4B\x69\x74","\x74\x6F\x67\x67\x6C\x65\x44\x69\x73\x70\x6C\x61\x79","\x64\x69\x73\x70\x6C\x61\x79","\x67\x65\x74","\x73\x65\x74","\x66\x6F\x63\x75\x73","\x73\x74\x61\x72\x74\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62\x6C\x69\x73\x68","\x73\x75\x62\x73\x63\x72\x69\x62\x65","\x61\x75\x74\x6F\x72\x75\x6E","\x62\x69\x6E\x64\x48\x6F\x74\x4B\x65\x79\x73","\x6B\x65\x79\x43\x6F\x64\x65","\x63\x74\x72\x6C\x4B\x65\x79","\x6B\x65\x79\x64\x6F\x77\x6E","\x63\x68\x65\x63\x6B\x41\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E","\x61\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x70\x61\x73\x73\x77\x6F\x72\x64","\x67\x65\x74\x49\x74\x65\x6D","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x65\x6D\x61\x69\x6C","\x4D\x6F\x6E\x67\x6F\x6C\x5F\x76\x65\x72\x69\x66\x79\x44\x6F\x63","\x63\x61\x6C\x6C","\x54\x68\x65\x20\x73\x74\x6F\x72\x65\x64\x20\x61\x75\x74\x68\x65\x6E\x74\x69\x63\x61\x74\x69\x6F\x6E\x20\x6B\x65\x79\x73\x20\x66\x6F\x72\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x61\x72\x65\x20\x69\x6E\x76\x61\x6C\x69\x64\x2E","\x6C\x6F\x67","\x67\x72\x61\x62\x54\x6F\x79\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x52\x65\x67\x69\x73\x74\x72\x79","\x72\x65\x67\x69\x73\x74\x72\x79","\x70\x61\x72\x73\x65","\x63\x6F\x6C\x6F\x72\x69\x7A\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x3C\x65\x6D\x3E\x4E\x6F\x20\x64\x61\x74\x61\x3C\x2F\x65\x6D\x3E","\x26\x67\x74\x3B","\x72\x65\x70\x6C\x61\x63\x65","\x26\x6C\x74\x3B","\x26\x61\x6D\x70\x3B","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x75\x6D\x62\x65\x72","\x74\x65\x73\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6B\x65\x79","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x73\x74\x72\x69\x6E\x67","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x6F\x6F\x6C\x65\x61\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x75\x6C\x6C","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22","\x22\x3E\x22\x3C\x2F\x73\x70\x61\x6E\x3E","","\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65\x3D\x22\x66\x61\x6C\x73\x65\x22\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E","\x3A","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x63\x6F\x6C\x6F\x72\x69\x7A\x65\x45\x64\x69\x74\x61\x62\x6C\x65","\x5F\x69\x64","\x20\x22\x20\x3E","\x20\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65\x3D\x22\x74\x72\x75\x65\x22\x3E","\x20\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x69\x6E\x6C\x69\x6E\x65\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65\x3D\x22\x74\x72\x75\x65\x22\x3E\x22","\x22\x3C\x2F\x73\x70\x61\x6E\x3E","\x63\x6C\x6F\x73\x65\x54\x6F\x79","\x63\x75\x72\x72\x65\x6E\x74","\x6F\x70\x65\x6E\x54\x6F\x79","\x54\x6F\x79\x4B\x69\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73","\x4E\x6F\x74\x65","\x54\x6F\x20\x75\x73\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73\x2C\x20\x79\x6F\x75\x20\x6D\x75\x73\x74\x20\x69\x6E\x73\x74\x61\x6C\x6C\x20\x74\x68\x65\x20\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73\x20\x70\x61\x63\x6B\x61\x67\x65\x2E","\x46\x6F\x72\x20\x74\x68\x65\x20\x77\x68\x79\x20\x61\x6E\x64\x20\x68\x6F\x77\x2C\x20\x67\x6F\x20\x74\x6F\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x2F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73","\x62\x6F\x64\x79","\x72\x65\x6E\x64\x65\x72","\x64\x65\x66\x65\x72","\x73\x74\x61\x72\x74\x75\x70","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x72\x6F","\x72\x65\x67\x69\x73\x74\x65\x72\x48\x65\x6C\x70\x65\x72","\x63\x6F\x72\x65","\x6B\x65\x79\x73","\x61\x64\x64\x6F\x6E","\x6D\x73\x61\x76\x69\x6E\x3A\x6D\x6F\x6E\x67\x6F\x6C","\x4D\x6F\x6E\x67\x6F\x6C","\x70\x75\x73\x68","\x6D\x73\x61\x76\x69\x6E\x3A\x6A\x65\x74\x73\x65\x74\x74\x65\x72","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x61\x6C\x6C\x74\x68\x69\x6E\x67\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x61\x73\x69\x63","\x68\x65\x6C\x70\x65\x72\x73","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x76\x61\x6C","\x23\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x63\x61\x64\x66","\x23\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x70\x61\x73\x73","\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x61\x6E\x20\x65\x6D\x61\x69\x6C","\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x61\x20\x6C\x69\x63\x65\x6E\x73\x65","\x54\x68\x61\x6E\x6B\x73\x20\x66\x6F\x72\x20\x62\x75\x79\x69\x6E\x67\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x21","\x73\x65\x74\x49\x74\x65\x6D","\x49\x6E\x76\x61\x6C\x69\x64\x20\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x2E","\x65\x76\x65\x6E\x74\x73","\x6E\x61\x6D\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x61\x75\x74\x6F\x70\x75\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x65\x6C\x6F\x61\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x61\x63\x74\x69\x76\x65","\x68\x61\x73\x43\x6C\x61\x73\x73","\x23","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79","\x74\x79\x70\x65","\x62\x75\x74\x74\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x75\x74\x74\x6F\x6E","\x65\x71\x75\x61\x6C\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x63\x6F\x6E\x64\x65\x6E\x73\x65\x64","\x55\x4E\x4B\x4E\x4F\x57\x4E","\x6C\x65\x66\x74","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x74\x6F\x6F\x6C\x74\x69\x70","\x66\x69\x6E\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F","\x64\x61\x74\x61","\x65\x78\x70\x61\x6E\x64\x4F\x72\x52\x65\x6D\x6F\x76\x65","\x72\x65\x6D\x6F\x76\x65","\x73\x68\x72\x69\x6E\x6B","\x65\x78\x70\x61\x6E\x64","\x66\x6F\x63\x75\x73\x32","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x64\x61\x74\x61\x5F\x65\x78\x70\x61\x6E\x64\x65\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x64\x61\x74\x61","\x63\x6F\x75\x6E\x74\x65\x72","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x77\x69\x64\x67\x65\x74","\x63\x6C\x65\x61\x72\x41\x6C\x6C\x44\x61\x74\x61","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4E\x6F\x74\x69\x66\x79","\x75\x70\x64\x61\x74\x65","\x69\x6E\x73\x65\x72\x74","\x66\x69\x6E\x64\x4F\x6E\x65","\x69\x6E\x63\x72\x65\x6D\x65\x6E\x74\x43\x6F\x75\x6E\x74\x65\x72","\x74\x65\x78\x74","\x75\x6E\x72\x65\x61\x64","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4E\x6F\x74\x69\x66\x69\x65\x72\x5F\x68\x69\x64\x65\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E","\x61\x64\x64\x43\x6C\x61\x73\x73","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74","\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E"];ToyKitData= new ReactiveDict(_0x57c9[0]);ToyKit=ToyKitData;ToyKit[_0x57c9[1]]=function(){var _0x5320x1=ToyKit[_0x57c9[3]](_0x57c9[2]);if(_0x5320x1){ToyKit[_0x57c9[4]](_0x57c9[2],false);ToyKit[_0x57c9[4]](_0x57c9[5],null);}else {ToyKit[_0x57c9[4]](_0x57c9[2],true);ToyKit[_0x57c9[4]](_0x57c9[5],null);};};ToyKit[_0x57c9[6]]=function(){if(Package[_0x57c9[7]]){return false};Tracker[_0x57c9[11]](function(){Meteor[_0x57c9[10]](_0x57c9[8],MeteorToysDict[_0x57c9[3]](_0x57c9[9]))});};ToyKit[_0x57c9[12]]=function(){$(document)[_0x57c9[15]](function(_0x5320x2){if(_0x5320x2[_0x57c9[13]]===77&&_0x5320x2[_0x57c9[14]]){ToyKit[_0x57c9[1]]()}})};ToyKit[_0x57c9[16]]=function(){Meteor[_0x57c9[22]](_0x57c9[8],function(_0x5320x2,_0x5320x3){ToyKit[_0x57c9[4]](_0x57c9[17],_0x5320x3);if(!_0x5320x3){password=localStorage[_0x57c9[19]](_0x57c9[18]);email=localStorage[_0x57c9[19]](_0x57c9[20]);Meteor[_0x57c9[22]](_0x57c9[21],email,password,function(_0x5320x2,_0x5320x3){if(_0x5320x3){Meteor[_0x57c9[22]](_0x57c9[8],function(_0x5320x2,_0x5320x3){ToyKit[_0x57c9[4]](_0x57c9[17],_0x5320x3)})}else {if(localStorage[_0x57c9[19]](_0x57c9[20])){console[_0x57c9[24]](_0x57c9[23])}}});};})};ToyKit[_0x57c9[25]]=function(){Meteor[_0x57c9[22]](_0x57c9[26],function(_0x5320x2,_0x5320x3){ToyKit[_0x57c9[4]](_0x57c9[27],_0x5320x3)})};MeteorToys= new ReactiveDict(_0x57c9[8]);MeteorToys[_0x57c9[28]]=function(_0x5320x4){var _0x5320x5=false;try{_0x5320x5=JSON[_0x57c9[28]](_0x5320x4)}catch(error){_0x5320x5=String(_0x5320x4)};return _0x5320x5;};MeteorToys[_0x57c9[29]]=function(_0x5320x6){if( typeof _0x5320x6===_0x57c9[30]){return _0x57c9[31]};_0x5320x6=_0x5320x6[_0x57c9[33]](/&/g,_0x57c9[35])[_0x57c9[33]](/</g,_0x57c9[34])[_0x57c9[33]](/>/g,_0x57c9[32]);return _0x5320x6[_0x57c9[33]](/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(_0x5320x7){var _0x5320x8=_0x57c9[36];if(/^"/[_0x57c9[37]](_0x5320x7)){if(/:$/[_0x57c9[37]](_0x5320x7)){_0x5320x8=_0x57c9[38]}else {_0x5320x8=_0x57c9[39]}}else {if(/true|false/[_0x57c9[37]](_0x5320x7)){_0x5320x8=_0x57c9[40]}else {if(/null/[_0x57c9[37]](_0x5320x7)){_0x5320x8=_0x57c9[41]}}};quote=_0x57c9[42]+_0x5320x8+_0x57c9[43];switch(_0x5320x8){case _0x57c9[38]:_0x5320x7=_0x5320x7[_0x57c9[33]](/"/g,_0x57c9[44]);_0x5320x7=_0x5320x7[_0x57c9[33]](/:/g,_0x57c9[44]);return quote+_0x57c9[42]+_0x5320x8+_0x57c9[45]+_0x5320x7+_0x57c9[46]+quote+_0x57c9[47];break ;;case _0x57c9[36]:return _0x57c9[42]+_0x5320x8+_0x57c9[45]+_0x5320x7+_0x57c9[46];break ;;case _0x57c9[39]:_0x5320x7=_0x5320x7[_0x57c9[49]](1,_0x5320x7[_0x57c9[48]]-1);return quote+_0x57c9[42]+_0x5320x8+_0x57c9[45]+_0x5320x7+_0x57c9[46]+quote;break ;;case _0x57c9[40]:return _0x57c9[42]+_0x5320x8+_0x57c9[45]+_0x5320x7+_0x57c9[46];break ;;case _0x57c9[41]:return _0x57c9[42]+_0x5320x8+_0x57c9[45]+_0x5320x7+_0x57c9[46];break ;;};});};MeteorToys[_0x57c9[50]]=function(_0x5320x6){if( typeof _0x5320x6===_0x57c9[30]){return _0x57c9[31]};_0x5320x6=_0x5320x6[_0x57c9[33]](/&/g,_0x57c9[35])[_0x57c9[33]](/</g,_0x57c9[34])[_0x57c9[33]](/>/g,_0x57c9[32]);return _0x5320x6[_0x57c9[33]](/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(_0x5320x7){var _0x5320x8=_0x57c9[36];if(/^"/[_0x57c9[37]](_0x5320x7)){if(/:$/[_0x57c9[37]](_0x5320x7)){_0x5320x8=_0x57c9[38]}else {_0x5320x8=_0x57c9[39]}}else {if(/true|false/[_0x57c9[37]](_0x5320x7)){_0x5320x8=_0x57c9[40]}else {if(/null/[_0x57c9[37]](_0x5320x7)){_0x5320x8=_0x57c9[41]}}};quote=_0x57c9[42]+_0x5320x8+_0x57c9[43];switch(_0x5320x8){case _0x57c9[38]:_0x5320x7=_0x5320x7[_0x57c9[33]](/"/g,_0x57c9[44]);_0x5320x7=_0x5320x7[_0x57c9[33]](/:/g,_0x57c9[44]);if(_0x5320x7===_0x57c9[51]){return quote+_0x57c9[42]+_0x5320x8+_0x57c9[52]+_0x5320x7+_0x57c9[46]+quote+_0x57c9[47]}else {return quote+_0x57c9[42]+_0x5320x8+_0x57c9[53]+_0x5320x7+_0x57c9[46]+quote+_0x57c9[47]};break ;;case _0x57c9[36]:return _0x57c9[42]+_0x5320x8+_0x57c9[53]+_0x5320x7+_0x57c9[46];break ;;case _0x57c9[39]:_0x5320x7=_0x5320x7[_0x57c9[49]](1,_0x5320x7[_0x57c9[48]]-1);return _0x57c9[42]+_0x5320x8+_0x57c9[54]+_0x5320x7+_0x57c9[55];break ;;case _0x57c9[40]:return _0x57c9[42]+_0x5320x8+_0x57c9[53]+_0x5320x7+_0x57c9[46];break ;;case _0x57c9[41]:return _0x57c9[42]+_0x5320x8+_0x57c9[53]+_0x5320x7+_0x57c9[46];break ;;};});};MeteorToys[_0x57c9[56]]=function(){ToyKit[_0x57c9[4]](_0x57c9[57],null)};MeteorToys[_0x57c9[58]]=function(_0x5320x9){MeteorToys[_0x57c9[4]](_0x57c9[57],_0x5320x9)};MeteorToys[_0x57c9[59]]=ToyKitData;MeteorToysDict=MeteorToys;MeteorToys_JSON=MeteorToys;if(Package[_0x57c9[60]]){}else {window[_0x57c9[61]]=function(){console[_0x57c9[24]](_0x57c9[62]);console[_0x57c9[24]](_0x57c9[63]);}};Meteor[_0x57c9[67]](function(){Meteor[_0x57c9[66]](function(){Blaze[_0x57c9[65]](Template.MeteorToys,document[_0x57c9[64]])});ToyKit[_0x57c9[16]]();ToyKit[_0x57c9[6]]();ToyKit[_0x57c9[4]](_0x57c9[5],null);ToyKit[_0x57c9[12]]();ToyKit[_0x57c9[25]]();});UI[_0x57c9[69]](_0x57c9[68],function(_0x5320xa){return ToyKit[_0x57c9[3]](_0x57c9[17])});Template[_0x57c9[8]][_0x57c9[81]]({MeteorToys:function(){return ToyKit[_0x57c9[3]](_0x57c9[2])},MeteorToy:function(){data=ToyKit[_0x57c9[3]](_0x57c9[27])[_0x57c9[70]];keys=Object[_0x57c9[71]](data);return keys;},MeteorToy_addon:function(){data=ToyKit[_0x57c9[3]](_0x57c9[27])[_0x57c9[72]];keys=Object[_0x57c9[71]](data);return keys;},MeteorToysPackage:function(){temp=[];if(Package[_0x57c9[73]]){temp[_0x57c9[75]](_0x57c9[74])};if(Package[_0x57c9[76]]){temp[_0x57c9[75]](_0x57c9[77])};if(ToyKit[_0x57c9[3]](_0x57c9[17])){temp[_0x57c9[75]](_0x57c9[78])};return temp;},all:function(){if(Package[_0x57c9[79]]){return _0x57c9[80]}}});Template[_0x57c9[80]][_0x57c9[91]]({"\x73\x75\x62\x6D\x69\x74":function(_0x5320x2,_0x5320xb){_0x5320x2[_0x57c9[82]]();em=$(_0x57c9[84])[_0x57c9[83]](),pw=$(_0x57c9[85])[_0x57c9[83]]();if(em===_0x57c9[44]){alert(_0x57c9[86]);return false;};if(pw===_0x57c9[44]){alert(_0x57c9[87]);return false;};Meteor[_0x57c9[22]](_0x57c9[21],em,pw,function(_0x5320x2,_0x5320x3){if(_0x5320x3){Meteor[_0x57c9[22]](_0x57c9[8],function(_0x5320x2,_0x5320x3){ToyKit[_0x57c9[4]](_0x57c9[17],_0x5320x3)});alert(_0x57c9[88]);localStorage[_0x57c9[89]](_0x57c9[20],em);localStorage[_0x57c9[89]](_0x57c9[18],pw);}else {alert(_0x57c9[90])}});}});Template[_0x57c9[99]][_0x57c9[91]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62":function(){if(this[_0x57c9[92]]===_0x57c9[93]){return false};if(this[_0x57c9[92]]===_0x57c9[94]){return false};if(ToyKit[_0x57c9[3]](_0x57c9[57])===this[_0x57c9[92]]){ToyKit[_0x57c9[4]](_0x57c9[57],false)}else {ToyKit[_0x57c9[4]](_0x57c9[57],this[_0x57c9[92]])};},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62\x5F\x77\x72\x61\x70\x70\x65\x72":function(_0x5320xc,_0x5320xb){if($(_0x57c9[97]+this[_0x57c9[92]])[_0x57c9[96]](_0x57c9[95])){_0x5320xc[_0x57c9[98]]()}},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x61\x6D\x65":function(){ToyKit[_0x57c9[4]](_0x57c9[57],false)},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62":function(){ToyKit[_0x57c9[4]](_0x57c9[5],this[_0x57c9[92]])},"\x6D\x6F\x75\x73\x65\x6F\x75\x74\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6F\x72\x62":function(){ToyKit[_0x57c9[4]](_0x57c9[5])}});Template[_0x57c9[99]][_0x57c9[81]]({type:function(){if(this[_0x57c9[100]]===_0x57c9[101]){return _0x57c9[102]}},state:function(){if(ToyKit[_0x57c9[103]](_0x57c9[57],this[_0x57c9[92]])){return _0x57c9[95]}else {return _0x57c9[104]}},load:function(){if(this[_0x57c9[92]]===_0x57c9[20]){return true};if(ToyKit[_0x57c9[103]](_0x57c9[57],this[_0x57c9[92]])){return true};if(ToyKit[_0x57c9[103]](_0x57c9[5],this[_0x57c9[92]])){return true};},tmpName:function(){}});Template[_0x57c9[108]][_0x57c9[81]]({display:function(){var _0x5320xd=ToyKit[_0x57c9[3]](_0x57c9[5]);if(ToyKit[_0x57c9[103]](_0x57c9[57],_0x5320xd)){return false};if(ToyKit[_0x57c9[3]](_0x57c9[5])){return true};},name:function(){var _0x5320xd=ToyKit[_0x57c9[3]](_0x57c9[5]);if(_0x5320xd){if(ToyKit[_0x57c9[3]](_0x57c9[27])[_0x57c9[70]][_0x5320xd]){return ToyKit[_0x57c9[3]](_0x57c9[27])[_0x57c9[70]][_0x5320xd][_0x57c9[92]]}else {if(ToyKit[_0x57c9[3]](_0x57c9[27])[_0x57c9[72]][_0x5320xd]){return ToyKit[_0x57c9[3]](_0x57c9[27])[_0x57c9[72]][_0x5320xd][_0x57c9[92]]}else {return _0x57c9[105]}}};},position:function(){name=ToyKit[_0x57c9[3]](_0x57c9[5]);pixels=$(_0x57c9[97]+name)[_0x57c9[107]]()[_0x57c9[106]];current=ToyKit[_0x57c9[3]](_0x57c9[5]);position=$(_0x57c9[97]+name)[_0x57c9[107]]()[_0x57c9[106]]+7,coordinate=(200-46)* -0.5,pixels=coordinate+position;return pixels;}});Template[_0x57c9[78]][_0x57c9[81]]({"\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73":function(){return MeteorToysNotifications[_0x57c9[109]]()},"\x74\x79\x70\x65":function(){return _0x57c9[110]+this[_0x57c9[100]]}});Template[_0x57c9[78]][_0x57c9[91]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E":function(){self=this;if(self[_0x57c9[100]]===_0x57c9[111]){NotifyInternal[_0x57c9[112]]()}else {NotifyInternal[_0x57c9[113]]()};},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x73\x79\x6D\x62\x6F\x6C":function(_0x5320x2){_0x5320x2[_0x57c9[98]]();self=this;if(MeteorToysNotifyDict[_0x57c9[103]](_0x57c9[57],this._id)){NotifyInternal[_0x57c9[114]]()}else {if(self[_0x57c9[100]]===_0x57c9[111]){NotifyInternal[_0x57c9[115]]()}};},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5F\x64\x61\x74\x61":function(_0x5320x2){_0x5320x2[_0x57c9[98]]()},"\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E":function(){MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[5],this._id)},"\x6D\x6F\x75\x73\x65\x6F\x75\x74\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E":function(){MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[5],false);current=MeteorToysNotifyDict[_0x57c9[3]](_0x57c9[57]);MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[116],current);}});Template[_0x57c9[118]][_0x57c9[81]]({"\x65\x78\x70\x61\x6E\x64\x65\x64":function(){if(MeteorToysNotifyDict[_0x57c9[103]](_0x57c9[57],this._id)){return _0x57c9[117]}else {return false}},"\x6C\x61\x7A\x79\x6C\x6F\x61\x64":function(){if(MeteorToysNotifyDict[_0x57c9[103]](_0x57c9[57],this._id)){return true};if(MeteorToysNotifyDict[_0x57c9[103]](_0x57c9[5],this._id)){return true};if(MeteorToysNotifyDict[_0x57c9[103]](_0x57c9[116],this._id)){return true};},"\x64\x61\x74\x61":function(){return MeteorToys[_0x57c9[29]](this[_0x57c9[111]])}});Template[_0x57c9[120]][_0x57c9[81]]({"\x63\x6F\x75\x6E\x74":function(){return MeteorToysNotifyDict[_0x57c9[3]](_0x57c9[119])}});Template[_0x57c9[120]][_0x57c9[91]]({"\x63\x6C\x69\x63\x6B":function(){ToyKit[_0x57c9[4]](_0x57c9[2],true)}});$(document)[_0x57c9[15]](function(_0x5320x2){if(_0x5320x2[_0x57c9[13]]===67&&_0x5320x2[_0x57c9[14]]){NotifyInternal[_0x57c9[121]]();MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[57]);}});MeteorToysNotifications= new Mongo.Collection(null);MeteorToysNotifyDict= new ReactiveDict(_0x57c9[122]);MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[119],0);Note=function(_0x5320xe,_0x5320x4){if(_0x5320x4===_0x57c9[119]){Counter(_0x5320xe)}else {Data(_0x5320xe,_0x5320x4)};if(ToyKit[_0x57c9[3]](_0x57c9[2])===false){current=MeteorToysNotifyDict[_0x57c9[3]](_0x57c9[119]);MeteorToysNotifyDict[_0x57c9[3]](_0x57c9[119],current+1);console[_0x57c9[24]](MeteorToysNotifyDict[_0x57c9[3]](_0x57c9[119]));};};Counter=function(_0x5320xe){var _0x5320xf;var _0x5320x10=function(){MeteorToysNotifications[_0x57c9[123]]({type:_0x57c9[119],text:_0x5320xe},{$inc:{data:+1}})};var _0x5320x11=function(){var _0x5320x12=MeteorToysNotifications[_0x57c9[124]]({type:_0x57c9[119],data:1,text:_0x5320xe,unread:true});_0x5320xf=_0x5320x12;};var _0x5320x4=MeteorToysNotifications[_0x57c9[125]]({"\x74\x79\x70\x65":_0x57c9[119],"\x74\x65\x78\x74":_0x5320xe});if(_0x5320x4){_0x5320x10();_0x5320xf=_0x5320x4[_0x57c9[51]];}else {_0x5320x11()};NotifyInternal[_0x57c9[126]]();};Data=function(_0x5320xe,_0x5320x4){item={};item[_0x57c9[127]]=_0x5320xe;item[_0x57c9[128]]=true;if(_0x5320x4){item[_0x57c9[100]]=_0x57c9[111];item[_0x57c9[111]]=_0x5320x4;}else {item[_0x57c9[100]]=_0x57c9[127]};var _0x5320x13=MeteorToysNotifications[_0x57c9[124]](item);NotifyInternal[_0x57c9[126]]();};NotifyClose=function(){MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[57],null);MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[5],null);MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[116],null);};NotifyInternal={"\x65\x78\x70\x61\x6E\x64":function(){MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[57],self._id)},"\x72\x65\x6D\x6F\x76\x65":function(){if(MeteorToysNotifyDict[_0x57c9[103]](_0x57c9[57],self._id)){MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[57],false)};$(_0x57c9[131]+self[_0x57c9[51]])[_0x57c9[130]](_0x57c9[129]);window[_0x57c9[132]](function(){MeteorToysNotifications[_0x57c9[113]](self._id)},300);},"\x65\x78\x70\x61\x6E\x64\x4F\x72\x52\x65\x6D\x6F\x76\x65":function(){if(MeteorToysNotifyDict[_0x57c9[103]](_0x57c9[57],self._id)){NotifyInternal[_0x57c9[113]](self._id)}else {NotifyInternal[_0x57c9[115]]()}},"\x73\x68\x72\x69\x6E\x6B":function(){MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[57],false)},"\x63\x6C\x65\x61\x72\x41\x6C\x6C\x44\x61\x74\x61":function(){$(_0x57c9[133])[_0x57c9[130]](_0x57c9[129]);window[_0x57c9[132]](function(){MeteorToysNotifications[_0x57c9[113]]({})},300);},"\x69\x6E\x63\x72\x65\x6D\x65\x6E\x74\x43\x6F\x75\x6E\x74\x65\x72":function(){if(ToyKit[_0x57c9[3]](_0x57c9[2])){return };current=MeteorToysNotifyDict[_0x57c9[3]](_0x57c9[119]);if(current){MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[119],current+1)}else {MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[119],1)};}};Tracker[_0x57c9[11]](function(){if(ToyKit[_0x57c9[3]](_0x57c9[2])){MeteorToysNotifyDict[_0x57c9[4]](_0x57c9[119],0)}});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteortoys:toykit'] = {}, {
  MeteorToysData: MeteorToysData,
  MeteorToys: MeteorToys,
  ToyKit: ToyKit,
  Note: Note,
  MeteorToys_JSON: MeteorToys_JSON,
  MeteorToysDict: MeteorToysDict
});

})();
