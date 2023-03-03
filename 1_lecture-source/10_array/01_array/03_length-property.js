// length 프로퍼티는 요소의 갯수를 0 이상의 정수로 값을 가진다.
console.log([].length);

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// length 프로퍼티 값은 배열에 요소를 추가하거나 삭제하면 자동으로 갱신된다.
arr.push(6);
console.log(arr.length);

arr.pop();
console.log(arr.length);

arr.length = 3;
console.log(arr);

arr.length = 10;
console.log(arr);

// 자바스크립트는 배열의 요소가 연속적으로 위치하지 않고 비어 있는 희소 배열을 허용한다.
const sparse = [, 2, , 4];
console.log(sparse);
console.log(sparse.length);
