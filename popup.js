var url = 'https://www.wolframalpha.com';
document.addEventListener('DOMContentLoaded', function() {
  var wolframAlphaButton = document.getElementById('newTab');


  wolframAlphaButton.addEventListener('click', function() {
    var userInput2 = document.getElementById("userInput").value;
    var output2 = url + '/input/?i=' + encodeURIComponent(userInput2);

    window.open(output2, '_blank');

  }, false);


}, false);

document.addEventListener('DOMContentLoaded', function() {
  var wolframAlphaButton = document.getElementById('newTab');

  wolframAlphaButton.addEventListener('keyup', function(e) {
    if(e.keyCode == 13){
      var userInput2 = document.getElementById("userInput").value;
      var output2 = url + '/input/?i=' + encodeURIComponent(userInput2);

      window.open(output2, '_blank');
  }
  }, false);
}, false);
