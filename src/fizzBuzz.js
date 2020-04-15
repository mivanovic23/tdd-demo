function fizzBuzz(x) {
    let result;
    if(x%3 == 0) result = "Fizz"
    if(x%5 == 0) result = "Buzz"
    if(x%3 == 0 && x%5 == 0) result = "FizzBuzz";
    
    return result;
    
}

module.exports = fizzBuzz;