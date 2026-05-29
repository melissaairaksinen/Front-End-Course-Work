const SliderImages = document.querySelector('.slider-images')
const slides = SliderImages.children.length
const dots = document.querySelector(".slider-dots")
const dot = document.querySelectorAll(".dot")
const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector('.next')

let currentIndex = 0;

function handleActive() {
    dot.forEach((dot, index)=>{
        dot.classList.toggle("active", index === currentIndex)
    })
}


function moveSlide(index) {
    currentIndex = (index + slides) % slides

SliderImages.style.transform = `translateX(-${currentIndex * 100}%)`
handleActive()

}

moveSlide(0) // initialize with zero index

dots.addEventListener("click", (e)=> {
    const dot = e.target.closest(".dot")
    if(dot) {
        const index = parseInt(dot.dataset.index, 10)
        moveSlide(index)
    }
})
