function valideRecherche() {
    var liste_form = Array.from(document.forms["formcollab"]);
    for (let index = 0; index < liste_form.length - 1; index++) {
        validerElement(liste_form[index].id, "res" + liste_form[index].id);
    }

    document.forms["formcollab"].submit();
}

function validerElement(name, res) {
    var result = document.getElementById(name).value;
    if (result.length != 0) {
        document.getElementById(res).innerHTML = result;
    }
    else {
        console.log("Erreur pour " + name);
        document.getElementById("formcollab").action = "creer_errors.html";
    }
}

window.addEventListener("load",function() { this.document.getElementsByClassName("active")[0].classList.add("bg-primary")});