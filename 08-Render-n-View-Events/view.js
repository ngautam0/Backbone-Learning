var SearchView = Backbone.View.extend({

  initialize: function(){
    alert("View instansiated");
    this.anything();
  },
  anything: function(){
    var options = {search_label: "Search Label from render _JS"};
    var template = _.template($("#seach_template").html());
    this.$el.html(template(options));
  },
  events: {
    // "event class/id/tag " : "event_handler_function"
    "click input[type=button]" : "doSearch",
    "mouseover .mouseover" : "mouseovered"
  },
  doSearch: function(event){
    alert("Search for -> " + $("#search_input").val());
  },
  mouseovered : function(event){
    alert("Dont !!!! mouseover me... :<")
  }
});

$(document).ready(function(){
  console.log("Doc loaded");

  var searchView = new SearchView({
    el: $("#search_container")
  });
});
