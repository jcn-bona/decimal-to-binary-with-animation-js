const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="animation-id" class="animation-frame">
          decimalToBinary(${input}) + ${input % 2} 
        </p>
      `;
    }, 500); // addElDelay

    return String(input);
  } else {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="animation-id" class="animation-frame">
          decimalToBinary(${input}) + ${input % 2} 
        </p>
      `;
    }, 1000 - input * 300); // addElDelay


    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  animationContainer.innerHTML = ''

  result.textContent = decimalToBinary(inputInt);
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
