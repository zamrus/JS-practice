// first of all - create a promise
// this code create an object with some data, after this callback resolve must be called

const promise = new Promise((resolve, reject) => {

    console.log('Preparing...');

    setTimeout(() => {
        let user = {
            name: 'John',
            age: 24,
            married: false
        };
        console.log('Object is ready', user);
        resolve(user);
    }, 2000);

})

// next - this the code after .then takes promise data and workes with it
// need to create new promise for chaining

promise.then((marriedUser) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            marriedUser.married = true;
            console.log('Our user is married now!', marriedUser);
            resolve(marriedUser);
        }, 2000) 
    })
   
})

// we give modified data to other .then 
// its important to return new data after another this

.then((divorcedUser) => {

    setTimeout(() => {  
        divorcedUser.age = 26;
        divorcedUser.married = false;
        console.log('Oh no, John got divorced with her wife!', divorcedUser);
    }, 2000)

    return divorcedUser; // without this line next .then will take undefined value

})
.then((parentUser) => {
    
    setTimeout(() => {
        parentUser.age = 30;
        parentUser.married = true;
        parentUser.son = 'Peter';
        console.log('John was married again and now he has son!', parentUser);
    }, 4000)

}) 