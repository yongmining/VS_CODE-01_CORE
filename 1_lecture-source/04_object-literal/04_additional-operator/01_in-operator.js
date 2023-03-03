/* in 연산자 
   프로퍼티 존재 여부 확인
*/

var student = {
    name: '유관순',
    age: 16,
    test: undefined
};

console.log(student.name);
console.log(student.test);
console.log(student.height);

console.log('name' in student);
console.log('test' in student);
console.log('height' in student);