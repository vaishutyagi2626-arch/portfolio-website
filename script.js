function updateClock(){

	const now = new Date();

	const time = now.toLocaleTimeString();

	document.getElementById("time").innerHTML = time;
}

setInterval(updateClock,1000);

updateClock();
 
const btn = document.getElementById("theme-btn");

btn.addEventListener("click", function () {
	document.body.classList.toggle("dark");
});

const texts = [
	"Frontend Developer",
	"Commerce Student",
	"Web Designer",
	"Future Freelancer"
];

let index = 0;
let char = 0;


function type() {

	if(char < texts[index].length){

		document.getElementById("typing").innerHTML += texts[index].charAt(char);
		char++;

		setTimeout(type,100);

	}

	else{

		setTimeout(erase,1500);

	}

}


function erase(){

	if(char>0){

		document.getElementById("typing").innerHTML =
		texts[index].substring(0,char-1);

		char--;

		setTimeout(erase,50);

	}

	else{

		index++;

		if(index>=texts.length){
			index=0;
		}

		setTimeout(type,500);

	}

}

type();
