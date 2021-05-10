function vertificarplaca() {


  const regex = /^([A-Z\u00d1]{3})([0-9]{3})$/;
  string=document.getElementById('placa').value
  const isExisting = regex.test(string);
  jlabel(isExisting,"placa")

}

function vertificarfecha() {

  const regex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(1[0-2]|0[1-9])\/([0-9]{4})$/;
  string=document.getElementById('fecha').value
  const isExisting = regex.test(string);
  jlabel(isExisting,"fecha")
  
}

  function jlabel(isExisting,elemento){
    elemento="es"+elemento
    noelemento="no"+elemento
    elementoimg=elemento+"img"
    noelementoimg=noelemento+"img"
    console.log(noelemento)
    if(isExisting){
      document.getElementById(elemento).style.display="block";
      document.getElementById(elemento).style.color="green";
      document.getElementById(noelemento).style.display="none";
      document.getElementById(elementoimg).style.display="block";      
      document.getElementById(noelementoimg).style.display="none";      
  }else{
      document.getElementById(noelemento).style.display="block";         
      document.getElementById(noelemento).style.color="red";
      document.getElementById(elemento).style.display="none";
      document.getElementById(elementoimg).style.display="none";      
      document.getElementById(noelementoimg).style.display="block";     
  }
}