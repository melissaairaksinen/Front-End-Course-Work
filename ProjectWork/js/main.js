// Hero Section starts
const SliderImages = document.querySelector('.slider-images')
const slides = SliderImages.children.length
const dots = document.querySelector(".slider-dots")
const dot = document.querySelectorAll(".dot")
const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector('.next')

// Initialize Current Index
let currentIndex = 0;

//Handling Active Dot
function handleActive() {
    dot.forEach((dot, index)=>{
        dot.classList.toggle("active", index === currentIndex)
    })
}

//Main Slide Move Function
function moveSlide(index) {
    currentIndex = (index + slides) % slides

SliderImages.style.transform = `translateX(-${currentIndex * 100}%)`
handleActive()

}

moveSlide(0) // initialize with zero index


// Handlind Dot Nav
dots.addEventListener("click", (e)=> {
    const dot = e.target.closest(".dot")
    if(dot) {
        const index = parseInt(dot.dataset.index, 10)
        moveSlide(index)
    }
})


prevButton.addEventListener('click', ()=> {
    moveSlide(currentIndex - 1)
})

nextButton.addEventListener('click', ()=> {
    moveSlide(currentIndex + 1)
})
// Hero Section Ends