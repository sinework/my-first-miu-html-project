// max of two
function max(x, y) {
  if (x > y) {
    return x;
  } else return y;
}


//max of three numns
function maxOfThree(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) {
    return b;
  } else return c;
}

// is vowel es6 style
const isVowel = (arr) => {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(arr)) return true;
  else return false;
};

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function multiple(arr) {
  let mul = 0;
  for (let i = 0; i < arr.length; i++) {
    mul *= arr[i];
  }
  return mul;
}

function reverse(arr) {
  let charArray = [...arr];
  let char = [];
  for (let i = charArray.length; i > 0; i--) {
    char.push(charArray[i]);
  }
  return char;
}
function findLongestWord(arr){
    let max = 0;
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        let len = arr[i].split("").length;
        if(len > max){
            max = len;
            result = i;
        }

    }

    return arr[result];
}


function findLongestWords(arr, min){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let len = arr[i].split("").length;
        if(len > min){
            result.push(arr[i]);
        }

    }

    return result;
}


function multiplyEachElementBy10(arr){
    let result = [];
    result = arr.map(function(elem, i, array){
        return elem * 10;
    });

    return result;
}

function elementsEqualTo3(arr){
    let result = [];
    result = arr.filter(function(elem, i, array){
        return elem === 3;
    });

    return result;
}

function productOfAllElements(arr){
    let result = [];
    result = arr.reduce(function(prev, elem, i, array){
        return prev * elem;
    });

    return result;
}

// console.log(
//   "The expected output is:" +
//     expected +
//     "and the actual is:" +
//     res +
//     "test is a " +
//     myFunction(5, maxOfThree(3, 4, 5))
// );

// console.log(
//     "The expected output is:" +
//       expected +
//       "and the actual is:" +
//       res +
//       "test is a " +
//       myFunction(4, max(3, 4))
//   );
  
function myFunctionTest(expected, res) {
  if (expected === res) return "Test succeeded";
  else return "Test failed";
}

function myFunctionTestForArrays(expected, test){
    if(JSON.stringify(expected)==JSON.stringify(test)){
        return " TEST SUCCEEDED ";
    } else{
        return " TEST FAILED EXPECTED " + expected + " FOUND " + test;
    }
}

const earliestSpace=(st1, st2,st3)=>{

  firstString=st1.split(" ");
  secondString=st2.split(" ");
  thirdString=st3.split(" ");
  
  if(firstString[0].length<secondString[0].length && secondString[0].length<thirdString[0].length){
  
  return st1;
  }
  else if (secondString[0].length<firstString[0].length && secondString[0].length<thirdString[0].length){
  
  return st2;}
  else return st3;
  }
console.log(earliestSpace("a dfd","av dfd","adffd dfdf"))
console.log("Expected output of max(3, 4) is 4: " + myFunctionTest(4, max(3, 4)));
console.log("Expected output of maxOfThree(10, 20, 30) is 30: " + myFunctionTest(30, maxOfThree(10, 20, 30)));
console.log("Expected output of isVowle(\"i\") is true: " + myFunctionTest(true, isVowel("i")));
console.log("Expected output of sum([3, 5, 2, 6]) is 16: " + myFunctionTest(16, sum([3, 5, 2, 6])));
console.log("Expected output of multile([3, 5, 2, 6]) is 180: " + myFunctionTest(180, multiple([3, 5, 2, 6])));
console.log("Expected output of reverse(\"hello\") is : \"olleh\"" + myFunctionTest("olleh", reverse("hello")));
console.log("Expected output of findLongestWord([\"Tplf\", \"is\", \"terrorist\"]) is \"terrorist\": " + myFunctionTest("terrorist", findLongestWord(["Texas", "Newyork", "California"])));
console.log("Expected output of findLongestWords([\"ethiopia\", \"will\", \"prevail\, \"always\"], 7) is [\"ethiopia\"]: " + myFunctionTestForArrays(["California"], findLongestWords(["Texas", "Newyork", "California", "DC"], 7)));
console.log("Expected output of multiplyEachElementBy10([1, 2, 3, 4]) is [10, 20, 30, 40]: " + myFunctionTestForArrays([10, 20, 30, 40], multiplyEachElementBy10([1, 2, 3, 4])));
console.log("Expected output of elementsEqualTo3([1, 2, 3, 4, 3, 5]) is [3, 3]: " + myFunctionTestForArrays([3, 3], elementsEqualTo3([1, 2, 3, 4, 3, 5])));
console.log("Expected output of productOfAllElements([1, 2, 3, 4, 5]) is 120: " + myFunctionTest(120, productOfAllElements([1, 2, 3, 4, 5])));