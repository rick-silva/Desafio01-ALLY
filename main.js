
function inverteString(){
    //Recebe o valor do input, no caso a palavra digitada.
    let string = document.getElementById("string").value


    let tamanho = parseInt(string.length)
    let div = document.getElementById("div-palavra")

    for (let i = tamanho - 1; i >= 0; i--){
        console.log(string[i])
        div.innerHTML += `<span class="palavra">${string[i]}<span>`
    }
}

function removeString(){
    document.getElementById("string").value = ""
    document.getElementById("div-palavra").innerText = ""

}