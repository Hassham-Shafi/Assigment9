function displayCurrentDateTime() {
  var currentDateTime = new Date();
  var formattedDateTime = currentDateTime.toLocaleString();

  alert("Current Date & Time: " + formattedDateTime);
}
displayCurrentDateTime();



function greetUser(firstName, lastName) {
    document.write('Hello, ' +  firstName + ' ' + lastName);
  }
  
  var firstName = prompt('enter your first name')
  var lastName = prompt('enter your last name')
  greetUser(firstName, lastName)
   


  function addTwoNumbers() {
    var num1 = prompt('Enter the first number:')
    var num2 = prompt('Enter the second number:')
      var sum = +num1 + +num2;
      return sum;
  }
  document.write('The sum of the two numbers is: ' + addTwoNumbers());
  


function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
          return num1 / num2;
      default:
        return 'Invalid operator. Please use +, -, *, or /.';
    }
  }
  
  var num1 = prompt('Enter the first number:')
  var num2 = prompt('Enter the second number:')
  var operator = prompt('Enter the operator +, -, *, /')
  document.write('Result: ' + calculate(+num1, +num2, operator))
  


function squareNumber(number) {
    return number * number;
  }
  
  var number = 5;
  document.write('The square of ' + number + ' is ' + squareNumber(number));
  

function factorial(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers.";
    }
    if (number === 0 || number === 1) {
      return 1;
    }
  
    var result = 1;
    for (var i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }
  document.write(factorial(6)); 


  function hypotenuse(){
    var base = prompt('Enter base value')
    var perpendicular = prompt('Enter perpendicular value')
    var hypotenus = calculateSquare(base) + calculateSquare(perpendicular)
    function calculateSquare(value){
       return value*value 
    }
    document.write(hypotenus)
  }
  hypotenuse()



function logArguments(...args) {
    for (var i = 0; i < args.length; i++) {
      document.write("Argument " + (i + 1) + ": " + args[i]);
    }
  }
  logArguments(20,40,29,2,1)
  

function findLargest() {
  
    var largest = arguments[0]
  
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] > largest) {
        largest = arguments[i];
      }
    }
    document.write("The largest number is: " + largest)
  }

  
  findLargest(10, 5, 20, 88, 15)
  
function calculateRectangleArea(width, height) {
    document.write( width * height);
  }
  calculateRectangleArea(5, 8)
  

  function calculateRectangleAreaUsingVariables() {
    var width = 5; 
    var height = 8; 
    document.write( width * height)
  }
 calculateRectangleAreaUsingVariables()

  
    var unsortedArray = [5, 2, 9, 10, 5, 6];
        unsortedArray.sort(sortArray)
function sortArray(a,b) {
      return a - b;
    };
    document.write(unsortedArray)
  sortArray(a,b)


function countNumbers(start, end) {
    if (start > end) {
      document.write('Invalid input: Start number should be less than or equal to the end number.');
      return;
    }
  
    for (var i = start; i <= end; i++) {
      document.write(i + '<br>');
    }
  }
  var startNum = prompt('Enter the start number:')
  var endNum = prompt('Enter the end number:')
  countNumbers(startNum, endNum);


function sumArrayElements(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  var numbersArray = [5, 10, 15, 20];
  var result = sumArrayElements(numbersArray);
  document.write('The sum of array elements is: ' + result);

var param = function inner() {
    return typeof inner;
    }
    alert(param());
  

function power(base, exponent) {
    var result = 1;
    for (var i = 1; i <= exponent; i++) {
      result *= base;
    }
    return result;
  }
  var result = power(2, 4)
  document.write(result)
 
  
function rollDice() {
    var randomValue = Math.round(Math.random() * 5) + 1;
    return randomValue;
  }
  document.write(rollDice())

  
  var num = '597873'
  for (var i = num.length-1; i >=0; i--) {
    document.write(num[i])
  }

function Palindrome(){
var nam = 'madam'
var reversenam = ''
for(var i=nam.length-1;i>=0;i--){
 reversenam += nam[i]
}
if (nam==reversenam) {
    document.write('true')
} else {
    document.write('false')
}
}
document.write(Palindrome())

function lifetimesupply(currentage,amountperday){
var favoritesnack=' oreo bicuit '
var maxage=85
document.write('You will need '+((maxage-currentage)*amountperday)+favoritesnack+' to last you until the ripe old age of '+maxage)
}
lifetimesupply(15,2)



function converterFahrenheit(converterFahrenheit){
FahrenheitTemperature=(converterFahrenheit*9/5)+32
document.write(converterFahrenheit+'°C is '+FahrenheitTemperature+'°F') 

}
converterFahrenheit(25)

function converterCelsius(converterCelsius){
document.write(converterCelsius+'°F is '+((converterCelsius-32)*5/9)+'°C' )
}
converterCelsius(77)


// function sleep(milliseconds){
//     const date = Date.now();
//     let currentDate = null;
//     do{
//         currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }
// function toss(){
//     document.write('Welcome to PSL 8 Today match Pak Vs Ind');

// var toss = Math.round(Math.random());
// sleep(2000);
// if(toss == 0){
//     document.write('Pakistan won the toss, and elected to bat')
//     var pakScore = innings('Pakistan')
//     document.write('_________________________')
//     sleep(5000)
//     var indScore = innings('India', pakScore)
// } else{
//     document.write('India won the toss, and elected to bat')
//     var indScore = innings('India')
//     document.write(' __________________________ ')
//     sleep(5000)
//     var pakScore = innings('Pakistan', indScore)
// }
// }
// function innings(team, target){
//     document.write(team + 'is going to bat..')
//     var score = 0
//     var wickets = 0
//     var overs = 3
//     overLoop: for (var i = 0; i < overs; i++) {
//         document.write('Over '+(i+1)+' stated')
//         for()
//     }
// }



















