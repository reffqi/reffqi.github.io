// http://jsbin.com/yasodap/edit?js,console

function balikString(arr) {
  var split = arr.split("");
  var reverse = split.reverse(); 
  var join = reverse.join("");
  return join;
}

console.log(balikString("hello world!"));