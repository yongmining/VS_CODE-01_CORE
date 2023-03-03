/* 엄격 모드 */
function test() {
    //암묵적으로 전역 변수가 된다.
    x = 10;
}
test();
console.log(x);