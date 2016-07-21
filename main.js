//slice on the command arg so that we get the right value
var number = process.argv.slice(2);

/****/

//this handles finding all primes less than the value passed in
var eratosthenes = function(number) {
    // Eratosthenes algorithm to find all primes under n
    var array = [];
    upperLimit = Math.sqrt(number);
    output = [];

    // 2 is the smallest possible prime
    if (number <= 2) {
      console.log("Please enter a number larger than 2");
      return array;
    }

    // Make an array using the number passed in as the ceiling
    for (var i = 0; i < number; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < number; j += i) {
                array[j] = false;
            }
        }
    }

    for (var i = 2; i < number; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
}

/****/

function getPairsFromPrimes(primes) {
  var array = [];

  for (var i = 0; i < primes.length - 2; i++) {
    for (var j = i + 1; j < primes.length - 1; j++) {
      array.push([primes[i], primes[j]]);
    }
  }

  return array;

}

/****/

//get all primeNumbers and then convert them to their respective pairs
var primeNums = eratosthenes(number);
var pairOfPrimes = getPairsFromPrimes(primeNums);

/****/

function secret(number) {
  return number * 2;
}

/****/

function isAdditive(functionName, primePairs) {
  for (i = 0; i < primePairs.length - 1; i++) {
    for (j = i+1; j < primePairs.length; j++) {
      firstToCheck = functionName(primePairs[i]);
      secondToCheck = functionName(primePairs[j]);
      combinedCheck = functionName(firstToCheck + secondToCheck);
      if ((firstToCheck + secondToCheck) !== combinedCheck) {
        return false;
      }
    }
  }
}

/****/

var numberIsAdditive = isAdditive(secret, pairOfPrimes)

if (numberIsAdditive) {
  console.log("Function is Additive!");
} else {
  console.log("Function is not Additive!");
}
