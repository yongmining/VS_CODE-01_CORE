/* 배열의 메소드 */

const arr = [];

console.log(arr.constructor === Array);
console.log(Object.getPrototypeOf(arr) === Array.prototype);

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];

// Array.prototype.indexOf : 배열에서  요소가 위치한 인덱스를 리턴
// Array.prototype.lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
// Array.prototype.includes : 배열에 해당 요소를 포함하는지 여부 리턴
console.log(`foodList.indexOf('물회') ${foodList.indexOf('물회')}`);
console.log(`foodList.indexOf('물회',1) : ${foodList.indexOf('물회',1)}`);
console.log(`foodList.indexOf('삼겹살') : ${foodList.indexOf('삼겹살')}`);

console.log(`foodList.includes('물회') : ${foodList.includes('물회')}`);
console.log(`foodList.includes('삼겹살') : ${foodList.includes('삼겹살')}`);