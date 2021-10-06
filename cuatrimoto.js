console.log("entro");
obtener();
function getData(){
    var config = {};
    $('input').each(function () {
        config[this.id] = this.value;
       });

crear(config);
}

function obtener(){
$.ajax({
    url:'https://g9a84339c54bed2-apextjpe.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
    type:'GET',
    datatype:"JSON",
    success:function(respuesta){
        console.log(respuesta);
    }
});
}

function crear(ArchivoCrear){
    fetch('https://g9a84339c54bed2-apextjpe.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',{
        method:'POST',
        body:ArchivoCrear,
    })
    .then(function(response){
        console.log( response.text());
    })
    console.log(ArchivoCrear);
}
