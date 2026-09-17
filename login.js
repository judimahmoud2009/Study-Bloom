const modal = document.getElementById("terms-modal");

function openTerms(e) {
  e.preventDefault();
  document.getElementById("terms-modal").style.display = "block";
}

function closeTerms() {
  document.getElementById("terms-modal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.getElementById("signup-form").addEventListener("submit", function (e) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    e.preventDefault();
    alert("Passwords do not match! Please check again.");
    return;
  }

  const userName = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("profileName", userName);
  localStorage.setItem("profileEmail", email);
  localStorage.setItem("profilePass", password);
});
