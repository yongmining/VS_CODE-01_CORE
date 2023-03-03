// 전역 선두에 추가하면 strict mode가 해당 스크립트에 적용된다.
// 'use strict';

function test() {
    
    // 'use strict';

    x = 10;

    // 'use strict';
}

test();
console.log(x)