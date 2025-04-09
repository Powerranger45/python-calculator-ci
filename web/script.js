function calculate() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const op = document.getElementById("op").value;
    let result;

    switch (op) {
      case "add":
        result = a + b;
        break;
      case "subtract":
        result = a - b;
        break;
      case "multiply":
        result = a * b;
        break;
      case "divide":
        if (b === 0) {
          result = "Cannot divide by zero";
        } else {
          result = a / b;
        }
        break;
      default:
        result = "Invalid operation";
    }

    document.getElementById("result").innerText = result;
  }
