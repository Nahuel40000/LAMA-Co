AnnonceList = new Mongo.Collection('annonce');
UserList = new Mongo.Collection('user');

if (Meteor.isClient) {
  
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
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}