let k = 15;

function encrypt(p) {
	let c = "";
	for (let index = 0; index < p.length; index++) {
		c = c + String.fromCharCode(((p.charCodeAt(index) - 65 + k) % 26) + 65);
	}
	return c;
}

function decrypt(c) {
	let p = "";
	for (let index = 0; index < c.length; index++) {
		let temp = c.charCodeAt(index) - 65 - k;
		temp = temp < 0 ? temp + 26 : temp;
		p = p + String.fromCharCode((temp % 26) + 65);
	}
	return p;
}

function get_cipher_text(plain) {
	let cypher = "";
	let word = plain.toUpperCase().split(" ");
	word.forEach(function (value) {
		cypher = cypher + encrypt(value) + " ";
	});
	return cypher;
}

function get_plain_text(cipher) {
	let plain = "";
	let word = cipher.toUpperCase().split(" ");
	word.forEach(function (value) {
		plain = plain + decrypt(value) + " ";
	});
	return plain;
}

function change_cipher() {
	console.log("onchange Encountered");
	let textarea = document.getElementById("plain");

	document.getElementById("cipher").innerHTML = get_cipher_text(textarea.value);
}

function change_plain() {
	console.log("onchange Encountered");
	let textarea = document.getElementById("cypher_text");

	document.getElementById("plain_text").innerHTML = get_plain_text(textarea.value);
}


setInterval(function() {
	change_cipher();
	change_plain();

}, 500);



function toggle_block(number){
	if(number == 1)
	{
		document.getElementById("div1").style.display="none";
		document.getElementById("div2").style.display="flex";
	}
	else{
		document.getElementById("div1").style.display="flex";
		document.getElementById("div2").style.display="none";
	}
}
