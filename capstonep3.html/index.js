const faqs = document.querySelectorAll(".list");

faqs.forEach((list) => {
    list.addEventListener("click", () => {
        list.classList.toggle("active");
        faqs.forEach((otherList) => {
            if (otherList !== list) {
                otherList.classList.remove("active");
            }
        });
    });
});
