
function Palindrome(string){

     // Change the string into lower case and remove  all non-alphanumeric characters

       var word = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
       var counter = 0;

     // Checking if the string is empty or not

        if(word==="") {
            console.log("Empty");
            return false;
        }   

    // Check if the length of the string is even or odd 

        if ((word.length) % 2 === 0) {
            counter = (word.length) / 2;
        } else {

    // If the length of the string is 1 then it becomes a palindrome

            if (word.length === 1) {
                console.log("Not a palindrome.");
                return true;
            } else {

    // If the length of the string is odd ignore middle character

                counter = (word.length - 1) / 2;
            }
        }

        
    // Loop through to check the first character to the last character and then move next

        for (var x = 0; x < counter; x++) {

    // Compare characters and drop them if they do not match 

            if (word[x] != word.slice(-1-x)[0]) {
                console.log("Not a Palindrome");
                return false;
            }
        }
        console.log("A Palindrome");
        return true;
    }

    // Exmaples 
    Palindrome('Civic');
    Palindrome('Level');
    Palindrome('Kemi');
    Palindrome('Redder');
    Palindrome('Bake');
    Palindrome('Racecar');
    Palindrome('games');
    Palindrome('Madam');
    Palindrome('Sagas');
    Palindrome('Give');
    Palindrome('Noon');
    Palindrome('Madam');
    Palindrome('');
   