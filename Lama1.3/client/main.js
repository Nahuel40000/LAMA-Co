import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import './main.html';

AnnonceList = new Mongo.Collection('annonce');

AnnonceList.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  copies: {
    type: Number,
    label: "Number of copies",
    min: 0
  },
  etat: {
    type: String,
    label: "Etat du livre"
  },
  remarque: {
    type: String,
    label: "Remarque",
    optional: true,
    max: 1000
  }
}));

//la base de données dans laquelle vont se mettre les infos de l'API de Google:
InfosLivres = new Mongo.Collection('livre');

Template.ajout.events({
  'click .SearchIPA': function(){
      var infolivre = (document.forms['searchitem'].champinfo.value);
      var stringsearch="https://www.googleapis.com/books/v1/volumes?q=search+"+infolivre;
      alert("requête envoyée: "+stringsearch);
      var data;
      $.get(stringsearch, function(data){
        alert("Données reçues: "+data);
        Session.set('selectedbook', data);
        console.log(data);
      //  document.getElementById("koala").innerHTML = Session.get('selectedbook');
        document.getElementById("koala").innerHTML = "<li>"+data.items[0].volumeInfo.title + "<br>" + data.items[0].volumeInfo.authors + "<br>" + "<img src='"+data.items[0].volumeInfo.imageLinks.thumbnail+"' alt='Image non disponible'></li>";
      });
   //   document.getElementById("koala").innerHTML=data.items.volumeInfo.title;
     
  }
})
	


//Le code qui correspond au if(meteorisclient) de l'ancien fichier 1.2
  Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
    }
  });