const navlinks = document.querySelector(".nav-links");
const burgermenu = document.querySelector("#burgermenu")

burgermenu.addEventListener("click", function() {
    navlinks.classList.toggle("active")
})

//* modale

const Open = document.getElementById("Modale");
const dialog = document.getElementById("Dialog");
const Close = document.getElementById("Close")


Open.addEventListener("click", (e) => {
    e.preventDefault(); 

    dialog.showModal();
});

Close.addEventListener("click", (e) => {
    e.preventDefault();

    dialog.close();
    
})

