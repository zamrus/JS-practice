let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];

let sort = () => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let result = sort();

console.log(result);
