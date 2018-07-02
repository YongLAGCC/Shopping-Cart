Stripe.setPublishableKey('pk_test_qZngHrVUnKpIfV3Uxisdaqph');
 

var $form = $('#checkout-form'); 

$form.submit(function(event) {
    $('#payment-errors').addClass('hidden');
    console.log("test whehter works")

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

  // Grab the form:
  var $form = $('#payment-form');

  if (response.error) { // Problem!

    // Show the errors on the form
    $('#payment-errors').text(response.error.message);
    $('#payment-errors').removeClass('hidden');
    $form.find('button').prop('disabled', false); // Re-enable submission

  } else { // Token was created!

    // Get the token ID:
    var token = response.id;

    // Insert the token into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken" />').val(token));

    // Submit the form:
    $form.get(0).submit();

  }
}