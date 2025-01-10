function toggleInfo(id, buttonId) {
    const info = document.getElementById(id);
    const button = document.getElementById(buttonId);

    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        button.innerText = "Veure menys";
    } else {
        info.style.display = "none";
        button.innerText = "Veure més";
    }
}
function startGif(image) {
    // Assigna el GIF animat
    image.src = image.getAttribute('data-src');
}

function stopGif(image) {
    // Assigna el placeholder amb un retard mínim
    setTimeout(() => {
        image.src = "Imatges/static-placeholder.jpg";
    }, 50); // Retard de 50ms per assegurar que el navegador processi el canvi
}
