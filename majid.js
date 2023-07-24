const maiFun = (message) => {
  // confromBox means main div
  let conformBox = document.createElement("div");
  conformBox.classList.add("conform_box");

  //messageBox means where you show your message
  let messageBox = document.createElement("div");
  messageBox.classList.add("message_Box");
  messageBox.textContent = message;

  //messageBox append in conformBox
  conformBox.append(messageBox);

  // main button box means button div

  let buttonBox = document.createElement("div");
  buttonBox.classList.add("button_box");
  messageBox.append(buttonBox);

  //yes button code
  let yesBtn = document.createElement("button");
  yesBtn.textContent = "yes";
  buttonBox.append(yesBtn);

  yesBtn.addEventListener("click", () => {
    alert("Thanks for your conformation");
    document.body.removeChild(conformBox);
    clickBtn.style.display = "block";
  });

  //no button code
  let noBtn = document.createElement("button");
  noBtn.textContent = "No";
  buttonBox.append(noBtn);
  noBtn.addEventListener("click", () => {
    alert("Sorry Your can't Access this site");

    document.body.removeChild(conformBox);

    clickBtn.style.display = "block";
  });

  document.body.append(conformBox);
};

const clickBtn = document.querySelector("#btn");

clickBtn.addEventListener("click", () => {
  maiFun("Are you 18 years Old ? ");
  clickBtn.style.display = "none";
});
