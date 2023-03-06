function isPalindrome(word) {
  return word.split("").join() === word.split("").reverse().join()
}

/*
  I'm not totally sure what is expected from this lab other than a 
  different palindrome algorithm, so I'll just improve my original code
  here. I oringally had if(word.split("") === word.split("").reverse()) then
  return true, but I realized that those apparently weren't the same thing,
  even if we just used ==. I did some testing and found out that 
  word.split("") === word.split("") also was false. So I took a cue from
  the video.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("tobot"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("shallicomparetheetoasummersday"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mrowlatemymetalworm"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("wasitacaroracatisaw"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tortilla"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("apples"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eevee"));
}

module.exports = isPalindrome;
