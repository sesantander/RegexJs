function vertificarplaca() {


  const regex = /^([A-Z\u00d1]{3})([0-9]{3})$/;
  string=document.getElementById('placa').value
  const isExisting = regex.test(string);
  jlabel(isExisting,"placa")

}

function vertificarfecha() {

  const regex= /^((0[1-9]|[1-2][0-9]|3[0-1])(\/)(01|0[3-9]|1[0-2])(\/)([0-9][0-9][0-9][0-9]))$|((0[1-9]|1[0-9]|2[0-8])(\/)(02)(\/)([0-9][0-9][0-9][0-9]))$/;
  string=document.getElementById('fecha').value
  const isExisting = regex.test(string);
  jlabel(isExisting,"fecha")
  
}

  function jlabel(isExisting,elemento){
    elemento="es"+elemento
    noelemento="no"+elemento
    console.log(noelemento)
    if(isExisting){
      document.getElementById(elemento).style.display="block";
      document.getElementById(elemento).style.color="green";
      document.getElementById(noelemento).style.display="none";   
  }else{
      document.getElementById(noelemento).style.display="block";         
      document.getElementById(noelemento).style.color="red";
      document.getElementById(elemento).style.display="none";  
  }
}