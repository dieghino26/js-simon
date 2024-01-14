// prendere gli elementi della pagina
const timer = document.getElementById("timer");
const numbers = document.getElementById("numbers");
const button = document.getElementById("button");

//bottone di avvio gioco
button.addEventListener("click", function() {

    //il bottone si elimina dopo il click
    button.classList.add("d-none");


    //numeri randomici da indovinare
    const randomNumbers = [];
    while(randomNumbers.length < 5){
        const randomNumber = Math.floor(Math.random () * 100) + 1;
        randomNumbers.push(randomNumber);
        console.log(randomNumbers);
    }
    
    //i numeri vengono mostrati in pagina
    numbers.innerHTML = randomNumbers;
    
    //timer, finito si cancellano sia il timer che i numeri
    let seconds = 5;
    let countdown = setInterval (() => {
        timer.innerText = --seconds;
        if(seconds === 0){
            clearInterval(countdown);
            timer.classList.add("d-none")
            numbers.classList.add("d-none")
            
        } ;
    }, 1000);
    
    timer.innerText = seconds;

        

});



