    function convertToFahrenheit() {
    var tempInCelsius = document.getElementById("tempC").value;
    var fahrenheit = (parseInt(tempInCelsius) * 9 / 5) + 32;
    alert("Temperature in Fahrenheit is: " + fahrenheit);
    location.reload();
    }
    
    function convertToCelsius() {
    var tempInFahrenheit = document.getElementById("tempF").value;
    var celsius = (parseInt(tempInFahrenheit) - 32) * 5 / 9;
    alert("Temperature in Celsius is: " + celsius);
    location.reload();
    }