let total_consumed = 0;
let feedback = '';
let entries = 0;

const input = document.getElementById('input');
const button = document.getElementById('addcalories');

button.addEventListener('click', function() {
    let inputvalue = parseFloat(input.value);
    
    total_consumed += inputvalue;
    entries += 1;

    // These checks are now OUTSIDE, so feedback shows up immediately
    if (inputvalue > 0 && inputvalue < 800) {
        feedback = 'you are off to a healthy state ';
    }
    else if (inputvalue > 801 && inputvalue < 1600) {
        feedback = 'you are off to a healthy state ';
    }
    else if (inputvalue > 1601 && inputvalue < 1999) {
        feedback = 'you are off to a healthy state ';
    }
    else if (inputvalue == 2000) {
        feedback = 'you are off to a healthy state ';
    }

    // This checks separately. If you hit 13 entries and haven't reached 2000, 
    // it will overwrite the feedback with a warning.
    if (entries > 12 && total_consumed < 2000) {
        feedback = 'Increase your calorie intake!';
    }

    const output = document.getElementById('output');
    
    output.innerHTML = ` 
        <p>running total calories: ${inputvalue}</p>
        <p>caloriconsumed: ${total_consumed}</p>
        <p>feedback: ${feedback}</p>
        <p>entries: ${entries}</p>
    `;
    
    input.value = '';
});