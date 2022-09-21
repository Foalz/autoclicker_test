let number = Math.random();

let $a = document.getElementById("redirect");
$a.innerHTML = `<h1>Image will appear in ${Math.round(number * 10000) / 1000} seconds`;
setTimeout(() =>{
	let $img = document.createElement("img");
	$a.href = number < .5 ? '' : './form.html';			
	$img.src = number < .5 ? './assets/imagen.PNG' : './assets/logout.PNG';
	$a.innerHTML = $img.outerHTML;
}, (number * 10000))

