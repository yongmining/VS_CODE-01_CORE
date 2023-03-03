/* 인스턴스 생성 과정 */

function Student(name, age) {

    //1. 암죽적으로 인스턴스가 생성되고 this에 바인딩 되는 과정이 가장 먼저 수행된다.
    console.log(this);

    //2. this에 바인딩 된 인스턴스에 동적으로 프로퍼티와 메소드를 추가한다.
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${tihs.age}세 입니다.`;
    }
    
    console.log(this);
    
    //3. 완성된 인스턴스를 묵시적으로 반환한다.
    return {};
}

const student = new Student('홍길동', 20);
console.log(student);