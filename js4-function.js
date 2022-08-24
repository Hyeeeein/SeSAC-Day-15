function hello() {
    console.log('hello world')
}
hello();

function num(a, b) {
    return a + b;
}
const result = num(10, 20)
console.log(result);

function userInfo(name, age) {
    return `이름은 ${name} 나이는 ${age}`
}
const profile = userInfo('홍길동', 20);
console.log(profile);

// 두개의 매개변수를 받아서 두값을 곱해서 출력하는 함수 

function x(c, d) {
    return c * d;
}
const ret = x(10, 20)
console.log(ret)

function multi(num1, num2) {
    /* let su = num1*num2 -> 이렇게도 가능 */
    return num1 * num2
}
const resultMulti1 = multi(5, 30)
const resultMulti2 = multi;
console.log(resultMulti1) // 150
console.log(resultMulti2(50, 60)) // 3000
console.log(resultMulti2)// 값을 주지 않아 function: multi 가 나옴