// generators

const firstFunc = () => {
    console.log('Hello ');
}

const secondFunc = () => {
    console.log('this is ');
}

const thirdFunc = () => {
    console.log('JavaScript generators!');
}

function* generator () {
    yield firstFunc();
    yield secondFunc();
    yield thirdFunc();
}

let newGenerator = generator();

for (let i = 0; i <= 3; i++) {
    console.log(newGenerator.next());
}

// recursion

const factorial = (num) => {
    if(num == 1) {
        return num;
    }
    return num * factorial(num - 1);
}

let res = factorial(5);

console.log(res);

// closure 

const closureFunc = (c) => {
    return function(a, b) {
        return a + b + c;
    }
}

let childFunc = closureFunc(5);
console.log(childFunc(2, 3));