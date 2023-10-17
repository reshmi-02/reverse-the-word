
var n=prompt("Enter the word");
document.write(`Given word is ${n} <br><br>`);
console.log(n.length);
for(let i=(n.length-1);i>=0;i--){
	document.write(n[i]);
}
