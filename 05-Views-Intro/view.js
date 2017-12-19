TheView = Backbone.View.extend({
  defaults : {

  },
  initialize : function(){
    alert('View has been created.... :D')
  }
});

$(document).ready(function(){
  var aView = new TheView();
});
