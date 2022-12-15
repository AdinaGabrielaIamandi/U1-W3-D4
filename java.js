const addClass = (event) => {
    const elementoSelezionato = event.target;
    elementoSelezionato.classList.add("selected");
};
const gestisciKeyUpSuInput = (event) => {
    const valoreInput = document.getElementById("text-input").value;
    if (valoreInput === "") {
        alert(
            "ATTENZIONE!! Prima di premere invio assicurarsi che il campo non sia vuoto"
        );
    } else {
        const nuovoDiv = document.createElement("div");
        nuovoDiv.classList.add("list-item");
        nuovoDiv.innerText = valoreInput;
        nuovoDiv.onclick = addClass;
        document.getElementById("list-item").appendChild(nuovoDiv);
        document.getElementById("text-input").value = "";
    }
};

const delet = (e) => {
    const lista = document.getElementById("list-item");
    const elimina = document.querySelectorAll(".selected");
    elimina.forEach((e) => lista.removeChild(e));
};