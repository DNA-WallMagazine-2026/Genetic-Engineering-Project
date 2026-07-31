const questions = [
    {
        question: "What is the main job of DNA?",
        choices: [
            "Carry genetic information",
            "Pump blood through the body",
            "Digest food"
        ],
        answer: 0
    },
    {
        question: "Where is most DNA found in a human cell?",
        choices: [
            "Nucleus",
            "Cell membrane",
            "Cytoplasm"
        ],
        answer: 0
    },
    {
        question: "DNA is passed from...",
        choices: [
            "Parents to children",
            "Friends to friends",
            "Children to their parents"
        ],
        answer: 0
    },
    {
        question: "What shape is DNA?",
        choices: [
            "Single Spiral",
            "Double Helix",
            "Straight Line"
        ],
        answer: 1
    },
    {
        question: "Which of these is controlled by DNA?",
        choices: [
            "Physical appearance",
            "Favorite sport",
            "Phone number"
        ],
        answer: 0
    }
];

function startQuiz() {
    let score = 0;

    for (const q of questions) {
        let message = `${q.question}\n\n`;

        q.choices.forEach((choice, index) => {
            message += `${index + 1}. ${choice}\n`;
        });

        const input = prompt(message);

        // User pressed Cancel
        if (input === null) {
            alert("Quiz cancelled.");
            return;
        }

        const userAnswer = Number(input);

        if (userAnswer >= 1 && userAnswer <= q.choices.length) {
            if (userAnswer - 1 === q.answer) {
                alert("✅ Correct!");
                score++;
            } else {
                alert(`❌ Incorrect!\nCorrect answer: ${q.choices[q.answer]}`);
            }
        } else {
            alert(`⚠️ Please enter 1, 2, or 3.\nCorrect answer: ${q.choices[q.answer]}`);
        }
    }

    alert(`🎉 Quiz Complete!\n\nYour score: ${score}/${questions.length}`);
}
