/* 자바스크립트 엔진은 불리언 타입이 아닌 Truthy값 또는 Falsy값 으로 구분한다
   Truthy -> true
   Falsy -> false
   Truthy 값은 참으로 평가되는 값이며, Falsy 값은 거짓으로 평가되는 값을 의미한다.
   Falsy 값은 false, undefined, null, 0, NaN, ''(빈 문자열) 이렇게 총 6가지 이며,
   나머지는 Truthy 값이다.

*/
if(true) console.log('if(true)');
if(false) console.log('if(false)');
if(undefined) console.log('if(undefined)');
if(null) console.log('if(null)');
if(0) console.log('if(0)');
if(NaN) console.log('if(NaN)');
if('') console.log('if("")');
if('javascript') console.log('if("javascript")');

