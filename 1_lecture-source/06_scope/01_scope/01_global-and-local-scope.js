/* 전역과 지역 스코프
 */

var x = 'global x';
var y = 'global y';

function outer() {

    var z = 'outer local z';

    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        var x = 'inner local x';

        console.log(x);
    }

    inner();
}

outer();
// console.log(z);
console.log(x);