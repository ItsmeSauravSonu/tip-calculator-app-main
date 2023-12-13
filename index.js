function calculatePercentage(percentage) {
  const input = document.getElementById("input1");
  let billAmount = parseFloat(input.value);

  if (isNaN(billAmount)) {
      console.error("Invalid input. Please enter a number.");
      return;
  }

  let tipAmount = billAmount * (percentage / 100);
  let totalAmount = billAmount + tipAmount;

  updateResults(tipAmount, totalAmount);
}

function updateResults(tipAmount, totalAmount) {
  let numberOfPeople = getNumberOfPeople();
  let tipAmountPerPerson = tipAmount / numberOfPeople;
  let totalAmountPerPerson = totalAmount / numberOfPeople;

  document.getElementById('tipAmountPerPerson').innerText = `$${tipAmountPerPerson.toFixed(2)}`;
  document.getElementById('totalAmountPerPerson').innerText = `$${totalAmountPerPerson.toFixed(2)}`;
}

function getNumberOfPeople() {
  return parseFloat(document.getElementById('numberInput').value) || 1;
}

function resetValues() {
  document.getElementById("input1").value = "";
  document.getElementById("numberInput").value = "";
  document.getElementById("tipAmountPerPerson").innerText = "$0.00";
  document.getElementById("totalAmountPerPerson").innerText = "$0.00";
}

document.querySelector('.btn-reset').addEventListener('click', resetValues);


  function convertToInput() {
    // Change button to input box on hover
    document.getElementById('btnToggle').style.display = 'none';
    document.getElementById('inputToggle').style.display = 'inline-block';
    document.getElementById('inputToggle').focus();
  }

  function convertToButton() {
    // Change input box to button on mouseout
    document.getElementById('btnToggle').style.display = 'inline-block';
    document.getElementById('inputToggle').style.display = 'none';
     executeCustomCalculation(); 
  }

  document.getElementById('numberInput').addEventListener('input', function () {
    var inputValue = this.value.trim();
    var errorMessage = document.querySelector('.error-message');
    var inputElement = this;
    if (inputValue === '0') {
      errorMessage.style.display = 'block';
      inputElement.classList.add('error-border');
    } else {
      errorMessage.style.display = 'none';
      inputElement.classList.remove('error-border');
    }
  });
  var hasInputValue = false;
  var prevInputValue = '';

  function executeCustomCalculation() {
    var inputToggle = document.getElementById('inputToggle');
    var inputValue = inputToggle.value.trim();

    if (inputValue !== '' && inputValue !== prevInputValue) {
      prevInputValue = inputValue;
      hasInputValue = true;
      calculatePercentage(parseFloat(inputValue));
    }
  }

  // Add touch events for mobile devices
document.getElementById('btnToggle').addEventListener('touchstart', convertToInput);
document.getElementById('btnToggle').addEventListener('touchend', convertToButton);
document.querySelector('.btn-reset').addEventListener('touchstart', resetValues);
document.querySelectorAll('.btnx').forEach(function(button) {
  button.addEventListener('touchstart', function() {
    var percentage = parseFloat(this.innerText);
    if (!isNaN(percentage)) {
      calculatePercentage(percentage);
      convertToButton(); // Ensure it goes back to button state on touch
    }
  });
});

  




