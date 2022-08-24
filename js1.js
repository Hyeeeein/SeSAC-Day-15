// 호이스팅

var a = 0;
var a = 10; // 중복 선언 가능

console.log(a)

var num = 1; // 전역변수

if (true) {
    var num = 50; // 전역변수, 함수 내부x 
}

console.log(num);

