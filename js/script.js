(function ($) {

  var total,
  sub = '',
  $lastClicked = true;

  function numberClick() {
    var temp = $(this).text();
      sub += temp;
      console.log(sub);
      $('.display').val(sub);
      $lastClicked = false;
  }  
  function operatorClick() {
    if ($lastClicked) {
      var temp = '';
    } else {
    var temp = $(this).text();
    }
      sub += temp;
      console.log(sub);
      $('.display').val(sub);
      $lastClicked = true;
  }

  function equalClick () {
    if (!$lastClicked ) {
        total = eval(sub);
        $('.display').val(total);
    }
  }

  function clearClick () {
    sub = '';
    $('.display').val(sub);    
  }  

  function deleteClick () {
    sub = sub.slice(0,-1);
    $lastClicked = false;
    $('.display').val(sub);    
  }

  function bindings() {
    $('.number').on('click', numberClick);
    $('.operator').on('click', operatorClick);
    $('.equals').on('click', equalClick);
    $('.clear').on('click', clearClick);
    $('.delete').on('click', deleteClick);
  };

  $( document ).ready(function() {
    bindings();
  });

})(jQuery);