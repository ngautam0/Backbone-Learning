TheView = Backbone.View.extend({
  // we want to create an html segment on the fly..
  // <span class="prettycake" id ="span1"></span>

  tagName: "span",
  className: "prettycake",
  id: "span1",
  defaults : {

  },
  initialize : function(){
    console.log(this.el);
    console.log(this.$el);

    $("#unique").append(this.el)
  }
});

$(document).ready(function(){
  var aView = new TheView();
});
