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

let newGen = generator();

for (let i = 0; i <= 3; i++) {
    console.log(newGen.next());
}