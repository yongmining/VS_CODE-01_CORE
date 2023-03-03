/* Object 생성자 함수의 prototype */
const obj = {};
console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString === obj.__proto__.toString);
console.log(obj.toString === Object.prototype.toString);

console.log(obj.toString());
console.log(obj + '');
