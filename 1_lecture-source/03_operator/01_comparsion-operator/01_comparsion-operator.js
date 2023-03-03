/* 비교연산자
   동등 비교(==, !=) : 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
   일치 비교(===, !==) : 타입과 값이 모두 같은지 비교한다.
*/

// 숫자 1, 문자열 '1' 비교
console.log(`1 == '1' : ${ 1 == '1' }`);
console.log(`1 == true : ${ 1 == true }`);

console.log(`1 === '1' : ${ 1 === '1'}`);
console.log(`1 === true L ${ 1 === true}`);

// 숫자 0, 문자열 '0' 비교
console.log(`0 == '0' : ${ 0 == '0'}`);
console.log(`0 == '' : ${ 0 == ''}`);
console.log(`0 == false : ${ 0 == false }`);

console.log(`0 === '0' : ${ 0 === '0'}`);
console.log(`0 === '' ${ 0 === ''}`);
console.log(`0 === false : ${ 0 === false}`);

// null, undefined 비교
console.log(`null == undefined : ${ null == undefined}`);
console.log(`null === undefined : ${ null === undefined}`);

// NaN (NaN은 유일한 값이기 때문에 비교연산자를 이용해서 비교가 불가능하다.)
console.log(`NaN == NaN : ${ NaN == NaN}`);
console.log(`NaN === NaN : ${ NaN === NaN}`);

console.log(`Number.isNaN(NaN) : ${ Number.isNaN(NaN)}`);

// string 비교
console.log(`'hello' === 'hello' : ${ 'hello' === 'hello'}`);
console.log(`'apple' > 'banana' : ${ 'apple' > 'banana'}`);
console.log(`'cat' > 'Cat' : ${ 'cat' > 'Cat'}`);