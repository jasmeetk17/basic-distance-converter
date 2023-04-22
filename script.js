(function(){ var convertType = "miles";
var heading = document.querySelector("h1");
var intro = document.querySelector("p");
var answerDiv = document.getElementById("answer");
var form = document.getElementById("convert");

//distance=parseFloat(distance);



document.addEventListener('keydown', function () {
    var key = event.code;
   
    if (key==='KeyK') {
        convertType = 'kilometers';
        heading.innerHTML = "Kilometers to Miles Converter";
        intro.innerHTML = "Type in a number of  kilometers and click the button to convert the distance to miles "

    }
    else if (key=== 'KeyM') {
        convertType = 'miles';
        heading.innerHTML = "Miles to Kilometers  Converter";
        intro.innerHTML = "Type in a number of  miles and click the button to convert the distance to kilometers  ";


    }
    else if (key=== 'KeyC') {
        convertType = 'centimeter';
        heading.innerHTML = "centimeter to Meters Converter";
        intro.innerHTML = "Type in a number of  centimere and click the button to convert the distance to meter  ";


    }
    else if (key=== 'KeyD') {
        convertType = 'meter';
        heading.innerHTML = "Meters to Centimeter Converter";
        intro.innerHTML = "Type in a number of  meter and click the button to convert the distance to centimeter  ";


    }
    else if (key=== 'KeyI') {
        convertType = 'inches';
        heading.innerHTML = "Inches to Yards Converter";
        intro.innerHTML = "Type in a number of  inches and click the button to convert the distance to yards  ";


    }
    else if (key=== 'KeyY') {
        convertType = 'yards';
        heading.innerHTML = "Yards to Inches Converter";
        intro.innerHTML = "Type in a number of Yards and click the button to convert the distance to Inches  ";


    }
    

});
form.addEventListener('submit', function (event) 
{
      event.preventDefault();
      var distance=parseInt(document.getElementById('distance').value);

      if(distance){
        //convert m to k 1.609344
        //convert k to m 0.621371192
            if(convertType=='miles'){
            var convert=(distance*1.609344).toFixed(3);
           

             answer.innerHTML= `${distance} miles convert to ${convert} x-kilometers `;
            }
            else if (convertType=='kilometers') 
           {
            var convert=(distance*0.6213711292).toFixed(3);
           

            answer.innerHTML= `${distance} kilometers convert to ${convert} x-miles `;  
           }
           else if (convertType=='centimeter') 
           {
            var convert=(distance/100).toFixed(3);
           

            answer.innerHTML= `${distance} centimeters convert to ${convert} x-meter `;  
           }
           else if (convertType=='meter') 
           {
            var convert=(distance/0.01).toFixed(3);
           

            answer.innerHTML= `${distance} meters convert to ${convert} x-centimeter `;  
           }
           else if (convertType=='inches') 
           {
            var convert=(distance*0.027778).toFixed(3);
           

            answer.innerHTML= `${distance} inches convert to ${convert} x-yards `;  
           }
           else if (convertType=='meter') 
           {
            var convert=(distance*36).toFixed(3);
            
           

            answer.innerHTML= `${distance} yards convert to ${convert} x-inches `;  
           }
           



      }
      else{
        answer.innerHTML="<h2>Please Enter the Number</h2>"
      }

});



})();