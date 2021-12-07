const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  //For each sound create the button element
  const btn = document.createElement("button");

  //Add a class and a text that matches with the sounds' name
  btn.classList.add("btn");
  btn.innerText = sound;

  //Grab the container and append each sound to it
  document.getElementById("buttons").appendChild(btn);
});
