/* 자바스크립트의 객체는 프로퍼티의 집합이다. */
var obj = {
    normal: 'normal value',
    '@ s p a c e @': 'space value',
    '': '',      //권장되지는 않는다.
    0: 1,        //숫자 키는 내부적으로 문자열로 변환된다.
    normal: 'new value' //이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티로 덮어쓴다.
};

var key = 'test';

obj[key] = 'test value';

console.log(obj);
