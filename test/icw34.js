function log(obj){
//	if(-[1,]){
//		console.log(obj);
//		return false;
//	}
	if(obj ==null){
		console.log(obj);
		return obj;
	}
	if(typeof obj =="string"){
		console.log(sum);
		return sum;
	}
	var sum="{";
	var index=0;
	for(var key in obj){
		if(index++){
			sum+=",";
		}
		if(typeof obj !="string"){
			var val=obj[key];
			if(typeof val=="object"&&val.length!=null){
				sum+=key+":"+"["+val[0]+","+val[1]+"]";
			}else{
				sum+=key+":"+val;
			}
		}else{
			var val=obj[key];
			sum+=key+":\""+val+"\"";
		}
	}
	sum+="}";
	console.log(sum);
	return sum;
}

console.log(Ice.param2map(null));
console.log(Ice.param2map(""));
console.log(Ice.param2map("abc"));
console.log(Ice.param2map("http://www.test.com/abc.html?name=zs&age=13"));
console.log(Ice.param2map("name=zs&age=13"));
console.log(Ice.param2map("http://www.test.com/abc.html?name=&age=13"));
console.log(Ice.param2map("http://www.test.com/abc.html?a=b&c=d"));
console.log("======================");
console.log(Ice.param2map("nm/abc.xyz/def.css"));
console.log(Ice.param2map("nm/abc.xyz/def"));
console.log(Ice.param2map("nm/abcxyz/def"));
console.log("------------------------------");
log(Ice.param2map(null));
log(Ice.param2map(""));
log(Ice.param2map("abc"));
log(Ice.param2map("http://www.test.com/abc.html?name=zs&age=13"));
log(Ice.param2map("name=zs&age=13"));
log(Ice.param2map("http://www.test.com/abc.html?name=&age=13"));
log(Ice.param2map("http://www.test.com/abc.html?a=b&c=d"));
log("======================");
log(Ice.param2map("nm/abc.xyz/def.css"));
log(Ice.param2map("nm/abc.xyz/def"));
log(Ice.param2map("nm/abcxyz/def"));