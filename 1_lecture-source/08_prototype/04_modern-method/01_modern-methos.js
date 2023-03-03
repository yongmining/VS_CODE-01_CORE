/* __proto__에 직접 접근이 아닌 모던 메소드를 이용해 접근해야 한다. */
const user = {
    activate: true
};

// Object.create(proto) : [[prototype]]이 proto 를 참조하는 빈 객체를 만듦
const student = Object.create(user);
console.log(student.activate);

// Object.getPrototypeOf(obj) : obj의 [[prototype]]을 반환
console.log(Object.getPrototypeOf(student) === user);

// Object.setPrototypeOf(obj, proto) : obj의 [[prototype]]이 proto가 되도록 설정
Object.setPrototypeOf(student, {});
console.log(Object.getPrototypeOf(student) === user);

const obj = {};

let key = '__proto__';
obj[key] = '값 설정';

console.log(obj[key]);