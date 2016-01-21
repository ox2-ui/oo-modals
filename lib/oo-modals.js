ooModalOpen = function(data){
  var element = document.getElementById(data.id);
  if (element) {
    var renderedView = Blaze.getView(element);
    Blaze.remove(Blaze.getView(renderedView));
  }
  var parentNode = document.body;
  Blaze.renderWithData(Template.ooModal, data, parentNode)
}

ooModalClose = function(id, callback) {
  var element = document.getElementById(id);
  $(element).addClass('is-closed');
  var renderedView = Blaze.getView(element)
  Meteor.setTimeout(function(){
    Blaze.remove(Blaze.getView(renderedView));
    if (callback)
      return callback('done')
  }, 400);
}

ooModalScrollOpen = function(data){
  var element = document.getElementById(data.id);
  if (element) {
    var renderedView = Blaze.getView(element);
    Blaze.remove(Blaze.getView(renderedView));
  }
  var parentNode = document.body;
  Blaze.renderWithData(Template.ooModalScroll, data, parentNode)
}

ooModalScrollClose = function(id, callback) {
  var element = document.getElementById(id);
  $(element).addClass('is-closed');
  var renderedView = Blaze.getView(element)
  Meteor.setTimeout(function(){
    Blaze.remove(Blaze.getView(renderedView));
    if (callback)
      return callback('done')
  }, 400);
}

