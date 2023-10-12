$(document).ready(function(){
    const menuBtn = $('.idLink');

    menuBtn.click(()=>{
        setTimeout(()=>{
            removeHash();
        }, 5);
    });

    function removeHash(){
        history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
});

var length = document.querySelectorAll(".cellBtn").length;
for (var i = 0; i < length; i++) {
    document.querySelectorAll(".cellBtn")[i].addEventListener("click", closeMenu);
}

function closeMenu(){
    document.getElementsByClassName("toggler")[0].checked = false;
}