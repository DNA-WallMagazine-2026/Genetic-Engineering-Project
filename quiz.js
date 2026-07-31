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
}
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
        "Physical Appearance",
        "Favorite sport",
        "Phone number"
    ],
    answer: 0
}
];

function startQuiz() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let q = questions[i];

        let message = `${q.question}\n\n`;

        for (let j = 0; j < q.choices.length; j++) {
            message += `${j + 1}. ${q.choices[j]}\n`;
        }

        let userAnswer = Number(prompt(message));

        if (userAnswer - 1 === q.answer) {
            alert("✅ Correct!");
            score++;
        } else {
            alert(`❌ Incorrect!\nThe correct answer is: ${q.choices[q.answer]}`);
        }
    }

    alert(`🎉 Quiz Complete!\nYou scored ${score} out of ${questions.length}!`);
}
