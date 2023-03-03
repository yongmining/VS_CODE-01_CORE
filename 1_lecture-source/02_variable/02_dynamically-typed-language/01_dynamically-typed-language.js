/*
    정적타입 (static/strong type) 언어 (C, C++, Java, kotlin 등)
    변수를 선언할 때 데이터 타입을 사전에 선언한다.(명시적 타입 선언)
    변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다.
    컴파일 시점에 타입 체크를 수행하여 타입의 일관성을 강제하며, 런타임 에러를 줄여준다.

    동적타입(dynamic/week type 언어) (javascripe, python 등)
    데이터 타입을 사전에 선언하지 않는다.
    변수의 선언이 아닌 할당에 의해 타입이 결정된다. (타입 추론)
    재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.
    값을 확인하기 전에는 타입을 확실할 수 없다.
    유연성은 높지만 신뢰성은 떨어진다.
    이로 인해 변수를 사용하기 전 타입 체크를 해야 하는 부담이 생긴다.

*/
var test;
console.log(typeof test);

test = 1;
console.log(typeof test);

test = 'JavaScript';
console.log(typeof test);

test = true;
console.log(typeof test);

test = null;
console.log(typeof test);

test = Symbol();
console.log(typeof test);

test = {};
console.log(typeof test);

test = [1, 2, 3];
console.log(typeof test);

test = function() {};
console.log(typeof test);

/* 동적 타입 언어의 단점을 보완하기 위해서 변수 사용 시 유의할 사항
   1. 변수는 꼭 필요한 경우에 한해 제한적으로 사용
   2. 변수의 유효 범위(스코프)를 최대한 좁게 만듬
      전역 변수 사용 지양
   3. 변수보다 상수를 사용해 값의 변경 억제
   4. 변수명을 통해 변수의 목적이나 의미를 파악할 수 있도록 
*/