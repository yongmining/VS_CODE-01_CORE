/* 프로퍼티 값 변경, 추가, 삭제 */

var dog = {
    name: '뽀삐'
};

console.log(dog);

//이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
dog.name = '두부';

console.log(dog);

//존재하지 않는 프로퍼티에 값을 할당하면 동적으로 프로퍼티를 추가할 수 있다.
dog.age = 3;

console.log(dog);

//delete 연산자는 객체의 프로퍼티를 삭제할 때 사용한다.
delete dog.age;

console.log(dog);