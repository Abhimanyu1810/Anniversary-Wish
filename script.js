const quiz = [
    { q: "What year of your anniversary is this?", a: "23" },
    /*{ q: "Who proposed first? (Mom/Dad)", a: "1" },
    { q: "Which month did you get married?", a: "2" },
    { q: "What is your favourite sweet together?", a: "3" },
    { q: "How many kids do you have?", a: "4" }*/
];

let current = 0;

document.getElementById("question").innerText = quiz[current].q;

function checkAnswer() {
    const user = document.getElementById("answer").value.trim().toLowerCase();

    if (user === quiz[current].a) {
        current++;
        document.getElementById("answer").value = "";
        document.getElementById("errorMsg").innerText = "";

        if (current < quiz.length) {
            document.getElementById("question").innerText = quiz[current].q;
        } else {
            showWish();
        }
    } else {
        document.getElementById("errorMsg").innerText =
            "Dadu hoye gelo! Wrong answer 😄 Try again!";
    }
}

function showWish() {
    document.getElementById("quizBox").classList.add("hidden");
    document.getElementById("wishBox").classList.remove("hidden");
    playSong();
    confettiBlast();
}

function playSong() {
    const audio = document.getElementById("song");

    // Start at 51 seconds
    audio.currentTime = 51;

    audio.play();

    // Stop after 35 seconds
    setTimeout(() => {
        audio.pause();
    }, 3500000);
}

let confettiInterval;

function confettiBlast() {
  setInterval(() => {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    conf.style.animationDuration = 2 + Math.random() * 4 + "s";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 5000);
  }, 120);
}