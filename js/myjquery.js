$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(sofa) {
      var userInput = $("input#" + sofa).val();
      $("." + sofa).text(userInput);

    });

    $("#story").show();

    event.preventDefault();
  });
});
