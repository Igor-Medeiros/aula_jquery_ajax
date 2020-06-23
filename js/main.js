function consultaCep(){
    $(".barra-progresso").show();
    var buscandocep = document.getElementById("buscandocep").value;
    var url = "https://viacep.com.br/ws/" + buscandocep + "/json/";

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#ibge").html(response.ibge);
            $("#cep").html("CEP: " + response.cep)
            $(".cep").show();
            $(".barra-progresso").hide();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})
