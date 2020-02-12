var url = 'https://www.wolframalpha.com';   //this just be url & api shit, pretty self explanatory
var appid= '6435AA-GV9PA4WPPY';
var url2 = 'http://api.wolframalpha.com/v2/query?appid='+appid;

document.addEventListener('DOMContentLoaded', function() {//this fxn gets the data from input and outputs a JSON object using the WolframAlpha API
  var wolframAlphaButton = document.getElementById('wolframAlpha'); //looks for the 'wolframAlpha' button

  wolframAlphaButton.addEventListener('click', function() { //looks for a button being clicked
    var userInput = document.getElementById("userInput").value; //gets user input and saves as string
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; //this just a url needed for chrome's gronky-ass security
    var output = url2 + '&input=' + encodeURIComponent(userInput) + "&output=json";  //takes user's input,  makes an API request with it, and specifies that we get a JSON object back

    var tempHttpResponse;
    var obj;
    const Http = new XMLHttpRequest(); //makes http request to return an xml file (but in actuality we're gonna get a JSON object cuz the WolframAlpha API is an epic gamer moment)
    Http.open("GET", proxyurl+output); //makes a "GET" type request with our modified url, API request
    Http.send(); //sends the request
    Http.onreadystatechange = (e) => {
      tempHttpResponse = Http.responseText; //returns the response
      obj =JSON.parse(tempHttpResponse); //puts the response as a JSON object
      console.log(obj); //prints the returned JSON object in the console

      var podCount = obj.queryresult.numpods;
      console.log(podCount);
//TODO: Get this shiz working
  /*    for(var i = 0; i < podCount; i++){
        var jsontxt = 'obj.queryresult.pods.' + i;
        console.log(getObjects(obj, ));
      } */
    }
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() { //This fxn gets the data from the input and simply adds it onto the end of the url in wolframAlpha (opening it in a new tab)
  var wolframAlphaButton = document.getElementById('newTab'); //looks for the 'newTab' button

  wolframAlphaButton.addEventListener('click', function() { //looks for a button being clicked
    var userInput2 = document.getElementById("userInput").value; //gets user input and saves as string
    var output2 = url + '/input/?i=' +  encodeURIComponent(userInput2); //takes user's input, url encds it and adds it to the end of the url

    window.open(output2, '_blank'); //opens the url w/ user's input in a new tab

  }, false);
}, false);
