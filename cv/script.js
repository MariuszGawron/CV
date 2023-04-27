//funkcja, która rozwija i zwija listy
function rozwinListe(element) {
    var idElementu = element;
    var paragraph = document.getElementById("my-paragraph" + idElementu);
    var hDots = document.getElementById("hidden-dots" + idElementu);
    var sDots = document.getElementById("showing-dots" + idElementu);
    if (hDots.style.display === "none") {
        hDots.style.display = "contents";
    } else {
        hDots.style.display = "none";
    }
    if (sDots.style.display === "contents") {
        sDots.style.display = "none";
    } else {
        sDots.style.display = "contents";
    }
    if (paragraph.style.display === "block") {
        paragraph.style.display = "none";
    } else {
        paragraph.style.display = "block";
    }
}

//
function showImg(id) {
    var idImg = id;
    var img = document.getElementById("cv-photo");
    var img2 = document.getElementById("cv-photo2");
    if (img.style.display === "block") {
        img.style.display = "none";
    } else {
        img.style.display = "block";
    }
    if (img2.style.display === "none") {
        img2.style.display = "block";
    } else {
        img2.style.display = "none";
    }
}
