console.log(Ice.isNum(null));
console.log(Ice.isNum(""));
console.log(Ice.isNum("0"));
console.log(Ice.isNum("1"));
console.log("-------------");
console.log(Ice.isNum("12"));
console.log(Ice.isNum("-12"));
console.log(Ice.isNum("12.3"));
console.log(Ice.isNum("123x"));
console.log("-------------");
console.log(Ice.isNum(0));
console.log(Ice.isNum(1));
console.log(Ice.isNum(12));
console.log(Ice.isNum(-12));
console.log(Ice.isNum(12.3));
console.log(Ice.isNum(1/0));

