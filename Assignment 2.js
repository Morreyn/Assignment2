/* 
    TITLE: ASSIGNMENT 2 JAVASCRIPT
    AUTHOR: MISTY MORREYN
    CLASS: COMM644 FALL 2015
*/

// ASSIGNMENT 2 PART 1:

/* 
// STEP 1. Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.

var name = prompt("What is your name?");
alert("Your name is " + name.length + " characters long.");
*/

/* 
// STEP 2. Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.

var name = prompt("What is your name?");
var num = prompt("Pick a number less than the amount of letters in your name. I'll find the letter your number corresponds to.");
alert(name.substring(num-1, num));
*/

/* 
// STEP 3. Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.

var firstName = prompt("What is your name?");
var lastName = prompt("What is your last name?");
alert("Your name is: " + firstName + " " + lastName);
*/

/* 
// STEP 4. Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.

var str = "The quick brown fox jumps over the lazy dog";
alert(str.search("fox"));
*/

/* 
// STEP 5. Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.

var str = "The quick brown fox jumps over the lazy fox";
alert(str.lastIndexOf("fox"));
*/

/*
 // STEP 6. Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.

var str = "The quick brown fox jumped over the lazy dog";
var fullName = prompt("What is your full name?");
alert(str.replace("the lazy dog", fullName));
*/

/*
// STEP 7. Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

var str = "The quick brown fox jumps over the lazy dog";
var word = prompt("Type ONE of the following words: 'The quick brown fox jumps over the lazy dog'.");
alert(str.search(word));
*/

/*
// STEP 8. Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.

var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = old_string.substring(old_string.lastIndexOf("the"), old_string.length+1);
alert(new_string.toUpperCase());
*/

/*
// STEP 9. Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.

var str = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
alert(str.trim().toLocaleLowerCase());
*/

/*
// STEP 10. Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

var str = "the quick brown fox jumps over the lazy dog";
alert(str.replace("t", "T"));
*/

// ASSIGNMENT 2 PART 2:

/*
// STEP 1: 1. Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.

var num = prompt("Type a number, any number.")
console.log(Math.abs(num));
*/

/*
// STEP 2. Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.

var num = prompt("Type a number that includes a decimal value.");
console.log(Math.round(num));
*/

/*
// STEP 3. Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.

var num = prompt("Type a number that includes a decimal value.");
console.log(Math.floor(num));
*/


/*
// STEP 4. Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.


var num1 = prompt("Type a number!");
var num2 = prompt("Type a number!");
var num3 = prompt("Type a number!");
var num4 = prompt("Type a number!");
var num5 = prompt("Type a number!");
var numSmallest = Math.min(num1, num2, num3, num4, num5);
var numLargest = Math.max(num1, num2, num3, num4, num5);
console.log("Smallest number is: " + numSmallest + "\nLargest number is: " + numLargest);
*/


/*
// STEP 5. Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 

var num = prompt("Type a number!");
console.log(Math.sqrt(num));
*/

/*
// STEP 6. Create an application that gets the current date. Display that result within the console window.

var date = new Date ();
console.log(date);
*/

/*
// STEP 7. Create an application that gets the number of days in a month. Display that result within the console window.

var d = new Date();
switch (d.getMonth()) {
    case 0: //January
        console.log(31);
        break;
    case 1: //February (if not leap year)
        console.log(28);
        break;
    case 2: //March
        console.log(31);
        break;
    case 3: //April
        console.log(30);
        break;
    case 4: //May
        console.log(31);
        break;
    case 5: //June
        console.log(30);
        break;
    case 6: //July
        console.log(31);
        break;
    case 7: //August
        console.log(31);
        break;
    case 8: //September
        console.log(30);
        break;
    case 9: //October
        console.log(31);
        break;
    case 10: //November
        console.log(30);
        break;
    case 11: //December
        console.log(31);
        break;
}
*/

/*
// STEP 8. Create an application that gets the month name from a particular date. Display that result within the console window.

var d = new Date();
switch (d.getMonth()) {
    case 0: //January
        console.log("January");
        break;
    case 1: //February (if not leap year)
        console.log("February");
        break;
    case 2: //March
        console.log("March");
        break;
    case 3: //April
        console.log("April");
        break;
    case 4: //May
        console.log("May");
        break;
    case 5: //June
        console.log("June");
        break;
    case 6: //July
        console.log("July");
        break;
    case 7: //August
        console.log("August");
        break;
    case 8: //September
        console.log("September");
        break;
    case 9: //October
        console.log("October");
        break;
    case 10: //November
        console.log("November");
        break;
    case 11: //December
        console.log("December");
        break;
}
*/

/*
// STEP 9. Create an application that tests whether a date is a weekend. Display that result within the console window.

var d = new Date();

if (d.getDay() > 0 && d.getDay() < 6) {
    console.log("It's not the weekend.");
} else {
    console.log("It's the weekend!");
};
*/

/*
// STEP 10. Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 

var d = new Date();
var dDay = d.getDay() - 1;
switch (dDay) {
    case 0: 
        console.log("Sunday");
        break;
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
}
*/

/*
// STEP 11. Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.

var d = new Date();
var dDay = d.getDay();
switch (dDay) {
    case 0: 
        console.log("S");
        break;
    case 1: 
        console.log("M");
        break;
    case 2: 
        console.log("T");
        break;
    case 3: 
        console.log("W");
        break;
    case 4: 
        console.log("T");
        break;
    case 5: 
        console.log("F");
        break;
    case 6: 
        console.log("S");
        break;
}
*/


// STEP 12. Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.





