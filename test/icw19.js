console.log(Ice.add(2,3));
console.log(Ice.add(2,"3"));
console.log(Ice.add("2","3"));
console.log(Ice.add("2","3x"));
console.log(Ice.add("12","18"));
console.log(Ice.add("12","18x"));
console.log("------------");
console.log(Ice.add(null,null));
console.log(Ice.add(null,"18"));
console.log(Ice.add("18",null));
console.log(Ice.add(null,"18x"));
console.log(Ice.add("18x",null));
console.log("------------");
console.log(Ice.add("abc","18"));
console.log(Ice.add("18","abc"));
console.log(Ice.add("18","123abc"));
console.log("------------");
console.log(Ice.add(18,300));
console.log(Ice.add("18",300));
console.log(Ice.add(18,"300"));
console.log(Ice.add("18","300"));
console.log(Ice.add("18","300x"));
console.log(Ice.add("abc","def"));
console.log(Ice.add("12.3","27.1"));