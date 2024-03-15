const resetbut = document.getElementById("resetbut");
resetbut.addEventListener("click", function(){
    localStorage.removeItem("styles");
    location.reload();
});

const formtosub = document.getElementById("formtosub");
formtosub.addEventListener("submit", function(){
    colortext = document.getElementById('colorget').value;
    shrifttext = document.getElementById('shriftget').value;

    document.getElementById("texttoch").style.backgroundColor=colortext;
    document.getElementById("texttoch").style.fontSize =`${shrifttext}px`;

    localStorage.setItem("styles",JSON.stringify([colortext, `${shrifttext}px`]));

    document.getElementById('colorget').value = "rgba(0,0,0,0.5)";
    document.getElementById('shriftget').value = "";
});

if(localStorage.length >0) {
    let alwStyle = JSON.parse(localStorage.getItem("styles"));
    document.getElementById("texttoch").style.backgroundColor = alwStyle[0];
    document.getElementById("texttoch").style.fontSize = alwStyle[1];
}



