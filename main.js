let numbers = [];

// Function to add a number to the bank
const addNumbers = () => {
  const input = document.querySelector("#input");
  const number = parseInt(input.value);
  if (!isNaN(number)) {
      numbers.push(number);
      input.value = "";
      updateNumberBank();
  }
}

// Function to sort numbers into odd and even categories
const sortNumbers = () => {
  const oddNumbers = numbers.filter(num => num % 2 !== 0);
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const result = `
      <p>Odd Numbers: ${oddNumbers.join(", ")}</p>
      <p>Even Numbers: ${evenNumbers.join(", ")}</p>
  `;
  document.querySelector("#result").innerHTML = result;
}

// Function to update the number bank display
const updateNumberBank = () => {
  const result = numbers.join(", ");
  document.querySelector("#result").innerText = result;
}