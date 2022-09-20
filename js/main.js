
let randomnum=document.getElementById("randomnum");
let btn=document.getElementById("btn");

btn.addEventListener("click",function(){
	var add=document.getElementById("addval");
	var x=document.createElement("h3");
	add.appendChild(x);
	var given=randomnum.value;
	var ans=1;
	for(var i=1; i<=given; i++){
		ans=ans*i;
	}
	x.innerText=ans;
	
})

let numbers=123454321;
let sum=0;
let given=numbers;

while(0<numbers){
	let rem=numbers%10;
	sum=(sum*10)+rem;
	numbers=Math.floor(numbers/10);
}
if(sum==given){
	console.log("palindrome number");
}
else{
	console.log("not palindrome number");
}

var mailid="mani067mech071!/&%@gmail.com";

var spl=mailid.indexOf("@");
var sli=mailid.slice(0,spl);

console.log(spl);
var splwrd=sli.match(/["!","%","/","&"]/g);
var numb=sli.match(/[0-9]/g);

console.log(splwrd);
console.log(numb);

var given2="madam";
var length=given2.length;
console.log(length);




var inpnum=123;
var add=0;
while(0<inpnum){
	
	let rem=inpnum%10;
	add=rem+(add*10);
	inpnum=Math.floor(inpnum/10);
	
}
console.log(add);
while(0<add){
	let rem2=add%10;
	if(rem2==0){
		console.log("zero");
	}
	else if(rem2==1){
		console.log("one");
	}
	else if(rem2==2){
		console.log("two");
	}
	else if(rem2==3){
		console.log("three");
	}
	else if(rem2==4){
		console.log("four");
	}
	else if(rem2==5){
		console.log("five");
	}
	else if(rem2==6){
		console.log("six");
	}
	else if(rem2==7){
		console.log("seven");
	}
	else if(rem2==8){
		console.log("eight");
	}
	else{
		console.log("nine");
	}
	add=Math.floor(add/10);
}