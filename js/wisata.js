const container = document.getElementById("wisata-container");

destinasi.forEach((item, index) => {

    container.innerHTML += `
    
    <div
        class="card reveal"
        style="transition-delay:${index * 0.25}s"
        onclick="showDetail(${index})">

        <img
            src="${item.gambar}"
            alt="${item.nama}"
            loading="lazy">

        <div class="card-body">

            <h3>${item.nama}</h3>

            <p class="location">
                📍 ${item.lokasi}
            </p>

        </div>

    </div>

    `;

});

function showDetail(index){

    const wisata = destinasi[index];

    document.getElementById("modal-image").src =
        wisata.gambar;

    document.getElementById("modal-title").textContent =
        wisata.nama;

    document.getElementById("modal-description").textContent =
        wisata.deskripsi;

    document.getElementById("maps-link").href =
        wisata.maps;

    document.getElementById("modal").style.display =
        "flex";

    document.body.style.overflow =
        "hidden";

}

function closeModal(){

    document.getElementById("modal").style.display =
        "none";

    document.body.style.overflow =
        "auto";

}