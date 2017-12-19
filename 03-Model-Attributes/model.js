WebsiteModel = Backbone.Model.extend({
  defaults :  {
    name: 'Unknown'
  },
  initialize : function(){
    alert("Data is : " + this.get('name'));
  }
});


$(document).ready(function(){
  var page_1 = new WebsiteModel({name: 'This has been set in model attribites'});
  page_1.set({name: 'This has been set using model.set function'});
  alert("Data is : " + page_1.get('name'));


  var page_2 = new WebsiteModel();
  page_2.set({name: 'This has been set using model.set function'});
  alert("Data is : " + page_2.get('name'));
})
