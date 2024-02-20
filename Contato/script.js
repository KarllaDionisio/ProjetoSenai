var NomeGlobal;
var MensagemGlobal;
var DateGlobal;


function formatarDate(date){
var options = {
    month:"short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
};
return date.toLocaleString("pt-BR", options)
}


function conferirMensagemWhatsapp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();
    

    NomeGlobal = nome;
    MensagemGlobal = mensagem;
    DateGlobal = date;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
    document.getElementById("confDate").textContent = formatarDate(date);
}

function enviar(){
    var numeroTelefone = "5541998113636"

    var link = "https://wa.me/" + numeroTelefone + "?text=NOME DO RECEPTOR(A):" + NomeGlobal + "-" + MensagemGlobal + "-" + formatarDate(DateGlobal);
    
console.log(link)
    window.open(link, "_blank")
}