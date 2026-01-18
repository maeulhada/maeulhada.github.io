// /*menu toggle */
// $(document).ready(function(){
// 	$("#menu ul.sub").hide();
// 	$("#menu ul.click li").click(function(){
// 		$("ul",this).slideToggle("fast");
// 	});
// });

/* previous page btn */
function goBack(){
  window.history.back();
}

/* login button */
function loginStudent(){
  /* 
  */
 window.location = "indexLoggedIn.html"; 
}

/*pdf viewer showup*/
function pdfOpen(){
  $('#pdf').toggleClass('pdf-viewer show-up');
  // $(".pdf-viewer").style.display = "block";
}

/* button for goingToSettings */
function goToSettings(){
  /* 
  */
 window.location = "profile_settings.html"; 
}
/* all terms checking buttons */
$( document ).ready( function() {
  $( '.check-all' ).click( function() {
    $( '.cb' ).prop( 'checked', this.checked );
  } );
} );

/* if all terms checked, go to the next page */
function ifAllChecked(){
  /*
  if checked,
  */
 $( document ).ready( function() {
   if ($('input[name="chk1"]').prop('checked') && $('input[name="chk2"]').prop('checked')
          && $('input[name="chk3"]').prop('checked') && 
          ($('.f1').prop('checked') || $('.f2').prop('checked')))
      window.location = "verification.html"; 
    else
      alert('모든 약관에 체크해 주세요.');
 });
  
}

/* for address input */ 
function openZipSearch() {
  new daum.Postcode({
    oncomplete: function(data) {
      $('[name=zip]').val(data.zonecode); // 우편번호 (5자리)
      $('[name=addr1]').val(data.address);
      $('[name=addr2]').val(data.buildingName);
    }
  }).open();
}

function verifyChecked(){
    /*
    if verified,
    */
   window.location = "entryformUnder14.html"; 
//    window.location = "entryformOver14.html"; 
}

function ifInputChecked(){
    /*
    if completed,
    */
   window.location = "registrationSuccess.html";
   /* if not */
//    window.location = "registrationFailed.html";
}
