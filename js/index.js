
    function Suceso(idsuceso, suceso, descripcion){

        this.idsuceso = idsuceso;
        this.suceso = suceso;
        this.descripcion = descripcion;
        
    }
    let baseDatos = [];
   
document.getElementById("btnAnadirSuceso").addEventListener("click", function(){

    document.getElementById("contenedor").innerHTML = "";


    baseDatos = JSON.parse(localStorage.getItem("sucesos"));

    if(baseDatos === null){
        baseDatos = [];
    }


    var id = "suceso" + baseDatos.length;
 
    var suces= document.getElementById("titulosuceso").value;
  
    var descrip = document.getElementById("descripcionsuceso").value;
    nuevoSuceso = new Suceso(id, suces, descrip);


    baseDatos.push(nuevoSuceso);

localStorage.setItem("sucesos",JSON.stringify(baseDatos));
   
    
    document.getElementById("titulosuceso").value= "";
    document.getElementById("descripcionsuceso").value="";


    for(datos in baseDatos){
       
        document.getElementById("contenedor").innerHTML += "<div class='col-md-3'><div class='card mb-4 shadow-sm'> <rect width='100%' height='100%' fill='#55595c' /><div class='card-body'><h4 class='card-title'>"+baseDatos[datos].suceso+"</h4><p class='card-text' >Descripción del suceso: "+ baseDatos[datos].descripcion +"</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><a type='button' href='linea.html?id="+ baseDatos[datos].idsuceso +"' class='btn btn-sm btn-outline-secondary'>Ver linea</a></div></div></div>  </div>"; 

      }
   

});

document.addEventListener("DOMContentLoaded", function(){
    
    
    document.getElementById("contenedor").innerHTML = "";
    baseDatos = JSON.parse(localStorage.getItem("sucesos"));

 if(baseDatos === null){
    baseDatos = [];
 }else{
   

    for(datos in baseDatos){
       
      document.getElementById("contenedor").innerHTML += "<div class='col-md-3'><div class='card mb-4 shadow-sm'> <rect width='100%' height='100%' fill='#55595c' /><div class='card-body'><h4 class='card-title'>"+baseDatos[datos].suceso+"</h4><p class='card-text' >Descripción del suceso: "+ baseDatos[datos].descripcion +"</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><a type='button' href='linea.html?idlinea="+baseDatos[datos].idsuceso +"'  class='btn btn-sm btn-outline-secondary'>Ver linea</a></div></div></div>  </div>"; 

    }
}
});

