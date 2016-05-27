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
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;

/* Package-scope variables */
var CollectionExtensions;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// packages/lai_collection-extensions/packages/lai_collection-extensions.js                         //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
(function () {                                                                                      // 1
                                                                                                    // 2
///////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                           //     // 4
// packages/lai:collection-extensions/collection-extensions.js                               //     // 5
//                                                                                           //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                             //     // 8
// The collection extensions namespace                                                       // 1   // 9
CollectionExtensions = {};                                                                   // 2   // 10
                                                                                             // 3   // 11
// Stores all the collection extensions                                                      // 4   // 12
CollectionExtensions._extensions = [];                                                       // 5   // 13
                                                                                             // 6   // 14
// This is where you would add custom functionality to                                       // 7   // 15
// Mongo.Collection/Meteor.Collection                                                        // 8   // 16
Meteor.addCollectionExtension = function (customFunction) {                                  // 9   // 17
  if (typeof customFunction !== 'function') {                                                // 10  // 18
    throw new Meteor.Error(                                                                  // 11  // 19
      'collection-extension-wrong-argument',                                                 // 12  // 20
      'You must pass a function \
       into Meteor.addCollectionExtension().');                                              // 14  // 22
  }                                                                                          // 15  // 23
  CollectionExtensions._extensions.push(customFunction);                                     // 16  // 24
  // If Meteor.users exists, apply the extension right away                                  // 17  // 25
  if (typeof Meteor.users !== 'undefined') {                                                 // 18  // 26
    customFunction.apply(Meteor.users, ['users']);                                           // 19  // 27
  }                                                                                          // 20  // 28
};                                                                                           // 21  // 29
                                                                                             // 22  // 30
// Utility function to add a prototype function to your                                      // 23  // 31
// Meteor/Mongo.Collection object                                                            // 24  // 32
Meteor.addCollectionPrototype = function (name, customFunction) {                            // 25  // 33
  if (typeof name !== 'string') {                                                            // 26  // 34
    throw new Meteor.Error(                                                                  // 27  // 35
      'collection-extension-wrong-argument',                                                 // 28  // 36
      'You must pass a string as the first argument \
       into Meteor.addCollectionPrototype().');                                              // 30  // 38
  }                                                                                          // 31  // 39
  if (typeof customFunction !== 'function') {                                                // 32  // 40
    throw new Meteor.Error(                                                                  // 33  // 41
      'collection-extension-wrong-argument',                                                 // 34  // 42
      'You must pass a function as the second argument \
       into Meteor.addCollectionPrototype().');                                              // 36  // 44
  }                                                                                          // 37  // 45
  (typeof Mongo !== 'undefined' ?                                                            // 38  // 46
    Mongo.Collection :                                                                       // 39  // 47
    Meteor.Collection).prototype[name] = customFunction;                                     // 40  // 48
};                                                                                           // 41  // 49
                                                                                             // 42  // 50
// This is used to reassign the prototype of unfortunately                                   // 43  // 51
// and unstoppably already instantiated Mongo instances                                      // 44  // 52
// i.e. Meteor.users                                                                         // 45  // 53
CollectionExtensions._reassignCollectionPrototype = function (instance, constr) {            // 46  // 54
  var hasSetPrototypeOf = typeof Object.setPrototypeOf === 'function';                       // 47  // 55
                                                                                             // 48  // 56
  if (!constr) constr = typeof Mongo !== 'undefined' ? Mongo.Collection : Meteor.Collection; // 49  // 57
                                                                                             // 50  // 58
  // __proto__ is not available in < IE11                                                    // 51  // 59
  // Note: Assigning a prototype dynamically has performance implications                    // 52  // 60
  if (hasSetPrototypeOf) {                                                                   // 53  // 61
    Object.setPrototypeOf(instance, constr.prototype);                                       // 54  // 62
  } else if (instance.__proto__) {                                                           // 55  // 63
    instance.__proto__ = constr.prototype;                                                   // 56  // 64
  }                                                                                          // 57  // 65
};                                                                                           // 58  // 66
                                                                                             // 59  // 67
// This monkey-patches the Collection constructor                                            // 60  // 68
// This code is the same monkey-patching code                                                // 61  // 69
// that matb33:collection-hooks uses, which works pretty nicely                              // 62  // 70
CollectionExtensions._wrapCollection = function (ns, as) {                                   // 63  // 71
  // Save the original prototype                                                             // 64  // 72
  if (!as._CollectionPrototype) as._CollectionPrototype = new as.Collection(null);           // 65  // 73
                                                                                             // 66  // 74
  var constructor = as.Collection;                                                           // 67  // 75
  var proto = as._CollectionPrototype;                                                       // 68  // 76
                                                                                             // 69  // 77
  ns.Collection = function () {                                                              // 70  // 78
    var ret = constructor.apply(this, arguments);                                            // 71  // 79
    // This is where all the collection extensions get processed                             // 72  // 80
    CollectionExtensions._processCollectionExtensions(this, arguments);                      // 73  // 81
    return ret;                                                                              // 74  // 82
  };                                                                                         // 75  // 83
                                                                                             // 76  // 84
  ns.Collection.prototype = proto;                                                           // 77  // 85
  ns.Collection.prototype.constructor = ns.Collection;                                       // 78  // 86
                                                                                             // 79  // 87
  for (var prop in constructor) {                                                            // 80  // 88
    if (constructor.hasOwnProperty(prop)) {                                                  // 81  // 89
      ns.Collection[prop] = constructor[prop];                                               // 82  // 90
    }                                                                                        // 83  // 91
  }                                                                                          // 84  // 92
};                                                                                           // 85  // 93
                                                                                             // 86  // 94
CollectionExtensions._processCollectionExtensions = function (self, args) {                  // 87  // 95
  // Using old-school operations for better performance                                      // 88  // 96
  // Please don't judge me ;P                                                                // 89  // 97
  var args = args ? [].slice.call(args, 0) : undefined;                                      // 90  // 98
  var extensions = CollectionExtensions._extensions;                                         // 91  // 99
  for (var i = 0, len = extensions.length; i < len; i++) {                                   // 92  // 100
    extensions[i].apply(self, args);                                                         // 93  // 101
  }                                                                                          // 94  // 102
};                                                                                           // 95  // 103
                                                                                             // 96  // 104
if (typeof Mongo !== 'undefined') {                                                          // 97  // 105
  CollectionExtensions._wrapCollection(Meteor, Mongo);                                       // 98  // 106
  CollectionExtensions._wrapCollection(Mongo, Mongo);                                        // 99  // 107
} else {                                                                                     // 100
  CollectionExtensions._wrapCollection(Meteor, Meteor);                                      // 101
}                                                                                            // 102
                                                                                             // 103
if (typeof Meteor.users !== 'undefined') {                                                   // 104
  // Ensures that Meteor.users instanceof Mongo.Collection                                   // 105
  CollectionExtensions._reassignCollectionPrototype(Meteor.users);                           // 106
}                                                                                            // 107
///////////////////////////////////////////////////////////////////////////////////////////////     // 116
                                                                                                    // 117
}).call(this);                                                                                      // 118
                                                                                                    // 119
//////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['lai:collection-extensions'] = {};

})();
