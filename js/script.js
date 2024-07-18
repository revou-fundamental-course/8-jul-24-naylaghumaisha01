let gender = '';

function setGender(selectedGender) {
    gender = selectedGender;
    document.getElementById('male').style.backgroundColor = selectedGender === 'male' ? '#007bff' : '#f0f0f0';
    document.getElementById('female').style.backgroundColor = selectedGender === 'female' ? '#007bff' : '#f0f0f0';
}

function updateWeight(value) {
  document.getElementById('weight-display').value = value;
}

function updateHeight(value) {
  document.getElementById('height-display').value = value;
}

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / (height * height);

    document.getElementById('bmi-value').innerText = bmi.toFixed(2);

    let result;
    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (bmi < 24.9) {
        result = 'Normal weight';
    } else if (bmi < 29.9) {
        result = 'Overweight';
    } else {
        result = 'Extremely obese';
    }
    document.getElementById('bmi-result').innerText = result;
}
