const checkbox = document.getElementById("overflow");

checkbox.addEventListener("click", () => {
    document.querySelector(".container").style.overflow = checkbox.checked
        ? "hidden"
        : "visible";
});
