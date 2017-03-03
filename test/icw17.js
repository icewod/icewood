console.log(Ice.removeStart("abc","a"));
//"bc"
console.log(Ice.removeStart("abc","abc"));
//""
console.log(Ice.removeStart("abc","abcd"));
//"abc"
console.log(Ice.removeStart("abc","ab"));
//"c"
console.log(Ice.removeStart("abcdefg","abc"));
//"defg"
console.log(Ice.removeStart("abcdefg","abcdef"));
//"g"

console.log(Ice.removeEnd("abcdefg","g"));
//"abcdef"
console.log(Ice.removeEnd("abcdefg",""));
//"abcdefg"
console.log(Ice.removeEnd("abcdefg","efg"));
//"abcd"
console.log(Ice.removeEnd("abcdefg","cdefg"));
//"ab"
console.log(Ice.removeEnd("abcdefg","bcdefg"));
//"a"
console.log(Ice.removeEnd("abcdefg","abcdefg"));
//""
console.log(Ice.removeEnd("abcdefg","abcdefga"));
//"abcdefg"
console.log(Ice.removeEnd("abcdefg","abcdefgazz"));
//"abcdefg"
console.log(Ice.removeEnd("abcdefg","abc"));
//"abcdefg"
console.log(Ice.splitTrim("    abc     ,   def        ,xyz,qwe    ,    \tzzzz"));
console.log(Ice.splitTrim("    abc     ,,xyz,qwe    ,    \tzzzz"));
console.log(Ice.splitTrim("    abc     ,,xyz,qwe    ,    \tzzzz").length);