import { useState } from 'react';
import QUESTIONS from '../questions.js'

export default function Quiz() {
    const [answers, setAnswers] = useState([]);

    const activeQuestionIndex = answers.length;

    function handleSelectAnswer(selectedAnswer) {
        setAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    }
    return (
        <div>
            <h2>Current question:</h2>
            <p>{QUESTIONS[activeQuestionIndex].text}</p>
            <ul id="answers">
                {QUESTIONS[activeQuestionIndex].answers.map(answer =>
                    <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>
                            {answer}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}