const question = document.querySelector(".question");


question.addEventListener("click", (e) => {
    console.log(e.target.parentElement.nextElementSibling);
    // e.target.parentElement.nextElementSibling.style.display = "block";
});