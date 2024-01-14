// prendere gli elementi della pagina
const timer = document.getElementById("timer");
const numbers = document.getElementById("numbers");
const button = document.getElementById("button");


button.addEventListener("click", function() {
    
    const randomNumbers = [];
    while(randomNumbers.length < 5){
        const randomNumber = Math.floor(Math.random () * 100) + 1;
        randomNumbers.push(randomNumber);
        console.log(randomNumbers);
    }
    button.classList.add("d-none")

    numbers.innerHTML = randomNumbers
});



