//Data//
const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

//Variaveis e associacoes//
const numdiaInput = document.getElementById('numdia');
const nummesInput = document.getElementById('nummes');
const anoInput = document.getElementById('ano');

//Limitacão de digito do input e correcao de data errada//
  numdiaInput.addEventListener('input', function() {
    let numdia = numdiaInput.value.replace(/\D/g, '');
    numdia = numdia.substring(0, 2);
    numdiaInput.value = numdia;
    if (numdia.length === 2) {
      nummesInput.focus();
    }
  });
  nummesInput.addEventListener('input', function() {
    let nummes = nummesInput.value.replace(/\D/g, '');
    nummes = nummes.substring(0, 2);
    nummesInput.value = nummes;
    if (nummes.length === 2) {
      anoInput.focus();
    }
  });
  anoInput.addEventListener('input', function() {
    let ano = anoInput.value.replace(/\D/u, '');
    ano = ano.substring(0, 4);
    anoInput.value = ano;
    if (ano.length === 4 && ano > 2023){
        anoInput.value = '2023'
    }
  });

  //Logica de valores naturais em relacão ao pedido//
  numdiaInput.addEventListener('blur', function() {
    let numdia = parseInt(numdiaInput.value);
    if (numdia < 1 || numdia > dia || isNaN(numdia)) {
      numdiaInput.value = '31';
    }
  });
  
  nummesInput.addEventListener('blur', function() {
    let nummes = parseInt(nummesInput.value);
    if (nummes < 1 || nummes > mes || isNaN(nummes)) {
      nummesInput.value = '12';
    }
  });

  //Logica matematica entre as datas//
function subtracao(){
  var numano = document.getElementById("ano");
  var anoResult = document.getElementById("anor");
  var anonum = parseFloat(numano.value);
  var result_ano = ano - anonum;
  var nummes = document.getElementById("nummes");
  var mesResult = document.getElementById("mesr");
  var mesnum = parseFloat(nummes.value);
  var result_mes = mes - mesnum;
    if(result_mes < 1){
      mesResult.textContent = result_mes + 11;
      anoResult.textContent = result_ano - 1;
    }
    else{
      mesResult.textContent = result_mes;
      anoResult.textContent = result_ano;
    }
    var numdia = document.getElementById("numdia");
    var diaResult = document.getElementById("diar");
    var dianum = parseFloat(numdia.value);
    var result_dia = dia - dianum;
    if(result_dia < 0){
      diaResult.textContent = 31 - (-1 * result_dia);
    }
    else{
    diaResult.textContent = result_dia;
    }
  }

  //Start//
document.getElementById("img").addEventListener("click", subtracao);
const anoEnter = document.getElementById('ano');
anoEnter.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    subtracao();
  }
});
