// Mobile menu toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Contact form
function handleSubmit(e) {
  e.preventDefault();

  const name = document.querySelector("input[type='text']").value;

  alert("Thank you " + name + "! We will contact you soon.");
}

// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.3
});

document.querySelectorAll(".fade-in").forEach((item)=>{

    observer.observe(item);

});