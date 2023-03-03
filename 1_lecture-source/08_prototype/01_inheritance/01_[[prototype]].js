/*  [[prototype]]
    자바 스크립트 객체는 [[prototype]]이라는 숨김 프로퍼티를 갖는다.
    이 프로퍼티 값은 null이거나, 다른 객체에 대한 참조가 되는데,
    다른 객체를 참조하는 대상을 프로토타입(prototype)이라 부른다.
    object에서 프로퍼티를 읽으려 할 때 해당 프로퍼티가 없으면
    자바스크립트는 자동으로 프로토타입에서 프로퍼티를 찾는다.
    이것을 프로토타입 상속이라고 한다.
*/

const user = {
    activate: true,
    login: function() {
        console.log('로그인 되었습니다.');

    }
};

const student = {
    passion: true
};

// __proto__는 [[prototype]]의 getter, setter 이다.
student.__proto__ = user;

console.log(student.activate);
student.login();
console.log(student.passion);

//프로토타입 체인
const greedyStudent = {
    Class: 11,
    __proto__: student
};

console.log(greedyStudent.activate);

