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
