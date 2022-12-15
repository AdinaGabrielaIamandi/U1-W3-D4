const addClass = (event) => {
    const selezionato = event.target;
    selezionato.classList.add("selected");
};
const gestisciKeyUpSuInput = (event) => {
    if (event.key === "Enter") {
        const valoreInput = document.getElementById("text-input");
        if (valoreInput === "") {
            alert(
                "ATTENZIONE!! Prima di premere invio assicurarsi che il campo non sia vuoto"
            );
        } else {
            const nuovoDiv = document.createElement("div");
            nuovoDiv.classList.add("list-item");
            nuovoDiv.innerText = valoreInput;
        }
    }
};