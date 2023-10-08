let slideIndex = 1;
showSlides(slideIndex);

const prevbutton = document.getElementById("prev")
const next = document.getElementById("next")



function plusSlides(n) {
  let slides = document.getElementsByClassName("mySlides")
  showSlides(slideIndex += n);
  if(slideIndex == slides.length) {
    setTimeout( ()=>{
      document.getElementById("button-nav").click()
    }, 5000);
    
 
  }
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); 
}