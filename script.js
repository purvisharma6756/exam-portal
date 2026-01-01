/* LOGIN */
function login(){
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    // Example username and password check
    if(user === "admin" && pass === "rioel"){
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("examSection").style.display = "block";
        startTimer();
    } else {
        alert("Invalid Login");
    }
}

/* TIMER */
let time = 40 * 60; // 40 minutes in seconds
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        let min = Math.floor(time / 60);
        let sec = time % 60;
        document.getElementById("timer").innerHTML = min + ":" + (sec < 10 ? "0" + sec : sec);

        if(time <= 0){
            clearInterval(timerInterval);
            alert("Time is up! Submitting exam...");
            submitExam();
        } else {
            time--;
        }
    }, 1000);
}

/* ANSWER KEY */
const answers = {
    q1:"B",
    q2:"B",
    q3: "C",
    q4: "C",
    q5: "C",
    q6: "C",
    q7: "D",
    q8: "C",
    q9: "B",
    q10: "B",
    q11: "A",
    q12: "B",
    q13: "C",
    q14: "C",
    q15: "D",
    q16: "B",
    q17: "A",
    q18: "C",
    q19: "C",
    q20: "C",
    q21: "C",
    q22: "D",
    q23: "C",
    q24: "C",
    q25: "A",
    q26: "A",
    q27: "B",
    q28: "B",
    q29: "A",
    q30: "C",
    q31: "B",
    q32: "C",
    q33: "B",
    q34: "B",
    q35: "A",
    q36: "B",
    q37: "D",
    q38: "C",
    q39: "B",
    q40: "B",
};

/* SUBMIT EXAM */
function submitExam(){
    clearInterval(timerInterval);
    let score = 0;

    for(let q in answers){
        let sel = document.querySelector(`input[name="${q}"]:checked`);
        if(sel && sel.value === answers[q]) score++;
    }

    document.getElementById("examSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
    document.getElementById("scoreText").innerHTML =
        "Score: <b>"+score+"</b> / <b>"+Object.keys(answers).length+"</b>";
}
