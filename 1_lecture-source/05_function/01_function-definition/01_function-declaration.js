/* 함수 선언문 */

//함수 선언문은 함수의 이름을 생략할 수 없다.
// function hello(name) {
//     return `${name}님 안녕하세요!`;
// }

// console.log(hello('홍길동'));

//함수는 객체 타입의 값으로 값의 성질을 갖는 일급 객체라고 한다.
var hello = function hello2(name) {
    return `${name}님 안녕하세요`;
}

console.log(hello('홍길동'));

