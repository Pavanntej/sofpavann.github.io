function openTrailer(id){
document.getElementById("modal").style.display="flex";
document.getElementById("frame").src=
"https://www.youtube.com/embed/"+id+"?autoplay=1";
}

function closeTrailer(){
document.getElementById("modal").style.display="none";
document.getElementById("frame").src="";
}
