// 배열의 고차 함수
// 함수를 전달 받아 함수를 사용하는 함수

// Array.prototype.sort : 배열을 정렬하는 메소드
let numbers =[];

for(let i =0; i < 10; i++){
    numbers[i] = Math.floor(Math.random() * 100) +1;
}

console.log(`정렬 전 numbers : ${numbers}`);

numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`)

function compare(a,b) {
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
       
}

numbers.sort(compare);
console.log(numbers);

// 숫자 내림차순 정렬
// numbers.sort(function(a,b) { return b - a });
numbers.sort((a, b) => { return b - a});
console.log(numbers);

// Array.prototype.forEach : for를 대체할 수 있는 고차함수
var arr = [1, 2, 3, 4, 5];

arr.forEach(function(item, index, array){
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
});

arr.forEach(item => console.log(item*10));

// Array.prototyope.map : 배열 요소 전체를 대상으로 콜백함수 호출 후 반환한 값으로 새로운 배열 반환
const types = [true, 1, 'text'].map(item => typeof item);
console.log(`types : ${types}`);

const lengths= ['apple', 'banana', 'cat', 'dog', 'egg'].map(item => item.length);
console.log(`lengths : ${lengths}`);

// Array.prototype.filter 
// : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환값이 true인 요소로만 구성된 새로운 배열 반환
const all = [1,2,3,4,5,6,7,8,9];
const odds = all.filter(item => item % 2);
console.log(odds);

// Array.prototype.reduce
// : 배열을 순화하며 각 요소에 대하여 이전의 콜백 함수 실행 반환값을 전달하여 콜백함수를 실행하고
//   그 결과를 반환
//   previousValue : 이번 콜백의 반환값
//   currentValue : 배열의 요소값
//   currentIndex : 인덱스
//   array : 메소드를 호출한 배열

numbers.reduce(function(previousValue, currentValue, currentIndex, array) {
    console.log(`previousValue : ${previousValue}`);
    console.log(`currentValue : ${currentValue}`);
    console.log(`currentIndex : ${currentIndex}`);
    console.log(`array : ${array}`);
});

const oneToFive = [1, 2, 3, 4, 5];
const sum = oneToFive.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
});
console.log(`sum : ${sum}`);

const max = numbers.reduce((prev, cur) => prev > cur? prev : cur);
console.log(`max : ${max}`);

// Array.prototype.some
// : 배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환

//배열 내 10보다 큰 값이 1개 이상 존재하는지 확인
let result =[1, 5, 3, 2, 4].some(item => item > 10);
console.log(`result : ${result}`);
//배열 내 요소 중 3보다 큰 값이 1개 이상 존재하는지 확인
result = [1, 5, 6, 3, 2].some(item => item > 3);
console.log(`result : ${result}`);

// Array.prototype.every
// : 배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그결과를 boolean으로 반환
result = [1, 2, 3, 4, 5].every(item => item > 3);
console.log(`result : ${result}`);

// Array.prototype.find
// : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백 함수를 실행하여 그 결과가 참인 첫 번째 요소 반환
//   참인 요소가 없다면 undefinded 반환
// Array.prototype.findIndex
// : 위에 메소드랑 동일하지만 인덱스를 반환, 없다면 -1을 반환
const students = [
    { name : '유관순', score: 90 },
    { name : '홍길동', score: 80 },
    { name : '장보고', score: 70 }
];

result = students.find(item => item.name === '유관순');
console.log(result);

result = students.findIndex(item => item.name === '유관순');
console.log(result);