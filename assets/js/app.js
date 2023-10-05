const tabs = document.querySelectorAll('[data-tab-target]');
const tabcontent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabcontent.forEach(a => {
            a.classList.remove("active")
        });
        tabs.forEach(tab => {
            tab.classList.remove("active")
        });
        tab.classList.add("active");
        target.classList.add("active");
    })
})

let text = document.querySelector(".add-btn");
let Sub = document.querySelector(".sub");
let Add = document.querySelector(".add");

Add.addEventListener("click", () => {
    text.innerHTML = +text.innerHTML + 1;
})

Sub.addEventListener("click", () => {
    if (text.innerHTML > 1) {
        text.innerHTML = text.innerHTML - 1;
    }
})

let label = document.querySelector(".label");
let menu = document.querySelector("#menu");
let open = 0;

label.addEventListener("click", () => {
    if (open == 0) {
        menu.style.right = 0;
        document.body.classList.add("overflow-y-hidden");
        label.classList.add("label-switch");
        open++;
    }

    else {
        menu.style.right = '-100%';
        document.body.classList.remove("overflow-y-hidden");
        label.classList.remove("label-switch");
        open--;
    }
});
