
const plus = (num) => {
    return num + 2 ;
}

const minus = (num) => {
    return num - 2 ;
}

const cla = (func, numValue) => {
    return func(numValue)
}

console.log(cla(plus , 10)) //12
console.log(cla(minus , 10)) //8


const x = (num) => {
    return num * 2;
}

const n = (num) => {
    return num / 2
}

const xn = (func, numValue) => {
    return func(numValue)
}
console.log(xn(x , 10)) //20
console.log(xn(n , 10)) //5
