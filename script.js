//Problem #1 [Easy]
//Bonus: Can you do this in one pass?
function sumOfNumbers(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                const sum = arr[i] + arr[j]
                if (sum === k) {
                    return true;
                }
            }
        }
    }
    return false;
}

//Problem #2 [Hard]
// Follow-up: what if you can't use division?
function multiply(arr) {
    let output = [];
    const totalMultiply = arr.reduce((total, current) => total * current);
    arr = arr.map(item => totalMultiply / item);
    return arr;
}

//Problem #4 [Hard]
function missingInteger(arr) {
    arr = arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) { //no duplicates
            if (arr[i] > -1) { //positive integer
                if (arr[i + 1] - arr[i] > 1) {//the next item in arr is not sequential
                    return arr[i] + 1
                }
            }
        }
    }
    return arr[arr.length - 1] + 1 //arr not missing anything, returns next num
}
