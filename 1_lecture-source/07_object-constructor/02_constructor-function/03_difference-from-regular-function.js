/* 일반 함수와 차이점 */

function Student(name, age) {

    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;

    }

}

const student = Student('강감찬', 35);
console.log(student);

console.log(age);

// 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6에서는 new.target을 지원한다.
// new 연산자와 함께 사용하면 함수 내부의 new.target은 함수 자기 자신을 가리킨다.
// new 연산자 없이 일반 함수로 호출되면 new.target은 undefned가 된다.
function Dog(name, age) {
    
    // 해당 함수가 new 연산자와 함께 호출되지 않으면 new.target은 undefined 이다.
    if(!new.target){
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Dog(name, age);
    }

    this.name = name;
    this.age = age;

}

const dog = Dog('뽀삐', 3);
console.log(dog);

const obj = Object();
console.log(obj);
