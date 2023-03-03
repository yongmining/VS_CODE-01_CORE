function hello(name) {
    console.log(name);
    console.log(arguments);
    return `${name}님 안녕하세요`;
}

// console.log(name);

var result = hello('홍길동');
console.log(result);

//함수는 매개변수의 갯수와 인수의 갯수가 일치하는지를 체크하지 않는다.
//인수가 부족해서 할당되지 않은 매개변수는 undefined가 된다.
var result2 = hello();
console.log(result2);

//매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.
//모든 인수는 암묵적으로 arguments객체의 프로퍼티로 보관된다.
var result3 = hello('홍길동', '유관순');
console.log(result3);

// ES6에서 도입된 매개변수 기본값을 사용할 수 있는 문법
function hi(name = '아무개') {

    console.log(name);

    if(arguments.length !== 1) {
        throw new TypeError('인수는 1개여야 합니다.');
    }

    return `${name} 안녕~`;
}

var result4 = hi();
console.log(result4);

var result5 = hi('홍길동');
console.log(result5);

// var result6 = hi('홍길동', '유관순');
// console.log(result6);

// var result6 = hi(1);
// console.log(result6);

var result6 = hi('');
console.log(result6);