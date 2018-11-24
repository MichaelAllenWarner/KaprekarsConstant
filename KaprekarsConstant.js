// My solution to the "Kaprekar's Constant" challenge at https://www.coderbyte.com/editor/guest:Kaprekars%20Constant:JavaScript
// This exercise taught me the importance of ordering lines within a loop. My initial solution
// was longer and uglier, with some code outside the "while" loop duplicating code inside it.
// Re-ordering the lines in the loop allowed me to condense the code, and now it's more succinct and elegant
// than the "top answer" at Coderbyte.


function KaprekarsConstant(num) {
  
  let counter = 0;

  while (num !== 6174) {
    let arr = num.toString().padStart(4,'0').split('').sort();
    let ascending = Number(arr.join(''));
    let descending = Number(arr.reverse().join(''));
    num = descending - ascending;
    counter++;
  }
  
  return counter; 
         
}
   
KaprekarsConstant(readline());
