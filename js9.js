// 논리합or || 논리곱and && 연산자를 이용한 단축평가
// 좌항 우항 평가가 된다. 1개의 피연산자 중 어느 하나의 값을 평가된다.
// 평가된 값은 형변환하지 않고 현재 값을 반환한다. 

// 논리합 || -> 한쪽만 true 여도 true
console.log(true || true) // true
console.log(30 || 50)
console.log(true || false) // true
console.log(10 || 0) //10
console.log(false || true) // true
console.log( '' || 100) // 100
console.log(false || false) //false
console.log(0 || 0) //

// 논리곱 && -> 둘다 true 여야 true
console.log(true && false) // true
console.log(300 && 500) // 500
console.log(false && ture) // flase
console.log(0 && 500) // 0
console.log(true && false) //flase
console.log(1 && null) //flase
console.log(false && false) //flase
console.log(0 && undefined) //0

// 부정연산
console.log(!10) //(!true) -> false
console.log(!!10) //(!!true) -> true
console.log(!'hello') //false
console.log(!!'hello') //true