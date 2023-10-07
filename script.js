//your JS code here. If required.
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        // Handle button click
        if (buttonText === '=') {
            // Implement the calculation logic here
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonText === 'C') {
            // Clear the display
            display.value = " ";
        } else if (buttonText === 'Back') {
            // Remove the last character
            display.value = display.value.slice(0, -1);
        } else {
            // Append the clicked button's text to the display
            display.value += buttonText;
        }
    });
});

