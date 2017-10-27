/* js for Quoter */
$(function() {
  load();
  $('#generate_button').click(function(){
    load();
  });
  $('#tweet-share').click(function(){
    tweet();
  });
});

function tweet(){
  var quote = $('#quote').text();
  var author =$.trim($('#author').text());
  window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author), '_blank');
};

function load(){
    $.get( "https://talaikis.com/api/quotes/random/", function( data ) {
      $('#quote').text(data.quote);
      $('#author').text(data.author);
});  
}

$(document).keypress(function(e) {
    if(e.which == 13) {
        load();
    }
});