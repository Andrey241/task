const slides = document.querySelectorAll(".main__swiper-slide");

for (let i = 0; i < slides.length; i++) {
	const el = document.createElement("div");
	el.classList.add("line");
	el.style.width = `${400 / slides.length}px`;
	document.querySelector(".header__swiper-scrollbar").append(el);
}

const prev = document.querySelector("#prev"),
	next = document.querySelector("#next");

let index = 1;

function showSlides(n) {
	if (n > slides.length) {
		index = 1;
	}

	if (n < 1) {
		index = slides.length;
	}

	slides.forEach((item) => (item.style.display = "none"));
	// slides[index + 1].style.display = "block";
	// slides[index].style.display = "block";
	slides[index - 1].style.display = "block";
	document
		.querySelectorAll(".line")
		.forEach((item) => item.classList.remove("active"));
	document.querySelectorAll(".line")[index - 1].classList.add("active");
}

function incSlides(n) {
	showSlides((index += n));
}

prev.addEventListener("click", () => {
	incSlides(-1);
});
next.addEventListener("click", () => {
	incSlides(1);
});

showSlides(index);


