// front end logic

$(document).ready(function() {
  var total;
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    var warningArray = [];
    var healthArray = [];
    var copingArray = [];
    $("input:checkbox[name=warning-signs]:checked").each(function() {
      var warningValues = parseInt($(this).val());
      warningArray.push(warningValues);
    });
    // var checkedSigns = $('input:checkbox[name=warning-signs]:checked').length;
    // console.log(checkedSigns);
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      var healthValues = parseInt($(this).val());
      healthArray.push(healthValues);
    });
    $("input:checkbox[name=coping-method]:checked").each(function() {
      var copingValues = parseInt($(this).val());
      copingArray.push(copingValues);
    });

    total = warningArray.length + healthArray.length - copingArray.length
    console.log(total)

  });
});
