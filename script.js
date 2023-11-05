//mouse hovering effect which on moving moves a card with itself

window.addEventListener("mousemove", function (details) {
    var rect = this.document.querySelector(".rect");
    var xval = gsap.utils.mapRange(0, window.innerWidth, 100+rect.getBoundingClientRect().width/2, window.innerWidth - (100+rect.getBoundingClientRect().width/2), details.clientX);


    gsap.to('.rect', {
        left: xval,
        ease: Power3
    });
});