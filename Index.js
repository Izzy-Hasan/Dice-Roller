
function dicegame(){
  let roll_one = Math.floor(Math.random()*6);
  let roll_two = Math.floor(Math.random()*6);
  if (roll_one == roll_two){
    document.getElementById("result").value = "YOU WON!";
  }
  else{
    document.getElementById("result").value = "Try again loser!";
  }
  document.querySelector("#dice-1").setAttribute("src", images[roll_one]);
  document.querySelector("#dice-2").setAttribute("src", images[roll_two]);
}

let images = [
  "dice-1.jpeg",
  "dice-2.jpeg",
  "dice-3.jpeg",
  "dice-4.jpeg",
  "dice-5.jpeg",
  "dice-6.jpeg"];

  let dice = document.querySelectorAll("img");
