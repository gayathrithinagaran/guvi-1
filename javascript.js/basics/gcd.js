
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
inp.on("line",(data)=>{
var a=[]
a=data.split(' ');
var x=a[0]
var y=a[1]
x = Math.abs(x);
y = Math.abs(y);
while(y) {
var t = y;
y = x % y;
x = t;
}
if(num>0){
console.log(t);}
else{
console.log('-1');
}
});
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
 z = data.split();
 a = z[0];
 b = z[0];
while(i <= a and i <= b)
    if(a % i == 0 and b % i == 0)
        gcd = i
    i = i + 1
	console.log(gcd)

