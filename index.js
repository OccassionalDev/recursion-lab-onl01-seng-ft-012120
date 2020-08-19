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
  if ()
}