function calculate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (operation === 'add') {
      result = num1 + num2;
    } else if (operation === 'subtract') {
      result = num1 - num2;
    } else if (operation === 'multiply') {
      result = num1 * num2;
    } else if (operation === 'divide') {
      result = num1 / num2;
    }

    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = '<h2 class="result-heading">النتيجة:</h2><p class="result-value">' + result + '</p>';
  }