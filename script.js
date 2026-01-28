const quiz = [
    { q: "What year of your anniversary is this?", a: "23" },
    { q: "What was the only mutton starter item that was there in your wedding?", a: "mutton cutlet" },
    { q: "What was the year when you both went to Eden Gardens to watch your first cricket match together?", a: "2016" },
    { q: "Who is baba's favourite cricketer?", a: "Sir Viv Richards" },
    { q: "What is Maa's favourite desser?", a: "chutney" }
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
