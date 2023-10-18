function compareNumbers() {
    var number1 = Math.floor(Math.random() * 10);
    var number2 = Math.floor(Math.random() * 10);

    if (number1 > number2) {
      document.getElementById("result").innerHTML = "The number, " + number1 + ", is bigger than, " + number2 + ".";
    } else if (number1 < number2) {
      document.getElementById("result").innerHTML = "The number, " + number1 + ", is smaller than, " + number2 + ".";
    } else {
      document.getElementById("result").innerHTML = "Both numbers, " + number1 + " and " + number2 + ", are the same.";
    }
  }