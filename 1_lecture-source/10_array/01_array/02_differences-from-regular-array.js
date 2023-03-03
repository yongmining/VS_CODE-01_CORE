/* 일반 배열과의 차이점 
   일반적인 의미의 배열은 각 요소가 동일한 데이터 타입과 크기를 가지며
   연속적으로 이어져 있어 인덱스를 통해 요소에 접근할 수 이쓴 자료구조를 의미한다.
   하지만 자바스크립트의 배열은 일반적인 배열을 흉내낸 자료구조로
   각각의 메모리 공간이 동일한 크기를 가지지 않고, 실제로 연속되지 않더라도
   마치 연속된 공간처럼 사용할 수 있게 하는 자바의 arraylist와 유사한 형태이다.

   인덱스를 나타내는 프로퍼티를 키로 가지며, length 프로퍼티를 갖는 특수한 객체이다.
*/
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));

const arr = [
    '홍길동',
    20,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function() {}
];

console.log(arr);
