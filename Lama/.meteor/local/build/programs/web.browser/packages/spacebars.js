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
var HTML = Package.htmljs.HTML;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var ObserveSequence = Package['observe-sequence'].ObserveSequence;
var _ = Package.underscore._;

/* Package-scope variables */
var Spacebars;

(function(){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// packages/spacebars/spacebars-runtime.js                                       //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
Spacebars = {};                                                                  // 1
                                                                                 // 2
var tripleEquals = function (a, b) { return a === b; };                          // 3
                                                                                 // 4
Spacebars.include = function (templateOrFunction, contentFunc, elseFunc) {       // 5
  if (! templateOrFunction)                                                      // 6
    return null;                                                                 // 7
                                                                                 // 8
  if (typeof templateOrFunction !== 'function') {                                // 9
    var template = templateOrFunction;                                           // 10
    if (! Blaze.isTemplate(template))                                            // 11
      throw new Error("Expected template or null, found: " + template);          // 12
    var view = templateOrFunction.constructView(contentFunc, elseFunc);          // 13
    view.__startsNewLexicalScope = true;                                         // 14
    return view;                                                                 // 15
  }                                                                              // 16
                                                                                 // 17
  var templateVar = Blaze.ReactiveVar(null, tripleEquals);                       // 18
  var view = Blaze.View('Spacebars.include', function () {                       // 19
    var template = templateVar.get();                                            // 20
    if (template === null)                                                       // 21
      return null;                                                               // 22
                                                                                 // 23
    if (! Blaze.isTemplate(template))                                            // 24
      throw new Error("Expected template or null, found: " + template);          // 25
                                                                                 // 26
    return template.constructView(contentFunc, elseFunc);                        // 27
  });                                                                            // 28
  view.__templateVar = templateVar;                                              // 29
  view.onViewCreated(function () {                                               // 30
    this.autorun(function () {                                                   // 31
      templateVar.set(templateOrFunction());                                     // 32
    });                                                                          // 33
  });                                                                            // 34
  view.__startsNewLexicalScope = true;                                           // 35
                                                                                 // 36
  return view;                                                                   // 37
};                                                                               // 38
                                                                                 // 39
// Executes `{{foo bar baz}}` when called on `(foo, bar, baz)`.                  // 40
// If `bar` and `baz` are functions, they are called before                      // 41
// `foo` is called on them.                                                      // 42
//                                                                               // 43
// This is the shared part of Spacebars.mustache and                             // 44
// Spacebars.attrMustache, which differ in how they post-process the             // 45
// result.                                                                       // 46
Spacebars.mustacheImpl = function (value/*, args*/) {                            // 47
  var args = arguments;                                                          // 48
  // if we have any arguments (pos or kw), add an options argument               // 49
  // if there isn't one.                                                         // 50
  if (args.length > 1) {                                                         // 51
    var kw = args[args.length - 1];                                              // 52
    if (! (kw instanceof Spacebars.kw)) {                                        // 53
      kw = Spacebars.kw();                                                       // 54
      // clone arguments into an actual array, then push                         // 55
      // the empty kw object.                                                    // 56
      args = Array.prototype.slice.call(arguments);                              // 57
      args.push(kw);                                                             // 58
    } else {                                                                     // 59
      // For each keyword arg, call it if it's a function                        // 60
      var newHash = {};                                                          // 61
      for (var k in kw.hash) {                                                   // 62
        var v = kw.hash[k];                                                      // 63
        newHash[k] = (typeof v === 'function' ? v() : v);                        // 64
      }                                                                          // 65
      args[args.length - 1] = Spacebars.kw(newHash);                             // 66
    }                                                                            // 67
  }                                                                              // 68
                                                                                 // 69
  return Spacebars.call.apply(null, args);                                       // 70
};                                                                               // 71
                                                                                 // 72
Spacebars.mustache = function (value/*, args*/) {                                // 73
  var result = Spacebars.mustacheImpl.apply(null, arguments);                    // 74
                                                                                 // 75
  if (result instanceof Spacebars.SafeString)                                    // 76
    return HTML.Raw(result.toString());                                          // 77
  else                                                                           // 78
    // map `null`, `undefined`, and `false` to null, which is important          // 79
    // so that attributes with nully values are considered absent.               // 80
    // stringify anything else (e.g. strings, booleans, numbers including 0).    // 81
    return (result == null || result === false) ? null : String(result);         // 82
};                                                                               // 83
                                                                                 // 84
Spacebars.attrMustache = function (value/*, args*/) {                            // 85
  var result = Spacebars.mustacheImpl.apply(null, arguments);                    // 86
                                                                                 // 87
  if (result == null || result === '') {                                         // 88
    return null;                                                                 // 89
  } else if (typeof result === 'object') {                                       // 90
    return result;                                                               // 91
  } else if (typeof result === 'string' && HTML.isValidAttributeName(result)) {  // 92
    var obj = {};                                                                // 93
    obj[result] = '';                                                            // 94
    return obj;                                                                  // 95
  } else {                                                                       // 96
    throw new Error("Expected valid attribute name, '', null, or object");       // 97
  }                                                                              // 98
};                                                                               // 99
                                                                                 // 100
Spacebars.dataMustache = function (value/*, args*/) {                            // 101
  var result = Spacebars.mustacheImpl.apply(null, arguments);                    // 102
                                                                                 // 103
  return result;                                                                 // 104
};                                                                               // 105
                                                                                 // 106
// Idempotently wrap in `HTML.Raw`.                                              // 107
//                                                                               // 108
// Called on the return value from `Spacebars.mustache` in case the              // 109
// template uses triple-stache (`{{{foo bar baz}}}`).                            // 110
Spacebars.makeRaw = function (value) {                                           // 111
  if (value == null) // null or undefined                                        // 112
    return null;                                                                 // 113
  else if (value instanceof HTML.Raw)                                            // 114
    return value;                                                                // 115
  else                                                                           // 116
    return HTML.Raw(value);                                                      // 117
};                                                                               // 118
                                                                                 // 119
// If `value` is a function, called it on the `args`, after                      // 120
// evaluating the args themselves (by calling them if they are                   // 121
// functions).  Otherwise, simply return `value` (and assert that                // 122
// there are no args).                                                           // 123
Spacebars.call = function (value/*, args*/) {                                    // 124
  if (typeof value === 'function') {                                             // 125
    // evaluate arguments if they are functions (by calling them)                // 126
    var newArgs = [];                                                            // 127
    for (var i = 1; i < arguments.length; i++) {                                 // 128
      var arg = arguments[i];                                                    // 129
      newArgs[i-1] = (typeof arg === 'function' ? arg() : arg);                  // 130
    }                                                                            // 131
                                                                                 // 132
    return value.apply(null, newArgs);                                           // 133
  } else {                                                                       // 134
    if (arguments.length > 1)                                                    // 135
      throw new Error("Can't call non-function: " + value);                      // 136
                                                                                 // 137
    return value;                                                                // 138
  }                                                                              // 139
};                                                                               // 140
                                                                                 // 141
// Call this as `Spacebars.kw({ ... })`.  The return value                       // 142
// is `instanceof Spacebars.kw`.                                                 // 143
Spacebars.kw = function (hash) {                                                 // 144
  if (! (this instanceof Spacebars.kw))                                          // 145
    // called without new; call with new                                         // 146
    return new Spacebars.kw(hash);                                               // 147
                                                                                 // 148
  this.hash = hash || {};                                                        // 149
};                                                                               // 150
                                                                                 // 151
// Call this as `Spacebars.SafeString("some HTML")`.  The return value           // 152
// is `instanceof Spacebars.SafeString` (and `instanceof Handlebars.SafeString).
Spacebars.SafeString = function (html) {                                         // 154
  if (! (this instanceof Spacebars.SafeString))                                  // 155
    // called without new; call with new                                         // 156
    return new Spacebars.SafeString(html);                                       // 157
                                                                                 // 158
  return new Handlebars.SafeString(html);                                        // 159
};                                                                               // 160
Spacebars.SafeString.prototype = Handlebars.SafeString.prototype;                // 161
                                                                                 // 162
// `Spacebars.dot(foo, "bar", "baz")` performs a special kind                    // 163
// of `foo.bar.baz` that allows safe indexing of `null` and                      // 164
// indexing of functions (which calls the function).  If the                     // 165
// result is a function, it is always a bound function (e.g.                     // 166
// a wrapped version of `baz` that always uses `foo.bar` as                      // 167
// `this`).                                                                      // 168
//                                                                               // 169
// In `Spacebars.dot(foo, "bar")`, `foo` is assumed to be either                 // 170
// a non-function value or a "fully-bound" function wrapping a value,            // 171
// where fully-bound means it takes no arguments and ignores `this`.             // 172
//                                                                               // 173
// `Spacebars.dot(foo, "bar")` performs the following steps:                     // 174
//                                                                               // 175
// * If `foo` is falsy, return `foo`.                                            // 176
//                                                                               // 177
// * If `foo` is a function, call it (set `foo` to `foo()`).                     // 178
//                                                                               // 179
// * If `foo` is falsy now, return `foo`.                                        // 180
//                                                                               // 181
// * Return `foo.bar`, binding it to `foo` if it's a function.                   // 182
Spacebars.dot = function (value, id1/*, id2, ...*/) {                            // 183
  if (arguments.length > 2) {                                                    // 184
    // Note: doing this recursively is probably less efficient than              // 185
    // doing it in an iterative loop.                                            // 186
    var argsForRecurse = [];                                                     // 187
    argsForRecurse.push(Spacebars.dot(value, id1));                              // 188
    argsForRecurse.push.apply(argsForRecurse,                                    // 189
                              Array.prototype.slice.call(arguments, 2));         // 190
    return Spacebars.dot.apply(null, argsForRecurse);                            // 191
  }                                                                              // 192
                                                                                 // 193
  if (typeof value === 'function')                                               // 194
    value = value();                                                             // 195
                                                                                 // 196
  if (! value)                                                                   // 197
    return value; // falsy, don't index, pass through                            // 198
                                                                                 // 199
  var result = value[id1];                                                       // 200
  if (typeof result !== 'function')                                              // 201
    return result;                                                               // 202
  // `value[id1]` (or `value()[id1]`) is a function.                             // 203
  // Bind it so that when called, `value` will be placed in `this`.              // 204
  return function (/*arguments*/) {                                              // 205
    return result.apply(value, arguments);                                       // 206
  };                                                                             // 207
};                                                                               // 208
                                                                                 // 209
// Spacebars.With implements the conditional logic of rendering                  // 210
// the `{{else}}` block if the argument is falsy.  It combines                   // 211
// a Blaze.If with a Blaze.With (the latter only in the truthy                   // 212
// case, since the else block is evaluated without entering                      // 213
// a new data context).                                                          // 214
Spacebars.With = function (argFunc, contentFunc, elseFunc) {                     // 215
  var argVar = new Blaze.ReactiveVar;                                            // 216
  var view = Blaze.View('Spacebars_with', function () {                          // 217
    return Blaze.If(function () { return argVar.get(); },                        // 218
                    function () { return Blaze.With(function () {                // 219
                      return argVar.get(); }, contentFunc); },                   // 220
                    elseFunc);                                                   // 221
  });                                                                            // 222
  view.onViewCreated(function () {                                               // 223
    this.autorun(function () {                                                   // 224
      argVar.set(argFunc());                                                     // 225
                                                                                 // 226
      // This is a hack so that autoruns inside the body                         // 227
      // of the #with get stopped sooner.  It reaches inside                     // 228
      // our ReactiveVar to access its dep.                                      // 229
                                                                                 // 230
      Tracker.onInvalidate(function () {                                         // 231
        argVar.dep.changed();                                                    // 232
      });                                                                        // 233
                                                                                 // 234
      // Take the case of `{{#with A}}{{B}}{{/with}}`.  The goal                 // 235
      // is to not re-render `B` if `A` changes to become falsy                  // 236
      // and `B` is simultaneously invalidated.                                  // 237
      //                                                                         // 238
      // A series of autoruns are involved:                                      // 239
      //                                                                         // 240
      // 1. This autorun (argument to Spacebars.With)                            // 241
      // 2. Argument to Blaze.If                                                 // 242
      // 3. Blaze.If view re-render                                              // 243
      // 4. Argument to Blaze.With                                               // 244
      // 5. The template tag `{{B}}`                                             // 245
      //                                                                         // 246
      // When (3) is invalidated, it immediately stops (4) and (5)               // 247
      // because of a Tracker.onInvalidate built into materializeView.           // 248
      // (When a View's render method is invalidated, it immediately             // 249
      // tears down all the subviews, via a Tracker.onInvalidate much            // 250
      // like this one.                                                          // 251
      //                                                                         // 252
      // Suppose `A` changes to become falsy, and `B` changes at the             // 253
      // same time (i.e. without an intervening flush).                          // 254
      // Without the code above, this happens:                                   // 255
      //                                                                         // 256
      // - (1) and (5) are invalidated.                                          // 257
      // - (1) runs, invalidating (2) and (4).                                   // 258
      // - (5) runs.                                                             // 259
      // - (2) runs, invalidating (3), stopping (4) and (5).                     // 260
      //                                                                         // 261
      // With the code above:                                                    // 262
      //                                                                         // 263
      // - (1) and (5) are invalidated, invalidating (2) and (4).                // 264
      // - (1) runs.                                                             // 265
      // - (2) runs, invalidating (3), stopping (4) and (5).                     // 266
      //                                                                         // 267
      // If the re-run of (5) is originally enqueued before (1), all             // 268
      // bets are off, but typically that doesn't seem to be the                 // 269
      // case.  Anyway, doing this is always better than not doing it,           // 270
      // because it might save a bunch of DOM from being updated                 // 271
      // needlessly.                                                             // 272
    });                                                                          // 273
  });                                                                            // 274
                                                                                 // 275
  return view;                                                                   // 276
};                                                                               // 277
                                                                                 // 278
// XXX COMPAT WITH 0.9.0                                                         // 279
Spacebars.TemplateWith = Blaze._TemplateWith;                                    // 280
                                                                                 // 281
///////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.spacebars = {
  Spacebars: Spacebars
};

})();
