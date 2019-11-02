function principal(urlPrincipal) {
    debugger;
    $.getJSON(urlPrincipal, //'http://localhost:3000/modulos/1',
        function (data) {
            debugger;

            console.log(data.info_general);
            $('#n_modulo').html = data.info_general.Nombre;
            $("#navbarsModules ul").html('<li class="nav-item active"><h5>' +
                '<a id="' + data.id + '" class="nav-link menu spacing">Plantación' + data.info_general.Nombre + '</a>' +
                '</h5> </li>');

            //var ban = true;
            //var key;
            //for (key in data.info_general) {

            //    //if (key == "id") {

            //    //}

            //    if (ban === false) {
            //        document.getElementById('info_planta').innerHTML +=
            //            '<button type="button" class="btn btn-success m-3 col-md-2">'
            //            + key
            //            + '<span class="badge badge-pill badge-warning mx-1">'
            //            + data.info_general[key] + '</span>' +
            //            '</button>';
            //    }
            //    ban = false;
            //}
            for (key in data.variables_control) {
                document.getElementById('info_control').innerHTML +=
                    '<div onClick="mostrarData(this)" id=' + key + ' class="col-12 col-md-4 col-sm-6 mx-auto">' +
                    '<div' + ' class="card text-white bg-warning mb-3"' +
                    'style="max-width: 18rem;"' +
                    '>' +
                    '<div class="card-header p-0"> <p class="variable pt-2 pb-0">' + key + '</p></div>' +
                    '<div class="card-body p-0">' +
                    '<div class="progress-circle progress-75"><h4>' + data.variables_control[key] + '</h4></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
            for (key in data.variables_cuidado) {
                document.getElementById('info_cuidado').innerHTML +=
                    '<div class="col-md-6"><p>' + key + '</p></div>' +
                    '<div class="col-md-6"><p>' + data.variables_cuidado[key] + '</p></div>';
            }
        });
}
