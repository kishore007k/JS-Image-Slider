const images = [
	'black-and-white-car-vehicle-vintage-474',
	'chuttersnap-gts_Eh4g1lk-unsplash',
	'evgeny-tchebotarev-aiwuLjLPFnU-unsplash',
	'gabriel-gurrola-u6BPMXgURuI-unsplash',
	'hakon-sataoen-yQ9mZzBdDAM-unsplash',
	'marc-kleen-h8UQV31X5AI-unsplash',
	'neonbrand-orGJcWVI6js-unsplash',
	'peter-broomfield-m3m-lnR90uM-unsplash',
	'raybay-kG71BXh8KFw-unsplash'
];

const image = document.querySelector('.img-container');
const left = document.getElementById('btn-left');
const right = document.getElementById('btn-right');

// Event
let counter = 0;

right.addEventListener('click', nextSlide);
left.addEventListener('click', prevSlide);

// Function
function nextSlide() {
	counter++;
	// console.log(counter);
	carsoul();
	counterCheck();
}

function prevSlide() {
	counter--;
	counterCheck();
	carsoul();
	// console.log(counter);
}

// Image Container
function counterCheck() {
	if (counter > images.length - 1) {
		counter = 0;
		carsoul();
	}
	if (counter < 0) {
		counter = images.length - 1;
		carsoul();
	}
}

function carsoul() {
	if (counter < images.length - 1) {
		image.innerHTML = `<img src="/${images[counter]}.jpg" class="img" alt="">`;
	}
	if (counter > 0) {
		image.innerHTML = `<img src="/${images[counter]}.jpg" class="img" alt="">`;
	}
}
