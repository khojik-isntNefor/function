function bubleSort(inputArr) {
    let n = inputArr.length;

    let sortedNumbers = false

    while (!sortedNumbers) {
        sortedNumbers = true;

        for (let i = 0; i < n; i++) {
            if (inputArr[i] > inputArr[i + 1]) {

                let s = inputArr[i];

                inputArr[i] = inputArr[i + 1];

                inputArr[i + 1] = s

                sortedNumbers = false;
            }
        }
    }
    return inputArr;
}

let inputArr = [5, 1, 2, 7, 9, 4, 3, 8]

bubleSort(inputArr)

console.log(inputArr);

let getMinNumber = (arg, ...arg2) => {
    if (typeof (arg) === 'number') {
        console.log(Math.min(arg, ...arg2));
    } else if (typeof (arg) === 'object') {
        let arr = Object.values(arg)
        if (arg2.length > 0) {
            for (let i = 0; i < arg2.length; i++) {
                arr = arr.concat(Object.values(arg2[i]))
                console.log(Math.min(...arr))
            }
        }
    }
}

getMinNumber(1, 2)
getMinNumber([1, 2])
getMinNumber({a:1, b:2})
getMinNumber({a:111, b:222}, {a:11, b:12})