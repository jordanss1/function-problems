//Write a JavaScript function that iterates the integers from 1 to 100.
//But for multiples of three print "Fizz" instead of the number
//and for the multiples of five print "Buzz". For numbers that are
//multiples of both three and five print "FizzBuzz".

/*
1. Write a function with no parameters

2. Create a for loop that iterates from 1 to 100 with a stopping condition that stops the loop before it can loop past 100 (1 <= 100)

3. Create if else if conditions with a modulo operator in the first two conditions that check to see if "i" has a remainder equal to the value of "0" when it divides into 3 or 5

4. With a code block for each that logs "fizz" or "buzz" to the console

4. Create an else statement which logs every other integer to the console

*/

const multiples = () => {
	for(let i = 1; i <= 100; i++)
		if (i % 3 === 0) {
			console.log(`Fizz`);
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(`${i}`);
		}
}

multiples();