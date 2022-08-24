// arguments 객체 : 함수가 호출될 때 전달 받은 아규먼트들이 저장되는 객체, 배열의 형태를 가지고 있음 
function numAdd(a, b, c) {
    console.log(arguments) // [Arguments] { '0': 10, '1': 20, '2': 30 }
    console.log(arguments.length) // 3
    console.log(arguments[0]) // 10
    console.log(arguments[1]) // 20
    console.log(arguments[2]) // 30
    return a + b + c; //60
}
console.log(numAdd(10, 20, 30)) // 매개변수 a = 10, b = 20, c = 30



// 값을 할당하지 않아 nan 이 나오는 것을 방지하기 위해 초기값을 지정해 놓을 수 있음 
function numAdd2(d = 0, f = 0, g = 0) { //초기값 설정
    console.log(arguments)
    return d + f + g;
}
numAdd2(); // console.log(arguments) -> [Arguments] {}
console.log(numAdd2(20)); // 20 을 넣었기 때문에 [Arguments] { '0': 20 } return 값 20




function numAdd3(...num) {
    console.log(num[2]) // 그 값만 나오도록
    return;
}
console.log(numAdd3(10, 20, 30, 40));

// for 문 이용해서 전달 받은 매개변수의 총합을 구하기
/* function numSum(...num) { //rest 파라미터 es6 
    /* console.log(num.length)
    console.log(num[0])
    console.log(num[1])
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
console.log(numSum(10, 20, 30, 40, 50, 60, 70));  */
