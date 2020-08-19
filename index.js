// Code your solution here!

function printString(text) {
  console.log(text[0]);
  
  if (text.length > 1) {
    let newString = text.substring(1, text.length);
    
    printString(newString);
  } else {
    return true;
  }
}

function reverseString(text) {
  if (text.length > 2) {
    reverseString(text.substring(0) + text.substring[0])
  } else {
    return true
  }
}