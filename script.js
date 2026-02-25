function openTrailer(id){
document.getElementById("modal").style.display="flex";
document.getElementById("frame").src=
"https://www.youtube.com/embed/"+id+"?autoplay=1";
}

function closeTrailer(){
document.getElementById("modal").style.display="none";
document.getElementById("frame").src="";
}

/* NETFLIX HOVER PREVIEW */
document.querySelectorAll(".book").forEach(book=>{

const videoId = book.dataset.video;
const iframe = book.querySelector(".preview");

book.addEventListener("mouseenter",()=>{

iframe.src =
`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

iframe.style.opacity=1;
});

book.addEventListener("mouseleave",()=>{

iframe.src="";
iframe.style.opacity=0;
});

});
