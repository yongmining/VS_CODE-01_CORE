/* 배열
   배열을 생성하는 방법
   1. 리터럴을 통해 배열 생성
   2. 배열 생성자 함수를 이용해 배열 생성
*/

// 1. 리터럴을 이용한 배열 생성
// 배열이 가지고 있는 값을 요소라고 부르며, 자바스크립트의 모든 값은 배열의 요소가 될 수 있다.
const arr = ['바나나', '복숭아', '키위'];

console.log(arr);
console.table(arr);

// 2. 생성자 함수를 이용하는 방법
const arr2 = new Array();
console.log(arr2);

const arr3 = new Array(10);
console.log(arr3);

const arr4 = new Array(1, 2, 3);
console.log(arr4);

// 3. Array.of 메소드
// 전달된 인수를 요소로 갖는 배열 생성
console.log(Array.of(10));
console.log(Array.of(1,2,3));
console.log(Array.of('hello', 'js'));
console.log(Array.of(1, 'hello', {}, function() {}));

// 배열의 요소는 대괄호 표기법을 이용하여 인덱스를 접근한다.
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// 배열은 요소의 갯수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다.
console.log(arr.length);

for(let i = 0; i < arr.length; i++) {
    console.log(arrp[i]);
}

for(let key in arr) {
    console.log(`key : ${key}`);
    console.log(arr[key]);
}