
// const number = 16;
// let isPrime = true;
// if (number == 1) {
//     console.log('Show This');
// }

//     else if (number > 1) {

//     for (let i = 0; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = true;
//             break;
//         }
//     }
//         if (isPrime) {
//         console.log('It is a prime Number');
//     }   else {
//         console.log('is it not prime number');
//     }
// }


// scond
function test_prime(number) {
    if (number === 1) {
        return false;
    }
    else if (number === 2) {
        return true;
    }
    else {
        for (var i = 2; i < number.length; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(test_prime(37));

