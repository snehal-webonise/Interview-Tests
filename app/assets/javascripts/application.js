// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require livevalidation

$( document ).ready(function() {
	$('#form_submit').click(function(){
    	if($('#deposit_amount').val() == ''){
    		alert('please enter Amount');
    		return false;
    	}
    	if($('#sel4').val() == ''){
    		alert('please select Maturity Proceeds');
    		return false;
    	}
    	if($('#deposit_mob_no').val() == ''){
    		alert('please enter Mobile number');
    		return false;
    	}
    	if($('#deposit_email').val() == ''){
    		alert('please enter Email');
    		return false;
    	}
        if(!isValidEmailAddress($('#deposit_email').val())){
           alert('Please Enter valid Email.')
           return false;
        }
    }); 	
});

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}