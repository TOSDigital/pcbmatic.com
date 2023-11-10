let slideIndex = 0;
showTestimonial(slideIndex);

function changeTestimonial(n) {
    showTestimonial((slideIndex += n));
}

function showTestimonial(n) {
    const testimonials = document.getElementsByClassName("testimonial");
    if (n >= testimonials.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = testimonials.length - 1;
    }
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].classList.remove("active");
    }
    testimonials[slideIndex].classList.add("active");
}

// Function to automatically advance the slide every 3000ms (3 seconds)
function autoSlide() {
    changeTestimonial(1);
}

// Set the automatic slide interval
setInterval(autoSlide, 3000); // 3000 milliseconds (3 seconds)
