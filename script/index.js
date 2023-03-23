document.getElementById("calculate").addEventListener("click", function(){

    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;


     const total = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);

     if (total > 180) {
        resultado = " APROVADO!";
      } else {
        resultado = " REPROVADO!";
      }

     document.getElementById("total").innerHTML = (resultado);
});