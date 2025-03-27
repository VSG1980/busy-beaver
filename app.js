let userName = prompt("Welcome to Business Beavers ltd! What's your name?");

if (userName) {
  let userResponse = prompt(
    `Hello, ${userName}! Pick a background colour i'm a mind reader? Red, Blue, or Green?`
  );

  userResponse = userResponse.toLowerCase();

  if (userResponse === "red") {
    document.body.style.backgroundColor = "#ff0000";
    alert(
      "I Knew It, now please enter email on the page to book in advance!!!"
    );
  } else if (userResponse === "blue") {
    document.body.style.backgroundColor = "#0000ff";
    alert(
      "I Knew It, now please enter email on the page to book in advance!!!"
    );
  } else if (userResponse === "green") {
    document.body.style.backgroundColor = "green";
    alert(
      "I Knew It, now please enter email on the page to book in advance!!!"
    );
  } else {
    document.body.style.backgroundImage =
      "linear-gradient(to right, red, green, blue)";
    alert(
      "I Knew you wouldn't pick these colours, now please enter email on the page to book in advance!!!."
    );
  }
}
