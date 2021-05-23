function check() {
  var year = document.getElementById("year").value;
  // var btn = document.getElementById("check");
  var yearName = document.getElementById("year").value;
  if (year % 100 == 0) {
    document.getElementById("result").innerHTML = yearName + " is not a Leap Year.";
  } else if (year % 4 == 0) {
    document.getElementById("result").innerHTML = yearName + " is a Leap Year.";
  } else {
    document.getElementById("result").innerHTML =
      yearName + " is not a Leap Year.";
  }
}

