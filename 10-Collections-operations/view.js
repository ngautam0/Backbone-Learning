var StudentModel = Backbone.Model.extend({
  default:{
    name:"unknown"
  }
});

StudentCollection = Backbone.Collection.extend({
  model: StudentModel
});

$(document).ready(function(){
  var jony = new StudentModel({name:"jony", id:0});
  var vicky = new StudentModel({name:"vicky", id:1});
  var lola = new StudentModel({name:"lola", id:2});
  var pepe = new StudentModel({name:"pepe", id:3});

  var class_1 = new StudentCollection([jony, vicky]);
  displayCollectionContents("Two Students : ", class_1);

  class_1.add([pepe, lola]);
  displayCollectionContents("Four Students : ", class_1);


  class_1.remove([vicky]);
  displayCollectionContents("Three Students : ", class_1);

  class_1.remove([jony, pepe]);
  displayCollectionContents("One Student : ", class_1);
});

function displayCollectionContents(string, collection){
  console.log(string+ " "+ JSON.stringify(collection.toJSON()));
}
