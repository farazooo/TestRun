let num = 225468
let str = num.toString()
let arr = []
for (let i = 0; i < str.length; i++) {
    arr[i] = str[i]
}
let arr1 = [arr[0]]
for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] % 2 == 0 && arr[j + 1] % 2 == 0) {
        arr1.push('-')
        arr1.push(arr[j + 1])
    }
    else {
        arr1.push(arr[j + 1])
    }

}
console.log(arr1.join(""))
