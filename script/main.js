



const btnCon = document.querySelector(".btn__sortea").addEventListener("click", function(){
    function sorteado(max,quant) {
        var numeroS = []
        while (numeroS.length < quant) {
          e = Math.floor(Math.random() * max);
          if (numeroS.indexOf(e) == -1) {
            numeroS.push(e)
          }
        }
       return numeroS
    }
  document.querySelector(".cont__painel").value = (sorteado(25 , 15))
   
});

