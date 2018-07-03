Stripe.setPublishableKey('sk_test_qrCR4JvqbisyLK9TeqDnpVSO');
 

var $form = $('#checkout-form'); 

$form.submit(function(event) {
    $form.find('button').prop('disabled', true); 
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        name: $('#card-name').val(),
        exp_month: $ ("#exp_month").val(),
        exp_year: $ ("#exp_year").val(),
      }, stripeResponseHandler);    
      return false; 
 
});

function stripeResponseHandler(status, response) {

  if (response.error) { // Problem!

    // Show the errors on the form
    $('#charge-error').text(response.error.message);
    $('#charge-error').removeClass('hidden');
    $form.find('button').prop('disabled', false); // Re-enable submission

  } else { // Token was created!

    // Get the token ID:
    var token = response.id;

    // Insert the token into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken" />').val(token));

    // Submit the form:
    // $form.get(0).submit();
    $form.get(0).submit();
  }
}