const questionArr = document.querySelectorAll(".question");
questionArr.forEach(function(question){
        question.addEventListener("click", function(){
        const faq = this.parentElement; 
        const answer = faq.querySelector(".answer");
        answer.classList.toggle("show");
    })
})











