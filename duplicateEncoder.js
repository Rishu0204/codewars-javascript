// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is
//"(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
//Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

//Solution

function duplicateEncode(word) {
  //creating an empty array
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    //pushing each letter of word in list in lower cases
    arr.push(word[i].toLowerCase());
  }
  //creating an empty string
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    //creating an variable 'duplicate' to check for duplicates in array
    let duplicate = false;
    for (let j = 0; j < arr.length; j++) {
      //checking for duplicates
      if (i !== j && arr[i] === arr[j]) {
        duplicate = true;
        break;
      }
    }
    if (duplicate) {
      //if array's element has duplicates, ")" is added is the empty string 'res'
      res += ")";
    } else {
      //if array's element has no duplicates, "(" is added is the empty string 'res'
      res += "(";
    }
  }
  //after going through entire array's element, res is returned
  return res;
}

// Better way to code this question
function duplicateEncode(word) {
  //empty string
  let unique = "";
  //converting string to lower case
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    //lastIndexOf() returns the last occurence of the specified value
    //indexOf() returns the first occurence of the specified value
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}
