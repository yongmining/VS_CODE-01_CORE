/* 논리연산자를 활용한 단축평가
   표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것 
*/
console.log('apple' || 'banana');
console.log('' || 'banana');

console.log('apple' && 'banana');
console.log(undefined && 'banana');

var num = 1;
 if(num % 2 == 0) {
    console.log('짝수입니다.');
 } else {
    console.log('홀수입니다.');
}

//단축평가를 활용한 짧은 조건문
num % 2 == 0 && console.log('짝수입니다.');
num % 2 == 0 || console.log('홀수입니다.');

