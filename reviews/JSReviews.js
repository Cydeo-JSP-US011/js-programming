let num;

num = 200;

console.log(typeof num);

num = 'JavaScript';

console.log(typeof num);

num = true;

console.log(typeof num);

// let num;
console.log("------------------------------");

let actualResult = "100.5";

let expectedResult = 100.5;

console.log(actualResult == expectedResult); // true ----> ignores the data type

console.log(actualResult === expectedResult); // false ----> DOES NOT ignore the data type

console.log(actualResult !== expectedResult ); // true ----> DOES NOT ignore the data type


console.log("------------------------------");

let browser = 'safari'

if (browser === 'chrome'){
    console.log('You are using Google Chrome')
}else if (browser === 'firefox'){
    console.log('You are using Mozilla Firefox')
}else if (browser === 'safari'){
    console.log('You are using Apple Safari')
}else{
    console.log('Invalid browser')
}


console.log("------------------------------");

switch (browser) {
    case 'chrome':
        console.log('You are using Google Chrome');
        break;
    case 'firefox':
        console.log('You are using Mozilla Firefox');
        break;
    case 'safari':
        console.log('You are using Apple Safari');
        break;
    default:
        console.log('Invalid browser');
}

console.log("------------------------------");

for (let i = 0; i < 10; i++) {
    console.log(i);
}


console.log("------------------------------");

let str = "JAVASCRIPT";

for (let each of str){
    console.log(each);
}


console.log("------------------------------");

let s = "1234abcde56789fghijklmn";

s = s.replace(/\d/g, "");

console.log(s);

console.log("------------------------------");

let actualTitle = "Self Enrollment Portal";

let expectedTitle = "self enrollment portal";

console.log(actualTitle === expectedTitle); 

console.log(actualTitle.toLowerCase() === expectedTitle.toLowerCase()); // true


console.log("------------------------------");

let elements = [10, 20, 30, 40, 50, 60];

console.log(elements);

// console.log(elements[0]);

// create for of loop to access each elemenst of the array.
for (let element of elements) {

    console.log(element);

}

console.log("------------------------------");

// use for of loop to print each element of the array in reverse order.
for (let i = elements.length - 1; i >= 0; i--) {

    console.log(elements[i]);

}

console.log("------------------------------");

let maps = {
    "name": "John Doe",
     "age": 30, 
     "city": "New York"
};

console.log(maps);

for (let key in maps) {
    console.log(`${key}: ${maps[key]}`);
}

console.log("------------------------------");

let mySet = new Set([1, 2, 3, 2, 4, 5, 3, 6, 1, 7]);

console.log(mySet);

for (let element of mySet) {
    console.log(element);
}

console.log("------------------------------");

/*
Create a function that can reverse a string.
     The function should not using any built in reverse function or method.
*/
/**
 * Reverses a string by iterating through its characters from end to beginning.
 * This function does not use any built-in reverse methods or functions.
 * 
 * @param {string} str - The input string to be reversed
 * @returns {string} A new string with characters in reverse order of the input string
 */
function reverseString(str) {
    let reversedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}


// test the functions.
console.log(reverseString("Hello World!")); // "!dlroW olleH"

console.log("------------------------------");

function wordBreak(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // empty string can always be segmented
    
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[n];
}

// Test with the given examples
const dictionary = ["i", "like", "sam", "sung", "samsung", "mobile", "ice", "cream", "icecream", "man", "go", "mango"];

console.log(wordBreak("ilike", dictionary)); // true
console.log(wordBreak("ilikesamsung", dictionary)); // true

console.log("-------------------------------");

function countDistinctSubstrings(str) {
    let n = str.length;
    let ans = 0;
    let cnt = new Array(26).fill(0);
    let i = 0, j = 0;
    
    while (i < n) {
        if (j < n && cnt[str[j].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
            cnt[str[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            ans += (j - i + 1);
            j++;
        } else {
            cnt[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            i++;
        }
    }
    
    return ans;
}

console.log(countDistinctSubstrings("gffg"));

console.log(countDistinctSubstrings("gfg"));

console.log("-------------------------------");

function diagonalDifference(matrix) {
    let primarySum = 0;
    let secondarySum = 0;
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        primarySum += matrix[i][i];                  // left to right diagonal
        secondarySum += matrix[i][n - 1 - i];        // right to left diagonal
    }

    return Math.abs(primarySum - secondarySum);
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];

console.log(diagonalDifference(matrix));


