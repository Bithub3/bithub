var dollar = document.getElementById("dollar");
dollar.addEventListener("change", () => {
  var dollarGet = document.getElementById("dollarGet");
  var bit = document.getElementById("bit");
  var amount = document.getElementById("amount");
  var calc
  var fixed
  if (dollar.value == 0) {
    fixed = 0
  }
  else {
    calc = dollar.value * 0.000035 - 0.00079763;
    fixed = (calc).toFixed(7)
    dollarGet.value = fixed
    bit.innerHTML = fixed
    amount.innerHTML = dollar.value
    localStorage.setItem("bitcoin", fixed)
    localStorage.setItem("amount", dollar.value )
  }
})
var error27 = [];
var error0 = []
var form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  if (dollar.value < 1) {
    e.preventDefault();
    error27.push("amount must be greater than $1");
    UIkit.notification({
      message: error27[0],
      status: 'danger',
      pos: 'top-right',
      timeout: 5000
    });
  } else if (dollar.value == NaN) {
    e.preventDefault();
    error0.push("invalid input");
    UIkit.notification({
      message: error0[0],
      status: 'danger',
      pos: 'top-right',
      timeout: 5000
    });
  }

})
