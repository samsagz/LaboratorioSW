function principal(urlPrincipal, urlDashboard, moduloId) {
    $.getJSON(urlPrincipal + moduloId, //'http://localhost:3000/modulos/1',
        function (data) {
            $('#n_modulo').html(data.nombre);

            $("#navbarsModules ul").html("");
            for (var modulo in data.modulos) {
                console.log(data.modulos);
                $("#navbarsModules ul").append('<li class="nav-item active"><h5>' +
                    '<a id="' + data.modulos[modulo] + modulo +
                    '" href="' + urlDashboard + modulo +
                    '" class="nav-link menu spacing">Plantación ' + data.modulos[modulo] + '</a>' +
                    '</h5> </li>');
            }

            $('#info_planta').html("");
            for (var info in data.info_general) {

                $('#info_planta').append(
                    '<button type="button" class="btn btn-success m-3 col-md-2">'
                    + info
                    + '<span class="badge badge-pill badge-warning mx-1">'
                    + data.info_general[info] + '</span>' +
                    '</button>');
            }

            $('#info_control').html("");
            for (var control in data.variables_control) {
                $('#info_control').append(
                    '<div onClick="mostrarData(this)" id=' + control + ' class="col-12 col-md-4 col-sm-6 mx-auto">' +
                    '<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">' +
                    '<div class="card-header p-0"> <p class="variable pt-2 pb-0">' + control + '</p></div>' +
                    '<div class="card-body p-0">' +
                    '<div class="progress-circle progress-75"><h4>' + data.variables_control[control] + '</h4></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>');
            }

            $('#info_cuidado').html("");
            for (var cuidado in data.variables_cuidado) {
                $('#info_cuidado').append(
                    '<div class="col-md-6"><p>' + cuidado + '</p></div>' +
                    '<div class="col-md-6"><p>' + data.variables_cuidado[cuidado] + '</p></div>');
            }
        });
}
