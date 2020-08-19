// Code your solution here!

function printString(text) {
  console.log(text[0]);
  
  if (text.length > 1) {
    let newString = text.substring(0, text.length);
    
    printString(newString);
  }
}