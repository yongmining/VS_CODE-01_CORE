function hello(name) {

    return `${name}님 안녕하세요`;

    //반환문 이후 구문은 실행되지 않고 무시된다.
    console.log(name);
}

console.log(hello('유관순'));

function func() {
    console.log('함수가 호출되었습니다.');

    //반환값이 없는 경우에 return을 명시적으로 작성하던 묵시적으로 생성되던 상관 없이
    //undefined가 반환된다.
    return;
}

console.log(func());