function subtracao(){
  var ano = document.getElementById("ano");
  var anoResult = document.getElementById("anor");
  var anonum = parseFloat(ano.value);
  var result_ano = 2023 - anonum;
  anoResult.textContent = result_ano;
  
  var nummes = document.getElementById("nummes");
  var mesResult = document.getElementById("mesr");
  var mesnum = parseFloat(nummes.value);
  var result_mes = 9 - mesnum;
  mesResult.textContent = result_mes;

  var numdia = document.getElementById("numdia");
  var diaResult = document.getElementById("diar");
  var dianum = parseFloat(numdia.value);
  var result_dia = 8 - dianum;
  diaResult.textContent = result_dia;

  
}

document.getElementById("img").addEventListener("click", subtracao);
