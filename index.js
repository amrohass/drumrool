 var x = document.querySelectorAll("button"); //get the array that have all the buttons and store the array in an varriable 

for (var i = 0 ; i < x.length ; i++ ){
    x [i].addEventListener("click", onClick );
// you have to make a for loop to get the parameters applay for all positions in the array 
}
function onClick (){
  
  playSound(this.innerHTML);
    anim(this.innerHTML);
 }


document.addEventListener("keydown", function (event) {
   playSound(event.key);
    anim(event.key);
}

  
  );

  function playSound (key) {
    switch (key) {
      case "c":
       var audio = new Audio("sounds/crash.mp3");
       audio.play(); 
        break; 
        case "k": 
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play(); 
        break;
         
        case "s": 
        var audio = new Audio("sounds/snare.mp3");
        audio.play(); 
        break;
        case "v": 
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play(); 
        break;
        case "m": 
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play(); 
        break;
        case "o": 
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play(); 
        break;
        case "z": 
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play(); 
        break;
        
      default:
        
    }
  }

  function anim (currentKey) {
   var activeButton = document.querySelector("." + currentKey );
     activeButton.classList.add("pressed");
     setTimeout(function () {
      activeButton.classList.remove("pressed");
     }, 100)
  }
