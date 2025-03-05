document.addEventListener("DOMContentLoaded", function () {
    let progress = 0;
    const progressBar = document.querySelector(".progress");

    function loadPage() {
        if (progress < 100) {
            progress += 5;
            progressBar.style.width = progress + "%";
            setTimeout(loadPage, 300);
        } else {
            window.location.href = "login.html"; // الانتقال إلى صفحة تسجيل الدخول بعد التحميل
        }
    }

    loadPage();
});
