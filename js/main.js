function consultaCep(){
    var inserindoCep = document.getElementById("inserindoCep").value;
    var url = "https://viacep.com.br/ws/" + inserindoCep + "/json/";

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            $("#logradouro").html(response.logradouro);
            $("cep").html(response.cep);            
            $("bairro").html(response.bairro);
            $("localidade").html(response.localidade);
            $("uf").html(response.uf);
            $("ibge").html(response.ibge);

            //document.getElementById("logradouro").innerHTML = response.logradouro;
        }
    })
}