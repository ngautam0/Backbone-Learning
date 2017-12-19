TheView = Backbone.View.extend({
  defaults : {

  },
  initialize : function(){
    console.log(this.el);
    console.log(this.$el);

    this.$el.append("ksajdhkasjdhksdsskhfkshf");
  }
});

$(document).ready(function(){
  var aView = new TheView({el: $("#unique")});
});
