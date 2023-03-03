/* const
   상수(constant)를 선언하기 위해 사용한다.
*/

//const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야 한다.
// const x;
const x = 1;

//const 키워드로 선언한 변수는 재할당이 금지된다.
// x = 2;

const DISCOUNT_RATE = 0.15;
const price = 15000;

const discountPrice = price * (1 - DISCOUNT_RATE);
console.log(discountPrice);

const student = {
    name: '홍길동',
    age: 20
};

student.name = '유관순';
console.log(student);

student = {};
