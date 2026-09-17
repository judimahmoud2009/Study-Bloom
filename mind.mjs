// message box//
const messageList = [
  "You are doing better than you think 💜",
  "It is okay to take things one step at a time 🌷",
  "You deserve kindness, including from yourself 🌸",
  "You do not have to be perfect to be proud of yourself ✨",
  "A difficult day does not define you 💜",
  "Your feelings are valid 🌱",
  "You are allowed to rest 🌷",
];

const message = document.getElementById("message");
const messageButton = document.getElementById("messageButton");

let count = 0;

if (messageButton && message) {
  messageButton.addEventListener("click", function () {
    message.textContent = messageList[count];

    count++;

    if (count === messageList.length) {
      count = 0;
    }
  });
}
// feelings message
const feelings = document.querySelectorAll('input[name="feeling"]');
const feelingMessage = document.querySelector("#feelingMessage");

const messages = {
  great: "Yay! Keep enjoying your day 🌷",
  good: "Glad you're doing well! Keep going 💜",
  Okay: "That's okay. Take things one step at a time 🌱",
  Stressed: "Take a little break and breathe. You've got this 💜",
  Overwhelmed: "It's okay to pause. Let's take things one step at a time 🌿",
};

feelings.forEach((feeling) => {
  feeling.addEventListener("change", () => {
    feelingMessage.textContent = messages[feeling.value];
  });
});
