const slides = document.querySelectorAll('.slide')

for(const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active')
    })
}

function clearActiveClasses(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}

function togglePopup(popupId) {
  var popup = document.getElementById(popupId);
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}
