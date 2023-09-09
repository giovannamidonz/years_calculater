const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

const numdiaInput = document.getElementById('numdia');
const nummesInput = document.getElementById('nummes');
const anoInput = document.getElementById('ano');

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
document.getElementById("img").addEventListener("click", subtracao);
const anoEnter = document.getElementById('ano');
anoEnter.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    subtracao();
  }
});
