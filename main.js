define(function () {
  function addHello() {
    var helloDiv = document.createElement('h1')
//    var helloText = document.createTextNode('Hello World')
    helloDiv.innerText = 'Hello World'
    document.body.appendChild(helloDiv)
  }
  addHello();
})