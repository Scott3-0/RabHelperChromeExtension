var url = 'https://www.wolframalpha.com/';
var appid= '6435AA-GV9PA4WPPY';
var url2 = 'http://api.wolframalpha.com/v2/query?appid='+appid;
document.addEventListener('DOMContentLoaded', function() {
  var wolframAlphaButton = document.getElementById('wolframAlpha');


  wolframAlphaButton.addEventListener('click', function() {
    var userInput = document.getElementById("userInput").value;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var output = url2 + '&input=' + userInput + "&output=json";

    var bru;
    var obj;
    const Http = new XMLHttpRequest();
    Http.open("GET", proxyurl+output);
    Http.send();
    Http.onreadystatechange = (e) => {
      bru = Http.responseText;
      obj =JSON.parse(bru);
      console.log(obj);

    }

  //  var out = document.getElementById('bru');
  //out.innerHTML = bru;

  }, false);
}, false);
