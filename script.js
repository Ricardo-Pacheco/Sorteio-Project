const button = document.querySelector("#gen-number")

function sortear() {
    const min = Math.ceil(document.querySelector(".input-left").value)
    const max = Math.floor(document.querySelector(".input-right").value)
    const resultInput = document.querySelector(".result-input")

    if (min >= max) {
        alert("O valor mínimo tem que ser MENOR que o valor máximo")
    } else {
        
        const result = Math.floor(Math.random() * (max - min + 1) + min);

        resultInput.value = result 
    }


}

button.addEventListener("click", sortear)