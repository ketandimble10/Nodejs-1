console.log("Welcome to Calculator.");
const numberOne = Number(process.argv[2]);
const operation = process.argv[3];
const numberTwo = Number(process.argv[4]);

console.log(`You have entered - ${numberOne}, ${numberTwo} for ${operation}`);

switch (operation) {
  case "+":
    console.log(`The result is: ${numberOne + numberTwo}`);
    break;

  case "-":
    console.log(`The result is: ${numberOne - numberTwo}`);

    break;

  case "x":
    console.log(`The result is: ${numberOne * numberTwo}`);

    break;

  case "/":
    console.log(`The result is: ${numberOne / numberTwo}`);

    break;

  default:
    console.log(`Invalid operation.`);
    break;
}
