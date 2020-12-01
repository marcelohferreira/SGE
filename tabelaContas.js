function criaTag(elemento){
	return document.createElement(elemento);
}
let tabela = document.getElementById("tabela");
let thead = criaTag("thead");
let tbody = criaTag("tbody");

let indice = ["Numero Parcela", "Nome", "Valor","Data Vencimento","Forma Pagamento"];
let linhaHead = criaTag("tr");

function criaCelula(tag,text){
	tag = criaTag(tag);
	tag.textContent = text;
	return tag;
}
for(let j = 0; j<indice.length; j++){
	let th = criaCelula("th",indice[j]);
	linhaHead.appendChild(th);
}
thead.appendChild(linhaHead);

for(let j=0, linhaBody = ''; j<linhasTabela.length; j++){
	linhaBody = criaTag("tr");
	for(let i=0, cel =''; i<linhasTabela[j].length; i++){
		cel = criaCelula("td",linhasTabela[j][i]);
		linhaBody.appendChild(cel)
	}
	tbody.appendChild(linhaBody);
}

tabela.appendChild(thead);
tabela.appendChild(tbody);

function filtrar() {
    var termo = $('#busca').val().toUpperCase();
            $('#tabela').each(function() { 
               if($(this).html().toUpperCase().indexOf(termo) === -1) {
                   $(this).hide();
               }
            });
        }