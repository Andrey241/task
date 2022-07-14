const slides = document.querySelectorAll(".main__swiper-slide");
const prev = document.querySelector("#prev"),
	next = document.querySelector("#next"),
	slidesWrapper = document.querySelector(".main__swiper-wrapper");

for (let i = 0; i < slides.length; i++) {
	const el = document.createElement("div");
	el.classList.add("line");
	el.style.width = `${400 / slides.length}px`;
	document.querySelector(".header__swiper-scrollbar").append(el);
}
slidesWrapper.style.width = `${160 * slides.length}%`;

let line = document.querySelectorAll(".line");

let index = 1;
let offset = 0;
addActive();
next.addEventListener("click", () => {
	if (offset == 300 * (slides.length - 1)) {
		offset = 0;
	} else {
		offset += 300;
	}
	slidesWrapper.style.transform = `translateX(-${offset}px)`;
	document
		.querySelectorAll(".line")
		.forEach((item) => item.classList.remove("active"));
	addActive();
});

prev.addEventListener("click", () => {
	if (offset == 0) {
		offset = 300 * (slides.length - 1);
	} else {
		offset -= 300;
	}
	slidesWrapper.style.transform = `translateX(-${offset}px)`;
	addActive();
});

line.forEach((item, index) => {
	item.addEventListener("click", (e) => {
		slidesWrapper.style.transform = `translateX(-${index * 300}px)`;
		offset = index * 300;
		addActive();
	});
});

function addActive() {
	line.forEach((item) => item.classList.remove("active"));
	line[offset / 300].classList.add("active");
}

let timerId = setInterval(() => {
	if (offset == 300 * (slides.length - 1)) {
		offset = 0;
	} else {
		offset += 300;
	}
	slidesWrapper.style.transform = `translateX(-${offset}px)`;
	document
		.querySelectorAll(".line")
		.forEach((item) => item.classList.remove("active"));
	addActive();
}, 4000);
var X = document.getElementById("X");
var Y = document.getElementById("Y");

// window.addEventListener("touchstart", (e) => pos(e));

let divRect = slidesWrapper.getBoundingClientRect();

console.log(JSON.stringify(divRect));

slidesWrapper.addEventListener("touchstart", function (e) {
	let relX = e.pageX - divRect.left;
	let relY = e.pageY - divRect.top;

	console.log(e.pageX);
	console.log(`relX: ${relX}, absX: ${e.pageX}`);
	console.log(`relY: ${relY}, absY: ${e.pageY}`);
});
