 $(document).ready(function(){
            console.log("Iniciando");
            $("#mensaje > button").on("click",function(ev){
                alert("Se oprimio "+ev.currentTarget.innerText);
            });

        $("#textarea1").on("keyup",function(ev){
            var text = $("#textarea1").val();
            $("#textarea2").val(text);
            $("#area > p").text("Numero de caracteres: "+text.length);
        });

        $("#btnPop").click(function(){
             $("#popup").fadeTo(1000,0,function(){
                $("#popup").css('display','none');
             });
        });

        $("#textarea2").click(function(){
            alert("No se puede escribir nada aqui");
            $("#textarea1").focus();
            $("#textarea1").attr('class', 'textAreaError');
        })

        cargar("Opcion 1");
});

 function cargar(val){
    $("span:first").text(val);
    $.getJSON( "opciones.json", function( data ){
        $("#combo2").empty();
        $.each(data,function(opc,arr){
            if(opc===val){
                $.each(arr,function(indice,valor){
                    $("#combo2").append("<option value='"+valor+"'>"+valor+"</option>");
                })
                return false;
            }
        });
    }).done(function(){
        console.log("Opciones cargadas");
        $("span:last").text($("#combo2").val());
    }).fail(function(){
        alert("Fallo al cargar las opciones")
    });
 }

 function cambiar(val){
     $("span:last").text(val);
 }