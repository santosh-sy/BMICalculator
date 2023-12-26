/**
 * Calculate BMI based on user input and display the result with additional information.
 */
function calculateBMI() {
    // Retrieve user input
    var gender = document.getElementById('gender').value;
    var age = parseFloat(document.getElementById('age').value);
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    var bmi = weight / Math.pow(height / 100, 2);
    bmi = bmi.toFixed(2);

    // Construct result text
    var resultText = `Your BMI is: ${bmi}<br>`;
    resultText += `(${gender}, ${age} years, ${height} cm, ${weight} kg)`;

    // Display result and apply background color based on BMI value
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = resultText;

    // Determine BMI category and apply appropriate class for background color
    resultContainer.className = "result";
    if (bmi >= 30) {
        resultContainer.classList.add("obese");
    } else if (bmi >= 25 && bmi < 30) {
        resultContainer.classList.add("overweight");
    } else if (bmi >= 18.5 && bmi < 25) {
        resultContainer.classList.add("healthy");
    } else {
        resultContainer.classList.add("underweight");
    }
}
