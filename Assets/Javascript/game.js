
  let winCount= 0; 
  let losses = 0; 
  let correctGuesses = 0; 
  let guessLeft = 5; 
  let userGuess = []; 
  let userChoice = []; 
  let blanks = []; 
  let answers = ["doc", "sleepy", "grumpy", "sneezy", "dopey", "happy", "bashful", "snow white"]; 
  let wordChosen = answers[Math.floor(Math.random() * 9)]; 

  console.log(wordChosen); 

  $(document).ready(function() {

    for (var i = 0; i < wordChosen.length; i++) {
        blanks.push("_")
        }

        $("#word").append(blanks.join (" ")); 
      
        document.onkeyup = function(event) {
          let userText = event.key;
          let letter = userText.toLowerCase();

        for (var j = 0; j < wordChosen.length; j++) {
          if (wordChosen.charAt(j) === letter) {
            userChoice.push(letter)
            $("#word").append(letter)
            correctGuesses++ 
          if (correctGuesses === wordChosen.length) {
            winCount++
          }
        } else {
          userGuess.push(letter); 
          $("#guess").append(letter); 
          guessLeft++
        }
      
        };

    };
  }); 

// 1. adding instruction to the page === 
// 2. create a wins to keep track of users wins ===
// 3. create correctGuesses to keep track of how many letters the user got right so far ===
// 4. create losses variable to keep track of losses ===
// 5. create guessesLeft store 5 === 
// 6. create userGuesses array to keep track of letters a user has chosen === 
// 7. create a list of word option === 
// 8. randomly select a word to guess and store it in guessWord var ===
// 9. find out the length of guessWord === 
// 10. append to the page '_' for each letter in guessedWord ==
// 11. listen for user pressing a key  ==
// 12. capture users choice store in userChoice var 
// 13. loop through each letter in the guessedWord then
// 14. compare userChoice to each letter in the guessWord then
// 15. if userChoice is the same as a letter in the guessWord then
// 16.  replace the '_' with the userChoice
// 17.  correctGuesses + 1
// 18.    if correctGuesses equal to the guessWord.length then
// 19.      you won
// 20.      add 1 to your wins
// 21.       restart the dame
// 22.    end
// 23. else if is not a letter in the guessed words 
// 24.   add userChoice to userGuesses array
// 25.   if userGuesses is equal to guessesLeft then
// 26.      game over add one to losses
// 27.      restart game
// 28.   end
// 29. end
// 30. back to step 11