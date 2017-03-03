var obj1={};
var obj2=null;
var obj3={name:"zs"};
var obj4={name:"zs",age:"ls"};
var obj5=123;
var obj6="zs";
var obj7={name:"ww",age:"ls"};
var ary=[obj1,obj2,obj3,obj4,obj5,obj6,obj7];
console.log(Ice.prop(ary,"name"));
console.log(Ice.prop(ary,""));
console.log(Ice.prop(ary,null));
console.log(Ice.prop(null,"name"));
console.log(Ice.prop(obj3,"name"));




