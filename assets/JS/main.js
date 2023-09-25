const listImage = document.querySelector(".list__images"); //danh sach anh
const imgs = document.getElementsByClassName("slide__img");
const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");
const leng = imgs.length;
let current = 0;

const handleChangSlide = () => {
    if (current == leng - 1) {
        current = 0;
        listImage.style.transform = `translateX(0px)`;
        document.querySelector(".dot__active").classList.remove("dot__active");
        document.querySelector(".dot-" + current).classList.add("dot__active");
    } else {
        current++;
        let width = imgs[0].offsetWidth;
        listImage.style.transform = `translateX(${width * -1 * current}px)`;
        document.querySelector(".dot__active").classList.remove("dot__active");
        document.querySelector(".dot-" + current).classList.add("dot__active");
    }
};

let handleEventChangSlide = setInterval(handleChangSlide, 4000);

btnright.addEventListener("click", () => {
    clearInterval(handleEventChangSlide);
    handleChangSlide();
    handleEventChangSlide = setInterval(handleChangSlide, 4000);
});

btnleft.addEventListener("click", () => {
    clearInterval(handleEventChangSlide);
    if (current === 0) {
        current = leng - 1;
        let width = imgs[0].offsetWidth;
        listImage.style.transform = `translateX(${width * -1 * current}px)`;
        document.querySelector(".dot__active").classList.remove("dot__active");
        document.querySelector(".dot-" + current).classList.add("dot__active");
    } else {
        current--;
        let width = imgs[0].offsetWidth;
        listImage.style.transform = `translateX(${width * -1 * current}px)`;
        document.querySelector(".dot__active").classList.remove("dot__active");
        document.querySelector(".dot-" + current).classList.add("dot__active");
    }
    handleEventChangSlide = setInterval(handleChangSlide, 4000);
});
