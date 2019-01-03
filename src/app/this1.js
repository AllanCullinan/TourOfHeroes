function foo() {
  this.foo = 123;
  console.log('Is this globasl:', this === global)
};

var newfoo = new foo();
console.log(newfoo.foo);
lan
