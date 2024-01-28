function* f() {
  console.log('执行了！')
}

const generator = f();

setTimeout(function () {
  generator.next()
}, 2000);