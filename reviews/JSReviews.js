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

// come back at 11:40 AM EST
