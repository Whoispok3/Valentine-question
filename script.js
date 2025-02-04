let questionCount = 0;

function nextQuestion() {
    questionCount++;
    if (questionCount < 3) {
        document.getElementById('question').innerText = 'Are you sure? ❤️';
    } else {
        document.querySelector('.buttons').style.display = 'none';
        document.getElementById('question').style.display = 'none';
        document.getElementById('heart').style.display = 'block';
    }
}
