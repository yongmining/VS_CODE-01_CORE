/* 자바스크립트의 함수는 일종의 객체이다.
   따라서 함수는 값으로 취급할 수 도 있다.
   프로퍼티 값으로 사용되는 함수를 메소드라고 한다.
*/

var dog = {
    name: '뽀삐',
    eat: function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
    }
};

dog.eat('고구마');