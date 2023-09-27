document.getElementById('submit').addEventListener('click', calculateScore);

function calculateScore() {
    const questions = document.querySelectorAll('.quiz');
    let totalScore = 0;

    questions.forEach((quiz, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);
        const correctAnswer = correctAnswers[index];

        if (selectedAnswer && selectedAnswer.value === correctAnswer) {
            totalScore++;
        }
    });

    // Display the results
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `${totalScore} / ${questions.length}`;

    // Show the results section
    const resultsSection = document.querySelector('.results');
    resultsSection.style.display = 'block';
}

const correctAnswers = ['b', 'd', 'b'];
 // Add your correct answers here
