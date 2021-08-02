function toFahrenheit() {
    // (0°C × 9/5) + 32 = 32°F
    var celsi=document.getElementById("celsius").value;
    celsi=Number(celsi);


    var result= (celsi*9/5)+32; 
   document.getElementById("Fahrenheit").value=result;
}