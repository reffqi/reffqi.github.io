http://jsbin.com/wiqavu/edit?js,console

```javascript
for(var i = 1 ; i <= 100 ; i++){
  if(i % 2 === 1){
    console.log("counter sekarang = " + i);
    console.log("GANJIL");
  }
  else{
    console.log("counter sekarang = " + i);
    console.log("GENAP");
  }
}

console.log('-------------------------------');

for(var i = 1; i <= 100; i+=2) {
  if(i % 3 === 0) {
    console.log("counter sekarang = " + i);
    console.log(i + " KELIPATAN 3");
  }
  else {
    console.log("counter sekarang = " + i);
    console.log("");
  }
}

console.log('-------------------------------');

for(var i = 1; i <= 100; i+=5) {
  if(i % 6 === 0) {
    console.log("counter sekarang = " + i);
    console.log(i + " KELIPATAN 6");
  }
  else {
    console.log("counter sekarang = " + i);
    console.log("");
  }
}

console.log('-------------------------------');

for(var i = 1; i <= 100; i+=9) {
  if(i % 10 === 0) {
    console.log("counter sekarang = " + i);
    console.log(i + " KELIPATAN 10");
  }
  else {
    console.log("counter sekarang = " + i);
    console.log("");
  }
}
```