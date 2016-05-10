(function(){
Template.body.addContent((function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("hello")), "\n  ", Spacebars.include(view.lookupTemplate("accueil")), HTML.Raw("\n  <p>----------------------------------</p>\n  "), Spacebars.include(view.lookupTemplate("login")), HTML.Raw("\n  <p>----------------------------------</p>\n  "), Spacebars.include(view.lookupTemplate("recherche")), HTML.Raw("\n  <p>----------------------------------</p>\n  "), Spacebars.include(view.lookupTemplate("affichage_annonce")), HTML.Raw("\n  <p>----------------------------------</p>\n  "), Spacebars.include(view.lookupTemplate("create_account")), HTML.Raw("\n  <p>----------------------------------</p>\n  "), Spacebars.include(view.lookupTemplate("creer_annonce")), HTML.Raw("\n  <p>----------------------------------</p>\n  "), Spacebars.include(view.lookupTemplate("grouper_annonce")) ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("hello");
Template["hello"] = new Template("Template.hello", (function() {
  var view = this;
  return [ HTML.Raw("<button>Clique Moi</button>\n  "), HTML.P("Vous avez appuyé sur le boutton ", Blaze.View("lookup:counter", function() {
    return Spacebars.mustache(view.lookup("counter"));
  }), " fois.") ];
}));

Template.__checkName("accueil");
Template["accueil"] = new Template("Template.accueil", (function() {
  var view = this;
  return HTML.Raw("<h1>Bienvenue sur l'app LAMA</h1>");
}));

Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<form>\n		Se loguer: <br>\n  		E-mail: <input type="text" name="mail"><br>\n  		Mot de passe: <input type="text" name="password"><br>\n  		<input type="button" value="Log In">\n	</form>');
}));

Template.__checkName("recherche");
Template["recherche"] = new Template("Template.recherche", (function() {
  var view = this;
  return HTML.Raw('<p>Rechercher un livre:</p>\n	<form>\n		Entrer l\'ISBN, le titre du livre ou l\'auteur: <input type="text">\n		<input type="button" value="Rechercher">\n	</form>');
}));

Template.__checkName("affichage_annonce");
Template["affichage_annonce"] = new Template("Template.affichage_annonce", (function() {
  var view = this;
  return HTML.Raw("<p>Annonces disponibles:</p>\n	<ul>\n		<li>\n			Annonce 1\n			<div>Prix</div> <br>\n		</li>\n		<li>\n			Annonce 2\n			<div>Prix</div> <br>\n		</li>\n		<li>\n			Annonce 3\n			<div>Prix</div> <br>\n		</li>\n	</ul>");
}));

Template.__checkName("create_account");
Template["create_account"] = new Template("Template.create_account", (function() {
  var view = this;
  return HTML.Raw('<form>\n		Créer un compte: <br>\n  		E-mail: <input type="text" name="mail"><br>\n  		Mot de passe: <input type="text" name="password"><br>\n  		<input type="button" value="Log In">\n	</form>');
}));

Template.__checkName("creer_annonce");
Template["creer_annonce"] = new Template("Template.creer_annonce", (function() {
  var view = this;
  return HTML.Raw('<form>\n		Ajouter une annonce: <br>\n  		<input type="text" name="isbn" placeholder="ISBN"><br>\n  		<input type="text" name="prix" placeholder="prix"><br>\n  		<input type="text" name="etat" placeholder="etat"><br>\n  		Photo: <input type="file" name="photo"><br>\n  		<input type="textarea" name="remarque" placeholder="remarque"> <br>\n  		<input type="button" value="Poster">\n	</form>');
}));

Template.__checkName("grouper_annonce");
Template["grouper_annonce"] = new Template("Template.grouper_annonce", (function() {
  var view = this;
  return HTML.Raw('Grouper mes annonces: <br>\n	<ul>\n		<li>\n			Annonce 1\n			<input type="checkbox">\n		</li>\n		<br>\n		<li>\n			Annonce 2\n			<input type="checkbox">\n		</li>\n		<br>\n		<li>\n			Annonce 3\n			<input type="checkbox">\n		</li>\n		<br>\n		<li>\n			Annonce 4\n			<input type="checkbox">\n		</li>\n		<br>\n		<li>\n			Annonce 5\n			<input type="checkbox">\n		</li>\n		<br>\n	</ul>\n	<form>\n		<input type="text" placeholder="prix de groupe">\n		<input type="button" value="Grouper">\n	</form>');
}));

}).call(this);
