function FindPi(n) {
  var sum = 0.0;
  for(var i = 1; i < n+1; i++) {
    var pi = Math.pow(-1, i+1) / (2*i - 1);
    sum += pi;
  }
  sum *= 4;
  return sum;
}

function calcPi() {
  var n = document.getElementById("n").value;
  var pi = FindPi(n);
  document.getElementById("PI").innerHTML = pi;
}
