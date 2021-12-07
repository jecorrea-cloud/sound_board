const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  //For each sound create the button element
  const btn = document.createElement("button");
  //Add a class and a text that matches with the sounds' name
  btn.classList.add("btn");

  btn.innerText = sound;
  //Add an event to the button to play the sound
  btn.addEventListener("click", () => {
    //Function to make them not sound over each other
    stopSongs();
    document.getElementById(sound).play();
  });
  //Grab the container and append each sound to it
  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
