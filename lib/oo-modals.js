ooModalOpen = function(data){
  var parentNode = document.getElementById("AppLayout");
  Blaze.renderWithData(Template.ooModal, data, parentNode)
}

ooModalClose = function(id) {
  var element = document.getElementById(id);
  $(element).addClass('is-closed');
  var renderedView = Blaze.getView(element)
  Meteor.setTimeout(function(){
    Blaze.remove(Blaze.getView(renderedView));
  }, 400);
}
