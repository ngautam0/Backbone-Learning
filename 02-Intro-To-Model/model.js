WebsiteModel = Backbone.Model.extend({
  initialize: function(){
    alert("Hello Nishant From First backbone model")
  }
});

$(document).ready(function(){
  var page_1 = new WebsiteModel();
});
