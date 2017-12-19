var StudentModel = Backbone.Model.extend({
  default:{
    name:"unknown"
  }
});

StudentCollection = Backbone.Collection.extend({
  model: StudentModel
});

$(document).ready(function(){
  var jony = new StudentModel();
  var vicky = new StudentModel();

  var class_1 = new StudentCollection([jony, vicky]);

  console.log("Class_1 size = "+ class_1.size());
});
