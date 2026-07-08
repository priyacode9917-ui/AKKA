function birthdayWish(){

    alert("🎉 Happy Birthday My Lovely Akka ❤️\n\nMay your life always be filled with happiness, love, success and beautiful moments! 🎂✨");

    let music = document.getElementById("music");

    if(music){
        music.play();
    }
}


// Create Confetti Animation

for(let i = 0; i < 80; i++){

    let confetti = document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.animationDelay = Math.random() * 5 + "s";

    confetti.style.animationDuration = 
        (Math.random() * 3 + 3) + "s";

    document.querySelector(".container")
    .appendChild(confetti);
}