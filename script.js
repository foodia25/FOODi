document.addEventListener("DOMContentLoaded", function() {
    console.log("📌 FOODi جاهز!");
    
    let signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "onboarding.html";
        });
    }

    let nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        let images = ["07.png", "08.png", "09.png"];
        let index = 0;
        let imgElement = document.getElementById("onboarding-img");

        nextBtn.addEventListener("click", function () {
            if (index < images.length - 1) {
                index++;
                imgElement.src = images[index];
            } else {
                window.location.href = "home.html";
            }
        });
    }
});
