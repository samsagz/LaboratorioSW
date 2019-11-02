function variablesAmbiente(urlPrincipal, moduloId) {
    //let random = Math.floor(Math.random() * (5 - 1)) + 1
    this.valorRefresco = 1000;
    this.urlPrincipal = urlPrincipal;
    this.moduloId = moduloId;
    debugger;
    function llamadoServidor() {
        debugger;

        $.ajax({
            type: 'GET',
            url: this.urlPrincipal + this.moduloId,
            success: function (data) {
                $('#info_ambiente').html("");
                for (var key in data.variables_ambiente) {
                    $('info_ambiente').append(
                        '<div class="prueba col-md-6"><p class="variable" id=' + key + '>' +
                        key +
                        '</p></div>' +
                        '<div class="col-md-6"><p>' +
                        data.variables_ambiente[key] +
                        '</p></div>');
                }
            }
        });
    }
    setInterval(llamadoServidor, valorRefresco);

}
