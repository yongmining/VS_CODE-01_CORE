const user = {
    id: 'user',
    login: function() {
        console.log(`${this.id}님이 로그인 되었습니다.`);
    }
};

const student = {
    __proto__: user
};

student.login();

// 프로토타입은 프로퍼티를 읽을 때만 사용하며 프로퍼티를 추가, 수정, 삭제하는 연산은 객체에 직접 한다.
student.id = 'user01';
student.login();

for(let prop in student) {
    console.log(prop);
    
    let isOwn = student.hasOwnProperty(prop);

    if(isOwn) {
        console.log(`객체 자신의 프로퍼티 ${prop}`);
    } else {
        console.log(`상속 프로퍼티 ${prop}`);
    }
}