function saveDetails() {
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;
  const pass = document.getElementById("userPass").value;

  localStorage.setItem("profileName", name);
  localStorage.setItem("profileEmail", email);
  localStorage.setItem("profilePass", pass);

  alert("Details saved successfully!");
}

function togglePassword() {
  const password = document.getElementById("userPass");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
