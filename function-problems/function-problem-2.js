//Write a JavaScript function that accepts a string as a parameter and find the longest word within the //string.

/*
1. Write the first line of the function

2. Create an if else statement that would filter whether the user has entered a number or string

2. Executes .split on the string to extract every individual word into an array as it's own element, initialized in the "words" array

3. Execute .reduce on the array to compare each string to see which one is the longest and return that string to the function and a few extra "else" conditions in case there are equal lengths.

4.  And a final return which returns the longest word to the function
 */

const longestWord = string => {
  if (typeof string === "number") {
	 return console.log("No numbers allowed!");
  } else {
	 console.log("String magic: begin");
  }
  let words = string.split(" ");
  let longest = words.reduce((stringA, stringB) => {
     if (stringA.length > stringB.length) {
		 return stringA;
	 } else if (stringA.length === stringB.length) {
		 return [stringA, stringB];
	 } else {
		 return stringB;
	 }
  });
	return longest;
};

console.log(longestWord(1111111));
