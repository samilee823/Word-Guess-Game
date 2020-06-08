
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<script> 
{/* /* // 1. Display current word with spaces for letters */}
$(document).ready(function() {
//    Magic Kingdom
   document.onkeyup = function(event) {

        var letter = event.key.toLowerCase();
        // var winNumber; 
        var userText = $("user-text");


        if (letter === "d") {
          console.log("d")
          $("#word").append("<br><hr>" +"<h1>" + userText + "</h1>");
          userText.textContent = event.key;

        }

        if (letter === "o") {
        
        }

        if (letter === "c") {
         
        } else {

        }

        $("#wins").append("<br><hr>" +"<h1>" +winNumber + "</h1>");

      };

});
{/* // 2. Hear the letter the user typed */}
{/* // 3. If the letter is correct, display in current word  */}
{/* //    * Else letter is incorrect, display in "letters already guessed" */}
{/* // 4. Count down number of guesses remaining  */}
{/* // 5. Display answer and picture when guesses are done  */}
{/* // 6. New word displayed and clear out letters  clearQueue()*/}
{/* // 7. Display win count */}

</script>