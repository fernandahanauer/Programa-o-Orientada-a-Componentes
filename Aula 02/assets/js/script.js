$(document).ready(function(){

    $("section").load("admin/home.html");    

    $("#menu-home").click(function(){
        $("section").load("admin/home.html");    
    });

    $("#menu-cep").click(function(){
        $("section").load("admin/cep.html",function(){
            $("#consult").click(function(){
                var cep = $("#cep").val();    
                $.get("https://viacep.com.br/ws/"+cep+"/json/", function(data){
                    //console.log(data.localidade);
                   $("#result").html("A cidade é: " + data.localidade);
                })
        
            });
        });    

        
    });


    

  });