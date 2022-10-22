const checkEven = require("./modules.js").checkEven;

const num = 10;
const isEven = checkEven(num);

if (isEven) {
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd`);
}
