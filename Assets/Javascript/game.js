

var answers = ["Doc", "Sleepy", "Grumpy", "Sneezy", "Dopey", "Happy", "Bashful", "Snow White"]
let random = Math.floor(Math.random() * answers.length)
let wordChosen = answers[random]
  console.log(wordChosen)

$(document).ready(function() {
//    Doc
    
   document.onkeyup = function(event) {
        var userText = event.key;
        var letter = userText.toLowerCase();
        var count = 0; 
        var incorrect = []; 

    for (var j = 0; j < wordChosen.length; j++) {
        if (wordChosen.charAt(j) === letter) {
        $("#word").append(letter);
        count ++; 
         } else 
        $("#letters").append(letter);

  }
    
        // $("#wins").append("<h1>" +winNumber + "</h1>");

      };

});