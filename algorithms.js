// linear search

let array1 = [7, 6, 1, 4, 0, 2, 3, 5, 8];

const linearSearch = (arr, item) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            return i;
        }
    }
    return null;
}

linearSearch(array1, 5); // array index of number 5 is 7

// binary search

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const binarySearch = (arr, item) => {
    let start = 0;
    let end = arr.length;
    let middle = null;
    let found = false;
    let position = null;

    while(found === false && start < end) {
        middle = Math.round((start + end) / 2);

        if(arr[middle] === item) {
            found = true;
            position = middle;
            return position;
        } else if(item < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

binarySearch(array2, 3); // 2

// selection sort

let array3 = [4, 6, 3, 9, -1, 0, 11, 19];

const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        let max = -Infinity;
        let index = null;
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > max) {
                max = arr[j]; // the biggest number is here
                index = j; // index of the biggest number is here
            }
        }
        let swap = arr[arr.length - 1 - i]; // within swap is an old number in the end of array
        arr[arr.length - 1 - i] = max; // our biggest number is in the end of array
        arr[index] = swap; // old number now into the place of biggest number
    }
    return arr;
}

// bubble sort 

let array4 = [-296, 15, 170, 2, -34, 44, 96, 32, 4, 6, 3, 9, 1, 11, -8];

const bubbleSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] < arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

// quick sort

let array5 = [78, 21, 14, 97, 87, 62, 74, 85, 76, 45, 84, 22];

const quickSort = arr => {
    if(arr.length <= 1) return arr; // recursion break (neccessary!!!)

    let baseIndex = Math.floor(arr.length / 2);
    let baseElement = arr[baseIndex]; // our number in the middle of array

    let more, less = []; // empty arrays, they needed

    for(let i = 0; i < arr.length; i++) {
        if(i === baseIndex) {
            continue; // jump over
        } else if(arr[i] < baseElement) {
            less.push(arr[i]); // every smaller number is in less[] now
        } else {
            more.push(arr[i]); // every bigger number is in more[] now
        }     
    }
    return [...quickSort(less), baseElement, ...quickSort(more)]; 
    // we call quickSort again and again within one operation till the recursion break
}