let pass1 = "";
let pass2 = "";

document.querySelector("#pass1").addEventListener("keyup", (e) => {
  pass1 = e.target.value;
  if (pass1 === pass2) {
    document.getElementById("pass2E").style.display = "none";
    document.getElementById("pass1E").style.display = "none";
    document.querySelector("#pass1").setCustomValidity("");
    document.querySelector("#pass2").setCustomValidity("");
  } else {
    document.getElementById("pass2E").style.display = "block";
    document.getElementById("pass1E").style.display = "block";
    document.querySelector("#pass1").setCustomValidity("Invalid field.");
    document.querySelector("#pass2").setCustomValidity("Invalid field.");
  }
});

document.querySelector("#pass2").addEventListener("keyup", (e) => {
  pass2 = e.target.value;
  if (pass1 === pass2) {
    document.getElementById("pass2E").style.display = "none";
    document.getElementById("pass1E").style.display = "none";
    document.querySelector("#pass1").setCustomValidity("");
    document.querySelector("#pass2").setCustomValidity("");
  } else {
    document.getElementById("pass2E").style.display = "block";
    document.getElementById("pass1E").style.display = "block";
    document.querySelector("#pass1").setCustomValidity("Invalid field.");
    document.querySelector("#pass2").setCustomValidity("Invalid field.");
  }
});
