/* 객체
   0개 이상의 프로퍼티로 구성된 집합이며 프로퍼티는 키(key)와 값(value)으로 구성된다.
   자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다.
   프로퍼티 값이 함수일 경우 method 라고 부른다.
*/

/* 객체 생성 방법
   자바스크립트는 프로토타입 기반 객체지향 언어이다.
   자바와 같은 객체지향 언어는 클래스를 기반으로 객체를 생성하지만,
   자바스크립트는 다양한 객체 생성 방법을 지원한다.
   1. 객체 리터럴 ({})
   2. Object 생성자 함수
   3. 생성자 함수
   4. Object.create 메소드
   5. Class(ES6)
*/

var student = {
    //키와 값을 쌍으로 구성한 프로퍼티
    //프로퍼티 : 객체의 상태를 나타내는 값(data)
    name: '유관순',
    age: 16,
    //함수형 값을 가지는 프로퍼티를 메소드라고 한다. (behavior)
    getInfo: function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

console.log(typeof student);
console.log(student);
console.table(student);