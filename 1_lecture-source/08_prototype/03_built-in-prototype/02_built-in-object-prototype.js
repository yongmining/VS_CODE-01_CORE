/* String, Number 등을 비롯한 내장 객체(built in 객체)는
   상속 트리 꼭대기에 Object.prototype이 존재한다.
*/ 

const num = new Number(100);

console.log(num.__proto__  === Number.prototype);
console.log(num.__proto__.__proto__ === Object.prototype);
console.log(num.__proto__.__proto__.__proto__);

console.log(num.toString());
console.log(num);

//내장 프로토타입은 수정 가능하다.
String.prototype.hello = function() {
    console.log(`hello, ${this}`);
}

'javascript'.hello()