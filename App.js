
const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
         entry.target.classList.add('show')
      } else {
         entry.target.classList.remove('show')
      }
   })
})


const scrollRight = document.querySelectorAll('.Scroll_js_right');
scrollRight.forEach((el) => observer.observe(el));
//===================================================


const scrollUp = document.querySelectorAll('.Scroll_js_up');
scrollUp.forEach((el) => observer.observe(el));
//===================================================


