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

function nextSlide() {
	if (offset == 300 * (slides.length - 1)) {
		offset = 0;
	} else {
		offset += 300;
	}
	slidesWrapper.style.transform = `translateX(-${offset}px)`;

	addActive();
	slidesWrapper.style.transform = `translateX(-${offset}px)`;
	addActive();
	clearInterval(timerId);
}

function prevSlide() {
	if (offset == 0) {
		offset = 300 * (slides.length - 1);
	} else {
		offset -= 300;
	}
	slidesWrapper.style.transform = `translateX(-${offset}px)`;
	addActive();
	clearInterval(timerId);
}

next.addEventListener("click", nextSlide);

prev.addEventListener("click", prevSlide);

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
	nextSlide();
}, 4000);

//touchChangeSlide
let clientX;
slidesWrapper.addEventListener(
	"touchstart",
	function (e) {
		clientX = e.touches[0].clientX;
	},
	false
);

slidesWrapper.addEventListener(
	"touchend",
	function (e) {
		let deltaX;
		deltaX = e.changedTouches[0].clientX - clientX;
		clearInterval(timerId);
		if (deltaX > 0) {
			prevSlide();
		} else {
			nextSlide();
		}
	},
	false
);

//clickChangeSlide

let mouseDownCoordinate = 0;
let mouseUpCoordinate = 0;

slidesWrapper.addEventListener(
	"mousedown",
	(e) => {
		mouseDownCoordinate = e.clientX;
	},
	true
);

slidesWrapper.addEventListener(
	"mouseup",
	(e) => {
		mouseUpCoordinate = e.clientX;

		if (mouseDownCoordinate > mouseUpCoordinate) {
			nextSlide();
		} else {
			prevSlide();
		}
	},
	true
);
