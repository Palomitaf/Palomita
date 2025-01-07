let numero = 0;



while(numero < 1000) {
    numero++;
    document.write(numero);
    if (numero == 10) {
        break;
    }
}

document.write("fin")



for (let i = 0; i < 20; i++) {
    document.write(i + "<br>")
    if (i == 12) {
        break;
    }
    document.write(i + "<br>")
}






let animales = ("gato","perro","tirex");

for (animal in animales){
    document.write(animal + "<br>");
}

document.write("<br>");

for (animal of animales){
    document.write(animal +"<br>");
}





Array1 = ["maria","josefa","roberta"];
Array2 = ["pedro","marcelo","arrayal1"];


forRancio:
for (let Array in Array2) {
    if (Array == 2) {

        for (let Array of Array1){
            if (Array == "maria") {
                continue forRancio;
           }
            Document.write(Array + "<br>");
        }
    } else {
        document.write(Array2[Array]+ "<br>");
    }
}