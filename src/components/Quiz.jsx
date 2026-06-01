import { useState } from 'react';

export default function Quiz () {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnsers] = useState([]);

    return(
        <p>Current question:</p>
    );
}