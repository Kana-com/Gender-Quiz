const questions = [
    {text: "Do you like drinking beverages with a straw?", type: "female"},
    {text: "Do you usually put your phone in your back pocket?", type: "male"},
    {text: "Do you prefer to drink your water with ice?", type:"female"},
    {text: "Do you prefer ice cream in a cup rather than a cone?", type:"male"},
    {text: "Do you prefer to read books in print rather than digitally?", type:"female"}
];

let currentQuestion = 0;
let score = 0;

function answer(response) {
    const current = questions[currentQuestion];

    if (
        (current.type === "female" && response === "yes") ||
        (current.type === "male" && response === "no")
    ) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestion].text;
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.querySelector('.buttons').classList.add('hidden');
    document.getElementById('question').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');

    const femalePercent = Math.round((score / questions.length) * 100);
    const malePercent = 100 - femalePercent;

    document.getElementById('result').innerHTML = `
       <p>Based on your answers:</p>
       <p>You are ${femalePercent}% feminine and ${malePercent}% masculine.</p>
       <p>Did you wonder how your answers might reveal your gender?</p>
       <p>This quiz shows how arbitrary such questions can be. Just like these questions, societal stereotypes about gender are equally pointless and unnecessary.</p>
       <p>There’s no need to conform to them. Gender is about what we do, not what we’re told to be.</p>
    `;
}