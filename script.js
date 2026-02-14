function makeid(l) {
  // write your code here
	let str=""
	let char_list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklimnopqrstuvwxyz1234567890"
	for(let i=0;i<l;i++){
		str+=char_list.charAt(Math.floor(Math.random()*char_list.length))
	}
	return str
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
