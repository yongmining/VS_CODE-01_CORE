//생성자 함수의 포로토타입
const user = {
    activate: true,
    login: function() {
        console.log('로그인 되었습니다.');
    }
};

function Student(name) {
    this.name = name;
}

Student.prototype = user;

const student = new Student('홍길동');
// student.__proto__ = user;

console.log(student.activate);
