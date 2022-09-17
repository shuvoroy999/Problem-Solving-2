
// count a word how many time ? and scearch whare fast index ?

const word = "Lorem ipsum dolor sit amet consectetur shuvo elit. Fugit quia cumque, dignissimos shuvo velit dicta est error placeat? Alias, shuvo nesciunt optio beatae animi atque shuvo deserunt eveniet, officia maiores eum shuvo explicabo mollitia culpa, shuvo reprehenderit molestias nobis shuvo!";

const matches = word.match(/shuvo/gi);
// console.log(matches); //its retrun number of array
const total = matches ? matches.length : 0;
console.log(total);

let position = word.search(/shuvo/i);
position = position >= 0 ? position : "not found"; //if hare get index then retrun index no or retrun not found
console.log(position);


// problem 2

//linearSearch input : (["S", "H", "U", "V", "O"], "H")
//outut : index o valur or not found

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
        
    }
    return "Not found!";
}   
let a 
console.log(linearSearch(["S", "H", "U", "V", "O"], "V"));

// 1 to 100 in the number modulas 3 or 5 and 3&5

function TinPas(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log(`${i} is TinPas`);
        } else if (i % 3 === 0) {
            console.log(`${i} is Tin`);
        } else if (i % 5 === 0) {
            console.log(`${i} is Pas`);
        } else {
            console.log(i + " is not modulas 3 or 5");
        }
    }
}
TinPas(100);