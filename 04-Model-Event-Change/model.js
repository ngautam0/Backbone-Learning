SandwhichModel = Backbone.Model.extend({
  default: {
    bread: "wheat"
  },
  initialize : function(){
    this.bindEvents();
  },
  bindEvents : function(){
    this.on("change:bread", function(model){
      var newBreadType = model.get("bread")
      alert("Hey the bread has been changed to : " + newBreadType);
    });
  }
});

$(document).ready(function(){
  var mySandwhich = new SandwhichModel();
  mySandwhich.set({bread:"jalapeno"});
  mySandwhich.set({bread:"big weiner"});
});
