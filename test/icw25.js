console.log(Ice.copy(null));
console.log(Ice.copy(125));
console.log(Ice.copy("123"));
console.log(Ice.copy(["1",null,"2","","abc","11",undefined,"111","21","1abc","11abc","21abc"]));
var ary1=["1",null,"2","",undefined,"111","21","abc","11","1abc","11abc","21abc"];
var ary2=Ice.copy(ary1);
console.log(ary1);
ary1[3]="XYZ";
console.log(ary1);
console.log(ary2);






