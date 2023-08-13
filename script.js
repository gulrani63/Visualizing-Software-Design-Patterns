document.addEventListener('DOMContentLoaded', function() {
    const visualizationElement = document.getElementById("visualization");

    // Render Singleton Pattern
    const singletonPatternElement = document.createElement("div");
    singletonPatternElement.innerText = "Singleton Pattern";
    singletonPatternElement.addEventListener("click", function() {
        // Add logic to highlight or modify Singleton Pattern visualization
    });
    visualizationElement.appendChild(singletonPatternElement);

    // Render Factory Pattern
    const factoryPatternElement = document.createElement("div");
    factoryPatternElement.innerText = "Factory Pattern";
    factoryPatternElement.addEventListener("click", function() {
        // Add logic to highlight or modify Factory Pattern visualization
    });
    visualizationElement.appendChild(factoryPatternElement);

    // Render Observer Pattern
    const observerPatternElement = document.createElement("div");
    observerPatternElement.innerText = "Observer Pattern";
    observerPatternElement.addEventListener("click", function() {
        // Add logic to highlight or modify Observer Pattern visualization
    });
    visualizationElement.appendChild(observerPatternElement);
});
	
	// Initialize an array to store exercises
const savedExercises = [];

// Function to save exercise
function saveExercise(exerciseNumber) {
    // Get the exercise content from the textarea
    const exerciseTextarea = document.getElementById(`exercise${exerciseNumber}`);
    const exerciseContent = exerciseTextarea.value;

    // Store the exercise content in the array
    savedExercises[exerciseNumber - 1] = exerciseContent;

    // Update a message indicating that the exercise has been saved
    const resultElement = document.getElementById(`result${exerciseNumber}`);
    resultElement.textContent = 'Exercise saved!';
}


function checkQuiz(quizNumber) {
    const quizOptions = document.getElementsByName(`quiz${quizNumber}`);
    const quizResultElement = document.getElementById(`quizResult${quizNumber}`);

    let selectedOption;
    for (let i = 0; i < quizOptions.length; i++) {
        if (quizOptions[i].checked) {
            selectedOption = quizOptions[i].value;
            break;
        }
    }

    // Add your quiz evaluation logic here
    // Compare the selected option with the correct answer
    // You can use conditionals or switch statements to determine the result

	let resultText;
	

    if (quizNumber === 1) {
        if (selectedOption === "b") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    } else if (quizNumber === 2) {
        if (selectedOption === "a") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 3) {
        if (selectedOption === "b") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 4) {
        if (selectedOption === "b") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 5) {
        if (selectedOption === "a") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber ===6) {
        if (selectedOption === "b") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 7) {
        if (selectedOption === "b") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 8) {
        if (selectedOption === "a") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 9) {
        if (selectedOption === "b") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 10) {
        if (selectedOption === "a") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 11) {
        if (selectedOption === "a") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 12) {
        if (selectedOption === "b") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 13) {
        if (selectedOption === "d") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    }  else if (quizNumber === 14) {
        if (selectedOption === "d") {
            resultText = "Correct!";
        } else {
            resultText = "Incorrect. Try again.";
        }
    } 
	else {
        resultText = "Invalid quiz number.";
    }

    quizResultElement.textContent = resultText;
	
}

