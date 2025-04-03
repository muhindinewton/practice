const PI = 3.142;
let radius;
let height;
let surfaceArea;
let volume;

document.getElementById("mySubmit1").onclick = function() {
    radius = document.getElementById("myRadius").value;
    radius = Number(radius);
    height = document.getElementById("myHeight").value;
    height = Number(height);
    surfaceArea = 2*PI*radius*(radius + height);
    document.getElementById("myH4").textContent = `Surface Area is: ` + surfaceArea;
    volume = PI*radius**2*height;
    document.getElementById("myH4b").textContent = `Volume is: ` + volume;

}

