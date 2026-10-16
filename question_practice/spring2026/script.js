// State variables to keep track of progress
let totalStudyHours = 0;
let numberOfSessions = 0;
let subjectsStudied = [];

// Weekly goal constant
const WEEKLY_GOAL = 20;

// Get DOM Elements
const subjectInput = document.getElementById('subjectName');
const hoursInput = document.getElementById('studyHours');
const addStudyBtn = document.getElementById('addStudyBtn');

const totalHoursOut = document.getElementById('totalHoursOut');
const averageHoursOut = document.getElementById('averageHoursOut');
const subjectsOut = document.getElementById('subjectsOut');
const feedbackOut = document.getElementById('feedbackOut');

// Add click event listener to the button
addStudyBtn.addEventListener('click', function() {
    const subject = subjectInput.value.trim();
    const hours = parseFloat(hoursInput.value);

    // Validate inputs
    if (!subject || isNaN(hours) || hours <= 0) {
        alert('Please enter a valid subject name and study hours.');
        return;
    }

    // b. Add entered study hours to a running total
    totalStudyHours += hours;
    
    // c. Store each entered subject name
    subjectsStudied.push(subject);
    
    // d. Count how many study sessions the user has entered
    numberOfSessions++;

    // e. Calculate the average study hour so far
    const average = totalStudyHours / numberOfSessions;

    // g & h. Determine feedback based on conditions
    let feedback = '';

    // Check if user has entered more than 7 sessions without reaching the 20-hour goal
    if (numberOfSessions > 7 && totalStudyHours < WEEKLY_GOAL) {
        feedback = "Increase your study time!";
    } else {
        // Standard feedback based on total hours
        if (totalStudyHours >= 20) {
            feedback = "Weekly goal reached!";
        } else if (totalStudyHours >= 13) {
            feedback = "Almost ready!";
        } else if (totalStudyHours >= 6) {
            feedback = "Good progress!";
        } else {
            feedback = "Start studying regularly!";
        }
    }

    // f. Display the calculations and feedback to the user
    totalHoursOut.textContent = `${totalStudyHours} hours`;
    averageHoursOut.textContent = `${average} hours`;
    subjectsOut.textContent = `[${subjectsStudied.join(', ')}]`;
    feedbackOut.textContent = feedback;

    // Clear input fields for the next entry
    subjectInput.value = '';
    hoursInput.value = '';
    subjectInput.focus();
});