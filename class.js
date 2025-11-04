class Person {
  // 생성자 함수 역할
  constructor(name) {
    this.name = name;
  }

  // 프로토타입 메소드 역할
  greet() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}

// 상속 (extends, super)
class Developer extends Person {
  constructor(name, language) {
    super(name); // 부모 클래스의 constructor 호출
    this.language = language;
  }

  code() {
    console.log(`I code in ${this.language}.`);
  }
}

const dev = new Developer("Kim", "JavaScript");
dev.greet(); // 부모 클래스의 메소드 상속
dev.code();