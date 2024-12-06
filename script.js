let startTime;
let timerInterval;

// Array of sentences for the user to type
const sentences = [
    "The juxtaposition of disparate ideologies creates an incongruity that is difficult to reconcile in contemporary discourse.",
    "In the realm of metaphysics, the concept of existentialism perpetually oscillates between individualism and collective human consciousness.",
    "The proliferation of multifaceted perspectives on global issues necessitates a nuanced approach to diplomacy and conflict resolution.",
    "The perennial nature of paradoxes in literature exposes the contradictions inherent in the human condition, prompting introspection and philosophical inquiry.",
    "Disentangling the complexities of quantum mechanics requires an understanding of both theoretical frameworks and empirical observations.",
    "Her propensity for erudition led her to delve into obscure texts that explored the nuances of historical events and their ramifications.",
    "The dichotomy between progressivism and conservatism remains a contentious subject in political philosophy, with each faction asserting its ideological dominance.",
    "His perspicacious analysis of the data revealed patterns that had previously eluded conventional statistical methods.",
    "The ephemeral nature of time is a central theme in existentialist literature, highlighting the transient quality of human existence.",
    "The nebulous boundaries of ethical relativism challenge the notion of universal moral principles, creating ambiguity in moral discourse.",
    "Her eloquence in articulating abstract concepts rendered her a prominent figure in philosophical circles, where her discourse often stimulated intense debate.",
    "The synthesis of disparate scientific theories often requires an interdisciplinary approach that merges physics, chemistry, and biology into a cohesive framework.",
    "In postmodern architecture, deconstructivism seeks to subvert traditional notions of form and structure, embracing fragmentation and irregularity.",
    "The reification of abstract ideals into tangible societal structures has long been a subject of critique in sociological theory.",
    "The advent of artificial intelligence poses profound questions about the future of humanity and the ethical implications of machine learning."
];


let currentSentenceIndex = 0; // Start with the first sentence

// Start the timer when the user focuses on the input field
function startTimer() {
    startTime = new Date();  // Record the start time
    timerInterval = setInterval(updateTimer, 1000);  // Update every second
}

// Update the timer display
function updateTimer() {
    let elapsedTime = Math.floor((new Date() - startTime) / 1000);  // Time in seconds
    document.getElementById("timer").textContent = `Time: ${elapsedTime}s`;
}

// Check the user's typing against the current sentence
function checkTyping() {
    let userText = document.getElementById("userInput").value.trim().toLowerCase();
    let targetText = document.getElementById("textToType").innerText.trim().toLowerCase();
    let result = document.getElementById("result");

    // Check if the user typed the correct text
    if (userText === "") {
        result.textContent = "Please type something!";
        result.style.color = "red";
        return;
    }

    if (userText === targetText) {
        clearInterval(timerInterval);  // Stop the timer if correct
        result.textContent = "Great job! You typed it correctly!";
        result.style.color = "green";

        // Move to the next sentence
        currentSentenceIndex++;

        // If there are more sentences, update the text, else show a completion message
        if (currentSentenceIndex < sentences.length) {
            document.getElementById("textToType").innerText = sentences[currentSentenceIndex];
            document.getElementById("userInput").value = ''; // Clear the input field
            document.getElementById("timer").textContent = "Time: 0s"; // Reset the timer
            startTimer(); // Restart the timer for the next sentence
        } else {
            document.getElementById("result").textContent = "Well done! You've completed all the sentences!";
        }
    } else {
        result.textContent = "Oops! Try again!";
        result.style.color = "red";
    }
}

// Start the timer when the user focuses on the input box
document.getElementById("userInput").addEventListener("focus", startTimer);
// Disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
// Disable Ctrl+C and Ctrl+V
document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'v')) {
        e.preventDefault();
    }
});
// Disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable Ctrl+C and Ctrl+V
document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'v')) {
        e.preventDefault();
    }
});
