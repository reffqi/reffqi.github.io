// http://jsbin.com/yasodap/edit?js,console

/*
function balikString(arr) {
  var split = arr.split("");
  var reverse = split.reverse(); 
  var join = reverse.join("");
  return join;
}

console.log(balikString("hello world!"));
*/

// http://jsbin.com/lasali/1/edit?html,js,output

function balikString(arr) {
  var balik = arr.split("").reverse().join("");
  return balik;
}

console.log(balikString("hello world!"));
