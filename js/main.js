let container = document.querySelector(".container");
let img = document.querySelector("img");
let sizeBtn = document.querySelectorAll(".size-btn button");


container.addEventListener("mouseover", () => {
    img.style.transform = "rotate(15deg)";
})

container.addEventListener("mouseout", () => {
    img.style.transform = "";
})

sizeBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        sizeBtn.forEach(btn => {
            btn.classList.remove("active");
        })

        btn.classList.add("active");
    })
})