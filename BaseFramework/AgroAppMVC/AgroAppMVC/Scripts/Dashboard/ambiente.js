$(document).ready(function() {
  function variablesAmbiente() {
    let random = Math.floor(Math.random()*(5-1))+1
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/simulador/' + random,
      success: function(data) {
        document.getElementById('info_ambiente').innerHTML ="";
        for (var key in data.variables_ambiente) {
          document.getElementById('info_ambiente').innerHTML +=
            '<div class="prueba col-md-6"><p class="variable" id='+key+'>' +
            key +
            '</p></div>' +
            '<div class="col-md-6"><p>' +
            data.variables_ambiente[key] +
            '</p></div>';
        }
      }
    });
  }setInterval(variablesAmbiente, 1000);
});
